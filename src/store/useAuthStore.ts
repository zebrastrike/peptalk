/**
 * Auth store — Supabase email/password authentication.
 *
 * Handles signup, login, logout, session persistence.
 * Profile data syncs to Supabase profiles table.
 */

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../types';
import { secureStorage } from '../services/secureStorage';
import { supabase } from '../services/supabase';

const db = supabase as any;

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  hasHydrated: boolean;

  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleFavoritePeptide: (peptideId: string) => void;
  /** Restore session from Supabase on app start */
  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      hasHydrated: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });

        // ── Dev fallback: test accounts work without Supabase ──
        const DEV_ACCOUNTS: Record<string, { name: string; tier: 'free' | 'plus' | 'pro' }> = {
          'free@test.com':     { name: 'Free Tester',  tier: 'free' },
          'plus@test.com':     { name: 'Plus Tester',  tier: 'plus' },
          'pro@test.com':      { name: 'Pro Tester',   tier: 'pro' },
          'jamie@test.com':    { name: 'Jamie',        tier: 'pro' },
          'jake@test.com':     { name: 'Jake',         tier: 'pro' },
          'sophia@test.com':   { name: 'Sophia',       tier: 'plus' },
          'marcus@test.com':   { name: 'Marcus',       tier: 'pro' },
          'sarah@test.com':    { name: 'Sarah',        tier: 'plus' },
          'richard@test.com':  { name: 'Richard',      tier: 'pro' },
          'diana@test.com':    { name: 'Diana',        tier: 'pro' },
          'walter@test.com':   { name: 'Walter',       tier: 'free' },
          'margaret@test.com': { name: 'Margaret',     tier: 'free' },
        };

        const devMatch = DEV_ACCOUNTS[email.toLowerCase()];

        try {
          // Try real Supabase auth first
          const { data, error } = await db.auth.signInWithPassword({
            email,
            password,
          });

          if (error && devMatch) {
            // Supabase failed but it's a dev account — use fallback
            await new Promise((r) => setTimeout(r, 500));
            const { useSubscriptionStore } = require('./useSubscriptionStore');
            useSubscriptionStore.getState().setTier(devMatch.tier);
            set({
              user: {
                id: `dev-${Date.now()}`,
                email,
                name: devMatch.name,
                savedStacks: [],
                favoritePeptides: [],
                isPro: devMatch.tier === 'pro',
                createdAt: new Date().toISOString(),
              },
              isAuthenticated: true,
              isLoading: false,
            });
            return;
          }

          if (error) {
            set({ isLoading: false });
            throw new Error(error.message);
          }

          if (!data.user) {
            set({ isLoading: false });
            throw new Error('Login failed');
          }

          // Fetch profile from DB
          const { data: profile } = await db
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();

          const tier = profile?.subscription_tier ?? 'free';

          // Sync subscription tier
          const { useSubscriptionStore } = require('./useSubscriptionStore');
          useSubscriptionStore.getState().setTier(tier);

          const appUser: User = {
            id: data.user.id,
            email: data.user.email ?? email,
            name: profile?.name ?? email.split('@')[0],
            savedStacks: [],
            favoritePeptides: profile?.favorite_peptides ?? [],
            isPro: tier === 'pro',
            createdAt: data.user.created_at,
          };

          set({ user: appUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          console.error('[useAuthStore] Login failed:', error);
          set({ isLoading: false });
          throw error;
        }
      },

      signup: async (name: string, email: string, password: string) => {
        set({ isLoading: true });

        try {
          const { data, error } = await db.auth.signUp({
            email,
            password,
            options: {
              data: { name },
            },
          });

          if (error) {
            set({ isLoading: false });
            throw new Error(error.message);
          }

          if (!data.user) {
            set({ isLoading: false });
            throw new Error('Signup failed');
          }

          // Profile is auto-created by DB trigger (handle_new_user)
          // Update the name if the trigger used email fallback
          await db
            .from('profiles')
            .update({ name })
            .eq('id', data.user.id);

          const appUser: User = {
            id: data.user.id,
            email: data.user.email ?? email,
            name,
            savedStacks: [],
            favoritePeptides: [],
            isPro: false,
            createdAt: data.user.created_at,
          };

          set({ user: appUser, isAuthenticated: true, isLoading: false });
        } catch (error) {
          console.error('[useAuthStore] Signup failed:', error);
          set({ isLoading: false });
          throw error;
        }
      },

      restoreSession: async () => {
        try {
          const { data: { session } } = await db.auth.getSession();

          if (!session?.user) {
            set({ hasHydrated: true });
            return;
          }

          const { data: profile } = await db
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          const tier = profile?.subscription_tier ?? 'free';
          const { useSubscriptionStore } = require('./useSubscriptionStore');
          useSubscriptionStore.getState().setTier(tier);

          const appUser: User = {
            id: session.user.id,
            email: session.user.email ?? '',
            name: profile?.name ?? '',
            savedStacks: [],
            favoritePeptides: profile?.favorite_peptides ?? [],
            isPro: tier === 'pro',
            createdAt: session.user.created_at,
          };

          set({ user: appUser, isAuthenticated: true, hasHydrated: true });
        } catch {
          set({ hasHydrated: true });
        }
      },

      logout: () => {
        db.auth.signOut().catch(() => {});

        const { useOnboardingStore } = require('./useOnboardingStore');
        const { useSubscriptionStore } = require('./useSubscriptionStore');
        try {
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
        if (!user) return;

        const isFavorited = user.favoritePeptides.includes(peptideId);
        const updatedFavorites = isFavorited
          ? user.favoritePeptides.filter((id) => id !== peptideId)
          : [...user.favoritePeptides, peptideId];

        set({ user: { ...user, favoritePeptides: updatedFavorites } });

        // Sync to DB
        db
          .from('profiles')
          .update({ favorite_peptides: updatedFavorites })
          .eq('id', user.id)
          .then(() => {});
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
