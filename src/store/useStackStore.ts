import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { PeptideStack, StackAnalysis } from '../types';
import { analyzeStack } from '../services/analysisEngine';
import { secureStorage } from '../services/secureStorage';
import { syncRecord, deleteRecord } from '../services/syncService';
import { CURATED_STACKS } from '../data/curatedStacks';

const MAX_STACK_SIZE = 5;

const mergeCuratedStacks = (savedStacks: PeptideStack[]) => {
  const userStacks = savedStacks.filter((stack) => !stack.isCurated);
  return [...CURATED_STACKS, ...userStacks];
};

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

export const useStackStore = create<StackStore>()(
  persist(
    (set, get) => ({
      // ── Initial State ────────────────────────────────────────────────────
      currentStack: [],
      savedStacks: CURATED_STACKS,
      currentAnalysis: null,
      isAnalyzing: false,

      // ── Actions ──────────────────────────────────────────────────────────

      addToStack: (peptideId: string) => {
        const { currentStack } = get();

        // Guard: already present or at capacity
        if (
          currentStack.includes(peptideId) ||
          currentStack.length >= MAX_STACK_SIZE
        ) {
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
        const id = `stack-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 9)}`;

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

        syncRecord('saved_stacks', {
          id: newStack.id,
          name: newStack.name,
          peptides: newStack.peptideIds.map((pid) => ({ peptideId: pid })),
          notes: null,
        });
      },

      deleteStack: (stackId: string) => {
        set((state) => ({
          savedStacks: state.savedStacks.filter(
            (stack) => stack.id !== stackId || stack.isCurated
          ),
        }));
        deleteRecord('saved_stacks', stackId);
      },

      loadStack: (stack: PeptideStack) => {
        set({
          currentStack: [...stack.peptideIds],
          currentAnalysis: stack.analysis ?? null,
        });
      },
    }),
    {
      name: 'peptalk-stacks',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        currentStack: state.currentStack,
        savedStacks: state.savedStacks.filter((stack) => !stack.isCurated),
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        useStackStore.setState({
          savedStacks: mergeCuratedStacks(state.savedStacks ?? []),
          currentAnalysis: null,
          isAnalyzing: false,
        });
      },
    }
  )
);
