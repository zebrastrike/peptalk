import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  TextInput,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { PepTalkCharacter } from '../src/components/PepTalkCharacter';
import { GradientButton } from '../src/components/GradientButton';
import { useOnboardingStore } from '../src/store/useOnboardingStore';
import { useHealthProfileStore } from '../src/store/useHealthProfileStore';
// Auth and subscription are handled on the /auth screen
import { GlassCard } from '../src/components/GlassCard';
import { OptionCard } from '../src/components/OptionCard';
import { CATEGORIES } from '../src/constants/categories';
import { GOAL_OPTIONS } from '../src/constants/goals';
import { trackOnboardingComplete } from '../src/services/analyticsEvents';
import { AgeRange, Ethnicity, Gender, MaritalStatus, ReferralSource, ActivityLevel } from '../src/types';

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

const ACTIVITY_LEVELS: { value: ActivityLevel; label: string }[] = [
  { value: 'sedentary', label: 'Sedentary' },
  { value: 'light', label: 'Light' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'active', label: 'Active' },
  { value: 'very_active', label: 'Very Active' },
];

const HEALTH_CONDITIONS = [
  'Diabetes',
  'Hypertension',
  'Thyroid',
  'Heart Disease',
  'Autoimmune',
  'PCOS',
  'None',
];

const STEP_TITLES = [
  'Welcome',
  'Your Goals',
  'About You',
  'Topics of Interest',
  'Your Data',
  'Health Basics',
];

const STEP_HERO_IMAGES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  2: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  3: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
  4: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  5: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
};

export default function OnboardingScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  // Health basics state (Step 5)
  const [weightLbs, setWeightLbs] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  // Auth and subscription are now handled on the /auth screen before onboarding

  const {
    profile,
    setGender,
    setAgeRange,
    setEthnicity,
    setMaritalStatus,
    setReferralSource,
    toggleHealthGoal,
    toggleInterestCategory,
    setAcceptedSafety,
    setDataShareConsent,
    completeOnboarding,
  } = useOnboardingStore();

  const { setBodyMetrics, setLifestyle, addCondition, removeCondition } =
    useHealthProfileStore();

  const canContinue = useMemo(() => {
    if (step === 0) return profile.acceptedSafety;
    if (step === 1) return profile.healthGoals.length > 0;
    if (step === 2) return Boolean(profile.gender && profile.ageRange);
    return true;
  }, [profile.acceptedSafety, profile.healthGoals.length, profile.ageRange, profile.gender, step]);

  const saveHealthBasics = () => {
    const weight = parseFloat(weightLbs);
    const feet = parseInt(heightFeet, 10);
    const inches = parseInt(heightInches, 10);

    if (!isNaN(weight) && weight > 0) {
      setBodyMetrics({ weightLbs: weight });
    }
    if (!isNaN(feet) && feet > 0) {
      const totalInches = feet * 12 + (isNaN(inches) ? 0 : inches);
      setBodyMetrics({ heightInches: totalInches });
    }

    setLifestyle({ activityLevel });

    // Sync conditions: remove old, add new
    const noneSelected = selectedConditions.includes('None');
    if (!noneSelected) {
      selectedConditions.forEach((c) => addCondition(c));
    }
  };

  const toggleCondition = (condition: string) => {
    setSelectedConditions((prev) => {
      if (condition === 'None') {
        return prev.includes('None') ? [] : ['None'];
      }
      const without = prev.filter((c) => c !== 'None');
      if (without.includes(condition)) {
        return without.filter((c) => c !== condition);
      }
      return [...without, condition];
    });
  };

  const handleNext = async () => {
    if (!canContinue) {
      Alert.alert('Missing Info', 'Please complete the required fields to continue.');
      return;
    }

    // Step 5 (Health Basics) — final step: save and complete
    if (step === 5) {
      saveHealthBasics();
      completeOnboarding();
      trackOnboardingComplete(profile.interestCategories.length);
      router.replace('/(tabs)');
      return;
    }

    if (step < STEP_TITLES.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSkipHealthBasics = () => {
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
            Your personal health companion
          </Text>
        </View>

        <View style={styles.stepHeader}>
          <Text style={styles.stepTitle}>{STEP_TITLES[step]}</Text>
          <View style={styles.progressBarContainer}>
            <LinearGradient
              colors={['#3B82F6', '#06B6D4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[
                styles.progressBarFill,
                { width: `${((step + 1) / STEP_TITLES.length) * 100}%` },
              ]}
            />
          </View>
        </View>

        {/* Step 0: Welcome */}
        {step === 0 && (
          <View style={styles.section}>
            <View style={styles.characterCenter}>
              <PepTalkCharacter size={140} animated />
            </View>

            <GlassCard variant="glow" style={styles.welcomeCard}>
              <Text style={styles.welcomeTitle}>Hey there!</Text>
              <Text style={styles.welcomeText}>
                I'm Pepe — your friendly health companion for peptide
                education, tracking, and personalized insights. Let's get you
                set up!
              </Text>
            </GlassCard>

            <View style={styles.trustRow}>
              <View style={styles.trustBadge}>
                <Ionicons name="lock-closed" size={20} color="#3B82F6" />
                <Text style={styles.trustText}>Encrypted data</Text>
              </View>
              <View style={styles.trustBadge}>
                <Ionicons name="cart-outline" size={20} color="#3B82F6" />
                <Text style={styles.trustText}>We never sell</Text>
              </View>
              <View style={styles.trustBadge}>
                <Ionicons name="trash-outline" size={20} color="#3B82F6" />
                <Text style={styles.trustText}>Delete anytime</Text>
              </View>
            </View>

            <Text style={styles.softDisclaimer}>
              PepTalk is an educational tool only — it does not provide medical
              advice, diagnose conditions, or recommend treatments. Always
              consult a licensed healthcare provider for medical decisions.
            </Text>

            <GlassCard style={styles.card}>
              <View style={styles.toggleRow}>
                <View style={styles.toggleText}>
                  <Text style={styles.toggleTitle}>I understand and agree</Text>
                  <Text style={styles.toggleSubtitle}>
                    I acknowledge PepTalk is for educational purposes only and
                    does not provide medical advice. I accept full responsibility
                    for my health decisions.
                  </Text>
                </View>
                <Switch
                  value={profile.acceptedSafety}
                  onValueChange={setAcceptedSafety}
                  trackColor={{
                    false: 'rgba(255,255,255,0.12)',
                    true: 'rgba(59, 130, 246, 0.4)',
                  }}
                  thumbColor={profile.acceptedSafety ? '#3B82F6' : '#9ca3af'}
                />
              </View>
            </GlassCard>
          </View>
        )}

        {/* Step 1: Health Goals (NEW) */}
        {step === 1 && (
          <View style={styles.section}>
            <Image
              source={{ uri: STEP_HERO_IMAGES[1] }}
              style={styles.stepHeroImage}
              resizeMode="cover"
            />
            <GlassCard style={styles.card}>
              <Text style={styles.cardTitle}>What are your health objectives?</Text>
              <Text style={styles.cardText}>
                Select the goals that matter most to you. This helps PepTalk
                show you relevant peptide research and personalized insights.
              </Text>
              <View style={styles.goalGrid}>
                {GOAL_OPTIONS.map((goal) => {
                  const selected = profile.healthGoals.includes(goal.value);
                  return (
                    <TouchableOpacity
                      key={goal.value}
                      style={[
                        styles.goalChip,
                        selected && { backgroundColor: goal.color + '25', borderColor: goal.color + '80' },
                      ]}
                      onPress={() => toggleHealthGoal(goal.value)}
                      activeOpacity={0.7}
                    >
                      <Ionicons
                        name={goal.icon as any}
                        size={18}
                        color={selected ? goal.color : '#9ca3af'}
                      />
                      <Text
                        style={[
                          styles.goalChipText,
                          selected && { color: goal.color },
                        ]}
                      >
                        {goal.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              {profile.healthGoals.length > 0 && (
                <Text style={styles.selectedCount}>
                  {profile.healthGoals.length} goal{profile.healthGoals.length !== 1 ? 's' : ''} selected
                </Text>
              )}
            </GlassCard>
          </View>
        )}

        {/* Step 2: Demographics */}
        {step === 2 && (
          <View style={styles.section}>
            <Image
              source={{ uri: STEP_HERO_IMAGES[2] }}
              style={styles.stepHeroImage}
              resizeMode="cover"
            />
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

        {/* Step 3: Topics of Interest */}
        {step === 3 && (
          <View style={styles.section}>
            <Image
              source={{ uri: STEP_HERO_IMAGES[3] }}
              style={styles.stepHeroImage}
              resizeMode="cover"
            />
            <GlassCard style={styles.card}>
              <Text style={styles.cardTitle}>Topics of Interest</Text>
              <Text style={styles.cardText}>
                Pick the topics you'd like to explore. You can always update
                these later in your profile.
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

        {/* Step 4: Your Data */}
        {step === 4 && (
          <View style={styles.section}>
            <Image
              source={{ uri: STEP_HERO_IMAGES[4] }}
              style={styles.stepHeroImage}
              resizeMode="cover"
            />
            <GlassCard style={styles.card}>
              <Text style={styles.cardTitle}>Your Data, Your Control</Text>
              <Text style={styles.cardText}>
                All your health data is encrypted and stored locally on your device.
                PepTalk does not transmit, sell, or share your personal health
                information with any third party unless you explicitly opt in.
                You can delete all your data at any time from Profile settings.
              </Text>

              <View style={styles.toggleRow}>
                <View style={styles.toggleText}>
                  <Text style={styles.toggleTitle}>Anonymous analytics</Text>
                  <Text style={styles.toggleSubtitle}>
                    Optionally share anonymous usage patterns (which features
                    are used, screen navigation) to help improve PepTalk. This
                    data cannot identify you and never includes health info.
                  </Text>
                </View>
                <Switch
                  value={profile.dataShareConsent}
                  onValueChange={setDataShareConsent}
                  trackColor={{
                    false: 'rgba(255,255,255,0.12)',
                    true: 'rgba(59, 130, 246, 0.4)',
                  }}
                  thumbColor={profile.dataShareConsent ? '#3B82F6' : '#9ca3af'}
                />
              </View>
            </GlassCard>

            <GlassCard style={styles.card}>
              <View style={styles.infoRow}>
                <Ionicons name="lock-closed-outline" size={18} color="#3B82F6" />
                <Text style={styles.infoText}>
                  Your data stays on your device unless you explicitly opt in
                  to cloud features. You are always in control.
                </Text>
              </View>
            </GlassCard>

            <GlassCard style={styles.card}>
              <View style={styles.infoRow}>
                <Ionicons name="shield-checkmark-outline" size={18} color="#3B82F6" />
                <Text style={styles.infoText}>
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy. PepTalk is for educational purposes only — it does not
                  provide medical advice. You accept responsibility for your own
                  health decisions.
                </Text>
              </View>
            </GlassCard>

            <GlassCard style={styles.card}>
              <View style={styles.infoRow}>
                <Ionicons name="trash-outline" size={18} color="#6b7280" />
                <Text style={styles.infoText}>
                  You can delete all your data at any time from your Profile.
                  We will never sell or share your personal health information.
                </Text>
              </View>
            </GlassCard>
          </View>
        )}

        {/* Step 5: Health Basics (optional) */}
        {step === 5 && (
          <View style={styles.section}>
            <Image
              source={{ uri: STEP_HERO_IMAGES[5] }}
              style={styles.stepHeroImage}
              resizeMode="cover"
            />
            <GlassCard variant="glow" style={styles.card}>
              <Text style={styles.cardTitle}>Tell us more about you</Text>
              <Text style={styles.cardText}>
                This makes your dashboard feel personalized from day one. All
                fields are optional.
              </Text>

              <Text style={styles.groupTitle}>Weight (lbs)</Text>
              <TextInput
                style={styles.healthInput}
                value={weightLbs}
                onChangeText={setWeightLbs}
                placeholder="e.g. 175"
                placeholderTextColor="#6b7280"
                keyboardType="numeric"
              />

              <Text style={styles.groupTitle}>Height</Text>
              <View style={styles.heightRow}>
                <View style={styles.heightField}>
                  <TextInput
                    style={styles.healthInput}
                    value={heightFeet}
                    onChangeText={setHeightFeet}
                    placeholder="Feet"
                    placeholderTextColor="#6b7280"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.heightField}>
                  <TextInput
                    style={styles.healthInput}
                    value={heightInches}
                    onChangeText={setHeightInches}
                    placeholder="Inches"
                    placeholderTextColor="#6b7280"
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <Text style={styles.groupTitle}>Activity Level</Text>
              <View style={styles.optionStack}>
                {ACTIVITY_LEVELS.map((level) => (
                  <OptionCard
                    key={level.value}
                    label={level.label}
                    selected={activityLevel === level.value}
                    onPress={() => setActivityLevel(level.value)}
                  />
                ))}
              </View>

              <Text style={styles.groupTitle}>Health Conditions</Text>
              <Text style={styles.groupSubtext}>
                Select any that apply. This helps personalize safety insights.
              </Text>
              <View style={styles.goalGrid}>
                {HEALTH_CONDITIONS.map((condition) => {
                  const selected = selectedConditions.includes(condition);
                  return (
                    <TouchableOpacity
                      key={condition}
                      style={[
                        styles.goalChip,
                        selected && {
                          backgroundColor: 'rgba(59, 130, 246, 0.15)',
                          borderColor: 'rgba(59, 130, 246, 0.5)',
                        },
                      ]}
                      onPress={() => toggleCondition(condition)}
                      activeOpacity={0.7}
                    >
                      <Ionicons
                        name={
                          condition === 'None'
                            ? 'checkmark-circle-outline'
                            : 'medkit-outline'
                        }
                        size={18}
                        color={selected ? '#3B82F6' : '#9ca3af'}
                      />
                      <Text
                        style={[
                          styles.goalChipText,
                          selected && { color: '#3B82F6' },
                        ]}
                      >
                        {condition}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </GlassCard>

            <TouchableOpacity
              onPress={handleSkipHealthBasics}
              style={styles.skipButton}
              activeOpacity={0.7}
            >
              <Text style={styles.skipText}>Skip for now</Text>
            </TouchableOpacity>
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
          <GradientButton
            label={step === 5 ? "Let's Go!" : 'Next'}
            onPress={handleNext}
            disabled={!canContinue}
            style={styles.navButton}
          />
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
  progressBarContainer: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 4,
    overflow: 'hidden' as const,
  },
  progressBarFill: {
    height: '100%' as any,
    borderRadius: 2,
  },
  section: {
    marginTop: 10,
  },
  stepHeroImage: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    marginBottom: 20,
    opacity: 0.85,
  },
  card: {
    marginBottom: 12,
  },
  characterCenter: {
    alignItems: 'center' as const,
    marginVertical: 24,
  },
  welcomeCard: {
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '800' as const,
    color: '#f7f2ec',
    marginBottom: 8,
    textAlign: 'center' as const,
  },
  welcomeText: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 22,
    textAlign: 'center' as const,
  },
  trustRow: {
    flexDirection: 'row' as const,
    justifyContent: 'space-around' as const,
    marginVertical: 16,
  },
  trustBadge: {
    alignItems: 'center' as const,
    gap: 4,
  },
  trustText: {
    fontSize: 11,
    color: '#9ca3af',
    fontWeight: '600' as const,
  },
  softDisclaimer: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center' as const,
    lineHeight: 18,
    marginBottom: 16,
    fontStyle: 'italic' as const,
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
  goalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  goalChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
  },
  goalChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#9ca3af',
  },
  selectedCount: {
    fontSize: 12,
    color: '#e3a7a1',
    fontWeight: '600',
    marginTop: 12,
    textAlign: 'center',
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
  healthInput: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    color: '#f7f2ec',
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  heightRow: {
    flexDirection: 'row' as const,
    gap: 10,
  },
  heightField: {
    flex: 1,
  },
  skipButton: {
    alignItems: 'center' as const,
    paddingVertical: 14,
    marginTop: 4,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: '#6b7280',
    textDecorationLine: 'underline' as const,
  },

});
