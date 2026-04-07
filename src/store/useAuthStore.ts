import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../types';
import { secureStorage } from '../services/secureStorage';

interface AuthStore {
  // ── State ──────────────────────────────────────────────────────────────
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  hasHydrated: boolean;

  // ── Actions ────────────────────────────────────────────────────────────
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleFavoritePeptide: (peptideId: string) => void;
  togglePro: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // ── Initial State ────────────────────────────────────────────────────
      user: null,
      isAuthenticated: false,
      isLoading: false,
      hasHydrated: false,

      // ── Actions ──────────────────────────────────────────────────────────

      login: async (_email: string, _password: string) => {
        set({ isLoading: true });

        try {
          await new Promise((resolve) => setTimeout(resolve, 800));

          // Test credentials — auto-set subscription tier
          const TEST_ACCOUNTS: Record<string, { name: string; pw: string; tier: 'free' | 'pepe' | 'pepe_plus' | 'pepe_pro' }> = {
            'test@peptalk.com':      { name: 'PepTalk Tester',  pw: 'Pt3st!xK9m2v', tier: 'free' },
            'testpepe@peptalk.com':  { name: 'Pepe Tester',     pw: 'Pp7kL#nR4w8j', tier: 'pepe' },
            'testplus@peptalk.com':  { name: 'Plus Tester',     pw: 'Px5qM$bT2y6h', tier: 'pepe_plus' },
            'testpro@peptalk.com':   { name: 'Pro Tester',      pw: 'Pr9sN&dW3z1f', tier: 'pepe_pro' },
            'jamie@peptalk.com':     { name: 'Jamie',           pw: 'Jm4vQ!cE8u7a', tier: 'pepe_pro' },
          };

          const testMatch = TEST_ACCOUNTS[_email.toLowerCase()];

          // For test accounts, validate password; for all others, accept anything (stub)
          if (testMatch && _password !== testMatch.pw) {
            set({ isLoading: false });
            throw new Error('Invalid credentials');
          }

          if (testMatch) {
            const { useSubscriptionStore } = require('./useSubscriptionStore');
            useSubscriptionStore.getState().setTier(testMatch.tier);
          }

          const dummyUser: User = {
            id: `user-${Date.now()}`,
            email: _email,
            name: testMatch?.name ?? _email.split('@')[0],
            savedStacks: [],
            favoritePeptides: [],
            isPro: false,
            createdAt: new Date().toISOString(),
          };

          set({ user: dummyUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          console.error('[useAuthStore] Login failed:', error);
          set({ isLoading: false });
          throw error;
        }
      },

      signup: async (name: string, email: string, _password: string) => {
        set({ isLoading: true });
        try {
          await new Promise((resolve) => setTimeout(resolve, 800));

          const dummyUser: User = {
            id: `user-${Date.now()}`,
            email,
            name,
            savedStacks: [],
            favoritePeptides: [],
            isPro: false,
            createdAt: new Date().toISOString(),
          };

          set({ user: dummyUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          console.error('[useAuthStore] Signup failed:', error);
          set({ isLoading: false });
          throw error;
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
    }),
    {
      name: 'peptalk-auth',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        useAuthStore.setState({
          isAuthenticated: Boolean(state.user),
          isLoading: false,
          hasHydrated: true,
        });
      },
    }
  )
);
