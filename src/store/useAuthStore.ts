import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  // ── State ──────────────────────────────────────────────────────────────
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // ── Actions ────────────────────────────────────────────────────────────
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleFavoritePeptide: (peptideId: string) => void;
  togglePro: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  // ── Initial State ────────────────────────────────────────────────────
  user: null,
  isAuthenticated: false,
  isLoading: false,

  // ── Actions ──────────────────────────────────────────────────────────

  login: async (_email: string, _password: string) => {
    set({ isLoading: true });

    try {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      const dummyUser: User = {
        id: `user-${Date.now()}`,
        email: _email,
        name: _email.split('@')[0],
        savedStacks: [],
        favoritePeptides: [],
        isPro: false,
        createdAt: new Date().toISOString(),
      };

      set({
        user: dummyUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.error('[useAuthStore] Login failed:', error);
      set({ isLoading: false });
    }
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },

  toggleFavoritePeptide: (peptideId: string) => {
    const { user } = get();

    if (!user) {
      return;
    }

    const isFavorited = user.favoritePeptides.includes(peptideId);

    const updatedFavorites = isFavorited
      ? user.favoritePeptides.filter((id) => id !== peptideId)
      : [...user.favoritePeptides, peptideId];

    set({
      user: {
        ...user,
        favoritePeptides: updatedFavorites,
      },
    });
  },

  togglePro: () => {
    const { user } = get();

    if (!user) {
      return;
    }

    set({
      user: {
        ...user,
        isPro: !user.isPro,
      },
    });
  },
}));
