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
  // Free tier features
  peptide_library: {
    name: 'Peptide Library',
    description: 'Browse our comprehensive library of 55+ peptides.',
  },
  peptide_info: {
    name: 'Peptide Information',
    description: 'Detailed peptide profiles with dosing and research data.',
  },
  dosing_calculator: {
    name: 'Dosing Calculator',
    description: 'Calculate precise peptide dosing based on your needs.',
  },
  reconstitution_calculator: {
    name: 'Reconstitution Calculator',
    description: 'Calculate reconstitution volumes for peptide vials.',
  },
  calorie_counter: {
    name: 'Calorie Counter',
    description: 'Track your daily calorie intake with easy meal logging.',
  },
  health_checkins: {
    name: 'Health Check-Ins',
    description: 'Log daily wellness check-ins to track your progress.',
  },
  dose_logging: {
    name: 'Dose Logging',
    description: 'Track your peptide doses on a calendar.',
  },
  calendar: {
    name: 'Calendar',
    description: 'View your doses, check-ins, and events on a calendar.',
  },
  journal: {
    name: 'Wellness Journal',
    description: 'Write journal entries to track your wellness journey.',
  },
  learn_hub: {
    name: 'Learn Hub',
    description: 'Educational articles and videos on peptides and health.',
  },
  stack_builder: {
    name: 'Stack Builder',
    description: 'Build and manage your peptide stacks.',
  },

  // Pepe tier features
  pepe_ai_unlimited: {
    name: 'Unlimited Pepe AI',
    description: 'Chat with Pepe AI without any message limits.',
  },
  pepe_dosing_qa: {
    name: 'Pepe Dosing Q&A',
    description: 'Ask Pepe AI detailed questions about peptide dosing.',
  },
  pepe_health_suggestions: {
    name: 'Pepe Health Suggestions',
    description: 'Get personalized health suggestions from Pepe AI.',
  },

  // Pepe Plus tier features
  workout_programs: {
    name: 'Workout Programs',
    description: 'Follow structured multi-week workout programs.',
  },
  ai_meal_plans: {
    name: 'AI Meal Plans',
    description: 'Get AI-generated weekly meal plans tailored to your goals.',
  },
  nutrition_planning: {
    name: 'Nutrition Planning',
    description: 'Advanced nutrition planning with macro optimization.',
  },
  pepe_weekly_programs: {
    name: 'Pepe Weekly Programs',
    description: 'AI-generated weekly workout and nutrition programs.',
  },
  pepe_full_tracking: {
    name: 'Full Progress Tracking',
    description: 'Comprehensive tracking of workouts, nutrition, and health.',
  },
  grocery_from_plans: {
    name: 'Grocery Lists',
    description: 'Auto-generated shopping lists from your meal plans.',
  },
  recipe_generator: {
    name: 'Meals by Pepe',
    description: 'Get personalized meal ideas from Pepe based on your macros and preferences.',
  },

  // Pepe Pro tier features
  health_device_sync: {
    name: 'Health Device Sync',
    description: 'Sync data from Apple Watch, Fitbit, and Google Health.',
  },
  ai_health_planner: {
    name: 'AI Health Planner',
    description: 'AI-powered comprehensive health optimization plans.',
  },
  health_reports: {
    name: 'Health Reports',
    description: 'Comprehensive health reports with actionable recommendations.',
  },
  pdf_export: {
    name: 'PDF Export',
    description: 'Export health reports and data as professional PDFs.',
  },
  nutritionist_consult: {
    name: 'Nutritionist Consult',
    description: 'Schedule a consultation with a certified nutritionist.',
  },
  data_export: {
    name: 'Data Export',
    description: 'Export all your data in JSON format for your records.',
  },
  priority_support: {
    name: 'Priority Support',
    description: 'Get faster responses from our support team.',
  },
  ad_free: {
    name: 'Ad-Free Experience',
    description: 'Remove all banner ads from the app.',
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Determine the minimum tier that unlocks a feature. */
function getRequiredTier(feature: string): SubscriptionTier {
  const tiers: SubscriptionTier[] = ['pepe_pro', 'pepe_plus', 'pepe', 'free'];
  for (const tier of tiers) {
    const directFeatures = TIER_FEATURES[tier].filter((f) => !f.startsWith('all_'));
    if (directFeatures.includes(feature)) return tier;
  }
  return 'free';
}

const TIER_LABELS: Record<SubscriptionTier, string> = {
  free: 'Free',
  pepe: 'Pepe',
  pepe_plus: 'Pepe Plus',
  pepe_pro: 'Pepe Pro',
};

const TIER_PRICES: Record<SubscriptionTier, string> = {
  free: '$0',
  pepe: '$9.99/mo',
  pepe_plus: '$49.99/mo',
  pepe_pro: '$99.99/mo',
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
