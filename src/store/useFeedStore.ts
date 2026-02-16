import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { FeedItem, DailyDigest, FeedCategory } from '../types';
import { secureStorage } from '../services/secureStorage';
import {
  fetchResearchFeed,
  buildDailyDigest,
} from '../services/researchFeed';

interface FeedStore {
  digest: DailyDigest | null;
  isLoading: boolean;
  lastFetchDate: string | null;
  error: string | null;
  selectedCategory: FeedCategory | 'all';

  fetchFeed: () => Promise<void>;
  setCategory: (category: FeedCategory | 'all') => void;
  getFilteredItems: () => FeedItem[];
}

const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export const useFeedStore = create<FeedStore>()(
  persist(
    (set, get) => ({
      digest: null,
      isLoading: false,
      lastFetchDate: null,
      error: null,
      selectedCategory: 'all',

      fetchFeed: async () => {
        const today = todayKey();

        // Don't re-fetch if we already have today's digest
        if (get().lastFetchDate === today && get().digest) {
          return;
        }

        set({ isLoading: true, error: null });

        try {
          const items = await fetchResearchFeed();
          const digest = buildDailyDigest(items);

          set({
            digest,
            isLoading: false,
            lastFetchDate: today,
            error: null,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: 'Failed to fetch research feed. Check your connection.',
          });
        }
      },

      setCategory: (selectedCategory) => set({ selectedCategory }),

      getFilteredItems: () => {
        const { digest, selectedCategory } = get();
        if (!digest) return [];
        if (selectedCategory === 'all') return digest.items;
        return digest.items.filter(
          (item) => item.category === selectedCategory
        );
      },
    }),
    {
      name: 'peptalk-feed',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        digest: state.digest,
        lastFetchDate: state.lastFetchDate,
      }),
    }
  )
);
