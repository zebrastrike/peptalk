/**
 * Food Search Screen
 *
 * Browse and search the built-in food database, pick a portion,
 * and log it directly to the meal store.
 *
 * Route: /nutrition/food-search
 * Params (optional):
 *   mealId   – if provided, adds to an existing meal entry
 *   mealType – pre-selects the meal type chip
 */

import React, { useState, useMemo, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  TextInput,
  Modal,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { GlassCard } from '../../src/components/GlassCard';
import { GradientButton } from '../../src/components/GradientButton';
import { useTheme } from '../../src/hooks/useTheme';
import {
  Colors,
  Spacing,
  FontSizes,
  BorderRadius,
} from '../../src/constants/theme';
import { useMealStore } from '../../src/store/useMealStore';
import {
  COMMON_FOODS,
  FOOD_CATEGORIES,
  searchFoods,
  getFoodsByCategory,
  calcMacros,
  type BuiltinFood,
} from '../../src/data/commonFoods';
import type { MealType } from '../../src/types/fitness';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const MEAL_TYPES: { key: MealType; label: string; icon: string }[] = [
  { key: 'breakfast',    label: 'Breakfast',    icon: 'sunny-outline' },
  { key: 'lunch',        label: 'Lunch',        icon: 'restaurant-outline' },
  { key: 'dinner',       label: 'Dinner',       icon: 'moon-outline' },
  { key: 'snack',        label: 'Snack',        icon: 'cafe-outline' },
  { key: 'pre_workout',  label: 'Pre-Workout',  icon: 'flash-outline' },
  { key: 'post_workout', label: 'Post-Workout', icon: 'fitness-outline' },
];

const CATEGORY_COLORS: Record<BuiltinFood['category'], string> = {
  protein:     Colors.pepTeal,
  grains:      '#f59e0b',
  vegetables:  '#22c55e',
  fruits:      '#f97316',
  fats:        '#a855f7',
  dairy:       Colors.pepBlue,
  carbs:       '#ec4899',
  supplements: Colors.rose,
};

const today = () => new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------------------
// Portion Picker Modal
// ---------------------------------------------------------------------------

interface PortionPickerProps {
  food: BuiltinFood | null;
  visible: boolean;
  onClose: () => void;
  onLog: (food: BuiltinFood, grams: number, mealType: MealType) => void;
  initialMealType?: MealType;
}

function PortionPickerModal({
  food,
  visible,
  onClose,
  onLog,
  initialMealType = 'lunch',
}: PortionPickerProps) {
  const [grams, setGrams] = useState('100');
  const [customInput, setCustomInput] = useState('');
  const [mealType, setMealType] = useState<MealType>(initialMealType);
  const [useCustom, setUseCustom] = useState(false);

  const gramsNum = parseFloat(useCustom ? customInput : grams) || 0;
  const macros = food ? calcMacros(food, gramsNum) : null;

  const handleServingPreset = (g: number) => {
    setUseCustom(false);
    setGrams(String(g));
  };

  const handleCustomInput = (val: string) => {
    setCustomInput(val);
    setUseCustom(true);
  };

  const handleLog = () => {
    if (!food) return;
    if (gramsNum <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid gram amount.');
      return;
    }
    onLog(food, gramsNum, mealType);
  };

  if (!food) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContent}>
          {/* Handle bar */}
          <View style={styles.modalHandle} />

          {/* Header */}
          <View style={styles.modalHeader}>
            <View style={styles.modalFoodTitle}>
              <Text style={styles.modalEmoji}>{food.emoji}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.modalFoodName}>{food.name}</Text>
                <View style={[styles.categoryBadge, { backgroundColor: CATEGORY_COLORS[food.category] + '22', borderColor: CATEGORY_COLORS[food.category] + '55' }]}>
                  <Text style={[styles.categoryBadgeText, { color: CATEGORY_COLORS[food.category] }]}>
                    {food.category.charAt(0).toUpperCase() + food.category.slice(1)}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={22} color={Colors.darkText} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
            {/* Macro summary card */}
            {macros && (
              <GlassCard variant="gradient" style={styles.macroCard}>
                <Text style={styles.macroCardTitle}>
                  {gramsNum}g serving
                </Text>
                <View style={styles.macroGrid}>
                  <MacroChip label="Calories" value={String(macros.calories)} unit="" color={Colors.pepCyan} />
                  <MacroChip label="Protein"  value={String(macros.proteinGrams)} unit="g" color={Colors.pepTeal} />
                  <MacroChip label="Carbs"    value={String(macros.carbsGrams)} unit="g" color={Colors.pepBlue} />
                  <MacroChip label="Fat"      value={String(macros.fatGrams)} unit="g" color="#a855f7" />
                  <MacroChip label="Fiber"    value={String(macros.fiberGrams)} unit="g" color={Colors.sage} />
                </View>
              </GlassCard>
            )}

            {/* Serving presets */}
            <Text style={styles.sectionLabel}>Quick Servings</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.presetsRow}>
              {food.commonServings.map((s) => {
                const isActive = !useCustom && grams === String(s.grams);
                return (
                  <TouchableOpacity
                    key={s.label}
                    style={[styles.presetChip, isActive && styles.presetChipActive]}
                    onPress={() => handleServingPreset(s.grams)}
                  >
                    <Text style={[styles.presetChipText, isActive && styles.presetChipTextActive]}>
                      {s.label}
                    </Text>
                    <Text style={[styles.presetChipGrams, isActive && styles.presetChipTextActive]}>
                      {s.grams}g
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Custom gram input */}
            <Text style={styles.sectionLabel}>Custom Amount</Text>
            <View style={styles.customInputRow}>
              <TextInput
                style={[styles.gramInput, useCustom && styles.gramInputActive]}
                value={customInput}
                onChangeText={handleCustomInput}
                keyboardType="decimal-pad"
                placeholder="Enter grams"
                placeholderTextColor={Colors.darkTextSecondary}
                returnKeyType="done"
              />
              <Text style={styles.gramLabel}>g</Text>
            </View>

            {/* Meal type selector */}
            <Text style={styles.sectionLabel}>Meal Type</Text>
            <View style={styles.mealTypeGrid}>
              {MEAL_TYPES.map((mt) => (
                <TouchableOpacity
                  key={mt.key}
                  style={[styles.mealTypeChip, mealType === mt.key && styles.mealTypeChipActive]}
                  onPress={() => setMealType(mt.key)}
                >
                  <Ionicons
                    name={mt.icon as any}
                    size={14}
                    color={mealType === mt.key ? '#fff' : Colors.darkTextSecondary}
                  />
                  <Text style={[styles.mealTypeText, mealType === mt.key && styles.mealTypeTextActive]}>
                    {mt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Per 100g reference */}
            <GlassCard style={styles.ref100Card}>
              <Text style={styles.ref100Title}>Per 100g</Text>
              <View style={styles.ref100Row}>
                <Text style={styles.ref100Item}>{food.per100g.calories} cal</Text>
                <Text style={styles.ref100Item}>{food.per100g.proteinGrams}g protein</Text>
                <Text style={styles.ref100Item}>{food.per100g.carbsGrams}g carbs</Text>
                <Text style={styles.ref100Item}>{food.per100g.fatGrams}g fat</Text>
              </View>
            </GlassCard>
          </ScrollView>

          {/* Log button */}
          <View style={styles.logBtnWrapper}>
            <GradientButton
              label={`Log ${gramsNum > 0 ? gramsNum + 'g of ' : ''}${food.name}`}
              onPress={handleLog}
              disabled={gramsNum <= 0}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

function MacroChip({
  label,
  value,
  unit,
  color,
}: {
  label: string;
  value: string;
  unit: string;
  color: string;
}) {
  return (
    <View style={[styles.macroChip, { borderColor: color + '40' }]}>
      <Text style={[styles.macroChipValue, { color }]}>
        {value}{unit}
      </Text>
      <Text style={styles.macroChipLabel}>{label}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Food Row
// ---------------------------------------------------------------------------

function FoodRow({
  food,
  onPress,
}: {
  food: BuiltinFood;
  onPress: (food: BuiltinFood) => void;
}) {
  const t = useTheme();
  const color = CATEGORY_COLORS[food.category];

  return (
    <TouchableOpacity
      style={styles.foodRow}
      onPress={() => onPress(food)}
      activeOpacity={0.75}
    >
      <View style={[styles.foodEmojiBg, { backgroundColor: color + '1A' }]}>
        <Text style={styles.foodEmoji}>{food.emoji}</Text>
      </View>
      <View style={styles.foodInfo}>
        <Text style={[styles.foodName, { color: t.text }]} numberOfLines={1}>{food.name}</Text>
        <Text style={[styles.foodMacros, { color: t.textSecondary }]}>
          {food.per100g.proteinGrams}g protein · {food.per100g.carbsGrams}g carbs · {food.per100g.fatGrams}g fat
        </Text>
      </View>
      <View style={styles.foodCalBadge}>
        <Text style={styles.foodCalNum}>{food.per100g.calories}</Text>
        <Text style={[styles.foodCalLabel, { color: t.textSecondary }]}>cal/100g</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color={t.textSecondary} style={{ marginLeft: 4 }} />
    </TouchableOpacity>
  );
}

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function FoodSearchScreen() {
  const router = useRouter();
  const t = useTheme();
  const params = useLocalSearchParams<{ mealId?: string; mealType?: MealType }>();
  const { addMeal, updateMeal, meals } = useMealStore();

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BuiltinFood['category'] | null>(null);
  const [selectedFood, setSelectedFood] = useState<BuiltinFood | null>(null);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [lastLogged, setLastLogged] = useState<string>('');

  const initialMealType: MealType =
    (params.mealType as MealType) ?? 'lunch';

  const results = useMemo(() => {
    let pool = activeCategory ? getFoodsByCategory(activeCategory) : COMMON_FOODS;
    if (query.trim()) {
      const q = query.toLowerCase();
      pool = pool.filter((f) => f.name.toLowerCase().includes(q));
    }
    return pool;
  }, [query, activeCategory]);

  const handleFoodPress = useCallback((food: BuiltinFood) => {
    setSelectedFood(food);
    setPickerVisible(true);
  }, []);

  const handleLog = useCallback(
    (food: BuiltinFood, grams: number, mealType: MealType) => {
      const macros = calcMacros(food, grams);
      const dateKey = today();

      if (params.mealId) {
        // Adding to an existing meal
        const existing = meals.find((m) => m.id === params.mealId);
        if (existing) {
          updateMeal(params.mealId, {
            foods: [
              ...existing.foods,
              {
                foodId: food.id,
                foodName: `${food.name} (${grams}g)`,
                servings: 1,
                calories: macros.calories,
                proteinGrams: macros.proteinGrams,
                carbsGrams: macros.carbsGrams,
                fatGrams: macros.fatGrams,
              },
            ],
          });
        }
      } else {
        // Creating a new meal entry
        addMeal({
          id: `meal-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          date: dateKey,
          mealType,
          foods: [
            {
              foodId: food.id,
              foodName: `${food.name} (${grams}g)`,
              servings: 1,
              calories: macros.calories,
              proteinGrams: macros.proteinGrams,
              carbsGrams: macros.carbsGrams,
              fatGrams: macros.fatGrams,
            },
          ],
          timestamp: new Date().toISOString(),
        });
      }

      setPickerVisible(false);
      setLastLogged(`${food.name} (${grams}g) — ${macros.calories} cal`);
      setSuccessVisible(true);
      setTimeout(() => setSuccessVisible(false), 3000);
    },
    [addMeal, updateMeal, meals, params.mealId],
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: t.bg }]} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={t.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: t.text }]}>Food Search</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <View style={[styles.searchBar, { backgroundColor: t.inputBg, borderColor: t.inputBorder }]}>
          <Ionicons name="search" size={18} color={t.textSecondary} />
          <TextInput
            style={[styles.searchInput, { color: t.text }]}
            value={query}
            onChangeText={setQuery}
            placeholder="Search foods..."
            placeholderTextColor={t.placeholder}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')}>
              <Ionicons name="close-circle" size={18} color={t.textSecondary} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Category chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryScrollContent}
      >
        <TouchableOpacity
          style={[styles.catChip, { backgroundColor: t.glass, borderColor: t.glassBorder }, activeCategory === null && styles.catChipActive]}
          onPress={() => setActiveCategory(null)}
        >
          <Text style={[styles.catChipText, { color: t.textSecondary }, activeCategory === null && styles.catChipTextActive]}>
            All
          </Text>
        </TouchableOpacity>
        {FOOD_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <TouchableOpacity
              key={cat.key}
              style={[
                styles.catChip,
                { backgroundColor: t.glass, borderColor: t.glassBorder },
                isActive && [styles.catChipActive, { backgroundColor: CATEGORY_COLORS[cat.key] + '33', borderColor: CATEGORY_COLORS[cat.key] + '66' }],
              ]}
              onPress={() => setActiveCategory(isActive ? null : cat.key)}
            >
              <Text style={styles.catChipEmoji}>{cat.emoji}</Text>
              <Text style={[styles.catChipText, { color: t.textSecondary }, isActive && [styles.catChipTextActive, { color: CATEGORY_COLORS[cat.key] }]]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Results count */}
      <View style={styles.resultsHeader}>
        <Text style={[styles.resultsCount, { color: t.textSecondary }]}>
          {results.length} food{results.length !== 1 ? 's' : ''}
          {activeCategory ? ` · ${activeCategory}` : ''}
          {query ? ` · "${query}"` : ''}
        </Text>
      </View>

      {/* Success toast */}
      {successVisible && (
        <View style={styles.successToast}>
          <Ionicons name="checkmark-circle" size={18} color={Colors.success} />
          <Text style={styles.successText}>Logged: {lastLogged}</Text>
        </View>
      )}

      {/* Food list */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodRow food={item} onPress={handleFoodPress} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={[styles.separator, { backgroundColor: t.glassBorder }]} />}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={40} color={t.textSecondary} />
            <Text style={[styles.emptyTitle, { color: t.text }]}>No foods found</Text>
            <Text style={[styles.emptyDesc, { color: t.textSecondary }]}>Try a different search term or category</Text>
          </View>
        }
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      />

      {/* Portion Picker */}
      <PortionPickerModal
        food={selectedFood}
        visible={pickerVisible}
        onClose={() => setPickerVisible(false)}
        onLog={handleLog}
        initialMealType={initialMealType}
      />
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBg,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.darkText,
  },

  // Search
  searchContainer: {
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.glassBlue,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.glassBlueBorder,
    paddingHorizontal: 14,
    height: 46,
  },
  searchInput: {
    flex: 1,
    fontSize: FontSizes.md,
    color: Colors.darkText,
  },

  // Category chips
  categoryScroll: {
    marginBottom: 4,
  },
  categoryScrollContent: {
    paddingHorizontal: Spacing.md,
    gap: 8,
  },
  catChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.glassWhite,
    borderRadius: BorderRadius.full,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  catChipActive: {
    backgroundColor: Colors.glassBlue,
    borderColor: Colors.glassBlueBorder,
  },
  catChipEmoji: {
    fontSize: 13,
  },
  catChipText: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
    color: Colors.darkTextSecondary,
  },
  catChipTextActive: {
    color: Colors.pepTeal,
  },

  // Results
  resultsHeader: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
  },
  resultsCount: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    fontStyle: 'italic',
  },

  // List
  listContent: {
    paddingHorizontal: Spacing.md,
    paddingBottom: 40,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginVertical: 1,
  },

  // Food row
  foodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  foodEmojiBg: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodEmoji: {
    fontSize: 22,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.darkText,
    marginBottom: 2,
  },
  foodMacros: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
  },
  foodCalBadge: {
    alignItems: 'center',
  },
  foodCalNum: {
    fontSize: FontSizes.md,
    fontWeight: '800',
    color: Colors.pepTeal,
  },
  foodCalLabel: {
    fontSize: 9,
    color: Colors.darkTextSecondary,
    marginTop: 1,
  },

  // Empty state
  emptyState: {
    alignItems: 'center',
    paddingTop: 60,
    gap: 8,
  },
  emptyTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '600',
    color: Colors.darkText,
  },
  emptyDesc: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
  },

  // Success toast
  successToast: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: Spacing.md,
    marginBottom: 8,
    backgroundColor: Colors.success + '22',
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.success + '55',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  successText: {
    flex: 1,
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.success,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.darkCard,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: Spacing.lg,
    paddingTop: 12,
    paddingBottom: 32,
    maxHeight: '90%',
    flex: 0,
  },
  modalHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignSelf: 'center',
    marginBottom: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  modalFoodTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  modalEmoji: {
    fontSize: 36,
    marginTop: 2,
  },
  modalFoodName: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.darkText,
    marginBottom: 6,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: BorderRadius.full,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
  },
  categoryBadgeText: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.glassWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Macro card
  macroCard: {
    marginBottom: Spacing.md,
  },
  macroCardTitle: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.darkText,
    marginBottom: 12,
    textAlign: 'center',
  },
  macroGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  macroChip: {
    flex: 1,
    minWidth: '18%',
    alignItems: 'center',
    backgroundColor: Colors.glassWhite,
    borderRadius: BorderRadius.sm,
    paddingVertical: 8,
    borderWidth: 1,
  },
  macroChipValue: {
    fontSize: FontSizes.md,
    fontWeight: '800',
  },
  macroChipLabel: {
    fontSize: 9,
    color: Colors.darkTextSecondary,
    marginTop: 2,
    fontWeight: '500',
  },

  // Serving presets
  sectionLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.darkText,
    marginBottom: 8,
    marginTop: 4,
  },
  presetsRow: {
    marginBottom: Spacing.md,
  },
  presetChip: {
    alignItems: 'center',
    backgroundColor: Colors.glassWhite,
    borderRadius: BorderRadius.md,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    minWidth: 80,
  },
  presetChipActive: {
    backgroundColor: Colors.pepTeal + '33',
    borderColor: Colors.pepTeal + '88',
  },
  presetChipText: {
    fontSize: FontSizes.xs,
    fontWeight: '600',
    color: Colors.darkTextSecondary,
    textAlign: 'center',
  },
  presetChipGrams: {
    fontSize: 10,
    color: Colors.darkTextSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
  presetChipTextActive: {
    color: Colors.pepTeal,
  },

  // Custom gram input
  customInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: Spacing.md,
  },
  gramInput: {
    flex: 1,
    backgroundColor: Colors.glassBlue,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.glassBlueBorder,
    paddingHorizontal: 14,
    height: 48,
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.darkText,
  },
  gramInputActive: {
    borderColor: Colors.pepTeal,
  },
  gramLabel: {
    fontSize: FontSizes.xl,
    fontWeight: '700',
    color: Colors.darkTextSecondary,
    width: 24,
  },

  // Meal type
  mealTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: Spacing.md,
  },
  mealTypeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: Colors.glassBlue,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: Colors.glassBlueBorder,
  },
  mealTypeChipActive: {
    backgroundColor: Colors.pepTeal,
    borderColor: Colors.pepTeal,
  },
  mealTypeText: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    fontWeight: '500',
  },
  mealTypeTextActive: {
    color: '#fff',
    fontWeight: '700',
  },

  // Per-100g reference card
  ref100Card: {
    marginBottom: Spacing.md,
  },
  ref100Title: {
    fontSize: FontSizes.xs,
    fontWeight: '700',
    color: Colors.darkTextSecondary,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  ref100Row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  ref100Item: {
    fontSize: FontSizes.xs,
    color: Colors.darkText,
    fontWeight: '600',
    backgroundColor: Colors.glassWhite,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  // Log button
  logBtnWrapper: {
    marginTop: 12,
  },
});
