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
import { KNOWLEDGE_TOPICS } from '../data/knowledgeTopics';
import { SAFETY_PROFILES } from '../data/safetyProfiles';
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

  // Compact knowledge topics: question → answer snippet for care, safety, storage, etc.
  const topicLines: string[] = [];
  KNOWLEDGE_TOPICS.forEach((topic) => {
    topicLines.push(`\n[${topic.title.toUpperCase()}]`);
    topic.sections.forEach((s) => {
      topicLines.push(`Q: ${s.question}\nA: ${s.answer.substring(0, 200)}...`);
    });
  });

  // Compact safety profiles: contraindications, black box warnings, key interactions
  const safetyLines: string[] = [];
  SAFETY_PROFILES.forEach((sp) => {
    const bbw = sp.blackBoxWarnings?.length ? ` | BBW: ${sp.blackBoxWarnings[0].substring(0, 80)}` : '';
    const contra = sp.contraindications.slice(0, 3).join('; ');
    const interactions = sp.drugInteractions
      .filter((d) => d.severity === 'severe')
      .map((d) => d.drug)
      .join(', ');
    safetyLines.push(
      `- ${sp.peptideId}: CONTRA: ${contra}${interactions ? ` | SEVERE IX: ${interactions}` : ''}${bbw}`
    );
  });

  return [
    'PEPTIDE DATABASE (' + PEPTIDES.length + ' peptides):',
    ...lines,
    '',
    'PROTOCOL TEMPLATES (' + PROTOCOL_TEMPLATES.length + '):',
    ...protoLines,
    '',
    'SAFETY PROFILES (' + SAFETY_PROFILES.length + '):',
    ...safetyLines,
    '',
    'KNOWLEDGE BASE (care, safety, storage, quality, regulations):',
    ...topicLines,
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
- You help users understand peptides, protocols, interactions, safety, storage, quality, regulations, and research
- You are NOT a doctor. You do NOT provide medical advice, prescriptions, or clinical guidance
- You reference published research and always recommend consulting a qualified healthcare provider
- You speak in plain language, avoiding excessive medical jargon
- You are concise — 2-4 paragraphs max per response
- You have deep knowledge about peptide care, how to use peptides, safety/contraindications, storage/stability, buying quality peptides, and regulations — use the KNOWLEDGE BASE section below to answer these questions accurately

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
 * Generate personalized recipes using the Grok API.
 */
export async function generateRecipe(params: {
  diet: string;
  mealType: string;
  preferences: string;
  targets: { calories: number; proteinGrams: number; carbsGrams: number; fatGrams: number };
}): Promise<Array<{
  name: string;
  description: string;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  macros: { calories: number; protein: number; carbs: number; fat: number };
}> | null> {
  if (!XAI_API_KEY) return null;

  const { diet, mealType, preferences, targets } = params;
  const prompt = `Generate 3 ${mealType} recipes for a ${diet === 'any' ? 'balanced' : diet} diet.

Daily macro targets: ${targets.calories} cal, ${targets.proteinGrams}g protein, ${targets.carbsGrams}g carbs, ${targets.fatGrams}g fat.
Each recipe should fit roughly 1/3 of these daily targets for a ${mealType} meal.
${preferences ? `Additional preferences: ${preferences}` : ''}

Return ONLY valid JSON, no markdown. Format:
[{
  "name": "Recipe Name",
  "description": "Short description",
  "prepMinutes": 15,
  "cookMinutes": 25,
  "servings": 1,
  "ingredients": ["ingredient 1", "ingredient 2"],
  "instructions": ["Step 1", "Step 2"],
  "macros": {"calories": 500, "protein": 40, "carbs": 50, "fat": 15}
}]`;

  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: 'You are a nutrition expert and recipe creator. Generate practical, delicious recipes with accurate macro estimates. Return ONLY valid JSON arrays, no markdown code blocks.',
        },
        { role: 'user', content: prompt },
      ],
      max_tokens: 2048,
      temperature: 0.8,
    });

    const raw = completion.choices[0]?.message?.content;
    if (!raw) return null;

    // Strip markdown code blocks if present
    const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleaned);
  } catch (error) {
    if (__DEV__) console.warn('[llmService] Recipe generation failed:', error);
    return null;
  }
}

/**
 * Generate an AI health plan (workout + meal + protocol schedule).
 */
export async function generateHealthPlan(params: {
  goals: string[];
  profile: string;
  currentPrograms: string[];
  duration: string;
}): Promise<string | null> {
  if (!XAI_API_KEY) return null;

  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `You are Jamie, a certified nutritionist and personal trainer creating comprehensive health plans. Create detailed weekly plans that include workout scheduling, meal planning, and supplement/peptide protocol timing. Be specific with days, times, and actions. Format the plan as structured text the user can follow.`,
        },
        {
          role: 'user',
          content: `Create a ${params.duration} health plan.
Goals: ${params.goals.join(', ')}
Profile: ${params.profile}
Current programs: ${params.currentPrograms.join(', ') || 'None'}

Include: weekly workout schedule, meal plan framework, and any protocol/supplement timing recommendations.`,
        },
      ],
      max_tokens: 2048,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content ?? null;
  } catch (error) {
    if (__DEV__) console.warn('[llmService] Plan generation failed:', error);
    return null;
  }
}

/**
 * Check if the AI service is available (has API key configured).
 */
export function isAIAvailable(): boolean {
  return XAI_API_KEY.length > 0;
}
