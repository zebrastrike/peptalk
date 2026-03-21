import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors, Fonts, Spacing } from '../src/constants/theme';
import { useAuthStore } from '../src/store/useAuthStore';
import { useOnboardingStore } from '../src/store/useOnboardingStore';
import { useSubscriptionStore } from '../src/store/useSubscriptionStore';
import { DASHBOARD_SEGMENTS } from '../src/constants/segments';
import type { Gender, AgeRange, GoalType, PeptideCategory } from '../src/types';

interface TestAccount {
  name: string;
  email: string;
  gender: Gender;
  ageRange: AgeRange;
  goals: GoalType[];
  interests: PeptideCategory[];
  tier: 'free' | 'pepe' | 'pepe_plus' | 'pepe_pro';
}

const TEST_ACCOUNTS: TestAccount[] = [
  {
    name: 'Jake (Send It)',
    email: 'jake@test.com',
    gender: 'Male',
    ageRange: '18-29',
    goals: ['muscle_gain', 'body_recomp', 'recovery'],
    interests: ['Growth Hormone', 'Recovery', 'Metabolic'],
    tier: 'pepe_pro',
  },
  {
    name: 'Sophia (Main Character)',
    email: 'sophia@test.com',
    gender: 'Female',
    ageRange: '18-29',
    goals: ['body_recomp', 'skin_hair', 'energy'],
    interests: ['Cosmetic', 'Metabolic', 'Longevity'],
    tier: 'pepe_plus',
  },
  {
    name: 'Marcus (The Operator)',
    email: 'marcus@test.com',
    gender: 'Male',
    ageRange: '30-44',
    goals: ['cognitive', 'energy', 'longevity'],
    interests: ['Nootropic', 'Longevity', 'Recovery'],
    tier: 'pepe_pro',
  },
  {
    name: 'Sarah (Home & Health)',
    email: 'sarah@test.com',
    gender: 'Female',
    ageRange: '30-44',
    goals: ['hormonal', 'energy', 'skin_hair'],
    interests: ['Cosmetic', 'Immune', 'Sleep'],
    tier: 'pepe_plus',
  },
  {
    name: 'Richard (Black Label)',
    email: 'richard@test.com',
    gender: 'Male',
    ageRange: '45-60',
    goals: ['longevity', 'hormonal', 'cognitive'],
    interests: ['Longevity', 'Sexual Health', 'Growth Hormone'],
    tier: 'pepe_pro',
  },
  {
    name: 'Diana (The Renaissance)',
    email: 'diana@test.com',
    gender: 'Female',
    ageRange: '45-60',
    goals: ['hormonal', 'skin_hair', 'longevity'],
    interests: ['Cosmetic', 'Longevity', 'Immune'],
    tier: 'pepe_pro',
  },
  {
    name: 'Walter (Legacy Code)',
    email: 'walter@test.com',
    gender: 'Male',
    ageRange: '60+',
    goals: ['cognitive', 'recovery', 'longevity'],
    interests: ['Nootropic', 'Recovery', 'Longevity'],
    tier: 'free',
  },
  {
    name: 'Margaret (Golden Grace)',
    email: 'margaret@test.com',
    gender: 'Female',
    ageRange: '60+',
    goals: ['recovery', 'cognitive', 'skin_hair'],
    interests: ['Recovery', 'Longevity', 'Cosmetic'],
    tier: 'free',
  },
];

export default function DevAccountsScreen() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const setGender = useOnboardingStore((s) => s.setGender);
  const setAgeRange = useOnboardingStore((s) => s.setAgeRange);
  const setHealthGoals = useOnboardingStore((s) => s.setHealthGoals);
  const setInterestCategories = useOnboardingStore((s) => s.setInterestCategories);
  const setAcceptedSafety = useOnboardingStore((s) => s.setAcceptedSafety);
  const setDataShareConsent = useOnboardingStore((s) => s.setDataShareConsent);
  const completeOnboarding = useOnboardingStore((s) => s.completeOnboarding);
  const setTier = useSubscriptionStore((s) => s.setTier);

  const handleLogin = async (account: TestAccount) => {
    // Set onboarding profile
    setGender(account.gender);
    setAgeRange(account.ageRange);
    setHealthGoals(account.goals);
    setInterestCategories(account.interests);
    setAcceptedSafety(true);
    setDataShareConsent(true);

    // Set subscription tier
    setTier(account.tier);

    // Login
    await login(account.email, 'test123');

    // Complete onboarding
    completeOnboarding();

    // Find segment for display
    const segment = DASHBOARD_SEGMENTS.find(
      (s) => s.gender === account.gender && s.ageRange === account.ageRange
    );

    Alert.alert(
      `Logged in as ${account.name}`,
      `Dashboard: ${segment?.label ?? 'Default'}\nTier: ${account.tier.toUpperCase()}`,
      [{ text: 'Go to Dashboard', onPress: () => router.replace('/(tabs)') }]
    );
  };

  const handleReset = () => {
    useAuthStore.getState().logout();
    useOnboardingStore.getState().reset();
    Alert.alert('Reset', 'All accounts cleared. Restart the app to see onboarding.');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Dev Test Accounts</Text>
        <Text style={styles.subtitle}>
          Tap any account to instantly login with that demographic profile
        </Text>

        {TEST_ACCOUNTS.map((account) => {
          const segment = DASHBOARD_SEGMENTS.find(
            (s) => s.gender === account.gender && s.ageRange === account.ageRange
          );
          const palette = segment?.palette;

          return (
            <TouchableOpacity
              key={account.email}
              style={[
                styles.card,
                { borderLeftColor: palette?.primary ?? Colors.pepTeal },
              ]}
              onPress={() => handleLogin(account)}
              activeOpacity={0.7}
            >
              <View style={styles.cardHeader}>
                <Text style={[styles.name, { color: palette?.primary ?? Colors.pepTeal }]}>
                  {account.name}
                </Text>
                <View style={[styles.tierBadge, account.tier === 'pepe_pro' ? styles.proBadge : account.tier === 'pepe_plus' ? styles.plusBadge : account.tier === 'pepe' ? styles.plusBadge : styles.freeBadge]}>
                  <Text style={styles.tierText}>{account.tier.toUpperCase().replace(/_/g, ' ')}</Text>
                </View>
              </View>

              <Text style={styles.segmentLabel}>
                {segment?.label} — "{segment?.tagline}"
              </Text>

              <View style={styles.metaRow}>
                <Text style={styles.meta}>
                  {account.gender} · {account.ageRange}
                </Text>
              </View>

              <View style={styles.tagsRow}>
                {account.goals.slice(0, 3).map((g) => (
                  <View key={g} style={[styles.tag, { backgroundColor: (palette?.primary ?? Colors.pepTeal) + '22' }]}>
                    <Text style={[styles.tagText, { color: palette?.primary ?? Colors.pepTeal }]}>
                      {g.replace(/_/g, ' ')}
                    </Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={styles.resetText}>Reset All Accounts</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.darkBg,
  },
  scroll: {
    padding: Spacing.lg,
    paddingBottom: 100,
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 28,
    color: Colors.darkText,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: Fonts.body,
    fontSize: 14,
    color: Colors.darkTextSecondary,
    marginBottom: Spacing.lg,
  },
  card: {
    backgroundColor: Colors.glassWhite,
    borderRadius: 16,
    padding: Spacing.md,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontFamily: Fonts.heading,
    fontSize: 18,
  },
  tierBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  freeBadge: {
    backgroundColor: '#333',
  },
  plusBadge: {
    backgroundColor: '#2a4a1a',
  },
  proBadge: {
    backgroundColor: '#3a1a4a',
  },
  tierText: {
    fontFamily: Fonts.bodyBold,
    fontSize: 11,
    color: Colors.darkText,
    letterSpacing: 1,
  },
  segmentLabel: {
    fontFamily: Fonts.body,
    fontSize: 13,
    color: Colors.darkTextSecondary,
    fontStyle: 'italic',
    marginBottom: 6,
  },
  metaRow: {
    marginBottom: 8,
  },
  meta: {
    fontFamily: Fonts.body,
    fontSize: 13,
    color: Colors.darkTextSecondary,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  tagText: {
    fontFamily: Fonts.body,
    fontSize: 11,
  },
  resetBtn: {
    marginTop: Spacing.lg,
    padding: Spacing.md,
    backgroundColor: '#3a1010',
    borderRadius: 12,
    alignItems: 'center',
  },
  resetText: {
    fontFamily: Fonts.bodyBold,
    fontSize: 14,
    color: '#ff6b6b',
  },
});
