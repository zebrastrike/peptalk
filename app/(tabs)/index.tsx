import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Animated as RNAnimated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { PepTalkCharacter } from '../../src/components/PepTalkCharacter';
import { GlassCard } from '../../src/components/GlassCard';
import { GradientButton } from '../../src/components/GradientButton';
import { AnimatedPress } from '../../src/components/AnimatedPress';
import { ProgressRing } from '../../src/components/ProgressRing';
import { TrendCard } from '../../src/components/TrendCard';
import { Sparkline } from '../../src/components/Sparkline';
import { SearchBar } from '../../src/components/SearchBar';
import { CategoryGrid } from '../../src/components/CategoryGrid';
import { PeptideCard } from '../../src/components/PeptideCard';
import { Disclaimer } from '../../src/components/Disclaimer';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../src/constants/theme';
import {
  isHealthDataAvailable,
  getHealthMetrics,
  getHealthSourceLabel,
  HealthMetrics,
} from '../../src/services/healthDataService';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { useHealthProfileStore } from '../../src/store/useHealthProfileStore';
import { useCheckinStore } from '../../src/store/useCheckinStore';
import { useDoseLogStore } from '../../src/store/useDoseLogStore';
import { useNotificationStore } from '../../src/store/useNotificationStore';
import { useAchievementStore } from '../../src/store/useAchievementStore';
import { useWorkoutStore } from '../../src/store/useWorkoutStore';
import { useMealStore } from '../../src/store/useMealStore';
import { useStackStore } from '../../src/store/useStackStore';
import { usePlanStore } from '../../src/store/usePlanStore';
import { getSegmentByProfile } from '../../src/constants/segments';
import { getEthnicityProfile } from '../../src/constants/ethnicityProfiles';
import { PEPTIDES } from '../../src/data/peptides';
import { PeptideCategory } from '../../src/types';
import { trackPeptideSearch } from '../../src/services/analyticsEvents';
import { getPeptideById } from '../../src/data/peptides';

// ─── Constants ──────────────────────────────────────────────────────────────

const HEALTH_TIPS = [
  'Consistency beats intensity. Small daily habits compound into transformative results.',
  'Hydration amplifies peptide absorption. Aim for half your body weight in ounces daily.',
  'Sleep is your most powerful recovery tool. Prioritize 7-9 hours tonight.',
  'Track your journey. What gets measured gets improved.',
  'Your body is rebuilding itself right now. Give it the nutrients it needs.',
  'Stress management is not optional -- it is foundational to peptide efficacy.',
  'Movement is medicine. Even a 10-minute walk improves bioavailability.',
  'Listen to your body. Subtle signals today become clear patterns over time.',
  'Recovery days are growth days. Rest is productive.',
  'Every check-in is a data point in your transformation story.',
];

const QUICK_ACTIONS = [
  { id: 'checkin', icon: 'heart-outline' as const, label: 'Check In', route: '/(tabs)/check-in', colors: ['#e3a7a1', '#c98a84'] as [string, string] },
  { id: 'dose', icon: 'flask-outline' as const, label: 'Log Dose', route: '/(tabs)/calendar', colors: ['#14b8a6', '#0d9488'] as [string, string] },
  { id: 'workout', icon: 'barbell-outline' as const, label: 'Workout', route: '/workouts', colors: ['#3b82f6', '#2563eb'] as [string, string] },
  { id: 'nutrition', icon: 'nutrition-outline' as const, label: 'Nutrition', route: '/nutrition', colors: ['#f59e0b', '#d97706'] as [string, string] },
  { id: 'peptalk', icon: 'chatbubble-outline' as const, label: 'Ask Pepe', route: '/(tabs)/peptalk', colors: ['#8b5cf6', '#7c3aed'] as [string, string] },
  { id: 'journal', icon: 'book-outline' as const, label: 'Journal', route: '/journal', colors: ['#06b6d4', '#0891b2'] as [string, string] },
];

// ─── Greeting Logic ─────────────────────────────────────────────────────────

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

// ─── Date Helpers ────────────────────────────────────────────────────────────

function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function formatTime(timeStr: string): string {
  const [h, m] = timeStr.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hr = h % 12 || 12;
  return `${hr}:${String(m).padStart(2, '0')} ${ampm}`;
}

// ─── Timeline Event Type ─────────────────────────────────────────────────────

interface TimelineEvent {
  id: string;
  time: string;
  sortKey: string;
  title: string;
  subtitle?: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  type: 'dose' | 'checkin' | 'workout' | 'meal';
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function DashboardScreen() {
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category?: string }>();
  const activeCategory =
    typeof category === 'string' ? category : category?.[0];

  // ── Animated values (RN Animated API) ─────────────────────────────────────
  const heroOpacity = useRef(new RNAnimated.Value(0)).current;
  const heroTranslateY = useRef(new RNAnimated.Value(20)).current;
  const pulseAnim = useRef(new RNAnimated.Value(1)).current;

  useEffect(() => {
    RNAnimated.parallel([
      RNAnimated.timing(heroOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      RNAnimated.timing(heroTranslateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Subtle pulse for the streak fire icon
    RNAnimated.loop(
      RNAnimated.sequence([
        RNAnimated.timing(pulseAnim, {
          toValue: 1.15,
          duration: 1200,
          useNativeDriver: true,
        }),
        RNAnimated.timing(pulseAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  // ── State ─────────────────────────────────────────────────────────────────
  const [showLibrary, setShowLibrary] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatText, setChatText] = useState('');

  // ── Stores ────────────────────────────────────────────────────────────────
  const profile = useOnboardingStore((s) => s.profile);
  const healthProfile = useHealthProfileStore((s) => s.profile);
  const entries = useCheckinStore((s) => s.entries);
  const protocols = useDoseLogStore((s) => s.protocols);
  const doses = useDoseLogStore((s) => s.doses);
  const notifPrefs = useNotificationStore((s) => s.preferences);
  const { getLevel, checkAndAward, xp, earnedBadgeIds } = useAchievementStore();
  const workoutLogs = useWorkoutStore((s) => s.logs);
  const activeProgram = useWorkoutStore((s) => s.activeProgram);
  const meals = useMealStore((s) => s.meals);
  const getDailyProgress = useMealStore((s) => s.getDailyProgress);
  const getWater = useMealStore((s) => s.getWater);
  const mealTargets = useMealStore((s) => s.targets);
  const stacks = useStackStore((s) => s.savedStacks);
  const activePlan = usePlanStore((s) => s.activePlan);
  const getTodayItems = usePlanStore((s) => s.getTodayItems);
  const getWeeklyProgress = usePlanStore((s) => s.getWeeklyProgress);
  const completeItem = usePlanStore((s) => s.completeItem);
  const uncompleteItem = usePlanStore((s) => s.uncompleteItem);

  // ── Derived ───────────────────────────────────────────────────────────────

  const segment = useMemo(
    () => getSegmentByProfile(profile.gender, profile.ageRange),
    [profile.gender, profile.ageRange],
  );

  const ethnicityProfile = useMemo(
    () => getEthnicityProfile(profile.ethnicity),
    [profile.ethnicity],
  );

  const hasDemographics = Boolean(profile.gender && profile.ageRange);
  const accentColor = ethnicityProfile?.paletteAccent ?? segment.palette.primary;

  const todayCheckin = useMemo(
    () => entries.find((e) => e.date === todayKey()) ?? null,
    [entries],
  );

  const streak = useMemo(() => {
    const toDateKey = (date: Date) => {
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    if (entries.length === 0) return 0;
    const dates = new Set(entries.map((entry) => entry.date));
    let count = 0;
    const cursor = new Date();
    while (dates.has(toDateKey(cursor))) {
      count += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }, [entries]);

  const activeProtocolCount = useMemo(
    () => protocols.filter((p) => p.isActive).length,
    [protocols],
  );

  const level = useMemo(() => getLevel(), [xp]);

  const todayDate = todayKey();
  const dailyMacros = useMemo(
    () => getDailyProgress(todayDate),
    [getDailyProgress, todayDate, meals],
  );
  const todayWater = useMemo(
    () => getWater(todayDate),
    [getWater, todayDate],
  );
  const waterPercent = Math.min(
    100,
    Math.round((todayWater / (mealTargets.waterOz ?? 100)) * 100),
  );

  // ── Daily health tip (rotates by day) ─────────────────────────────────────

  const dailyTip = useMemo(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24),
    );
    return HEALTH_TIPS[dayOfYear % HEALTH_TIPS.length];
  }, []);

  // ── Next milestone ────────────────────────────────────────────────────────

  const nextMilestone = useMemo(() => {
    const milestones = [7, 14, 30, 60, 90, 180, 365];
    const next = milestones.find((m) => m > streak);
    if (!next) return null;
    return { target: next, daysLeft: next - streak };
  }, [streak]);

  // ── 7-day trend data ──────────────────────────────────────────────────────

  const trendData = useMemo(() => {
    const last7 = entries
      .filter((e) => {
        const d = new Date(e.date);
        const now = new Date();
        const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
        return diff <= 7;
      })
      .sort((a, b) => (a.date < b.date ? -1 : 1));

    return {
      mood: last7.map((e) => e.mood),
      energy: last7.map((e) => e.energy),
      sleep: last7.map((e) => e.sleepQuality),
    };
  }, [entries]);

  // ── Today's Timeline ──────────────────────────────────────────────────────

  const timelineEvents = useMemo(() => {
    const events: TimelineEvent[] = [];
    const today = todayKey();

    // Doses logged today
    const todayDoses = doses.filter((d) => d.date === today);
    todayDoses.forEach((dose) => {
      const peptide = getPeptideById(dose.peptideId);
      events.push({
        id: dose.id,
        time: dose.time ? formatTime(dose.time) : 'Logged',
        sortKey: dose.time || '00:00',
        title: peptide?.name ?? dose.peptideId,
        subtitle: `${dose.amount} ${dose.unit} - ${dose.route}`,
        icon: 'flask-outline',
        color: '#14b8a6',
        type: 'dose',
      });
    });

    // Today's check-in
    if (todayCheckin) {
      events.push({
        id: 'checkin-today',
        time: todayCheckin.createdAt
          ? formatTime(
              `${new Date(todayCheckin.createdAt).getHours()}:${new Date(todayCheckin.createdAt).getMinutes()}`,
            )
          : 'Today',
        sortKey: todayCheckin.createdAt
          ? `${String(new Date(todayCheckin.createdAt).getHours()).padStart(2, '0')}:${String(new Date(todayCheckin.createdAt).getMinutes()).padStart(2, '0')}`
          : '08:00',
        title: 'Daily Check-in',
        subtitle: `Mood ${todayCheckin.mood}/5 | Energy ${todayCheckin.energy}/5`,
        icon: 'heart-outline',
        color: '#e3a7a1',
        type: 'checkin',
      });
    }

    // Today's workouts
    workoutLogs
      .filter((w) => w.date === today)
      .forEach((workout) => {
        const startDate = workout.startedAt ? new Date(workout.startedAt) : null;
        events.push({
          id: workout.id,
          time: startDate
            ? formatTime(`${startDate.getHours()}:${startDate.getMinutes()}`)
            : 'Today',
          sortKey: startDate
            ? `${String(startDate.getHours()).padStart(2, '0')}:${String(startDate.getMinutes()).padStart(2, '0')}`
            : '06:00',
          title: 'Workout Complete',
          subtitle: `${workout.sets?.length ?? 0} sets | ${workout.durationMinutes ?? 0} min`,
          icon: 'barbell-outline',
          color: '#3b82f6',
          type: 'workout',
        });
      });

    // Today's meals
    meals
      .filter((m) => m.date === today)
      .forEach((meal) => {
        const mealDate = meal.timestamp ? new Date(meal.timestamp) : null;
        const mealTime = mealDate
          ? `${mealDate.getHours()}:${mealDate.getMinutes()}`
          : null;
        const totalCal =
          meal.foods.reduce((sum, f) => sum + f.calories, 0) +
          (meal.quickLog?.calories ?? 0);
        events.push({
          id: meal.id,
          time: mealTime ? formatTime(mealTime) : 'Today',
          sortKey: mealTime
            ? `${String(mealDate!.getHours()).padStart(2, '0')}:${String(mealDate!.getMinutes()).padStart(2, '0')}`
            : '12:00',
          title: meal.mealType.charAt(0).toUpperCase() + meal.mealType.slice(1),
          subtitle: `${totalCal} cal`,
          icon: 'nutrition-outline',
          color: '#f59e0b',
          type: 'meal',
        });
      });

    return events.sort((a, b) => (a.sortKey < b.sortKey ? -1 : 1));
  }, [doses, todayCheckin, workoutLogs, meals]);

  // ── Pepe Says (contextual suggestion) ─────────────────────────────────────

  const pepeSuggestion = useMemo(() => {
    const today = todayKey();
    const hasCheckin = entries.some((e) => e.date === today);
    const hasWorkout = workoutLogs.some((w) => w.date === today);
    const hasMeal = meals.some((m) => m.date === today);

    if (!hasCheckin) {
      return {
        message: 'Hey! Start your day with a quick check-in',
        route: '/(tabs)/check-in' as const,
        actionLabel: 'Check In',
        icon: 'heart-outline' as const,
      };
    }
    if (!hasWorkout) {
      return {
        message: "Ready to move? Let's get a workout in",
        route: '/workouts' as const,
        actionLabel: 'Workout',
        icon: 'barbell-outline' as const,
      };
    }
    if (!hasMeal) {
      return {
        message: "Don't forget to track your meals",
        route: '/nutrition' as const,
        actionLabel: 'Log Meal',
        icon: 'nutrition-outline' as const,
      };
    }
    return {
      message: 'Amazing day! You are crushing it',
      route: '/(tabs)/peptalk' as const,
      actionLabel: 'Ask Pepe',
      icon: 'chatbubble-outline' as const,
    };
  }, [entries, workoutLogs, meals]);

  // ── Today's Plan ────────────────────────────────────────────────────────

  const todayPlanItems = useMemo(() => getTodayItems(), [activePlan]);
  const weeklyProgress = useMemo(() => getWeeklyProgress(), [activePlan]);

  // ── Health Metrics ────────────────────────────────────────────────────────

  const [healthMetrics, setHealthMetrics] = useState<HealthMetrics | null>(null);
  const [healthAvailable, setHealthAvailable] = useState(false);

  useEffect(() => {
    const available = isHealthDataAvailable();
    setHealthAvailable(available);
    if (available) {
      getHealthMetrics()
        .then(setHealthMetrics)
        .catch(() => {});
    }
  }, []);

  // ── Achievement Checker ───────────────────────────────────────────────────

  useEffect(() => {
    checkAndAward({
      checkinCount: entries.length,
      streak,
      workoutCount: workoutLogs.length,
      mealCount: meals.length,
      stackCount: stacks.filter((s: any) => !s.isCurated).length,
      waterGoalHit: waterPercent >= 100,
      profileComplete: healthProfile.setupComplete,
      programComplete:
        activeProgram !== null &&
        activeProgram.completedDays.length >= 40,
    });
  }, [
    entries.length,
    streak,
    workoutLogs.length,
    meals.length,
    stacks,
    waterPercent,
    healthProfile.setupComplete,
    activeProgram,
    checkAndAward,
  ]);

  // ── Setup Checklist ───────────────────────────────────────────────────────

  const setupItems = useMemo(
    () => [
      {
        id: 'profile',
        label: 'Complete health profile',
        complete: healthProfile.setupComplete,
        route: '/health-report' as const,
      },
      {
        id: 'checkin',
        label: 'First check-in',
        complete: entries.length > 0,
        route: '/(tabs)/check-in' as const,
      },
      {
        id: 'reminders',
        label: 'Set up reminders',
        complete: notifPrefs.enabled,
        route: '/(tabs)/profile' as const,
      },
    ],
    [healthProfile.setupComplete, entries.length, notifPrefs.enabled],
  );

  const allSetupComplete = setupItems.every((item) => item.complete);

  // ── Prompt Chips ──────────────────────────────────────────────────────────

  const promptChips = useMemo(() => {
    const focusAreas = segment.focusAreas.slice(0, 3);
    return focusAreas.map((area) => `Tell me about ${area.toLowerCase()}`);
  }, [segment.focusAreas]);

  // ── Peptide Library ───────────────────────────────────────────────────────

  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const basePeptides = useMemo(() => {
    if (!activeCategory) return PEPTIDES;
    return PEPTIDES.filter((p) =>
      p.categories.includes(activeCategory as PeptideCategory),
    );
  }, [activeCategory]);

  const filteredPeptides = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return basePeptides;
    return basePeptides.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.abbreviation && p.abbreviation.toLowerCase().includes(q)) ||
        p.categories.some((c) => c.toLowerCase().includes(q)),
    );
  }, [basePeptides, searchQuery]);

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      trackPeptideSearch(searchQuery, filteredPeptides.length);
    }, 500);
    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
    };
  }, [filteredPeptides.length, searchQuery]);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleSendChat = () => {
    const text = chatText.trim();
    if (!text) return;
    setChatText('');
    router.push({
      pathname: '/(tabs)/peptalk',
      params: { message: text },
    });
  };

  const handlePromptChip = (prompt: string) => {
    router.push({
      pathname: '/(tabs)/peptalk',
      params: { message: prompt },
    });
  };

  // ── Main Render ───────────────────────────────────────────────────────────

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        {/* ══════════════════════════════════════════════════════════════════
            1. HERO SECTION - Gradient card with greeting, streak, tip
        ══════════════════════════════════════════════════════════════════ */}
        <RNAnimated.View
          style={[
            styles.heroSection,
            {
              opacity: heroOpacity,
              transform: [{ translateY: heroTranslateY }],
            },
          ]}
        >
          <LinearGradient
            colors={[
              segment.palette.primary + 'CC',
              segment.palette.accent + '88',
              Colors.darkBg,
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroGradient}
          >
            {/* Top row: greeting + character */}
            <View style={styles.heroTopRow}>
              <View style={styles.heroTextBlock}>
                <Text style={styles.heroGreeting}>
                  {getGreeting()}
                </Text>
                <Text style={styles.heroTagline}>
                  {hasDemographics
                    ? segment.heroSubtitle
                    : 'Your peptide research journey starts here.'}
                </Text>
              </View>
              <View style={styles.heroCharacterWrap}>
                <PepTalkCharacter
                  size={64}
                  variant="full"
                  animated
                  glowColor={segment.palette.primary}
                />
              </View>
            </View>

            {/* Streak badge + milestone */}
            <View style={styles.heroStreakRow}>
              <RNAnimated.View
                style={[
                  styles.streakBadge,
                  { transform: [{ scale: pulseAnim }] },
                ]}
              >
                <Ionicons name="flame" size={20} color="#f59e0b" />
              </RNAnimated.View>
              <View style={styles.streakInfo}>
                <Text style={styles.streakNumber}>
                  {streak}
                  <Text style={styles.streakUnit}> day streak</Text>
                </Text>
                {nextMilestone && (
                  <Text style={styles.streakMilestone}>
                    {nextMilestone.daysLeft} days to {nextMilestone.target}-day milestone
                  </Text>
                )}
              </View>
              {/* XP Level mini badge */}
              <View style={styles.heroLevelBadge}>
                <LinearGradient
                  colors={[segment.palette.primary, segment.palette.accent]}
                  style={styles.heroLevelCircle}
                >
                  <Text style={styles.heroLevelText}>{level.level}</Text>
                </LinearGradient>
                <Text style={styles.heroLevelLabel}>{level.title}</Text>
              </View>
            </View>

            {/* Daily health tip */}
            <View style={styles.heroTipContainer}>
              <Ionicons
                name="bulb-outline"
                size={14}
                color="rgba(255,255,255,0.6)"
                style={{ marginTop: 1 }}
              />
              <Text style={styles.heroTipText}>{dailyTip}</Text>
            </View>
          </LinearGradient>
        </RNAnimated.View>

        {/* ══════════════════════════════════════════════════════════════════
            1.5. PEPE SAYS - Contextual suggestion card
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View
          entering={FadeInDown.delay(80).duration(500)}
          style={styles.section}
        >
          <AnimatedPress
            onPress={() => router.push(pepeSuggestion.route as any)}
            scaleTo={0.97}
          >
            <GlassCard
              variant="glow"
              glowColor={accentColor}
              style={styles.pepeSaysCard}
            >
              <View style={styles.pepeSaysRow}>
                <View style={styles.pepeSaysCharacter}>
                  <PepTalkCharacter size={40} animated />
                </View>
                <View style={styles.pepeSaysContent}>
                  <Text style={styles.pepeSaysMessage}>
                    {pepeSuggestion.message}
                  </Text>
                </View>
                <View
                  style={[
                    styles.pepeSaysAction,
                    { backgroundColor: accentColor + '25' },
                  ]}
                >
                  <Ionicons
                    name={pepeSuggestion.icon}
                    size={16}
                    color={accentColor}
                  />
                  <Text
                    style={[styles.pepeSaysActionText, { color: accentColor }]}
                  >
                    {pepeSuggestion.actionLabel}
                  </Text>
                </View>
              </View>
            </GlassCard>
          </AnimatedPress>
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            1.6. TODAY'S PLAN - Scheduled items from active health plan
        ══════════════════════════════════════════════════════════════════ */}
        {activePlan && todayPlanItems.length > 0 && (
          <Animated.View
            entering={FadeInDown.delay(90).duration(500)}
            style={styles.section}
          >
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Today's Plan</Text>
              <Text style={styles.sectionBadge}>
                {weeklyProgress}% this week
              </Text>
            </View>

            <GlassCard>
              {todayPlanItems.map((item) => {
                const typeRoute: Record<string, string> = {
                  workout: '/workouts',
                  meal: '/nutrition',
                  checkin: '/(tabs)/check-in',
                  protocol: '/(tabs)/calendar',
                  custom: '/(tabs)/peptalk',
                };
                const typeIcon: Record<
                  string,
                  keyof typeof Ionicons.glyphMap
                > = {
                  workout: 'barbell-outline',
                  meal: 'nutrition-outline',
                  checkin: 'heart-outline',
                  protocol: 'flask-outline',
                  custom: 'star-outline',
                };
                const typeColor: Record<string, string> = {
                  workout: '#3b82f6',
                  meal: '#f59e0b',
                  checkin: '#e3a7a1',
                  protocol: '#14b8a6',
                  custom: '#8b5cf6',
                };

                return (
                  <View key={item.id} style={styles.planItemRow}>
                    <TouchableOpacity
                      style={styles.planCheckbox}
                      onPress={() =>
                        item.completed
                          ? uncompleteItem(item.id)
                          : completeItem(item.id)
                      }
                      activeOpacity={0.7}
                    >
                      <Ionicons
                        name={
                          item.completed
                            ? 'checkmark-circle'
                            : 'ellipse-outline'
                        }
                        size={22}
                        color={
                          item.completed
                            ? Colors.success
                            : Colors.darkTextSecondary
                        }
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.planItemContent}
                      onPress={() =>
                        router.push(
                          (typeRoute[item.type] ?? '/(tabs)/peptalk') as any,
                        )
                      }
                      activeOpacity={0.7}
                    >
                      <Ionicons
                        name={typeIcon[item.type] ?? 'star-outline'}
                        size={16}
                        color={typeColor[item.type] ?? '#8b5cf6'}
                      />
                      <View style={styles.planItemText}>
                        <Text
                          style={[
                            styles.planItemTitle,
                            item.completed && styles.planItemTitleDone,
                          ]}
                        >
                          {item.title}
                        </Text>
                        <Text style={styles.planItemTime}>{item.time}</Text>
                      </View>
                      <Ionicons
                        name="chevron-forward"
                        size={14}
                        color={Colors.darkTextSecondary}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}

              {/* Weekly progress bar */}
              <View style={styles.planProgressWrap}>
                <View style={styles.planProgressTrack}>
                  <LinearGradient
                    colors={[accentColor, segment.palette.accent]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[
                      styles.planProgressFill,
                      {
                        width: `${Math.min(weeklyProgress, 100)}%` as any,
                      },
                    ]}
                  />
                </View>
              </View>
            </GlassCard>
          </Animated.View>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            2. QUICK STATS ROW - 4 key metrics at a glance
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View
          entering={FadeInDown.delay(100).duration(500)}
          style={styles.section}
        >
          <View style={styles.statsRow}>
            {/* Streak */}
            <View style={styles.statCard}>
              <LinearGradient
                colors={['rgba(245,158,11,0.15)', 'rgba(245,158,11,0.05)']}
                style={styles.statCardInner}
              >
                <Ionicons name="flame" size={20} color="#f59e0b" />
                <Text style={styles.statValue}>{streak}</Text>
                <Text style={styles.statLabel}>Streak</Text>
              </LinearGradient>
            </View>

            {/* Active Protocols */}
            <View style={styles.statCard}>
              <LinearGradient
                colors={['rgba(20,184,166,0.15)', 'rgba(20,184,166,0.05)']}
                style={styles.statCardInner}
              >
                <Ionicons name="flask" size={20} color="#14b8a6" />
                <Text style={styles.statValue}>{activeProtocolCount}</Text>
                <Text style={styles.statLabel}>Protocols</Text>
              </LinearGradient>
            </View>

            {/* Today's Mood */}
            <View style={styles.statCard}>
              <LinearGradient
                colors={['rgba(227,167,161,0.15)', 'rgba(227,167,161,0.05)']}
                style={styles.statCardInner}
              >
                <Ionicons
                  name={todayCheckin ? 'happy' : 'happy-outline'}
                  size={20}
                  color="#e3a7a1"
                />
                <Text style={styles.statValue}>
                  {todayCheckin ? `${todayCheckin.mood}/5` : '--'}
                </Text>
                <Text style={styles.statLabel}>Mood</Text>
              </LinearGradient>
            </View>

            {/* Next Milestone */}
            <View style={styles.statCard}>
              <LinearGradient
                colors={['rgba(59,130,246,0.15)', 'rgba(59,130,246,0.05)']}
                style={styles.statCardInner}
              >
                <Ionicons name="trophy" size={20} color="#3b82f6" />
                <Text style={styles.statValue}>
                  {nextMilestone ? `${nextMilestone.daysLeft}d` : '--'}
                </Text>
                <Text style={styles.statLabel}>Milestone</Text>
              </LinearGradient>
            </View>
          </View>
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            3. QUICK ACTIONS - Horizontal scroll of gradient action buttons
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View entering={FadeInDown.delay(150).duration(500)}>
          <Text style={[styles.sectionTitle, { paddingHorizontal: Spacing.lg }]}>
            Quick Actions
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickActionsContainer}
          >
            {QUICK_ACTIONS.map((action, index) => (
              <Animated.View
                key={action.id}
                entering={FadeInRight.delay(150 + index * 60).duration(400)}
              >
                <AnimatedPress
                  onPress={() => router.push(action.route as any)}
                  scaleTo={0.93}
                  style={styles.quickActionButton}
                >
                  <LinearGradient
                    colors={action.colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.quickActionGradient}
                  >
                    <View style={styles.quickActionIconWrap}>
                      <Ionicons name={action.icon} size={22} color="#fff" />
                    </View>
                    <Text style={styles.quickActionLabel}>{action.label}</Text>
                  </LinearGradient>
                </AnimatedPress>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            4. TODAY'S PROGRESS RINGS
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View
          entering={FadeInDown.delay(200).duration(500)}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Today's Progress</Text>
          <View style={styles.ringsRow}>
            <AnimatedPress
              onPress={() => router.push('/nutrition')}
              style={styles.ringCard}
            >
              <ProgressRing
                progress={dailyMacros.caloriePercent}
                size={80}
                strokeWidth={7}
                color={Colors.pepTeal}
                label={`${dailyMacros.totals.calories}`}
                subLabel="cal"
                labelSize={16}
              />
              <Text style={styles.ringLabel}>Calories</Text>
              <Text style={styles.ringTarget}>
                / {dailyMacros.targets.calories}
              </Text>
            </AnimatedPress>

            <AnimatedPress
              onPress={() => router.push('/nutrition')}
              style={styles.ringCard}
            >
              <ProgressRing
                progress={dailyMacros.proteinPercent}
                size={80}
                strokeWidth={7}
                color={Colors.pepBlue}
                label={`${dailyMacros.totals.proteinGrams}g`}
                subLabel="protein"
                labelSize={16}
              />
              <Text style={styles.ringLabel}>Protein</Text>
              <Text style={styles.ringTarget}>
                / {dailyMacros.targets.proteinGrams}g
              </Text>
            </AnimatedPress>

            <AnimatedPress
              onPress={() => router.push('/nutrition')}
              style={styles.ringCard}
            >
              <ProgressRing
                progress={waterPercent}
                size={80}
                strokeWidth={7}
                color="#38bdf8"
                label={`${todayWater}`}
                subLabel="oz"
                labelSize={16}
              />
              <Text style={styles.ringLabel}>Water</Text>
              <Text style={styles.ringTarget}>
                / {mealTargets.waterOz ?? 100} oz
              </Text>
            </AnimatedPress>
          </View>
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            5. TODAY'S TIMELINE - Vertical timeline of today's events
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View
          entering={FadeInDown.delay(250).duration(500)}
          style={styles.section}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Timeline</Text>
            <Text style={styles.sectionBadge}>
              {timelineEvents.length} event{timelineEvents.length !== 1 ? 's' : ''}
            </Text>
          </View>

          {timelineEvents.length === 0 ? (
            <GlassCard style={styles.timelineEmpty}>
              <Ionicons
                name="time-outline"
                size={32}
                color="rgba(255,255,255,0.2)"
              />
              <Text style={styles.timelineEmptyTitle}>
                No events logged yet today
              </Text>
              <Text style={styles.timelineEmptySubtitle}>
                Start your day with a check-in or log a dose
              </Text>
            </GlassCard>
          ) : (
            <View style={styles.timelineContainer}>
              {timelineEvents.map((event, index) => (
                <Animated.View
                  key={event.id}
                  entering={FadeInDown.delay(280 + index * 50).duration(400)}
                >
                  <View style={styles.timelineItem}>
                    {/* Timeline line + dot */}
                    <View style={styles.timelineDotColumn}>
                      {index > 0 && (
                        <View
                          style={[
                            styles.timelineLineTop,
                            { backgroundColor: event.color + '30' },
                          ]}
                        />
                      )}
                      <View
                        style={[
                          styles.timelineDot,
                          {
                            backgroundColor: event.color + '25',
                            borderColor: event.color,
                          },
                        ]}
                      >
                        <Ionicons
                          name={event.icon}
                          size={14}
                          color={event.color}
                        />
                      </View>
                      {index < timelineEvents.length - 1 && (
                        <View
                          style={[
                            styles.timelineLineBottom,
                            { backgroundColor: event.color + '30' },
                          ]}
                        />
                      )}
                    </View>

                    {/* Event card */}
                    <View style={styles.timelineCardWrap}>
                      <GlassCard style={styles.timelineCard}>
                        <View style={styles.timelineCardHeader}>
                          <Text style={styles.timelineCardTitle}>
                            {event.title}
                          </Text>
                          <Text
                            style={[
                              styles.timelineCardTime,
                              { color: event.color },
                            ]}
                          >
                            {event.time}
                          </Text>
                        </View>
                        {event.subtitle && (
                          <Text style={styles.timelineCardSubtitle}>
                            {event.subtitle}
                          </Text>
                        )}
                      </GlassCard>
                    </View>
                  </View>
                </Animated.View>
              ))}
            </View>
          )}
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            6. 7-DAY TRENDS - Mood / Energy / Sleep sparklines
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View
          entering={FadeInDown.delay(300).duration(500)}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>7-Day Trends</Text>
          <View style={styles.trendsRow}>
            <TrendCard
              label="Mood"
              data={trendData.mood}
              color="#e3a7a1"
              unit="/5"
            />
            <TrendCard
              label="Energy"
              data={trendData.energy}
              color="#14b8a6"
              unit="/5"
            />
          </View>
          <View style={[styles.trendsRow, { marginTop: Spacing.sm }]}>
            <TrendCard
              label="Sleep"
              data={trendData.sleep}
              color="#3b82f6"
              unit="/5"
            />
            <View style={styles.trendSummaryCard}>
              <GlassCard
                style={styles.trendSummaryInner}
                variant="glow"
                glowColor={segment.palette.primary}
              >
                <Text style={styles.trendSummaryLabel}>Check-ins</Text>
                <Text style={styles.trendSummaryValue}>{entries.length}</Text>
                <Text style={styles.trendSummarySubtext}>total logged</Text>
                {entries.length >= 7 && (
                  <View style={styles.trendSummaryBadge}>
                    <Ionicons name="trending-up" size={14} color="#22c55e" />
                    <Text style={styles.trendSummaryBadgeText}>
                      On track
                    </Text>
                  </View>
                )}
              </GlassCard>
            </View>
          </View>
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            7. HEALTH DEVICE DATA CARD
        ══════════════════════════════════════════════════════════════════ */}
        {healthAvailable && healthMetrics && (
          <Animated.View
            entering={FadeInDown.delay(350).duration(500)}
            style={styles.section}
          >
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Health Snapshot</Text>
              <View style={styles.healthSourceBadge}>
                <Ionicons
                  name="heart-circle"
                  size={14}
                  color={Colors.pepTeal}
                />
                <Text style={styles.healthSourceText}>
                  {getHealthSourceLabel()}
                </Text>
              </View>
            </View>
            <GlassCard variant="glow" glowColor={Colors.pepTeal}>
              <View style={styles.healthMetricsGrid}>
                {healthMetrics.steps != null && (
                  <View style={styles.healthMetricItem}>
                    <View
                      style={[
                        styles.healthMetricIconWrap,
                        { backgroundColor: 'rgba(20,184,166,0.12)' },
                      ]}
                    >
                      <Ionicons
                        name="footsteps-outline"
                        size={18}
                        color={Colors.pepTeal}
                      />
                    </View>
                    <Text style={styles.healthMetricValue}>
                      {healthMetrics.steps.toLocaleString()}
                    </Text>
                    <Text style={styles.healthMetricLabel}>Steps</Text>
                  </View>
                )}

                {healthMetrics.restingHeartRate != null && (
                  <View style={styles.healthMetricItem}>
                    <View
                      style={[
                        styles.healthMetricIconWrap,
                        { backgroundColor: 'rgba(239,68,68,0.12)' },
                      ]}
                    >
                      <Ionicons
                        name="pulse-outline"
                        size={18}
                        color="#ef4444"
                      />
                    </View>
                    <Text style={styles.healthMetricValue}>
                      {healthMetrics.restingHeartRate}
                    </Text>
                    <Text style={styles.healthMetricLabel}>BPM</Text>
                  </View>
                )}

                {healthMetrics.sleepHours != null && (
                  <View style={styles.healthMetricItem}>
                    <View
                      style={[
                        styles.healthMetricIconWrap,
                        { backgroundColor: 'rgba(59,130,246,0.12)' },
                      ]}
                    >
                      <Ionicons
                        name="moon-outline"
                        size={18}
                        color="#3b82f6"
                      />
                    </View>
                    <Text style={styles.healthMetricValue}>
                      {healthMetrics.sleepHours}
                    </Text>
                    <Text style={styles.healthMetricLabel}>Hrs Sleep</Text>
                  </View>
                )}

                {healthMetrics.weightLbs != null && (
                  <View style={styles.healthMetricItem}>
                    <View
                      style={[
                        styles.healthMetricIconWrap,
                        { backgroundColor: 'rgba(139,92,246,0.12)' },
                      ]}
                    >
                      <Ionicons
                        name="scale-outline"
                        size={18}
                        color="#8b5cf6"
                      />
                    </View>
                    <Text style={styles.healthMetricValue}>
                      {healthMetrics.weightLbs}
                    </Text>
                    <Text style={styles.healthMetricLabel}>lbs</Text>
                  </View>
                )}
              </View>

              {healthMetrics.steps == null &&
                healthMetrics.restingHeartRate == null &&
                healthMetrics.sleepHours == null &&
                healthMetrics.weightLbs == null && (
                  <Text style={styles.healthMetricsEmpty}>
                    No health data available yet. Wear your device and check
                    back later.
                  </Text>
                )}
            </GlassCard>
          </Animated.View>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            8. XP PROGRESS BAR
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View
          entering={FadeInDown.delay(375).duration(500)}
          style={styles.section}
        >
          <GlassCard>
            <View style={styles.xpHeader}>
              <LinearGradient
                colors={[segment.palette.primary, segment.palette.accent]}
                style={styles.xpLevelCircle}
              >
                <Text style={styles.xpLevelNumber}>{level.level}</Text>
              </LinearGradient>
              <View style={styles.xpInfo}>
                <Text style={styles.xpTitle}>{level.title}</Text>
                <Text style={styles.xpSubtitle}>
                  {level.currentXP} XP
                  {level.next
                    ? ` · ${level.next.xpRequired - level.currentXP} to next`
                    : ' · Max level'}
                </Text>
              </View>
              <View style={styles.xpBadgeCount}>
                <Ionicons
                  name="medal"
                  size={16}
                  color={segment.palette.primary}
                />
                <Text
                  style={[
                    styles.xpBadgeText,
                    { color: segment.palette.primary },
                  ]}
                >
                  {earnedBadgeIds.length}
                </Text>
              </View>
            </View>
            <View style={styles.xpBarTrack}>
              <LinearGradient
                colors={[segment.palette.primary, segment.palette.accent]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[
                  styles.xpBarFill,
                  { width: `${level.progressToNext}%` as any },
                ]}
              />
            </View>
          </GlassCard>
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            9. CHAT INPUT + PROMPT CHIPS
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View
          entering={FadeInDown.delay(400).duration(500)}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Ask Pepe</Text>

          {/* Prompt chips */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.promptChipsContainer}
          >
            {promptChips.map((prompt) => (
              <TouchableOpacity
                key={prompt}
                style={[
                  styles.promptChip,
                  { borderColor: segment.palette.primary + '40' },
                ]}
                onPress={() => handlePromptChip(prompt)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.promptChipText,
                    { color: segment.palette.primary },
                  ]}
                  numberOfLines={1}
                >
                  {prompt}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Chat input */}
          <View style={styles.chatContainer}>
            <TextInput
              style={styles.chatInput}
              placeholder="Ask about peptides, protocols, health..."
              placeholderTextColor="#6b7280"
              value={chatText}
              onChangeText={setChatText}
              onSubmitEditing={handleSendChat}
              returnKeyType="send"
            />
            <TouchableOpacity
              onPress={handleSendChat}
              activeOpacity={0.7}
              style={[
                styles.chatSendButton,
                { backgroundColor: segment.palette.primary },
              ]}
            >
              <Ionicons name="send" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            10. SETUP CHECKLIST (if not complete)
        ══════════════════════════════════════════════════════════════════ */}
        {!allSetupComplete && (
          <Animated.View
            entering={FadeInDown.delay(425).duration(500)}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>Get Started</Text>
            <GlassCard variant="gradient">
              {setupItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.checklistRow}
                  onPress={() => router.push(item.route as any)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={
                      item.complete
                        ? 'checkmark-circle'
                        : 'ellipse-outline'
                    }
                    size={20}
                    color={
                      item.complete ? segment.palette.primary : '#6b7280'
                    }
                  />
                  <Text
                    style={[
                      styles.checklistLabel,
                      item.complete && styles.checklistLabelDone,
                    ]}
                  >
                    {item.label}
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              ))}
            </GlassCard>
          </Animated.View>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            11. HEALTH TOOLS QUICK ACCESS
        ══════════════════════════════════════════════════════════════════ */}
        <Animated.View
          entering={FadeInDown.delay(450).duration(500)}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Health Tools</Text>
          <View style={styles.toolsRow}>
            <AnimatedPress
              style={styles.healthToolCard}
              onPress={() => router.push('/workouts')}
            >
              <LinearGradient
                colors={[Colors.pepTeal, Colors.pepBlue]}
                style={styles.healthToolIcon}
              >
                <Ionicons name="barbell-outline" size={22} color="#fff" />
              </LinearGradient>
              <Text style={styles.healthToolLabel}>Workouts</Text>
            </AnimatedPress>
            <AnimatedPress
              style={styles.healthToolCard}
              onPress={() => router.push('/nutrition')}
            >
              <LinearGradient
                colors={[Colors.pepBlue, Colors.pepCyan]}
                style={styles.healthToolIcon}
              >
                <Ionicons name="nutrition-outline" size={22} color="#fff" />
              </LinearGradient>
              <Text style={styles.healthToolLabel}>Nutrition</Text>
            </AnimatedPress>
            <AnimatedPress
              style={styles.healthToolCard}
              onPress={() => router.push('/subscription')}
            >
              <LinearGradient
                colors={['#f59e0b', '#ef4444']}
                style={styles.healthToolIcon}
              >
                <Ionicons name="diamond-outline" size={22} color="#fff" />
              </LinearGradient>
              <Text style={styles.healthToolLabel}>Plans</Text>
            </AnimatedPress>
          </View>
        </Animated.View>

        {/* ══════════════════════════════════════════════════════════════════
            12. EXPLORE PEPTIDES BUTTON + LIBRARY
        ══════════════════════════════════════════════════════════════════ */}
        <View style={styles.section}>
          <GradientButton
            label={showLibrary ? 'Hide Peptide Library' : 'Explore Peptides'}
            onPress={() => setShowLibrary(!showLibrary)}
            colors={[segment.palette.primary, segment.palette.accent]}
          />
        </View>

        {showLibrary && (
          <View style={styles.librarySection}>
            <View style={styles.searchContainer}>
              <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search peptides, categories..."
              />
            </View>

            {profile.interestCategories.length > 0 && (
              <View style={styles.focusSection}>
                <Text style={styles.sectionTitle}>Your Focus</Text>
                <View style={styles.focusChips}>
                  {profile.interestCategories.map((interest) => (
                    <TouchableOpacity
                      key={interest}
                      style={[
                        styles.focusChip,
                        {
                          borderColor: segment.palette.primary + '40',
                          backgroundColor: segment.palette.primary + '18',
                        },
                      ]}
                      onPress={() =>
                        router.push(
                          `/?category=${encodeURIComponent(interest)}`,
                        )
                      }
                    >
                      <Text
                        style={[
                          styles.focusChipText,
                          { color: segment.palette.primary },
                        ]}
                      >
                        {interest}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {activeCategory && (
              <View style={styles.filterRow}>
                <Text style={styles.filterText}>
                  Filter: {activeCategory}
                </Text>
                <TouchableOpacity
                  style={styles.clearFilterButton}
                  onPress={() => router.replace('/')}
                >
                  <Text
                    style={[
                      styles.clearFilterText,
                      { color: segment.palette.primary },
                    ]}
                  >
                    Clear
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {!searchQuery.trim() && (
              <View style={styles.categoriesSection}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <CategoryGrid />
              </View>
            )}

            <View style={styles.allPeptidesHeader}>
              <Text style={styles.sectionTitle}>
                {searchQuery.trim()
                  ? `Results (${filteredPeptides.length})`
                  : activeCategory
                    ? `${activeCategory} Peptides (${filteredPeptides.length})`
                    : 'All Peptides'}
              </Text>
            </View>

            {filteredPeptides.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>No peptides found</Text>
                <Text style={styles.emptySubtitle}>
                  Try adjusting your search query
                </Text>
              </View>
            ) : (
              filteredPeptides.map((peptide) => (
                <PeptideCard key={peptide.id} peptide={peptide} />
              ))
            )}

            <View style={styles.footer}>
              <Disclaimer />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBg,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // ── Hero Section ──────────────────────────────────────────────────────────
  heroSection: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  heroGradient: {
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
  },
  heroTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  heroTextBlock: {
    flex: 1,
    marginRight: Spacing.md,
  },
  heroGreeting: {
    fontSize: FontSizes.xxl,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  heroTagline: {
    fontSize: FontSizes.sm,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 20,
  },
  heroCharacterWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
  },
  heroStreakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
    gap: 10,
  },
  streakBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(245,158,11,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(245,158,11,0.3)',
  },
  streakInfo: {
    flex: 1,
  },
  streakNumber: {
    fontSize: FontSizes.lg,
    fontWeight: '800',
    color: '#fff',
  },
  streakUnit: {
    fontSize: FontSizes.sm,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.65)',
  },
  streakMilestone: {
    fontSize: FontSizes.xs,
    color: 'rgba(255,255,255,0.5)',
    marginTop: 1,
  },
  heroLevelBadge: {
    alignItems: 'center',
    gap: 4,
  },
  heroLevelCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroLevelText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#fff',
  },
  heroLevelLabel: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.5)',
    fontWeight: '600',
  },
  heroTipContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: BorderRadius.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  heroTipText: {
    flex: 1,
    fontSize: FontSizes.xs,
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 16,
    fontStyle: 'italic',
  },

  // ── Quick Stats Row ───────────────────────────────────────────────────────
  statsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  statCard: {
    flex: 1,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  statCardInner: {
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 4,
    gap: 4,
  },
  statValue: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: '#f7f2ec',
  },
  statLabel: {
    fontSize: 10,
    color: '#9ca3af',
    fontWeight: '500',
  },

  // ── Quick Actions ─────────────────────────────────────────────────────────
  quickActionsContainer: {
    paddingHorizontal: Spacing.lg,
    gap: 10,
    paddingBottom: Spacing.lg,
    paddingTop: Spacing.xs,
  },
  quickActionButton: {
    width: 88,
  },
  quickActionGradient: {
    borderRadius: BorderRadius.lg,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  quickActionIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },

  // ── Progress Rings ────────────────────────────────────────────────────────
  ringsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  ringCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 4,
  },
  ringLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#e8e6e3',
    marginTop: 8,
  },
  ringTarget: {
    fontSize: 10,
    color: '#6b7280',
    marginTop: 2,
  },

  // ── Timeline ──────────────────────────────────────────────────────────────
  timelineContainer: {
    marginLeft: 4,
  },
  timelineItem: {
    flexDirection: 'row',
    minHeight: 64,
  },
  timelineDotColumn: {
    width: 36,
    alignItems: 'center',
  },
  timelineLineTop: {
    width: 2,
    height: 12,
    borderRadius: 1,
  },
  timelineDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  timelineLineBottom: {
    width: 2,
    flex: 1,
    borderRadius: 1,
    minHeight: 12,
  },
  timelineCardWrap: {
    flex: 1,
    paddingLeft: 8,
    paddingBottom: 8,
  },
  timelineCard: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  timelineCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timelineCardTitle: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: '#f7f2ec',
    flex: 1,
    marginRight: 8,
  },
  timelineCardTime: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
  },
  timelineCardSubtitle: {
    fontSize: FontSizes.xs,
    color: '#9ca3af',
    marginTop: 3,
  },
  timelineEmpty: {
    alignItems: 'center',
    paddingVertical: 28,
    gap: 8,
  },
  timelineEmptyTitle: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: '#e8e6e3',
  },
  timelineEmptySubtitle: {
    fontSize: FontSizes.xs,
    color: '#6b7280',
    textAlign: 'center',
  },

  // ── Trends ────────────────────────────────────────────────────────────────
  trendsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  trendSummaryCard: {
    flex: 1,
  },
  trendSummaryInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  trendSummaryLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: '#f7f2ec',
    marginBottom: 4,
  },
  trendSummaryValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f7f2ec',
  },
  trendSummarySubtext: {
    fontSize: FontSizes.xs,
    color: '#9ca3af',
    marginTop: 2,
  },
  trendSummaryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
    backgroundColor: 'rgba(34,197,94,0.12)',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  trendSummaryBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#22c55e',
  },

  // ── Health Metrics ────────────────────────────────────────────────────────
  healthMetricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  healthMetricItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: BorderRadius.md,
    paddingVertical: 14,
    paddingHorizontal: 4,
    gap: 6,
  },
  healthMetricIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthMetricValue: {
    fontSize: FontSizes.lg,
    fontWeight: '800',
    color: '#f7f2ec',
  },
  healthMetricLabel: {
    fontSize: 10,
    color: '#9ca3af',
    fontWeight: '500',
  },
  healthMetricsEmpty: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    paddingVertical: 12,
  },
  healthSourceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(6,182,212,0.1)',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  healthSourceText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.pepTeal,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // ── XP Bar ────────────────────────────────────────────────────────────────
  xpHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  xpLevelCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xpLevelNumber: {
    fontSize: 16,
    fontWeight: '900',
    color: '#fff',
  },
  xpInfo: {
    flex: 1,
  },
  xpTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#f7f2ec',
  },
  xpSubtitle: {
    fontSize: FontSizes.xs,
    color: '#9ca3af',
    marginTop: 1,
  },
  xpBadgeCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  xpBadgeText: {
    fontSize: 14,
    fontWeight: '800',
  },
  xpBarTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    borderRadius: 3,
  },

  // ── Sections ──────────────────────────────────────────────────────────────
  section: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: '#e8e6e3',
    marginBottom: 14,
  },
  sectionBadge: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
    color: '#6b7280',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: BorderRadius.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 14,
  },

  // ── Prompt Chips & Chat ───────────────────────────────────────────────────
  promptChipsContainer: {
    gap: 8,
    paddingBottom: 12,
  },
  promptChip: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  promptChipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chatInput: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#e8e6e3',
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  chatSendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Setup Checklist ───────────────────────────────────────────────────────
  checklistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  },
  checklistLabel: {
    flex: 1,
    fontSize: 14,
    color: '#e8e6e3',
    fontWeight: '500',
  },
  checklistLabelDone: {
    color: '#6b7280',
    textDecorationLine: 'line-through',
  },

  // ── Health Tools ──────────────────────────────────────────────────────────
  toolsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  healthToolCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  healthToolIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthToolLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#e8e6e3',
  },

  // ── Library Section ───────────────────────────────────────────────────────
  librarySection: {
    paddingHorizontal: Spacing.lg,
  },
  searchContainer: {
    marginBottom: 20,
  },
  focusSection: {
    marginBottom: 20,
  },
  focusChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  focusChip: {
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
  },
  focusChipText: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: BorderRadius.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  filterText: {
    fontSize: 12,
    color: '#e8e6e3',
    fontWeight: '600',
  },
  clearFilterButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  clearFilterText: {
    fontSize: 12,
    fontWeight: '700',
  },
  categoriesSection: {
    marginBottom: 24,
  },
  allPeptidesHeader: {
    marginBottom: 12,
  },

  // ── Empty & Footer ────────────────────────────────────────────────────────
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e8e6e3',
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: FontSizes.sm,
    color: '#9ca3af',
  },
  footer: {
    paddingTop: 8,
  },

  // ── Pepe Says Card ───────────────────────────────────────────────────────
  pepeSaysCard: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  pepeSaysRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  pepeSaysCharacter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  pepeSaysContent: {
    flex: 1,
  },
  pepeSaysMessage: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.darkText,
    lineHeight: 20,
  },
  pepeSaysAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: BorderRadius.sm,
  },
  pepeSaysActionText: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
  },

  // ── Today's Plan ─────────────────────────────────────────────────────────
  planItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  },
  planCheckbox: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planItemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 4,
  },
  planItemText: {
    flex: 1,
  },
  planItemTitle: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.darkText,
  },
  planItemTitleDone: {
    textDecorationLine: 'line-through',
    color: Colors.darkTextSecondary,
  },
  planItemTime: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    marginTop: 1,
  },
  planProgressWrap: {
    marginTop: 12,
    paddingTop: 8,
  },
  planProgressTrack: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  planProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
});
