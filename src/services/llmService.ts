/**
 * LLM Service — Grok AI (xAI) integration for PepTalk.
 *
 * Uses the xAI Chat Completions API (OpenAI-compatible format) with
 * grok-4-1-fast-reasoning for cost-effective, high-quality responses.
 *
 * HIPAA considerations:
 * - Only sends health data if user has consented (aiDataConsent)
 * - Never sends user identifiers (name, email, user ID)
 * - xAI business data (prompts/responses) is NOT used for training
 * - System prompt is built fresh per request from local stores
 */

import OpenAI from 'openai';
import { ChatMessage, EnhancedBotContext } from '../types';
import { PEPTIDES } from '../data/peptides';
import { PROTOCOL_TEMPLATES } from '../data/protocols';
import { sanitizeForLLM } from './privacyGuard';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const XAI_API_KEY = process.env.EXPO_PUBLIC_XAI_API_KEY ?? '';
const MODEL = 'grok-4-1-fast-reasoning';
const TIMEOUT_MS = 30_000;

const client = new OpenAI({
  apiKey: XAI_API_KEY,
  baseURL: 'https://api.x.ai/v1',
  timeout: TIMEOUT_MS,
  dangerouslyAllowBrowser: true, // Required for React Native
});

// ---------------------------------------------------------------------------
// Compressed peptide database for system prompt
// ---------------------------------------------------------------------------

function buildPeptideKnowledgeBase(): string {
  const lines: string[] = [];

  // Compact peptide list: name | categories | mechanism snippet | half-life
  PEPTIDES.forEach((p) => {
    const cats = p.categories.join(', ');
    const mech = p.mechanismOfAction.substring(0, 120);
    const hl = p.halfLife || '?';
    lines.push(`- ${p.name} (${p.abbreviation || p.id}) | ${cats} | ${mech}... | t½: ${hl}`);
  });

  // Compact protocol list: peptide | dose range | route | frequency | timing
  const protoLines: string[] = [];
  PROTOCOL_TEMPLATES.forEach((t) => {
    const dose = `${t.typicalDose.min}-${t.typicalDose.max} ${t.typicalDose.unit}`;
    const contra = t.contraindications?.length
      ? ` | CONTRA: ${t.contraindications.join(', ')}`
      : '';
    protoLines.push(
      `- ${t.name}: ${dose} ${t.route} ${t.frequencyLabel}${t.timing ? ` (${t.timing})` : ''}${contra}`
    );
  });

  return [
    'PEPTIDE DATABASE (' + PEPTIDES.length + ' peptides):',
    ...lines,
    '',
    'PROTOCOL TEMPLATES (' + PROTOCOL_TEMPLATES.length + '):',
    ...protoLines,
  ].join('\n');
}

// Cache the knowledge base (it doesn't change at runtime)
let _knowledgeBase: string | null = null;
function getKnowledgeBase(): string {
  if (!_knowledgeBase) _knowledgeBase = buildPeptideKnowledgeBase();
  return _knowledgeBase;
}

// ---------------------------------------------------------------------------
// System prompt
// ---------------------------------------------------------------------------

function buildSystemPrompt(context: EnhancedBotContext): string {
  const { hasConsent, systemContext } = sanitizeForLLM(context);

  return `You are PepTalk, an AI peptide research assistant built into a mobile app for people exploring peptide therapy. You are knowledgeable, warm, and safety-conscious.

ROLE:
- You help users understand peptides, protocols, interactions, and research
- You are NOT a doctor. You do NOT provide medical advice, prescriptions, or clinical guidance
- You reference published research and always recommend consulting a qualified healthcare provider
- You speak in plain language, avoiding excessive medical jargon
- You are concise — 2-4 paragraphs max per response

SAFETY RULES:
- Always include a disclaimer when discussing dosing: "Consult your provider before starting any protocol"
- Flag contraindications when you know them from the database
- If a user describes symptoms suggesting a medical emergency, tell them to call 911 or go to the ER
- Never encourage purchasing peptides from unverified sources
- If the user's profile indicates pregnancy/nursing, flag it prominently for any peptide discussion

${getKnowledgeBase()}
${systemContext}

RESPONSE FORMAT:
- Keep responses concise and helpful (2-4 paragraphs)
- Use bullet points for lists
- At the END of every response, add a line "---QUICK_REPLIES---" followed by 2-3 short follow-up questions the user might want to ask next, one per line. These become tap-able buttons in the app.
  Example:
  ---QUICK_REPLIES---
  What are the side effects?
  Tell me about the dosing protocol
  How does it compare to BPC-157?

${hasConsent ? 'The user has consented to personalized responses using their health data. Use their profile context to give more relevant answers — flag contraindications, suggest peptides matching their goals, and reference their current protocols.' : 'The user has NOT consented to sharing health data. Give general research-based responses without personalization.'}`;
}

// ---------------------------------------------------------------------------
// Response parser
// ---------------------------------------------------------------------------

function parseResponse(raw: string): { content: string; quickReplies: string[] } {
  const separator = '---QUICK_REPLIES---';
  const idx = raw.indexOf(separator);

  if (idx === -1) {
    return { content: raw.trim(), quickReplies: [] };
  }

  const content = raw.substring(0, idx).trim();
  const repliesSection = raw.substring(idx + separator.length).trim();
  const quickReplies = repliesSection
    .split('\n')
    .map((line) => line.replace(/^[-•*]\s*/, '').trim())
    .filter((line) => line.length > 0 && line.length < 60)
    .slice(0, 3);

  return { content, quickReplies };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

const uid = () =>
  `bot-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

/**
 * Generate an AI response using the Grok API.
 * Returns null if the API call fails (caller should fall back to local bot).
 */
export async function generateAIResponse(
  userMessage: string,
  context: EnhancedBotContext
): Promise<ChatMessage | null> {
  if (!XAI_API_KEY) {
    if (__DEV__) console.warn('[llmService] No API key configured');
    return null;
  }

  try {
    // Build conversation messages (last 10 for context)
    const conversationMessages: OpenAI.ChatCompletionMessageParam[] =
      context.conversationHistory.slice(-10).map((msg) => ({
        role: msg.role === 'bot' ? 'assistant' as const : 'user' as const,
        content: msg.content,
      }));

    // Add current user message
    conversationMessages.push({
      role: 'user',
      content: userMessage,
    });

    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: buildSystemPrompt(context) },
        ...conversationMessages,
      ],
      max_tokens: 1024,
      temperature: 0.7,
    });

    const rawResponse = completion.choices[0]?.message?.content;
    if (!rawResponse) return null;

    const { content, quickReplies } = parseResponse(rawResponse);

    return {
      id: uid(),
      role: 'bot',
      content,
      timestamp: new Date().toISOString(),
      quickReplies: quickReplies.length > 0 ? quickReplies : undefined,
    };
  } catch (error) {
    if (__DEV__) console.warn('[llmService] API call failed:', error);
    return null;
  }
}

/**
 * Check if the AI service is available (has API key configured).
 */
export function isAIAvailable(): boolean {
  return XAI_API_KEY.length > 0;
}
