import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Animated as RNAnimated,
  Image,
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
import { DailyProgressChart, type ChartSegment, type ChartPage } from '../../src/components/DailyProgressChart';
import { useProgressGoalsStore, type GoalCategory } from '../../src/store/useProgressGoalsStore';
import { TrendCard } from '../../src/components/TrendCard';
import { Sparkline } from '../../src/components/Sparkline';
import { SearchBar } from '../../src/components/SearchBar';
import { CategoryGrid } from '../../src/components/CategoryGrid';
import { PeptideCard } from '../../src/components/PeptideCard';
import { Disclaimer } from '../../src/components/Disclaimer';
import { Colors, FontSizes, Spacing, BorderRadius } from '../../src/constants/theme';
import { useTheme } from '../../src/hooks/useTheme';
import {
  isHealthDataAvailable,
  getHealthMetrics,
  getHealthSourceLabel,
  HealthMetrics,
} from '../../src/services/healthDataService';
import { useOnboardingStore } from '../../src/store/useOnboardingStore';
import { useAuthStore } from '../../src/store/useAuthStore';
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
import { getTestProfile } from '../../src/constants/testProfiles';
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

// ── Navigation search items ────────────────────────────────────────────────
const NAV_SEARCH_ITEMS: { label: string; keywords: string[]; route: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { label: 'Nutrition', keywords: ['nutrition', 'food', 'meal', 'calories', 'macros', 'diet', 'eat', 'track'], route: '/nutrition', icon: 'nutrition-outline' },
  { label: 'Food Search', keywords: ['food', 'search', 'log', 'scan', 'barcode'], route: '/nutrition/food-search', icon: 'search-outline' },
  { label: 'Workouts', keywords: ['workout', 'exercise', 'gym', 'train', 'lift', 'cardio', 'fitness'], route: '/workouts', icon: 'barbell-outline' },
  { label: 'Peptides', keywords: ['peptide', 'stack', 'protocol', 'bpc', 'tb500', 'semaglutide'], route: '/(tabs)/my-stacks', icon: 'flask-outline' },
  { label: 'Dosing Calculator', keywords: ['dose', 'dosing', 'calculator', 'calc', 'mcg', 'mg'], route: '/calculators/dosing', icon: 'calculator-outline' },
  { label: 'Reconstitution', keywords: ['recon', 'reconstitution', 'bac', 'water', 'mix'], route: '/calculators/reconstitution', icon: 'beaker-outline' },
  { label: 'Check-In', keywords: ['checkin', 'check', 'mood', 'energy', 'sleep', 'recovery'], route: '/(tabs)/check-in', icon: 'heart-outline' },
  { label: 'Calendar', keywords: ['calendar', 'history', 'timeline', 'log', 'past'], route: '/(tabs)/calendar', icon: 'calendar-outline' },
  { label: 'Ask Aimee', keywords: ['aimee', 'ai', 'chat', 'ask', 'help', 'question'], route: '/(tabs)/peptalk', icon: 'chatbubble-outline' },
  { label: 'Profile', keywords: ['profile', 'account', 'settings', 'preferences'], route: '/(tabs)/profile', icon: 'person-outline' },
  { label: 'Journal', keywords: ['journal', 'notes', 'diary', 'write'], route: '/journal', icon: 'book-outline' },
  { label: 'Body Map', keywords: ['body', 'map', 'injection', 'site', 'rotate'], route: '/body-map', icon: 'body-outline' },
  { label: 'Learn', keywords: ['learn', 'education', 'article', 'guide', 'research'], route: '/learn', icon: 'school-outline' },
  { label: 'Targets', keywords: ['target', 'goals', 'macro', 'calorie goal'], route: '/nutrition/targets', icon: 'flag-outline' },
];

const QUICK_ACTIONS = [
  { id: 'checkin', icon: 'heart-outline' as const, label: 'Check In', route: '/(tabs)/check-in', colors: ['#e3a7a1', '#c98a84'] as [string, string] },
  { id: 'dose', icon: 'flask-outline' as const, label: 'Log Dose', route: '/(tabs)/calendar', colors: ['#14b8a6', '#0d9488'] as [string, string] },
  { id: 'workout', icon: 'barbell-outline' as const, label: 'Workout', route: '/workouts', colors: ['#3b82f6', '#2563eb'] as [string, string] },
  { id: 'nutrition', icon: 'nutrition-outline' as const, label: 'Nutrition', route: '/nutrition', colors: ['#f59e0b', '#d97706'] as [string, string] },
  { id: 'peptalk', icon: 'chatbubble-outline' as const, label: 'Ask Aimee', route: '/(tabs)/peptalk', colors: ['#8b5cf6', '#7c3aed'] as [string, string] },
  { id: 'journal', icon: 'book-outline' as const, label: 'Journal', route: '/journal', colors: ['#06b6d4', '#0891b2'] as [string, string] },
  { id: 'bodymap', icon: 'body-outline' as const, label: 'Body Map', route: '/body-map', colors: ['#22c55e', '#16a34a'] as [string, string] },
];

const HERO_BACKGROUND_IMAGES: Record<string, string> = {
  default: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  fitness: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  science: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
};

function getHeroBackgroundUri(segmentLabel?: string): string {
  if (!segmentLabel) return HERO_BACKGROUND_IMAGES.default;
  const lower = segmentLabel.toLowerCase();
  if (lower.includes('send') || lower.includes('beast') || lower.includes('shred')) {
    return HERO_BACKGROUND_IMAGES.fitness;
  }
  if (lower.includes('biohack') || lower.includes('science') || lower.includes('research')) {
    return HERO_BACKGROUND_IMAGES.science;
  }
  return HERO_BACKGROUND_IMAGES.default;
}

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
  const t = useTheme();
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
  const [navSearch, setNavSearch] = useState('');
  const [navSearchFocused, setNavSearchFocused] = useState(false);
  const [chatText, setChatText] = useState('');

  // ── Nav search results ───────────────────────────────────────────────────
  const navResults = useMemo(() => {
    const q = navSearch.toLowerCase().trim();
    if (!q) return [];
    return NAV_SEARCH_ITEMS.filter((item) =>
      item.label.toLowerCase().includes(q) ||
      item.keywords.some((kw) => kw.includes(q))
    ).slice(0, 5);
  }, [navSearch]);

  // ── Stores ────────────────────────────────────────────────────────────────
  const profile = useOnboardingStore((s) => s.profile);
  const user = useAuthStore((s) => s.user);
  const userEmail = user?.email;
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

  // Use hardcoded test profile if available, fall back to onboarding store
  const testProfile = useMemo(() => getTestProfile(userEmail), [userEmail]);
  const effectiveGender = testProfile?.gender ?? profile.gender;
  const effectiveAgeRange = testProfile?.ageRange ?? profile.ageRange;

  const segment = useMemo(
    () => getSegmentByProfile(effectiveGender, effectiveAgeRange),
    [effectiveGender, effectiveAgeRange],
  );

  const ethnicityProfile = useMemo(
    () => getEthnicityProfile(testProfile?.ethnicity ?? profile.ethnicity),
    [testProfile?.ethnicity, profile.ethnicity],
  );

  const hasDemographics = Boolean(effectiveGender && effectiveAgeRange);
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

  // ── Swipeable progress dashboard data ─────────────────────────────────────

  const progressGoals = useProgressGoalsStore((s) => s.goals);

  const todayWorkoutCount = useMemo(() => workoutLogs.filter((w) => w.date === todayDate).length, [workoutLogs, todayDate]);
  const todayWorkoutDuration = useMemo(() => workoutLogs.filter((w) => w.date === todayDate).reduce((s2, w) => s2 + w.durationMinutes, 0), [workoutLogs, todayDate]);
  const todayDoseCount = useMemo(() => doses.filter((d) => d.date === todayDate).length, [doses, todayDate]);

  const currentValues: Record<string, number> = useMemo(() => {
    const tt = dailyMacros.totals;
    return {
      cal: tt.calories, pro: tt.proteinGrams, carb: tt.carbsGrams, fat: tt.fatGrams,
      fiber: tt.fiberGrams, water: todayWater,
      // Limit nutrients
      sodium: (tt as any).sodiumMg ?? 0, sugar: (tt as any).sugarGrams ?? 0,
      chol: (tt as any).cholesterolMg ?? 0, satfat: (tt as any).saturatedFatGrams ?? 0,
      // Minerals
      potassium: (tt as any).potassiumMg ?? 0, calcium: (tt as any).calciumMg ?? 0,
      iron: (tt as any).ironMg ?? 0, magnesium: (tt as any).magnesiumMg ?? 0,
      zinc: (tt as any).zincMg ?? 0, phosphorus: (tt as any).phosphorusMg ?? 0,
      selenium: (tt as any).seleniumMcg ?? 0, copper: (tt as any).copperMg ?? 0,
      manganese: (tt as any).manganeseMg ?? 0,
      // Vitamins
      vita: (tt as any).vitaminAMcg ?? 0, vitc: (tt as any).vitaminCMg ?? 0,
      vitd: (tt as any).vitaminDMcg ?? 0, vite: (tt as any).vitaminEMg ?? 0,
      vitk: (tt as any).vitaminKMcg ?? 0,
      vitb1: (tt as any).vitaminB1Mg ?? 0, vitb2: (tt as any).vitaminB2Mg ?? 0,
      vitb3: (tt as any).vitaminB3Mg ?? 0, vitb5: (tt as any).vitaminB5Mg ?? 0,
      vitb6: (tt as any).vitaminB6Mg ?? 0, vitb12: (tt as any).vitaminB12Mcg ?? 0,
      folate: (tt as any).folateMcg ?? 0, choline: (tt as any).cholineMg ?? 0,
      // Omega fatty acids
      omega3: (tt as any).omega3Grams ?? 0, omega6: (tt as any).omega6Grams ?? 0,
      workout: Math.min(todayWorkoutCount, 1), steps: todayCheckin?.steps ?? 0,
      active: todayCheckin?.activeCalories ?? 0, sleep: todayCheckin?.sleepStages?.total ?? 0,
      sleepq: todayCheckin?.sleepQuality ?? 0, recovery: todayCheckin?.recovery ?? 0,
      duration: todayWorkoutDuration,
      checkin: todayCheckin ? 1 : 0, doses: todayDoseCount,
      mood: todayCheckin?.mood ?? 0, energy: todayCheckin?.energy ?? 0,
      stress: todayCheckin?.stress ?? 0, weight: todayCheckin?.weightLbs ?? 0,
      rhr: todayCheckin?.restingHeartRate ?? 0, hrv: todayCheckin?.hrvMs ?? 0,
      vo2: todayCheckin?.vo2Max ?? 0, spo2: todayCheckin?.spo2 ?? 0,
    };
  }, [dailyMacros, todayWater, todayWorkoutCount, todayWorkoutDuration, todayCheckin, todayDoseCount]);

  const chartPages: ChartPage[] = useMemo(() => {
    const categories: { category: GoalCategory; title: string; icon: string; requiredFeature?: string; requiredTier?: string }[] = [
      { category: 'macros', title: 'Macros & Calories', icon: 'nutrition-outline' },
      { category: 'vitamins', title: 'Vitamins & Minerals', icon: 'flask-outline', requiredFeature: 'vitamins_donut_chart', requiredTier: 'PLUS' },
      { category: 'fitness', title: 'Fitness & Activity', icon: 'fitness-outline' },
      { category: 'health', title: 'Health & Wellness', icon: 'heart-outline' },
    ];
    return categories.map(({ category, title, icon, requiredFeature, requiredTier }) => ({
      title, icon, category, requiredFeature, requiredTier,
      segments: progressGoals
        .filter((g) => g.category === category && g.enabled)
        .map((g) => ({
          key: g.key, label: g.label, color: g.color,
          current: Math.round((currentValues[g.key] ?? 0) * 10) / 10,
          goal: g.goal, unit: g.unit, inverse: g.inverse,
        })),
    }));
  }, [progressGoals, currentValues]);

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
      actionLabel: 'Ask Aimee',
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

  // ── Subscription tier ──────────────────────────────────────────────────────
  const { useSubscriptionStore } = require('../../src/store/useSubscriptionStore');
  const tier = useSubscriptionStore((s: any) => s.tier) as string;
  const isPro = tier === 'pro';
  const isPlus = tier === 'plus' || isPro;

  // ── Nutrition summary ────────────────────────────────────────────────────
  const calPercent = mealTargets.calories > 0
    ? Math.min(100, Math.round((dailyMacros.totals.calories / mealTargets.calories) * 100))
    : 0;
  const todayMealCount = meals.filter((m) => m.date === todayDate).length;

  // ── Workout summary ──────────────────────────────────────────────────────
  const todayWorkouts = workoutLogs.filter((w) => w.date === todayDate);

  // ── Main Render ───────────────────────────────────────────────────────────

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: t.bg }]} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        {/* ═══════════════════════════════════════════════════════════════
            HERO — Greeting + Search + Stats
        ═══════════════════════════════════════════════════════════════ */}
        <RNAnimated.View
          style={[
            styles.heroSection,
            {
              opacity: heroOpacity,
              transform: [{ translateY: heroTranslateY }],
            },
          ]}
        >
          {/* Greeting */}
          <Text style={[styles.heroGreeting, { color: t.text }]}>
            {getGreeting()}{user?.name ? `, ${user.name.split(' ')[0]}` : ''}
          </Text>

          {/* Navigation search bar */}
          <View style={styles.searchSection}>
            <View style={[styles.searchBar, { backgroundColor: t.surface, borderColor: t.cardBorder }]}>
              <Ionicons name="search-outline" size={18} color={t.textSecondary} />
              <TextInput
                style={[styles.searchInput, { color: t.text }]}
                placeholder="Search features, tools..."
                placeholderTextColor={t.placeholder}
                value={navSearch}
                onChangeText={setNavSearch}
                onFocus={() => setNavSearchFocused(true)}
                onBlur={() => setTimeout(() => setNavSearchFocused(false), 200)}
              />
              {navSearch.length > 0 && (
                <TouchableOpacity onPress={() => setNavSearch('')}>
                  <Ionicons name="close-circle" size={18} color={t.textSecondary} />
                </TouchableOpacity>
              )}
            </View>
            {/* Search results dropdown */}
            {navSearchFocused && navResults.length > 0 && (
              <View style={[styles.searchResults, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
                {navResults.map((item) => (
                  <TouchableOpacity
                    key={item.route}
                    style={styles.searchResultRow}
                    onPress={() => {
                      setNavSearch('');
                      setNavSearchFocused(false);
                      router.push(item.route as any);
                    }}
                    activeOpacity={0.7}
                  >
                    <View style={[styles.searchResultIcon, { backgroundColor: t.glassAccent }]}>
                      <Ionicons name={item.icon} size={16} color={t.primary} />
                    </View>
                    <Text style={[styles.searchResultText, { color: t.text }]}>{item.label}</Text>
                    <Ionicons name="arrow-forward" size={14} color={t.textSecondary} />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Stat pills row */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.statPillsRow}
          >
            <View style={[styles.statPill, { backgroundColor: `${t.primary}15`, borderColor: `${t.primary}30` }]}>
              <RNAnimated.View style={{ transform: [{ scale: pulseAnim }] }}>
                <Ionicons name="flame" size={15} color={t.primary} />
              </RNAnimated.View>
              <Text style={[styles.statPillValue, { color: t.primary }]}>{streak}</Text>
              <Text style={[styles.statPillLabel, { color: t.textSecondary }]}>streak</Text>
            </View>

            <View style={[styles.statPill, { backgroundColor: `${t.secondary}15`, borderColor: `${t.secondary}30` }]}>
              <Ionicons name="trophy" size={15} color={t.secondary} />
              <Text style={[styles.statPillValue, { color: t.secondary }]}>{workoutLogs.length}</Text>
              <Text style={[styles.statPillLabel, { color: t.textSecondary }]}>workouts</Text>
            </View>

            <View style={[styles.statPill, { backgroundColor: `${t.accent}20`, borderColor: `${t.accent}35` }]}>
              <Ionicons name="star" size={15} color={t.accent} />
              <Text style={[styles.statPillValue, { color: t.text }]}>Lv {level.level}</Text>
              <Text style={[styles.statPillLabel, { color: t.textSecondary }]}>{level.title}</Text>
            </View>

            <View style={[styles.statPill, {
              backgroundColor: todayCheckin ? 'rgba(34,197,94,0.10)' : `${t.primary}15`,
              borderColor: todayCheckin ? 'rgba(34,197,94,0.25)' : `${t.primary}30`,
            }]}>
              <Ionicons
                name={todayCheckin ? 'checkmark-circle' : 'ellipse-outline'}
                size={15}
                color={todayCheckin ? '#22c55e' : t.primary}
              />
              <Text style={[styles.statPillValue, { color: todayCheckin ? '#22c55e' : t.text }]}>
                {todayCheckin ? 'Done' : 'Due'}
              </Text>
              <Text style={[styles.statPillLabel, { color: t.textSecondary }]}>check-in</Text>
            </View>

            {activeProtocolCount > 0 && (
              <View style={[styles.statPill, { backgroundColor: `${t.primary}15`, borderColor: `${t.primary}30` }]}>
                <Ionicons name="flask" size={15} color={t.primary} />
                <Text style={[styles.statPillValue, { color: t.primary }]}>{activeProtocolCount}</Text>
                <Text style={[styles.statPillLabel, { color: t.textSecondary }]}>
                  {activeProtocolCount === 1 ? 'protocol' : 'protocols'}
                </Text>
              </View>
            )}
          </ScrollView>
        </RNAnimated.View>

        {/* ═══════════════════════════════════════════════════════════════
            GET STARTED (new users only)
        ═══════════════════════════════════════════════════════════════ */}
        {!allSetupComplete && (
          <Animated.View entering={FadeInDown.delay(50).duration(400)} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: t.text }]}>Get Started</Text>
              <View style={[styles.sectionAccent, { backgroundColor: t.primary }]} />
            </View>
            <View style={[styles.card, { backgroundColor: t.surface, borderColor: t.cardBorder }]}>
              {setupItems.map((item, i) => (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.setupRow, i < setupItems.length - 1 && styles.setupRowBorder]}
                  onPress={() => router.push(item.route as any)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={item.complete ? 'checkmark-circle' : 'ellipse-outline'}
                    size={20}
                    color={item.complete ? t.primary : '#C7C7CC'}
                  />
                  <Text style={[styles.setupLabel, { color: t.text }, item.complete && styles.setupLabelDone]}>
                    {item.label}
                  </Text>
                  <Ionicons name="chevron-forward" size={16} color="#6b7280" />
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            LOGGING PROGRESS — MFP-style nudge card
        ═══════════════════════════════════════════════════════════════ */}
        <Animated.View entering={FadeInDown.delay(100).duration(400)} style={styles.section}>
          <AnimatedPress
            onPress={() => router.push(todayMealCount === 0 ? '/nutrition' : todayCheckin ? '/workouts' : '/(tabs)/check-in')}
            scaleTo={0.97}
          >
            <View style={[styles.nudgeCard, { backgroundColor: t.surface, borderColor: t.cardBorder }]}>
              <Text style={[styles.nudgeTitle, { color: t.text }]}>
                {todayMealCount === 0 && !todayCheckin
                  ? `Hey${user?.name ? ` ${user.name.split(' ')[0]}` : ''}, ready to start?`
                  : todayMealCount > 0 && todayCheckin && todayWorkouts.length > 0
                    ? 'You\'re on fire today!'
                    : 'Keep it going!'}
              </Text>
              <Text style={styles.nudgeBody}>
                {todayMealCount === 0
                  ? 'You haven\'t logged any meals yet — let\'s fuel your goals!'
                  : <>You've logged <Text style={[styles.nudgeHighlight, { color: t.primary }]}>{todayMealCount} meal{todayMealCount !== 1 ? 's' : ''}</Text> and <Text style={[styles.nudgeHighlight, { color: t.primary }]}>{Math.round(dailyMacros.totals.proteinGrams)}g of protein</Text> today.</>
                }
              </Text>
              <Ionicons name="chevron-forward" size={20} color={t.textSecondary} style={styles.nudgeChevron} />
            </View>
          </AnimatedPress>
        </Animated.View>

        {/* ═══════════════════════════════════════════════════════════════
            TODAY'S PROGRESS — Swipeable donut chart (tinted bg band)
        ═══════════════════════════════════════════════════════════════ */}
        <Animated.View entering={FadeInDown.delay(150).duration(400)}
          style={[styles.surfaceBand, { backgroundColor: t.surface }]}
        >
          <View style={styles.section}>
            <DailyProgressChart pages={chartPages} />
          </View>
        </Animated.View>

        {/* ═══════════════════════════════════════════════════════════════
            DISCOVER — 2x2 Grid of feature tiles (MFP style)
        ═══════════════════════════════════════════════════════════════ */}
        <Animated.View entering={FadeInDown.delay(200).duration(400)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: t.text }]}>Discover</Text>
            <View style={[styles.sectionAccent, { backgroundColor: t.primary }]} />
          </View>
          <View style={styles.discoverGrid}>
            {/* Row 1: Nutrition + Workouts */}
            <View style={styles.discoverRow}>
              <AnimatedPress onPress={() => router.push('/nutrition')} scaleTo={0.96} style={{ flex: 1 }}>
                <LinearGradient
                  colors={[`${t.primary}18`, `${t.primary}08`]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.discoverTile, { borderColor: `${t.primary}25` }]}
                >
                  <Ionicons name="nutrition" size={28} color={t.primary} />
                  <Text style={[styles.discoverTileTitle, { color: t.text }]}>Nutrition</Text>
                  <Text style={[styles.discoverTileSub, { color: t.textSecondary }]}>Fuel your goals</Text>
                </LinearGradient>
              </AnimatedPress>

              <AnimatedPress onPress={() => router.push('/workouts')} scaleTo={0.96} style={{ flex: 1 }}>
                <LinearGradient
                  colors={[`${t.secondary}18`, `${t.secondary}08`]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.discoverTile, { borderColor: `${t.secondary}25` }]}
                >
                  <Ionicons name="barbell" size={28} color={t.secondary} />
                  <Text style={[styles.discoverTileTitle, { color: t.text }]}>Workouts</Text>
                  <Text style={[styles.discoverTileSub, { color: t.textSecondary }]}>Move your body</Text>
                </LinearGradient>
              </AnimatedPress>
            </View>

            {/* Row 2: Peptides + Recovery */}
            <View style={styles.discoverRow}>
              <AnimatedPress onPress={() => router.push('/(tabs)/my-stacks')} scaleTo={0.96} style={{ flex: 1 }}>
                <LinearGradient
                  colors={[`${t.accent}20`, `${t.accent}08`]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.discoverTile, { borderColor: `${t.accent}30` }]}
                >
                  <Ionicons name="flask" size={28} color={t.accent} />
                  <Text style={[styles.discoverTileTitle, { color: t.text }]}>Peptides</Text>
                  <Text style={[styles.discoverTileSub, { color: t.textSecondary }]}>Optimize & recover</Text>
                </LinearGradient>
              </AnimatedPress>

              <AnimatedPress onPress={() => router.push('/(tabs)/check-in')} scaleTo={0.96} style={{ flex: 1 }}>
                <LinearGradient
                  colors={['rgba(169,196,166,0.20)', 'rgba(169,196,166,0.06)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.discoverTile, { borderColor: 'rgba(169,196,166,0.30)' }]}
                >
                  <Ionicons name="moon" size={28} color="#8faa8b" />
                  <Text style={[styles.discoverTileTitle, { color: t.text }]}>Recovery</Text>
                  <Text style={[styles.discoverTileSub, { color: t.textSecondary }]}>Rest & recharge</Text>
                </LinearGradient>
              </AnimatedPress>
            </View>
          </View>
        </Animated.View>

        {/* ═══════════════════════════════════════════════════════════════
            MAX YOUR STACK — Premium CTA (non-pro users)
        ═══════════════════════════════════════════════════════════════ */}
        {!isPro && (
          <Animated.View entering={FadeInDown.delay(250).duration(400)} style={styles.section}>
            <TouchableOpacity
              onPress={() => router.push('/subscription')}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[t.primary, t.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.maxStackCTA}
              >
                <Text style={styles.maxStackCTALabel}>UNLOCK EVERYTHING</Text>
                <Text style={styles.maxStackCTATitle}>Max Your Stack</Text>
                <Text style={styles.maxStackCTASub}>
                  Custom workouts, meal plans, and peptide coaching — built for your goals.
                </Text>
                <View style={styles.maxStackCTABtn}>
                  <Text style={styles.maxStackCTABtnText}>Explore Plans</Text>
                  <Ionicons name="arrow-forward" size={16} color={t.primary} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  heroSection: {
    paddingTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  heroGreeting: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -0.5,
    marginBottom: 16,
    paddingHorizontal: Spacing.lg,
  },
  statPillsRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: Spacing.lg,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 10,
    minHeight: 44,
    borderWidth: 1,
  },
  statPillValue: {
    fontSize: 14,
    fontWeight: '800',
  },
  statPillLabel: {
    fontSize: 12,
    fontWeight: '500',
  },

  // ── Sections ─────────────────────────────────────────────────────────────
  surfaceBand: {
    paddingVertical: 4,
    marginBottom: 20,
  },
  section: {
    paddingHorizontal: Spacing.lg,
    marginBottom: 20,
  },
  sectionHeader: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  sectionAccent: {
    width: 28,
    height: 3,
    borderRadius: 2,
  },

  // ── Generic card ─────────────────────────────────────────────────────────
  card: {
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },

  // ── Setup checklist ──────────────────────────────────────────────────────
  setupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    minHeight: 48,
  },
  setupRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.06)',
  },
  setupLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  setupLabelDone: {
    color: '#C7C7CC',
    textDecorationLine: 'line-through',
  },

  // ── Nudge Card (MFP logging progress style) ──────────────────────────────
  nudgeCard: {
    borderRadius: BorderRadius.lg,
    padding: 20,
    borderWidth: 1,
  },
  nudgeLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  nudgeTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  nudgeBody: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    paddingRight: 32,
  },
  nudgeHighlight: {
    fontWeight: '700',
  },
  nudgeChevron: {
    position: 'absolute',
    right: 20,
    top: '50%',
  },

  // ── Discover Grid (2x2 MFP style) ───────────────────────────────────────
  discoverGrid: {
    gap: 10,
  },
  discoverRow: {
    flexDirection: 'row',
    gap: 10,
  },
  discoverTile: {
    flex: 1,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 8,
  },
  discoverTileTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 4,
  },
  discoverTileSub: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },

  // ── Search bar ───────────────────────────────────────────────────────────
  searchSection: {
    paddingHorizontal: Spacing.lg,
    marginBottom: 14,
    zIndex: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 16,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: 48,
  },
  searchResults: {
    position: 'absolute',
    top: 50,
    left: Spacing.lg,
    right: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 20,
  },
  searchResultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    minHeight: 48,
  },
  searchResultIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchResultText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },

  // ── Max Your Stack CTA (bottom banner) ───────────────────────────────────
  maxStackCTA: {
    borderRadius: BorderRadius.lg,
    padding: 24,
    alignItems: 'center',
  },
  maxStackCTALabel: {
    fontSize: 10,
    fontWeight: '800',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  maxStackCTATitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 6,
    textAlign: 'center',
  },
  maxStackCTASub: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  maxStackCTABtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  maxStackCTABtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D2D2D',
  },
});
