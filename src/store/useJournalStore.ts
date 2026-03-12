import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { JournalCategory, JournalEntry } from '../types';
import { secureStorage } from '../services/secureStorage';

const uid = () =>
  `journal-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

const nowTime = () => {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

const toDateKey = (date: Date) => {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${day}`;
};

interface JournalInput {
  date?: string;
  time?: string;
  category: JournalCategory;
  title: string;
  content: string;
  tags?: string[];
  relatedPeptideIds?: string[];
  mood?: 1 | 2 | 3 | 4 | 5;
}

interface JournalStore {
  entries: JournalEntry[];
  addEntry: (input: JournalInput) => JournalEntry;
  updateEntry: (id: string, updates: Partial<JournalInput>) => void;
  deleteEntry: (id: string) => void;
  getEntriesByDate: (date: string) => JournalEntry[];
  getEntriesByCategory: (category: JournalCategory) => JournalEntry[];
  getEntriesInRange: (start: string, end: string) => JournalEntry[];
  searchEntries: (query: string) => JournalEntry[];
  clearAll: () => void;
}

export const useJournalStore = create<JournalStore>()(
  persist(
    (set, get) => ({
      entries: [],

      addEntry: (input) => {
        const entry: JournalEntry = {
          id: uid(),
          date: input.date ?? toDateKey(new Date()),
          time: input.time ?? nowTime(),
          category: input.category,
          title: input.title.trim(),
          content: input.content.trim(),
          tags: input.tags ?? [],
          relatedPeptideIds: input.relatedPeptideIds,
          mood: input.mood,
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          entries: [entry, ...state.entries],
        }));

        return entry;
      },

      updateEntry: (id, updates) => {
        set((state) => ({
          entries: state.entries.map((e) =>
            e.id === id
              ? {
                  ...e,
                  ...(updates.title !== undefined && { title: updates.title.trim() }),
                  ...(updates.content !== undefined && { content: updates.content.trim() }),
                  ...(updates.category !== undefined && { category: updates.category }),
                  ...(updates.tags !== undefined && { tags: updates.tags }),
                  ...(updates.relatedPeptideIds !== undefined && { relatedPeptideIds: updates.relatedPeptideIds }),
                  ...(updates.mood !== undefined && { mood: updates.mood }),
                }
              : e
          ),
        }));
      },

      deleteEntry: (id) => {
        set((state) => ({
          entries: state.entries.filter((e) => e.id !== id),
        }));
      },

      getEntriesByDate: (date) => {
        return get().entries.filter((e) => e.date === date);
      },

      getEntriesByCategory: (category) => {
        return get().entries.filter((e) => e.category === category);
      },

      getEntriesInRange: (start, end) => {
        return get().entries.filter((e) => e.date >= start && e.date <= end);
      },

      searchEntries: (query) => {
        const lower = query.toLowerCase();
        return get().entries.filter(
          (e) =>
            e.title.toLowerCase().includes(lower) ||
            e.content.toLowerCase().includes(lower) ||
            e.tags.some((t) => t.toLowerCase().includes(lower))
        );
      },

      clearAll: () => set({ entries: [] }),
    }),
    {
      name: 'peptalk-journal',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({ entries: state.entries }),
    }
  )
);
