/**
 * PaywallModal — Glass-style modal shown when a user tries to access a gated feature.
 *
 * Displays which tier unlocks the feature and offers upgrade navigation.
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, FontSizes, BorderRadius, Gradients } from '../constants/theme';
import { TIER_FEATURES } from '../types/fitness';
import type { SubscriptionTier } from '../types/fitness';

// ---------------------------------------------------------------------------
// Feature metadata — human-readable names & descriptions
// ---------------------------------------------------------------------------

const FEATURE_META: Record<string, { name: string; description: string }> = {
  full_exercise_library: {
    name: 'Full Exercise Library',
    description: 'Access 288+ exercises with video demos and coaching cues.',
  },
  workout_programs: {
    name: 'Workout Programs',
    description: 'Follow structured multi-week workout programs.',
  },
  ai_recipe_generator: {
    name: 'AI Recipe Generator',
    description: 'Generate personalized recipes based on your macros and preferences.',
  },
  custom_meal_plans: {
    name: 'Custom Meal Plans',
    description: 'Get AI-generated weekly meal plans tailored to your goals.',
  },
  grocery_list: {
    name: 'Grocery List',
    description: 'Auto-generated shopping lists from your meal plans.',
  },
  unlimited_ai_chat: {
    name: 'Unlimited AI Chat',
    description: 'Chat with PepTalk AI without daily message limits.',
  },
  unlimited_journal: {
    name: 'Unlimited Journal',
    description: 'Write unlimited wellness journal entries.',
  },
  health_reports_basic: {
    name: 'Health Reports',
    description: 'Generate basic health trend reports from your data.',
  },
  health_device_sync: {
    name: 'Health Device Sync',
    description: 'Sync data from Apple Watch, Fitbit, and Google Health.',
  },
  no_ads: {
    name: 'Ad-Free Experience',
    description: 'Remove all banner ads from the app.',
  },
  progress_photos: {
    name: 'Progress Photos',
    description: 'Track your transformation with progress photo comparisons.',
  },
  advanced_analytics: {
    name: 'Advanced Analytics',
    description: 'Deep insights into your trends and performance metrics.',
  },
  ai_health_planner: {
    name: 'AI Health Planner',
    description: 'AI-powered comprehensive health optimization plans.',
  },
  nutritionist_consult: {
    name: 'Nutritionist Consult',
    description: 'Schedule a consultation with a certified nutritionist.',
  },
  health_reports_full: {
    name: 'Full Health Reports',
    description: 'Comprehensive health reports with actionable recommendations.',
  },
  export_data: {
    name: 'Data Export',
    description: 'Export all your data in JSON format for your records.',
  },
  ai_workout_builder: {
    name: 'AI Workout Builder',
    description: 'Build custom workouts with AI-powered exercise selection.',
  },
  priority_support: {
    name: 'Priority Support',
    description: 'Get faster responses from our support team.',
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Determine the minimum tier that unlocks a feature. */
function getRequiredTier(feature: string): SubscriptionTier {
  // Check if pro-level (directly listed in pro, excluding inheritance keys)
  const proFeatures = TIER_FEATURES.pro.filter((f) => !f.startsWith('all_'));
  if (proFeatures.includes(feature)) return 'pro';

  // Check if plus-level
  const plusFeatures = TIER_FEATURES.plus.filter((f) => !f.startsWith('all_'));
  if (plusFeatures.includes(feature)) return 'plus';

  return 'free';
}

const TIER_LABELS: Record<SubscriptionTier, string> = {
  free: 'Free',
  plus: 'Plus',
  pro: 'Pro',
};

const TIER_PRICES: Record<SubscriptionTier, string> = {
  free: '$0',
  plus: '$9.99/mo',
  pro: '$24.99/mo',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface PaywallModalProps {
  visible: boolean;
  feature: string;
  onDismiss: () => void;
}

export function PaywallModal({ visible, feature, onDismiss }: PaywallModalProps) {
  const router = useRouter();
  const requiredTier = getRequiredTier(feature);
  const meta = FEATURE_META[feature] ?? {
    name: feature.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    description: 'This feature requires an upgraded plan.',
  };

  const handleUpgrade = () => {
    onDismiss();
    router.push('/subscription');
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onDismiss}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Lock icon */}
          <View style={styles.iconWrap}>
            <LinearGradient
              colors={Gradients.primary}
              style={styles.iconGradient}
            >
              <Ionicons name="lock-closed" size={28} color="#fff" />
            </LinearGradient>
          </View>

          {/* Feature info */}
          <Text style={styles.title}>{meta.name}</Text>
          <Text style={styles.description}>{meta.description}</Text>

          {/* Required tier badge */}
          <View style={styles.tierBadge}>
            <Text style={styles.tierBadgeText}>
              Available with {TIER_LABELS[requiredTier]} ({TIER_PRICES[requiredTier]})
            </Text>
          </View>

          {/* Upgrade button */}
          <TouchableOpacity onPress={handleUpgrade} activeOpacity={0.85}>
            <LinearGradient
              colors={Gradients.primary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.upgradeBtn}
            >
              <Text style={styles.upgradeBtnText}>
                Upgrade to {TIER_LABELS[requiredTier]}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Dismiss */}
          <TouchableOpacity onPress={onDismiss} style={styles.dismissBtn}>
            <Text style={styles.dismissText}>Maybe Later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  modal: {
    backgroundColor: 'rgba(30, 30, 50, 0.95)',
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: Spacing.lg,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  iconWrap: {
    marginBottom: Spacing.md,
  },
  iconGradient: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.darkText,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  description: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: Spacing.md,
  },
  tierBadge: {
    backgroundColor: 'rgba(59, 130, 246, 0.12)',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    marginBottom: Spacing.lg,
  },
  tierBadgeText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.pepBlue,
  },
  upgradeBtn: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  upgradeBtnText: {
    color: '#ffffff',
    fontSize: FontSizes.md,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  dismissBtn: {
    paddingVertical: Spacing.sm,
  },
  dismissText: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
  },
});

export default PaywallModal;
