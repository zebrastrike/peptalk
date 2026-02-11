import { create } from 'zustand';
import { PeptideStack, StackAnalysis } from '../types';
import { analyzeStack } from '../services/analysisEngine';

const MAX_STACK_SIZE = 5;

const now = new Date().toISOString();

const CURATED_STACKS: PeptideStack[] = [
  {
    id: 'curated-recovery',
    name: 'Recovery Stack',
    peptideIds: ['bpc-157', 'tb-500'],
    createdAt: now,
    updatedAt: now,
    isCurated: true,
    curatedBy: 'SBB Research Team',
    description:
      'A foundational recovery stack combining two of the most widely studied tissue-repair peptides. BPC-157 targets gut-tissue and tendon repair pathways while TB-500 is researched for systemic tissue regeneration and anti-inflammatory signaling.',
  },
  {
    id: 'curated-gh-axis',
    name: 'GH Axis Stack',
    peptideIds: ['cjc-1295', 'ipamorelin'],
    createdAt: now,
    updatedAt: now,
    isCurated: true,
    curatedBy: 'SBB Research Team',
    description:
      'A classic growth-hormone secretagogue pairing. CJC-1295 (a GHRH analog) provides sustained GH elevation while Ipamorelin (a ghrelin mimetic) triggers pulsatile GH release, producing a synergistic amplification of the GH axis.',
  },
  {
    id: 'curated-metabolic',
    name: 'Metabolic Stack',
    peptideIds: ['retatrutide', '5-amino-1mq'],
    createdAt: now,
    updatedAt: now,
    isCurated: true,
    curatedBy: 'SBB Research Team',
    description:
      'Targets multiple metabolic pathways simultaneously. Retatrutide is a triple-agonist (GIP/GLP-1/glucagon) researched for weight management, while 5-Amino-1MQ inhibits NNMT to promote fat-cell energy expenditure.',
  },
  {
    id: 'curated-longevity',
    name: 'Longevity Stack',
    peptideIds: ['epithalon', 'mots-c', 'nad+'],
    createdAt: now,
    updatedAt: now,
    isCurated: true,
    curatedBy: 'SBB Research Team',
    description:
      'A multi-target longevity research stack. Epithalon is studied for telomerase activation, MOTS-c for mitochondrial-derived metabolic regulation, and NAD+ for sirtuin-mediated cellular repair and energy metabolism.',
  },
  {
    id: 'curated-body-recomp',
    name: 'Body Recomp Stack',
    peptideIds: ['retatrutide', 'cjc-1295', 'ipamorelin'],
    createdAt: now,
    updatedAt: now,
    isCurated: true,
    curatedBy: 'SBB Research Team',
    description:
      'Combines metabolic and growth-hormone pathways for body recomposition research. Retatrutide drives fat metabolism via triple receptor agonism, while CJC-1295 and Ipamorelin synergistically amplify GH output to support lean-tissue signaling.',
  },
];

interface StackStore {
  // ── State ──────────────────────────────────────────────────────────────
  currentStack: string[];
  savedStacks: PeptideStack[];
  currentAnalysis: StackAnalysis | null;
  isAnalyzing: boolean;

  // ── Actions ────────────────────────────────────────────────────────────
  addToStack: (peptideId: string) => void;
  removeFromStack: (peptideId: string) => void;
  clearStack: () => void;
  analyzeCurrentStack: () => Promise<void>;
  saveStack: (name: string) => void;
  deleteStack: (stackId: string) => void;
  loadStack: (stack: PeptideStack) => void;
}

export const useStackStore = create<StackStore>((set, get) => ({
  // ── Initial State ────────────────────────────────────────────────────
  currentStack: [],
  savedStacks: CURATED_STACKS,
  currentAnalysis: null,
  isAnalyzing: false,

  // ── Actions ──────────────────────────────────────────────────────────

  addToStack: (peptideId: string) => {
    const { currentStack } = get();

    // Guard: already present or at capacity
    if (currentStack.includes(peptideId) || currentStack.length >= MAX_STACK_SIZE) {
      return;
    }

    set({
      currentStack: [...currentStack, peptideId],
      // Invalidate stale analysis when the stack changes
      currentAnalysis: null,
    });
  },

  removeFromStack: (peptideId: string) => {
    set((state) => ({
      currentStack: state.currentStack.filter((id) => id !== peptideId),
      // Invalidate stale analysis when the stack changes
      currentAnalysis: null,
    }));
  },

  clearStack: () => {
    set({
      currentStack: [],
      currentAnalysis: null,
    });
  },

  analyzeCurrentStack: async () => {
    const { currentStack } = get();

    if (currentStack.length === 0) {
      set({ currentAnalysis: null });
      return;
    }

    set({ isAnalyzing: true });

    try {
      const analysis = await analyzeStack(currentStack);
      set({ currentAnalysis: analysis, isAnalyzing: false });
    } catch (error) {
      console.error('[useStackStore] Analysis failed:', error);
      set({ isAnalyzing: false });
    }
  },

  saveStack: (name: string) => {
    const { currentStack, currentAnalysis, savedStacks } = get();

    if (currentStack.length === 0) {
      return;
    }

    const timestamp = new Date().toISOString();
    const id = `stack-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    const newStack: PeptideStack = {
      id,
      name,
      peptideIds: [...currentStack],
      createdAt: timestamp,
      updatedAt: timestamp,
      isCurated: false,
      analysis: currentAnalysis ?? undefined,
    };

    set({ savedStacks: [...savedStacks, newStack] });
  },

  deleteStack: (stackId: string) => {
    set((state) => ({
      savedStacks: state.savedStacks.filter((stack) => stack.id !== stackId),
    }));
  },

  loadStack: (stack: PeptideStack) => {
    set({
      currentStack: [...stack.peptideIds],
      currentAnalysis: stack.analysis ?? null,
    });
  },
}));
