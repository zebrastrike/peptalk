/**
 * Nutrition Dashboard — macro tracking, meal log, water intake.
 */

import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { GlassCard } from '../../src/components/GlassCard';
import { GradientButton } from '../../src/components/GradientButton';
import { Colors, Gradients, Spacing, FontSizes, BorderRadius } from '../../src/constants/theme';
import { useMealStore } from '../../src/store/useMealStore';
import type { MealType } from '../../src/types/fitness';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const today = () => new Date().toISOString().slice(0, 10);

const MEAL_ICONS: Record<MealType, string> = {
  breakfast: 'sunny-outline',
  lunch: 'restaurant-outline',
  dinner: 'moon-outline',
  snack: 'cafe-outline',
  pre_workout: 'flash-outline',
  post_workout: 'fitness-outline',
};

const MEAL_LABELS: Record<MealType, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snack: 'Snack',
  pre_workout: 'Pre-Workout',
  post_workout: 'Post-Workout',
};

// ---------------------------------------------------------------------------
// Macro Ring (simple progress arc)
// ---------------------------------------------------------------------------

function MacroBar({
  label,
  current,
  target,
  color,
  unit,
}: {
  label: string;
  current: number;
  target: number;
  color: string;
  unit: string;
}) {
  const pct = target > 0 ? Math.min(100, Math.round((current / target) * 100)) : 0;

  return (
    <View style={styles.macroBar}>
      <View style={styles.macroBarHeader}>
        <Text style={styles.macroBarLabel}>{label}</Text>
        <Text style={styles.macroBarValue}>
          {Math.round(current)}{unit}{' '}
          <Text style={styles.macroBarTarget}>/ {target}{unit}</Text>
        </Text>
      </View>
      <View style={styles.macroBarTrack}>
        <View
          style={[
            styles.macroBarFill,
            { width: `${pct}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Quick Log Modal
// ---------------------------------------------------------------------------

function QuickLogModal({
  visible,
  onClose,
  onSave,
}: {
  visible: boolean;
  onClose: () => void;
  onSave: (data: {
    mealType: MealType;
    description: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  }) => void;
}) {
  const [mealType, setMealType] = useState<MealType>('lunch');
  const [desc, setDesc] = useState('');
  const [cal, setCal] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const handleSave = () => {
    if (!desc.trim()) {
      Alert.alert('Missing Info', 'Please describe what you ate.');
      return;
    }
    onSave({
      mealType,
      description: desc.trim(),
      calories: parseInt(cal, 10) || 0,
      protein: parseInt(protein, 10) || 0,
      carbs: parseInt(carbs, 10) || 0,
      fat: parseInt(fat, 10) || 0,
    });
    setDesc('');
    setCal('');
    setProtein('');
    setCarbs('');
    setFat('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Quick Log Meal</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={Colors.darkText} />
            </TouchableOpacity>
          </View>

          {/* Meal type selector */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.mealTypeRow}
          >
            {(Object.keys(MEAL_LABELS) as MealType[]).map((mt) => (
              <TouchableOpacity
                key={mt}
                style={[
                  styles.mealTypeChip,
                  mealType === mt && styles.mealTypeChipActive,
                ]}
                onPress={() => setMealType(mt)}
              >
                <Ionicons
                  name={MEAL_ICONS[mt] as any}
                  size={14}
                  color={mealType === mt ? '#fff' : Colors.darkTextSecondary}
                />
                <Text
                  style={[
                    styles.mealTypeText,
                    mealType === mt && styles.mealTypeTextActive,
                  ]}
                >
                  {MEAL_LABELS[mt]}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Description */}
          <Text style={styles.fieldLabel}>What did you eat?</Text>
          <TextInput
            style={styles.input}
            value={desc}
            onChangeText={setDesc}
            placeholder="e.g. Grilled chicken salad"
            placeholderTextColor={Colors.darkTextSecondary}
          />

          {/* Macros row */}
          <Text style={styles.fieldLabel}>Estimated Macros</Text>
          <View style={styles.macroInputRow}>
            <View style={styles.macroInput}>
              <Text style={styles.macroInputLabel}>Cal</Text>
              <TextInput
                style={styles.macroInputField}
                value={cal}
                onChangeText={setCal}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor={Colors.darkTextSecondary}
              />
            </View>
            <View style={styles.macroInput}>
              <Text style={styles.macroInputLabel}>Pro (g)</Text>
              <TextInput
                style={styles.macroInputField}
                value={protein}
                onChangeText={setProtein}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor={Colors.darkTextSecondary}
              />
            </View>
            <View style={styles.macroInput}>
              <Text style={styles.macroInputLabel}>Carb (g)</Text>
              <TextInput
                style={styles.macroInputField}
                value={carbs}
                onChangeText={setCarbs}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor={Colors.darkTextSecondary}
              />
            </View>
            <View style={styles.macroInput}>
              <Text style={styles.macroInputLabel}>Fat (g)</Text>
              <TextInput
                style={styles.macroInputField}
                value={fat}
                onChangeText={setFat}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor={Colors.darkTextSecondary}
              />
            </View>
          </View>

          <GradientButton label="Log Meal" onPress={handleSave} />
        </View>
      </View>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// Water Tracker
// ---------------------------------------------------------------------------

function WaterTracker() {
  const { logWater, getWater, targets } = useMealStore();
  const dateKey = today();
  const current = getWater(dateKey);
  const target = targets.waterOz ?? 100;
  const glasses = Math.floor(current / 8); // 8oz per glass
  const pct = Math.min(100, Math.round((current / target) * 100));

  return (
    <GlassCard>
      <View style={styles.waterRow}>
        <View style={styles.waterInfo}>
          <Text style={styles.waterTitle}>Water</Text>
          <Text style={styles.waterValue}>
            {current} oz <Text style={styles.waterTarget}>/ {target} oz</Text>
          </Text>
          <View style={styles.macroBarTrack}>
            <View
              style={[
                styles.macroBarFill,
                { width: `${pct}%`, backgroundColor: Colors.pepCyan },
              ]}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.waterBtn}
          onPress={() => logWater(dateKey, 8)}
        >
          <Ionicons name="water-outline" size={20} color={Colors.pepCyan} />
          <Text style={styles.waterBtnText}>+8 oz</Text>
        </TouchableOpacity>
      </View>
    </GlassCard>
  );
}

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function NutritionScreen() {
  const router = useRouter();
  const { meals, addMeal, removeMeal, getDailyProgress, targets } =
    useMealStore();
  const [showLog, setShowLog] = useState(false);

  const dateKey = today();
  const progress = getDailyProgress(dateKey);
  const todayMeals = meals.filter((m) => m.date === dateKey);

  const handleQuickLog = (data: {
    mealType: MealType;
    description: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  }) => {
    addMeal({
      id: `meal-${Date.now()}`,
      date: dateKey,
      mealType: data.mealType,
      foods: [],
      quickLog: {
        description: data.description,
        calories: data.calories,
        proteinGrams: data.protein,
        carbsGrams: data.carbs,
        fatGrams: data.fat,
      },
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={Colors.darkText} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nutrition</Text>
        <TouchableOpacity
          onPress={() => router.push('/nutrition/targets')}
          style={styles.backBtn}
        >
          <Ionicons name="settings-outline" size={22} color={Colors.darkText} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Calorie summary */}
        <View style={styles.section}>
          <GlassCard variant="gradient">
            <View style={styles.calHeader}>
              <View>
                <Text style={styles.calLabel}>Calories Today</Text>
                <Text style={styles.calValue}>
                  {Math.round(progress.totals.calories)}
                  <Text style={styles.calTarget}>
                    {' '}
                    / {targets.calories}
                  </Text>
                </Text>
              </View>
              <View style={styles.calCircle}>
                <Text style={styles.calPct}>{progress.caloriePercent}%</Text>
              </View>
            </View>
          </GlassCard>
        </View>

        {/* Macros */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Macros</Text>
          <GlassCard>
            <MacroBar
              label="Protein"
              current={progress.totals.proteinGrams}
              target={targets.proteinGrams}
              color={Colors.pepTeal}
              unit="g"
            />
            <MacroBar
              label="Carbs"
              current={progress.totals.carbsGrams}
              target={targets.carbsGrams}
              color={Colors.pepBlue}
              unit="g"
            />
            <MacroBar
              label="Fat"
              current={progress.totals.fatGrams}
              target={targets.fatGrams}
              color="#a855f7"
              unit="g"
            />
          </GlassCard>
        </View>

        {/* Water */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hydration</Text>
          <WaterTracker />
        </View>

        {/* Today's meals */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Meals</Text>
            <TouchableOpacity onPress={() => setShowLog(true)}>
              <Ionicons name="add-circle" size={24} color={Colors.pepTeal} />
            </TouchableOpacity>
          </View>

          {todayMeals.length === 0 ? (
            <GlassCard>
              <View style={styles.emptyMeals}>
                <Ionicons
                  name="restaurant-outline"
                  size={32}
                  color={Colors.darkTextSecondary}
                />
                <Text style={styles.emptyTitle}>No meals logged</Text>
                <Text style={styles.emptyDesc}>
                  Tap + to quick-log what you eat
                </Text>
              </View>
            </GlassCard>
          ) : (
            todayMeals.map((meal) => (
              <TouchableOpacity
                key={meal.id}
                onLongPress={() =>
                  Alert.alert('Delete Meal', 'Remove this entry?', [
                    { text: 'Cancel', style: 'cancel' },
                    {
                      text: 'Delete',
                      style: 'destructive',
                      onPress: () => removeMeal(meal.id),
                    },
                  ])
                }
                activeOpacity={0.85}
              >
                <GlassCard>
                  <View style={styles.mealRow}>
                    <View style={styles.mealIcon}>
                      <Ionicons
                        name={MEAL_ICONS[meal.mealType] as any}
                        size={18}
                        color={Colors.pepTeal}
                      />
                    </View>
                    <View style={styles.mealInfo}>
                      <Text style={styles.mealType}>
                        {MEAL_LABELS[meal.mealType]}
                      </Text>
                      <Text style={styles.mealDesc}>
                        {meal.quickLog?.description ?? 'Itemized meal'}
                      </Text>
                    </View>
                    <View style={styles.mealCal}>
                      <Text style={styles.mealCalNum}>
                        {meal.quickLog?.calories ?? 0}
                      </Text>
                      <Text style={styles.mealCalLabel}>cal</Text>
                    </View>
                  </View>
                </GlassCard>
              </TouchableOpacity>
            ))
          )}
        </View>

        {/* AI Recipe CTA */}
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => router.push('/nutrition/recipe-generator')}
            activeOpacity={0.85}
          >
            <GlassCard variant="glow" glowColor={Colors.pepBlue}>
              <View style={styles.aiRow}>
                <LinearGradient
                  colors={[Colors.pepBlue, Colors.pepCyan]}
                  style={styles.aiIcon}
                >
                  <Ionicons name="sparkles" size={22} color="#fff" />
                </LinearGradient>
                <View style={styles.aiInfo}>
                  <Text style={styles.aiTitle}>AI Recipe Generator</Text>
                  <Text style={styles.aiDesc}>
                    Get personalized recipes based on your macros and
                    preferences
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={Colors.darkTextSecondary}
                />
              </View>
            </GlassCard>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <QuickLogModal
        visible={showLog}
        onClose={() => setShowLog(false)}
        onSave={handleQuickLog}
      />
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.darkBg },
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
  scroll: { paddingBottom: 40 },
  section: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    gap: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.darkText,
    marginBottom: 4,
  },

  // Calorie card
  calHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calLabel: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
  },
  calValue: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.darkText,
    marginTop: 4,
  },
  calTarget: {
    fontSize: FontSizes.lg,
    fontWeight: '500',
    color: Colors.darkTextSecondary,
  },
  calCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(6, 182, 212, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.pepTeal,
  },
  calPct: {
    fontSize: FontSizes.md,
    fontWeight: '800',
    color: Colors.pepTeal,
  },

  // Macro bar
  macroBar: { marginBottom: 12 },
  macroBarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  macroBarLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.darkText,
  },
  macroBarValue: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.darkText,
  },
  macroBarTarget: {
    fontWeight: '400',
    color: Colors.darkTextSecondary,
  },
  macroBarTrack: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  macroBarFill: {
    height: '100%',
    borderRadius: 3,
  },

  // Water
  waterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  waterInfo: { flex: 1 },
  waterTitle: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.darkText,
    marginBottom: 4,
  },
  waterValue: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.darkText,
    marginBottom: 8,
  },
  waterTarget: {
    fontWeight: '400',
    color: Colors.darkTextSecondary,
  },
  waterBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(6, 206, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 4,
  },
  waterBtnText: {
    fontSize: FontSizes.xs,
    color: Colors.pepCyan,
    fontWeight: '700',
  },

  // Meals
  emptyMeals: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 6,
  },
  emptyTitle: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.darkText,
  },
  emptyDesc: {
    fontSize: FontSizes.sm,
    color: Colors.darkTextSecondary,
  },
  mealRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mealIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(6, 182, 212, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealInfo: { flex: 1 },
  mealType: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.darkText,
  },
  mealDesc: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    marginTop: 1,
  },
  mealCal: { alignItems: 'center' },
  mealCalNum: {
    fontSize: FontSizes.lg,
    fontWeight: '800',
    color: Colors.pepTeal,
  },
  mealCalLabel: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
  },

  // AI row
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  aiIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiInfo: { flex: 1 },
  aiTitle: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.darkText,
  },
  aiDesc: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    marginTop: 2,
    lineHeight: 16,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.darkBg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: 40,
    gap: 12,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.darkText,
  },
  mealTypeRow: {
    marginBottom: 8,
  },
  mealTypeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.glassBlue,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
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
  fieldLabel: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.darkText,
  },
  input: {
    backgroundColor: Colors.glassBlue,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.glassBlueBorder,
    paddingHorizontal: 14,
    height: 44,
    fontSize: FontSizes.md,
    color: Colors.darkText,
  },
  macroInputRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  macroInput: { flex: 1 },
  macroInputLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.darkTextSecondary,
    marginBottom: 4,
    textAlign: 'center',
  },
  macroInputField: {
    backgroundColor: Colors.glassBlue,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.glassBlueBorder,
    height: 40,
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.darkText,
    textAlign: 'center',
  },
});
