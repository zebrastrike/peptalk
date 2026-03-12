/**
 * Feature gating hook — checks subscription tier for feature access.
 */

import { useSubscriptionStore } from '../store/useSubscriptionStore';

/**
 * Returns true if the current user has access to the given feature.
 */
export function useFeatureGate(feature: string): boolean {
  return useSubscriptionStore((s) => s.hasFeature(feature));
}

/**
 * Returns the current subscription tier.
 */
export function useTier() {
  return useSubscriptionStore((s) => s.tier);
}

/**
 * Returns all features available to the current tier.
 */
export function useAvailableFeatures(): string[] {
  return useSubscriptionStore((s) => s.getFeatures());
}
