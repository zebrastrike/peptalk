/**
 * Feature gating hook and PaywallGate component.
 *
 * Checks subscription tier for feature access; shows PaywallModal when blocked.
 */

import React, { useState, useCallback } from 'react';
import { useSubscriptionStore } from '../store/useSubscriptionStore';
import { PaywallModal } from '../components/PaywallModal';

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

/**
 * PaywallGate — renders children if the user has the required feature,
 * otherwise renders a PaywallModal prompting upgrade.
 */
export const PaywallGate: React.FC<{ feature: string; children: React.ReactNode }> = ({
  feature,
  children,
}) => {
  const hasAccess = useFeatureGate(feature);
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = useCallback(() => {
    setDismissed(true);
  }, []);

  if (hasAccess) {
    return React.createElement(React.Fragment, null, children);
  }

  if (dismissed) {
    return null;
  }

  return React.createElement(PaywallModal, {
    visible: true,
    feature,
    onDismiss: handleDismiss,
  });
};
