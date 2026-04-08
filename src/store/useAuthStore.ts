import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../types';
import { secureStorage } from '../services/secureStorage';

interface AuthStore {
  // ── State ──────────────────────────────────────────────────────────────
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

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

      // ── Actions ──────────────────────────────────────────────────────────

      login: async (_email: string, _password: string) => {
        set({ isLoading: true });

        try {
          await new Promise((resolve) => setTimeout(resolve, 800));

          // Test credentials — auto-set subscription tier
          const TEST_ACCOUNTS: Record<string, { name: string; tier: 'free' | 'plus' | 'pro' }> = {
            'free@test.com':      { name: 'Free Tester',     tier: 'free' },
            'plus@test.com':      { name: 'Plus Tester',     tier: 'plus' },
            'pro@test.com':       { name: 'Pro Tester',      tier: 'pro' },
            'jamie@test.com':     { name: 'Jamie',           tier: 'pro' },
            // Demographic test accounts
            'jake@test.com':      { name: 'Jake',            tier: 'pro' },
            'sophia@test.com':    { name: 'Sophia',          tier: 'plus' },
            'marcus@test.com':    { name: 'Marcus',          tier: 'pro' },
            'sarah@test.com':     { name: 'Sarah',           tier: 'plus' },
            'richard@test.com':   { name: 'Richard',         tier: 'pro' },
            'diana@test.com':     { name: 'Diana',           tier: 'pro' },
            'walter@test.com':    { name: 'Walter',          tier: 'free' },
            'margaret@test.com':  { name: 'Margaret',        tier: 'free' },
          };

          const testMatch = TEST_ACCOUNTS[_email.toLowerCase()];
          if (testMatch) {
            const { useSubscriptionStore } = require('./useSubscriptionStore');
            useSubscriptionStore.getState().setTier(testMatch.tier);
          }

          const tier = testMatch?.tier ?? 'free';
          const dummyUser: User = {
            id: `user-${Date.now()}`,
            email: _email,
            name: testMatch?.name ?? _email.split('@')[0],
            savedStacks: [],
            favoritePeptides: [],
            isPro: tier === 'pro',
            createdAt: new Date().toISOString(),
          };

          set({ user: dummyUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          console.error('[useAuthStore] Login failed:', error);
          set({ isLoading: false });
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
        // Clear all stores so next session starts fresh with onboarding
        try {
          const { useOnboardingStore } = require('./useOnboardingStore');
          const { useHealthProfileStore } = require('./useHealthProfileStore');
          const { useSubscriptionStore } = require('./useSubscriptionStore');
          useHealthProfileStore.getState().resetProfile();
          useSubscriptionStore.getState().setTier('free');
          useOnboardingStore.getState().reset();
        } catch {}

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
        });
      },
    }
  )
);
