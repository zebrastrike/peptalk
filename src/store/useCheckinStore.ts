import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { CheckInEntry, CheckInRating, EmotionTag, PeptideEffect } from '../types';
import { secureStorage } from '../services/secureStorage';

const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const clampRating = (value: number): CheckInRating => {
  if (value <= 1) return 1;
  if (value >= 5) return 5;
  return Math.round(value) as CheckInRating;
};

interface CheckInInput {
  date?: string;
  mood: CheckInRating;
  energy: CheckInRating;
  stress: CheckInRating;
  sleepQuality: CheckInRating;
  recovery: CheckInRating;
  appetite: CheckInRating;
  weightLbs?: number;
  restingHeartRate?: number;
  steps?: number;
  notes?: string;
  emotionTags?: EmotionTag[];
  overallFeeling?: string;
  peptideEffects?: PeptideEffect[];
  sideEffectTags?: string[];
}

interface CheckinStore {
  entries: CheckInEntry[];
  saveCheckIn: (entry: CheckInInput) => CheckInEntry;
  removeCheckIn: (id: string) => void;
  getCheckInByDate: (date: string) => CheckInEntry | undefined;
  getEntriesInRange: (start: string, end: string) => CheckInEntry[];
  getEmotionFrequency: (days: number) => Record<string, number>;
  getStreak: () => number;
  clearAll: () => void;
}

export const useCheckinStore = create<CheckinStore>()(
  persist(
    (set, get) => ({
      entries: [],

      saveCheckIn: (entry) => {
        const date = entry.date ?? toDateKey(new Date());
        const existing = get().entries.find((item) => item.date === date);
        const nextEntry: CheckInEntry = {
          id: existing?.id ?? `checkin-${date}`,
          date,
          createdAt: new Date().toISOString(),
          mood: clampRating(entry.mood),
          energy: clampRating(entry.energy),
          stress: clampRating(entry.stress),
          sleepQuality: clampRating(entry.sleepQuality),
          recovery: clampRating(entry.recovery),
          appetite: clampRating(entry.appetite),
          weightLbs: entry.weightLbs,
          restingHeartRate: entry.restingHeartRate,
          steps: entry.steps,
          notes: entry.notes?.trim() || undefined,
          emotionTags: entry.emotionTags?.length ? entry.emotionTags : undefined,
          overallFeeling: entry.overallFeeling?.trim() || undefined,
          peptideEffects: entry.peptideEffects?.length ? entry.peptideEffects : undefined,
          sideEffectTags: entry.sideEffectTags?.length ? entry.sideEffectTags : undefined,
        };

        set((state) => {
          const filtered = state.entries.filter((item) => item.date !== date);
          return {
            entries: [nextEntry, ...filtered].sort((a, b) =>
              a.date < b.date ? 1 : -1
            ),
          };
        });

        return nextEntry;
      },

      removeCheckIn: (id) => {
        set((state) => ({
          entries: state.entries.filter((entry) => entry.id !== id),
        }));
      },

      getCheckInByDate: (date) => {
        return get().entries.find((entry) => entry.date === date);
      },

      getEntriesInRange: (start, end) => {
        return get().entries.filter((e) => e.date >= start && e.date <= end);
      },

      getEmotionFrequency: (days) => {
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        const cutoffKey = toDateKey(cutoff);
        const freq: Record<string, number> = {};
        for (const entry of get().entries) {
          if (entry.date < cutoffKey) break; // entries are sorted desc
          entry.emotionTags?.forEach((tag) => {
            freq[tag] = (freq[tag] ?? 0) + 1;
          });
        }
        return freq;
      },

      getStreak: () => {
        const { entries } = get();
        if (entries.length === 0) return 0;

        const entryDates = new Set(entries.map((entry) => entry.date));
        let streak = 0;
        const cursor = new Date();

        while (entryDates.has(toDateKey(cursor))) {
          streak += 1;
          cursor.setDate(cursor.getDate() - 1);
        }

        return streak;
      },

      clearAll: () => set({ entries: [] }),
    }),
    {
      name: 'peptalk-checkins',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({ entries: state.entries }),
    }
  )
);
