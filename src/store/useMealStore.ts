/**
 * Meal / nutrition store — tracks meals, macros, and daily targets.
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { secureStorage } from '../services/secureStorage';
import type { MealEntry, MacroTargets, FoodItem } from '../types/fitness';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DailyTotals {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
}

export interface PlannedMeal {
  id: string;
  date: string; // YYYY-MM-DD
  mealType: MealEntry['mealType'];
  name: string;
  description: string;
  macros: { calories: number; proteinGrams: number; carbsGrams: number; fatGrams: number };
  completed: boolean;
}

interface MealState {
  /** User's macro targets */
  targets: MacroTargets;
  /** All meal entries */
  meals: MealEntry[];
  /** Custom foods the user has created */
  customFoods: FoodItem[];
  /** Water intake logs: { date: oz } */
  waterLog: Record<string, number>;
  /** Future-dated planned meals */
  mealPlan: PlannedMeal[];
}

interface MealActions {
  // Targets
  setTargets: (targets: MacroTargets) => void;

  // Meals
  addMeal: (meal: MealEntry) => void;
  updateMeal: (mealId: string, updates: Partial<MealEntry>) => void;
  removeMeal: (mealId: string) => void;
  getMealsByDate: (date: string) => MealEntry[];
  getDailyTotals: (date: string) => DailyTotals;
  getDailyProgress: (date: string) => {
    totals: DailyTotals;
    targets: MacroTargets;
    caloriePercent: number;
    proteinPercent: number;
    carbsPercent: number;
    fatPercent: number;
  };

  // Custom foods
  addCustomFood: (food: FoodItem) => void;
  removeCustomFood: (foodId: string) => void;

  // Water
  logWater: (date: string, oz: number) => void;
  getWater: (date: string) => number;

  // Meal planning
  addPlannedMeal: (meal: PlannedMeal) => void;
  removePlannedMeal: (mealId: string) => void;
  completePlannedMeal: (mealId: string) => void;
  getPlannedMealsByDate: (date: string) => PlannedMeal[];

  clearAll: () => void;
}

// ---------------------------------------------------------------------------
// Default targets (2000 cal balanced diet)
// ---------------------------------------------------------------------------

const DEFAULT_TARGETS: MacroTargets = {
  calories: 2000,
  proteinGrams: 150,
  carbsGrams: 200,
  fatGrams: 67,
  fiberGrams: 30,
  waterOz: 100,
};

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useMealStore = create<MealState & MealActions>()(
  persist(
    (set, get) => ({
      targets: DEFAULT_TARGETS,
      meals: [],
      customFoods: [],
      waterLog: {},
      mealPlan: [],

      // -----------------------------------------------------------------------
      // Targets
      // -----------------------------------------------------------------------

      setTargets: (targets) => set({ targets }),

      // -----------------------------------------------------------------------
      // Meals
      // -----------------------------------------------------------------------

      addMeal: (meal) => set({ meals: [meal, ...get().meals] }),

      updateMeal: (mealId, updates) =>
        set({
          meals: get().meals.map((m) =>
            m.id === mealId ? { ...m, ...updates } : m,
          ),
        }),

      removeMeal: (mealId) =>
        set({ meals: get().meals.filter((m) => m.id !== mealId) }),

      getMealsByDate: (date) => get().meals.filter((m) => m.date === date),

      getDailyTotals: (date) => {
        const dayMeals = get().meals.filter((m) => m.date === date);
        const totals: DailyTotals = {
          calories: 0,
          proteinGrams: 0,
          carbsGrams: 0,
          fatGrams: 0,
          fiberGrams: 0,
        };

        for (const meal of dayMeals) {
          if (meal.quickLog) {
            totals.calories += meal.quickLog.calories;
            totals.proteinGrams += meal.quickLog.proteinGrams;
            totals.carbsGrams += meal.quickLog.carbsGrams;
            totals.fatGrams += meal.quickLog.fatGrams;
          } else {
            for (const food of meal.foods) {
              totals.calories += food.calories;
              totals.proteinGrams += food.proteinGrams;
              totals.carbsGrams += food.carbsGrams;
              totals.fatGrams += food.fatGrams;
            }
          }
        }

        return totals;
      },

      getDailyProgress: (date) => {
        const totals = get().getDailyTotals(date);
        const targets = get().targets;
        const pct = (val: number, target: number) =>
          target > 0 ? Math.round((val / target) * 100) : 0;

        return {
          totals,
          targets,
          caloriePercent: pct(totals.calories, targets.calories),
          proteinPercent: pct(totals.proteinGrams, targets.proteinGrams),
          carbsPercent: pct(totals.carbsGrams, targets.carbsGrams),
          fatPercent: pct(totals.fatGrams, targets.fatGrams),
        };
      },

      // -----------------------------------------------------------------------
      // Custom foods
      // -----------------------------------------------------------------------

      addCustomFood: (food) =>
        set({ customFoods: [...get().customFoods, food] }),

      removeCustomFood: (foodId) =>
        set({
          customFoods: get().customFoods.filter((f) => f.id !== foodId),
        }),

      // -----------------------------------------------------------------------
      // Water
      // -----------------------------------------------------------------------

      logWater: (date, oz) =>
        set({
          waterLog: {
            ...get().waterLog,
            [date]: (get().waterLog[date] ?? 0) + oz,
          },
        }),

      getWater: (date) => get().waterLog[date] ?? 0,

      // -----------------------------------------------------------------------
      // Meal planning
      // -----------------------------------------------------------------------

      addPlannedMeal: (meal) =>
        set({ mealPlan: [...get().mealPlan, meal] }),

      removePlannedMeal: (mealId) =>
        set({ mealPlan: get().mealPlan.filter((m) => m.id !== mealId) }),

      completePlannedMeal: (mealId) =>
        set({
          mealPlan: get().mealPlan.map((m) =>
            m.id === mealId ? { ...m, completed: true } : m,
          ),
        }),

      getPlannedMealsByDate: (date) =>
        get().mealPlan.filter((m) => m.date === date),

      // -----------------------------------------------------------------------
      // Clear
      // -----------------------------------------------------------------------

      clearAll: () =>
        set({
          targets: DEFAULT_TARGETS,
          meals: [],
          customFoods: [],
          waterLog: {},
          mealPlan: [],
        }),
    }),
    {
      name: 'peptalk-meals',
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        targets: state.targets,
        meals: state.meals,
        customFoods: state.customFoods,
        waterLog: state.waterLog,
        mealPlan: state.mealPlan,
      }),
    },
  ),
);

export default useMealStore;
