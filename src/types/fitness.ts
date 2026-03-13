/**
 * Fitness & Nutrition type system for PepTalk.
 *
 * Covers: exercises, workout programs, meal tracking, macro targets,
 * recipes, trainer subscriptions, and progress tracking.
 */

// ---------------------------------------------------------------------------
// Exercise & Workout Types
// ---------------------------------------------------------------------------

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
  | 'forearms'
  | 'full_body'
  | 'pelvic_floor'
  | 'cardio';

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

export type VideoSource = 'youtube' | 'vimeo' | 'awss3' | 'none';

export interface Exercise {
  id: string;
  name: string;
  /** Normalized lowercase name for search/dedup */
  normalizedName: string;
  primaryMuscle: MuscleGroup;
  secondaryMuscles: MuscleGroup[];
  equipment: Equipment[];
  difficulty: ExerciseDifficulty;
  /** Whether the exercise is time-based (planks, holds) vs rep-based */
  isTimeBased: boolean;
  /** Optional video/image reference */
  mediaUrl?: string;
  /** Brief cue or instruction */
  instructions?: string;
  /** Tags for searchability */
  tags: string[];
  /** Trainerize exercise ID for cross-referencing scraped data */
  trainerizeId?: number;
  /** Where the video is hosted */
  videoSource?: VideoSource;
  /** HD thumbnail URL */
  thumbnailUrl?: string;
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

export type SubscriptionTier = 'free' | 'plus' | 'pro';

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
    'public_workouts',
    'basic_exercise_library',
    'manual_meal_log',
    'basic_macro_targets',
    'peptide_education',
    'wellness_journal',
    'check_ins',
    'dose_logging',
    'learn_hub',
    'basic_ai_chat',
  ],
  plus: [
    'all_free_features',
    'full_exercise_library',
    'workout_programs',
    'ai_recipe_generator',
    'custom_meal_plans',
    'grocery_list',
    'unlimited_ai_chat',
    'unlimited_journal',
    'health_reports_basic',
    'health_device_sync',
    'no_ads',
    'progress_photos',
    'advanced_analytics',
  ],
  pro: [
    'all_plus_features',
    'ai_health_planner',
    'nutritionist_consult',
    'health_reports_full',
    'export_data',
    'ai_workout_builder',
    'priority_support',
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
