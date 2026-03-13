/**
 * Subscription / paywall store.
 *
 * Manages the user's tier and feature gating.
 * Ready for RevenueCat integration — currently uses local state.
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { secureStorage } from '../services/secureStorage';
import type { SubscriptionTier } from '../types/fitness';
import { TIER_FEATURES } from '../types/fitness';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SubscriptionState {
  tier: SubscriptionTier;
  productId: string | null;
  expiresAt: string | null;
  isActive: boolean;
}

interface SubscriptionActions {
  /** Check if user has access to a specific feature */
  hasFeature: (feature: string) => boolean;
  /** Upgrade (called after successful in-app purchase) */
  activate: (tier: SubscriptionTier, productId: string, expiresAt: string) => void;
  /** Downgrade to free (expiry or cancellation) */
  deactivate: () => void;
  /** Check if subscription is still valid */
  isExpired: () => boolean;
  /** Get all features for current tier */
  getFeatures: () => string[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Recursively collect all features for a tier, resolving inheritance. */
function collectFeatures(tier: SubscriptionTier, visited = new Set<string>()): Set<string> {
  const features = new Set<string>();
  if (visited.has(tier)) return features;
  visited.add(tier);

  for (const f of TIER_FEATURES[tier] ?? []) {
    if (f.startsWith('all_') && f.endsWith('_features')) {
      const parentTier = f.replace('all_', '').replace('_features', '') as SubscriptionTier;
      if (TIER_FEATURES[parentTier]) {
        for (const pf of collectFeatures(parentTier, visited)) {
          features.add(pf);
        }
      }
    } else {
      features.add(f);
    }
  }
  return features;
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useSubscriptionStore = create<SubscriptionState & SubscriptionActions>()(
  persist(
    (set, get) => ({
      tier: 'free' as SubscriptionTier,
      productId: null,
      expiresAt: null,
      isActive: true, // free tier is always active

      hasFeature: (feature) => {
        const { tier } = get();
        return collectFeatures(tier).has(feature);
      },

      activate: (tier, productId, expiresAt) =>
        set({ tier, productId, expiresAt, isActive: true }),

      deactivate: () =>
        set({
          tier: 'free',
          productId: null,
          expiresAt: null,
          isActive: true,
        }),

      isExpired: () => {
        const { expiresAt, tier } = get();
        if (tier === 'free') return false;
        if (!expiresAt) return true;
        return new Date(expiresAt) < new Date();
      },

      getFeatures: () => {
        const { tier } = get();
        return Array.from(collectFeatures(tier));
      },
    }),
    {
      name: 'peptalk-subscription',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        tier: state.tier,
        productId: state.productId,
        expiresAt: state.expiresAt,
        isActive: state.isActive,
      }),
    },
  ),
);

export default useSubscriptionStore;
