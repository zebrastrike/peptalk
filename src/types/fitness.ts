/**
 * Fitness & Nutrition type system for PepTalk.
 *
 * Covers: exercises, workout programs, meal tracking, macro targets,
 * recipes, trainer subscriptions, and progress tracking.
 */

// ---------------------------------------------------------------------------
// Exercise & Workout Types
// ---------------------------------------------------------------------------

/** Muscle groups — matches Jamie's exercise spreadsheet taxonomy */
export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'core'
  | 'quads'
  | 'hamstrings'
  | 'glutes'
  | 'calves'
  | 'trapezius'
  | 'forearms'
  | 'full_body'
  | 'pelvic_floor'
  | 'cardio';

/** Circuit & warm-up tags for WOD / workout builder grouping */
export type ExerciseTag =
  | 'circuit_cardio'
  | 'circuit_lower'
  | 'circuit_pull'
  | 'circuit_push'
  | 'warm_up_lower'
  | 'warm_up_upper';

/** Equipment inferred from exercise name */
export type Equipment =
  | 'none'
  | 'dumbbell'
  | 'barbell'
  | 'kettlebell'
  | 'cable'
  | 'machine'
  | 'band'
  | 'stability_ball'
  | 'medicine_ball'
  | 'bench'
  | 'smith_machine'
  | 'pull_up_bar'
  | 'plate'
  | 'towel'
  | 'block'
  | 'jump_rope';

export type ExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced';

/** P1 = highest priority / most used, P4 = specialized */
export type ExercisePriority = 'P1' | 'P2' | 'P3' | 'P4';

/** Where the exercise can be performed */
export type ExerciseLocation = 'any' | 'gym' | 'home' | 'outdoor';

/** Gender suitability */
export type ExerciseGender = 'anyone' | 'men' | 'women';

/** What metrics apply to this exercise */
export type ExerciseMetric = 'reps' | 'weight' | 'duration';

export interface Exercise {
  id: string;
  name: string;
  /** Normalized lowercase name for search/dedup */
  normalizedName: string;
  primaryMuscle: MuscleGroup;
  secondaryMuscles: MuscleGroup[];
  /** Circuit/warm-up tags for workout builder grouping */
  tags: ExerciseTag[];
  equipment: Equipment[];
  difficulty: ExerciseDifficulty;
  /** Whether the exercise is time-based (planks, holds) vs rep-based */
  isTimeBased: boolean;

  // ── Jamie's taxonomy ──────────────────────────────────────────────────
  /** Priority class: P1 (core movements) → P4 (specialized) */
  priority: ExercisePriority;
  /** Where this can be done */
  location: ExerciseLocation;
  /** Gender suitability */
  gender: ExerciseGender;
  /** Applicable metrics (reps, weight, duration) */
  metrics: ExerciseMetric[];

  // ── Media (populated when videos are hosted) ──────────────────────────
  /** Video URL (self-hosted CDN) */
  videoUrl?: string;
  /** Thumbnail image URL */
  thumbnailUrl?: string;
  /** Brief cue or instruction */
  instructions?: string;
}

export type SetType = 'normal' | 'super_set' | 'super_set_2' | 'drop_set' | 'giant_set';

export interface ExerciseSet {
  /** Exercise reference by ID */
  exerciseId: string;
  /** e.g. [20, 20, 20] means 3 sets of 20 reps */
  reps: number[];
  setType: SetType;
  /** For time-based exercises: seconds per set */
  timeSeconds?: number;
  /** Rest between sets in seconds */
  restSeconds?: number;
  /** Tempo notation e.g. "3-1-2" */
  tempo?: string;
}

export interface WorkoutDay {
  id: string;
  name: string;
  /** e.g. "W1/D1" */
  code: string;
  exercises: ExerciseSet[];
  /** Estimated duration in minutes */
  estimatedMinutes?: number;
}

export type ProgramDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'all_levels';
export type ProgramCategory =
  | 'core'
  | 'strength'
  | 'hypertrophy'
  | 'fat_loss'
  | 'pelvic_floor'
  | 'mobility'
  | 'cardio'
  | 'full_body'
  | 'upper_body'
  | 'lower_body'
  | 'challenge'
  | 'glutes'
  | 'posture'
  | 'corrective'
  | 'starter'
  | 'trial'
  | 'functional'
  | 'trx'
  | 'hiit'
  | 'conditioning'
  | 'compound'
  | 'nutrition'
  | 'education'
  | 'wellness'
  | 'recomp';

export interface WorkoutWeek {
  weekNumber: number;
  days: WorkoutDay[];
}

export interface WorkoutProgram {
  id: string;
  name: string;
  description: string;
  /** Trainer/creator name */
  createdBy: string;
  category: ProgramCategory[];
  difficulty: ProgramDifficulty;
  weeks: WorkoutWeek[];
  /** Total number of weeks */
  durationWeeks: number;
  /** Whether this is premium-only content */
  isPremium: boolean;
  /** Cover image */
  imageUrl?: string;
  /** Tags for search */
  tags: string[];
}

// ---------------------------------------------------------------------------
// Workout Logging (user tracking)
// ---------------------------------------------------------------------------

export interface WorkoutLogSet {
  exerciseId: string;
  setNumber: number;
  reps: number;
  /** Weight used in lbs */
  weightLbs?: number;
  /** Duration in seconds for timed exercises */
  durationSeconds?: number;
  /** Did the user complete this set? */
  completed: boolean;
}

export interface WorkoutLog {
  id: string;
  date: string; // YYYY-MM-DD
  programId?: string;
  weekNumber?: number;
  dayId?: string;
  /** All sets logged during this workout */
  sets: WorkoutLogSet[];
  /** Total workout duration in minutes */
  durationMinutes: number;
  /** User rating 1-5 */
  rating?: 1 | 2 | 3 | 4 | 5;
  notes?: string;
  /** Optional workout name (used for free-form logs) */
  workoutName?: string;
  startedAt: string; // ISO
  completedAt?: string; // ISO
}

// ---------------------------------------------------------------------------
// Nutrition & Meal Types
// ---------------------------------------------------------------------------

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'pre_workout' | 'post_workout';

export interface MacroTargets {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams?: number;
  waterOz?: number;
}

export interface FoodItem {
  id: string;
  name: string;
  /** Serving size description e.g. "1 cup", "100g" */
  servingSize: string;
  servingGrams: number;
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
  /** Whether this is a user-created custom food */
  isCustom: boolean;
}

export interface MealEntry {
  id: string;
  date: string; // YYYY-MM-DD
  mealType: MealType;
  foods: {
    foodId: string;
    foodName: string;
    servings: number;
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
  }[];
  /** Quick-log: user can just enter totals without itemizing */
  quickLog?: {
    description: string;
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
  };
  notes?: string;
  timestamp: string; // ISO
}

// ---------------------------------------------------------------------------
// Recipe Types
// ---------------------------------------------------------------------------

export interface RecipeIngredient {
  name: string;
  amount: string;
  unit: string;
  calories?: number;
  proteinGrams?: number;
  carbsGrams?: number;
  fatGrams?: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  /** Prep time in minutes */
  prepMinutes: number;
  /** Cook time in minutes */
  cookMinutes: number;
  servings: number;
  ingredients: RecipeIngredient[];
  instructions: string[];
  /** Per-serving macros */
  macrosPerServing: {
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    fiberGrams: number;
  };
  tags: string[];
  /** AI-generated or curated */
  source: 'ai' | 'curated' | 'user';
  /** Diet compatibility */
  dietTypes: string[];
  /** Image URL */
  imageUrl?: string;
  isPremium: boolean;
}

// ---------------------------------------------------------------------------
// Progress Tracking
// ---------------------------------------------------------------------------

export interface ProgressPhoto {
  id: string;
  date: string; // YYYY-MM-DD
  /** Local URI to the photo */
  uri: string;
  category: 'front' | 'side' | 'back' | 'other';
  notes?: string;
}

export interface BodyMeasurement {
  id: string;
  date: string; // YYYY-MM-DD
  weightLbs?: number;
  bodyFatPercent?: number;
  waistInches?: number;
  hipsInches?: number;
  chestInches?: number;
  armInches?: number;
  thighInches?: number;
}

// ---------------------------------------------------------------------------
// Subscription / Paywall
// ---------------------------------------------------------------------------

export type SubscriptionTier = 'free' | 'pepe' | 'pepe_plus' | 'pepe_pro';

export interface SubscriptionState {
  tier: SubscriptionTier;
  /** RevenueCat or App Store product ID */
  productId?: string;
  expiresAt?: string; // ISO
  isActive: boolean;
}

/** What each tier can access */
export const TIER_FEATURES: Record<SubscriptionTier, string[]> = {
  free: [
    'peptide_library',
    'peptide_info',
    'dosing_calculator',
    'reconstitution_calculator',
    'calorie_counter',
    'health_checkins',
    'dose_logging',
    'calendar',
    'journal',
    'learn_hub',
    'stack_builder',
  ],
  pepe: [
    'all_free_features',
    'pepe_ai_unlimited',
    'pepe_dosing_qa',
    'pepe_health_suggestions',
  ],
  pepe_plus: [
    'all_pepe_features',
    'workout_programs',
    'ai_meal_plans',
    'nutrition_planning',
    'pepe_weekly_programs',
    'pepe_full_tracking',
    'grocery_from_plans',
    'recipe_generator',
  ],
  pepe_pro: [
    'all_pepe_plus_features',
    'health_device_sync',
    'ai_health_planner',
    'health_reports',
    'pdf_export',
    'nutritionist_consult',
    'data_export',
    'priority_support',
    'ad_free',
  ],
};

// ---------------------------------------------------------------------------
// Habit Tracking
// ---------------------------------------------------------------------------

export type HabitFrequency = 'daily' | 'weekdays' | 'custom';

export interface Habit {
  id: string;
  name: string;
  icon: string;
  frequency: HabitFrequency;
  /** For custom: which days of week (0=Sun, 6=Sat) */
  customDays?: number[];
  /** Target count per day (e.g. 8 glasses of water) */
  targetCount: number;
  createdAt: string;
}

export interface HabitLog {
  habitId: string;
  date: string; // YYYY-MM-DD
  count: number;
  completed: boolean;
}

// ---------------------------------------------------------------------------
// Grocery List
// ---------------------------------------------------------------------------

export type GroceryCategory =
  | 'produce'
  | 'protein'
  | 'dairy'
  | 'grains'
  | 'supplements'
  | 'other';

export interface GroceryItem {
  id: string;
  name: string;
  category: GroceryCategory;
  checked: boolean;
  /** Where the item was added from (e.g. recipe name) */
  addedFrom?: string;
}
