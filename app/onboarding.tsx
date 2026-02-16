import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useOnboardingStore } from '../src/store/useOnboardingStore';
import { GlassCard } from '../src/components/GlassCard';
import { OptionCard } from '../src/components/OptionCard';
import { SafetyCallout } from '../src/components/SafetyCallout';
import { CATEGORIES } from '../src/constants/categories';
import { trackOnboardingComplete } from '../src/services/sbbEvents';
import { AgeRange, Ethnicity, Gender, MaritalStatus, ReferralSource } from '../src/types';

const GENDER_OPTIONS: Gender[] = ['Male', 'Female'];
const AGE_OPTIONS: AgeRange[] = ['18-29', '30-44', '45-60', '60+'];
const ETHNICITY_OPTIONS: { value: Ethnicity; label: string }[] = [
  { value: 'white', label: 'White / Caucasian' },
  { value: 'black', label: 'Black / African American' },
  { value: 'hispanic', label: 'Hispanic / Latino' },
  { value: 'asian', label: 'Asian / Asian American' },
  { value: 'native_american', label: 'Native American / Alaska Native' },
  { value: 'pacific_islander', label: 'Pacific Islander / Native Hawaiian' },
  { value: 'middle_eastern', label: 'Middle Eastern / North African' },
  { value: 'mixed_other', label: 'Mixed / Other' },
];
const MARITAL_OPTIONS: MaritalStatus[] = ['Single', 'Married', 'Other'];
const REFERRAL_OPTIONS: ReferralSource[] = [
  'Google / Search',
  'Social Media',
  'Podcast / YouTube',
  'Friend / Referral',
  'Ad / Sponsored',
  'Other',
];

const STEP_TITLES = [
  'Research Safety',
  'About You',
  'Research Focus',
  'Data & Consent',
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const {
    profile,
    setGender,
    setAgeRange,
    setEthnicity,
    setMaritalStatus,
    setReferralSource,
    toggleInterestCategory,
    setAcceptedSafety,
    setDataShareConsent,
    completeOnboarding,
  } = useOnboardingStore();

  const canContinue = useMemo(() => {
    if (step === 0) return profile.acceptedSafety;
    if (step === 1) return Boolean(profile.gender && profile.ageRange);
    return true;
  }, [profile.acceptedSafety, profile.ageRange, profile.gender, step]);

  const handleNext = () => {
    if (!canContinue) {
      Alert.alert(
        'Missing Info',
        'Please complete the required fields to continue.'
      );
      return;
    }
    if (step < STEP_TITLES.length - 1) {
      setStep((prev) => prev + 1);
      return;
    }
    completeOnboarding();
    trackOnboardingComplete(profile.interestCategories.length);
    router.replace('/(tabs)');
  };

  const handleBack = () => {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to PepTalk</Text>
          <Text style={styles.subtitle}>
            Your research companion for peptides, stacks, and health metrics.
          </Text>
        </View>

        <View style={styles.stepHeader}>
          <Text style={styles.stepTitle}>{STEP_TITLES[step]}</Text>
          <Text style={styles.stepIndicator}>
            Step {step + 1} of {STEP_TITLES.length}
          </Text>
        </View>

        {step === 0 && (
          <View style={styles.section}>
            <GlassCard style={styles.card}>
              <Text style={styles.cardTitle}>Research-Only Use</Text>
              <Text style={styles.cardText}>
                PepTalk is an educational research tool. It does not provide
                medical advice or clinical guidance.
              </Text>
              <SafetyCallout />
              <View style={styles.toggleRow}>
                <View style={styles.toggleText}>
                  <Text style={styles.toggleTitle}>I understand</Text>
                  <Text style={styles.toggleSubtitle}>
                    I will use this for research and education only.
                  </Text>
                </View>
                <Switch
                  value={profile.acceptedSafety}
                  onValueChange={setAcceptedSafety}
                  trackColor={{
                    false: 'rgba(255,255,255,0.12)',
                    true: 'rgba(227, 167, 161, 0.4)',
                  }}
                  thumbColor={profile.acceptedSafety ? '#e3a7a1' : '#9ca3af'}
                />
              </View>
            </GlassCard>
          </View>
        )}

        {step === 1 && (
          <View style={styles.section}>
            <GlassCard style={styles.card}>
              <Text style={styles.cardTitle}>Demographics</Text>
              <Text style={styles.cardText}>
                This helps us personalize research summaries and recommended
                stacks.
              </Text>

              <Text style={styles.groupTitle}>Gender</Text>
              <View style={styles.optionStack}>
                {GENDER_OPTIONS.map((gender) => (
                  <OptionCard
                    key={gender}
                    label={gender}
                    selected={profile.gender === gender}
                    onPress={() => setGender(gender)}
                  />
                ))}
              </View>

              <Text style={styles.groupTitle}>Age Range</Text>
              <View style={styles.optionStack}>
                {AGE_OPTIONS.map((ageRange) => (
                  <OptionCard
                    key={ageRange}
                    label={ageRange}
                    selected={profile.ageRange === ageRange}
                    onPress={() => setAgeRange(ageRange)}
                  />
                ))}
              </View>

              <Text style={styles.groupTitle}>Background (optional)</Text>
              <Text style={styles.groupSubtext}>
                Helps us surface research most relevant to your health profile.
              </Text>
              <View style={styles.optionStack}>
                {ETHNICITY_OPTIONS.map((option) => (
                  <OptionCard
                    key={option.value}
                    label={option.label}
                    selected={profile.ethnicity === option.value}
                    onPress={() => setEthnicity(option.value)}
                  />
                ))}
              </View>

              <Text style={styles.groupTitle}>Marital Status (optional)</Text>
              <View style={styles.optionStack}>
                {MARITAL_OPTIONS.map((status) => (
                  <OptionCard
                    key={status}
                    label={status}
                    selected={profile.maritalStatus === status}
                    onPress={() => setMaritalStatus(status)}
                  />
                ))}
              </View>

              <Text style={styles.groupTitle}>How did you hear about us?</Text>
              <View style={styles.optionStack}>
                {REFERRAL_OPTIONS.map((source) => (
                  <OptionCard
                    key={source}
                    label={source}
                    selected={profile.referralSource === source}
                    onPress={() => setReferralSource(source)}
                  />
                ))}
              </View>
            </GlassCard>
          </View>
        )}

        {step === 2 && (
          <View style={styles.section}>
            <GlassCard style={styles.card}>
              <Text style={styles.cardTitle}>Research Focus</Text>
              <Text style={styles.cardText}>
                Pick the categories you want to explore most. You can update
                these later.
              </Text>
              <View style={styles.optionStack}>
                {CATEGORIES.map((category) => (
                  <OptionCard
                    key={category.name}
                    label={category.name}
                    description={category.description}
                    selected={profile.interestCategories.includes(
                      category.name
                    )}
                    onPress={() => toggleInterestCategory(category.name)}
                  />
                ))}
              </View>
            </GlassCard>
          </View>
        )}

        {step === 3 && (
          <View style={styles.section}>
            <GlassCard style={styles.card}>
              <Text style={styles.cardTitle}>Data Sharing</Text>
              <Text style={styles.cardText}>
                You control what you share. Data sharing enables personalized
                research insights and anonymous usage analytics.
              </Text>

              <View style={styles.toggleRow}>
                <View style={styles.toggleText}>
                  <Text style={styles.toggleTitle}>Share anonymized data</Text>
                  <Text style={styles.toggleSubtitle}>
                    Allow PepTalk to use anonymous insights to improve
                    recommendations.
                  </Text>
                </View>
                <Switch
                  value={profile.dataShareConsent}
                  onValueChange={setDataShareConsent}
                  trackColor={{
                    false: 'rgba(255,255,255,0.12)',
                    true: 'rgba(199, 215, 230, 0.4)',
                  }}
                  thumbColor={profile.dataShareConsent ? '#c7d7e6' : '#9ca3af'}
                />
              </View>
            </GlassCard>

            <GlassCard style={styles.card}>
              <View style={styles.infoRow}>
                <Ionicons name="lock-closed-outline" size={18} color="#c7d7e6" />
                <Text style={styles.infoText}>
                  Your data stays on your device unless you explicitly opt in.
                </Text>
              </View>
            </GlassCard>
          </View>
        )}

        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.navButton, styles.backButton]}
            onPress={handleBack}
            disabled={step === 0}
          >
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navButton,
              styles.nextButton,
              !canContinue && styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={!canContinue}
          >
            <Text style={styles.nextText}>
              {step === STEP_TITLES.length - 1 ? 'Finish' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1720',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  header: {
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f7f2ec',
  },
  subtitle: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 6,
    lineHeight: 18,
  },
  stepHeader: {
    marginTop: 12,
    marginBottom: 12,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e8e6e3',
  },
  stepIndicator: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  section: {
    marginTop: 10,
  },
  card: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f7f2ec',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 12,
    color: '#9ca3af',
    lineHeight: 18,
    marginBottom: 14,
  },
  groupTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#c7d7e6',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 10,
    marginBottom: 8,
  },
  groupSubtext: {
    fontSize: 11,
    color: '#9ca3af',
    marginBottom: 8,
    lineHeight: 16,
  },
  optionStack: {
    gap: 10,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  toggleText: {
    flex: 1,
    marginRight: 12,
  },
  toggleTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e8e6e3',
  },
  toggleSubtitle: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 4,
    lineHeight: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    fontSize: 12,
    color: '#9ca3af',
    flex: 1,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  navButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  backText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9ca3af',
  },
  nextButton: {
    backgroundColor: '#e3a7a1',
  },
  nextButtonDisabled: {
    backgroundColor: 'rgba(227, 167, 161, 0.3)',
  },
  nextText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f1720',
  },
});
