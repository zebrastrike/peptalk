import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { CheckInEntry, CheckInRating } from '../types';
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
}

interface CheckinStore {
  entries: CheckInEntry[];
  saveCheckIn: (entry: CheckInInput) => CheckInEntry;
  removeCheckIn: (id: string) => void;
  getCheckInByDate: (date: string) => CheckInEntry | undefined;
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
