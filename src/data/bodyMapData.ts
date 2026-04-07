/**
 * Body Map — maps tappable body regions to muscle groups, exercises,
 * nutrition tips, health KPIs, and related peptides.
 */

import type { MuscleGroup } from '../types/fitness';

export interface BodyRegion {
  id: string;
  label: string;
  muscles: MuscleGroup[];
  icon: string; // Ionicon name
  color: string;
  kpis: { label: string; unit: string; icon: string }[];
  nutritionTips: string[];
  topFoods: { name: string; emoji: string; why: string }[];
  relatedPeptides: string[];
}

export const BODY_REGIONS: BodyRegion[] = [
  {
    id: 'head',
    label: 'Head & Brain',
    muscles: ['cardio'],
    icon: 'bulb-outline',
    color: '#8B5CF6',
    kpis: [
      { label: 'Mood', unit: '/ 5', icon: 'happy-outline' },
      { label: 'Focus', unit: '/ 5', icon: 'eye-outline' },
      { label: 'Sleep Quality', unit: '/ 5', icon: 'moon-outline' },
    ],
    nutritionTips: [
      'Omega-3 fatty acids support brain cell membrane integrity',
      'Blueberries contain anthocyanins that cross the blood-brain barrier',
      'Adequate hydration improves cognitive performance by 15-20%',
    ],
    topFoods: [
      { name: 'Salmon', emoji: '🐟', why: 'Rich in DHA omega-3 for brain health' },
      { name: 'Blueberries', emoji: '🫐', why: 'Antioxidants protect neural pathways' },
      { name: 'Eggs', emoji: '🥚', why: 'Choline supports memory & cognition' },
      { name: 'Walnuts', emoji: '🥜', why: 'ALA omega-3 & vitamin E' },
    ],
    relatedPeptides: ['Semax', 'Selank', 'Dihexa', 'BPC-157'],
  },
  {
    id: 'neck',
    label: 'Neck & Traps',
    muscles: ['shoulders'],
    icon: 'body-outline',
    color: '#06B6D4',
    kpis: [
      { label: 'Stress', unit: '/ 5', icon: 'thunderstorm-outline' },
      { label: 'Recovery', unit: '/ 5', icon: 'pulse-outline' },
    ],
    nutritionTips: [
      'Magnesium helps relax tense neck muscles',
      'Anti-inflammatory foods reduce chronic neck stiffness',
    ],
    topFoods: [
      { name: 'Spinach', emoji: '🥬', why: 'High in magnesium for muscle relaxation' },
      { name: 'Turmeric', emoji: '🟡', why: 'Curcumin reduces inflammation' },
      { name: 'Tart Cherries', emoji: '🍒', why: 'Natural anti-inflammatory' },
    ],
    relatedPeptides: ['BPC-157', 'TB-500'],
  },
  {
    id: 'chest',
    label: 'Chest',
    muscles: ['chest'],
    icon: 'fitness-outline',
    color: '#3B82F6',
    kpis: [
      { label: 'Resting HR', unit: 'bpm', icon: 'heart-outline' },
      { label: 'Recovery', unit: '/ 5', icon: 'pulse-outline' },
    ],
    nutritionTips: [
      'Protein intake of 1.6-2.2g/kg supports chest muscle growth',
      'Creatine monohydrate can increase bench press strength 5-10%',
      'Vitamin D supports testosterone for upper body development',
    ],
    topFoods: [
      { name: 'Chicken Breast', emoji: '🍗', why: '31g protein per 100g, lean' },
      { name: 'Greek Yogurt', emoji: '🥛', why: 'Casein protein for sustained recovery' },
      { name: 'Sweet Potato', emoji: '🍠', why: 'Complex carbs fuel pressing movements' },
    ],
    relatedPeptides: ['CJC-1295', 'Ipamorelin', 'GHRP-6'],
  },
  {
    id: 'shoulders',
    label: 'Shoulders',
    muscles: ['shoulders'],
    icon: 'barbell-outline',
    color: '#14b8a6',
    kpis: [
      { label: 'Recovery', unit: '/ 5', icon: 'pulse-outline' },
      { label: 'Energy', unit: '/ 5', icon: 'flash-outline' },
    ],
    nutritionTips: [
      'Collagen peptides support rotator cuff tendon health',
      'Vitamin C is essential for collagen synthesis in joints',
    ],
    topFoods: [
      { name: 'Bone Broth', emoji: '🍲', why: 'Natural collagen for joint health' },
      { name: 'Oranges', emoji: '🍊', why: 'Vitamin C for collagen synthesis' },
      { name: 'Lean Beef', emoji: '🥩', why: 'Zinc & iron for recovery' },
    ],
    relatedPeptides: ['BPC-157', 'TB-500', 'GHK-Cu'],
  },
  {
    id: 'arms',
    label: 'Arms',
    muscles: ['biceps', 'triceps', 'forearms'],
    icon: 'barbell-outline',
    color: '#60A5FA',
    kpis: [
      { label: 'Energy', unit: '/ 5', icon: 'flash-outline' },
      { label: 'Recovery', unit: '/ 5', icon: 'pulse-outline' },
    ],
    nutritionTips: [
      'Leucine-rich protein triggers muscle protein synthesis',
      'Post-workout carbs + protein speeds arm recovery',
      'Adequate calories are essential — arms won\'t grow in a deficit',
    ],
    topFoods: [
      { name: 'Whey Protein', emoji: '🥤', why: 'Fast-absorbing, high leucine' },
      { name: 'Rice', emoji: '🍚', why: 'Quick glycogen replenishment' },
      { name: 'Banana', emoji: '🍌', why: 'Potassium prevents muscle cramps' },
    ],
    relatedPeptides: ['IGF-1 LR3', 'CJC-1295', 'Ipamorelin'],
  },
  {
    id: 'core',
    label: 'Core & Abs',
    muscles: ['core'],
    icon: 'grid-outline',
    color: '#f59e0b',
    kpis: [
      { label: 'Weight', unit: 'lbs', icon: 'scale-outline' },
      { label: 'Appetite', unit: '/ 5', icon: 'restaurant-outline' },
      { label: 'Stress', unit: '/ 5', icon: 'thunderstorm-outline' },
    ],
    nutritionTips: [
      'Abs visibility requires ~15% body fat (men) / ~22% (women)',
      'Fiber-rich foods reduce bloating and improve definition',
      'Reducing sodium helps shed water weight around the midsection',
    ],
    topFoods: [
      { name: 'Oatmeal', emoji: '🥣', why: 'Soluble fiber reduces bloating' },
      { name: 'Avocado', emoji: '🥑', why: 'Healthy fats reduce cortisol' },
      { name: 'Green Tea', emoji: '🍵', why: 'EGCG supports fat oxidation' },
      { name: 'Asparagus', emoji: '🌿', why: 'Natural diuretic, reduces water retention' },
    ],
    relatedPeptides: ['Tesamorelin', 'AOD-9604', 'Semaglutide', '5-Amino-1MQ'],
  },
  {
    id: 'back',
    label: 'Back',
    muscles: ['back'],
    icon: 'arrow-back-outline',
    color: '#22c55e',
    kpis: [
      { label: 'Recovery', unit: '/ 5', icon: 'pulse-outline' },
      { label: 'Energy', unit: '/ 5', icon: 'flash-outline' },
    ],
    nutritionTips: [
      'Anti-inflammatory omega-3s reduce lower back pain',
      'Calcium & vitamin D support spinal bone density',
      'Protein supports the large muscle groups of the back',
    ],
    topFoods: [
      { name: 'Sardines', emoji: '🐟', why: 'Calcium + omega-3 combo' },
      { name: 'Milk', emoji: '🥛', why: 'Calcium & vitamin D for spine health' },
      { name: 'Turkey', emoji: '🦃', why: 'Lean protein for large muscle recovery' },
    ],
    relatedPeptides: ['BPC-157', 'TB-500', 'Pentadecapeptide'],
  },
  {
    id: 'glutes',
    label: 'Glutes & Hips',
    muscles: ['glutes'],
    icon: 'trending-up-outline',
    color: '#e3a7a1',
    kpis: [
      { label: 'Steps', unit: 'daily', icon: 'walk-outline' },
      { label: 'Energy', unit: '/ 5', icon: 'flash-outline' },
    ],
    nutritionTips: [
      'Caloric surplus of 200-300 kcal needed for glute hypertrophy',
      'High protein + progressive overload is the #1 growth driver',
    ],
    topFoods: [
      { name: 'Salmon', emoji: '🐟', why: 'Protein + healthy fats for growth' },
      { name: 'Quinoa', emoji: '🌾', why: 'Complete protein with complex carbs' },
      { name: 'Peanut Butter', emoji: '🥜', why: 'Calorie-dense for surplus goals' },
    ],
    relatedPeptides: ['CJC-1295', 'Ipamorelin', 'IGF-1 LR3'],
  },
  {
    id: 'legs',
    label: 'Legs',
    muscles: ['quads', 'hamstrings', 'calves'],
    icon: 'walk-outline',
    color: '#b9cbb6',
    kpis: [
      { label: 'Steps', unit: 'daily', icon: 'walk-outline' },
      { label: 'Recovery', unit: '/ 5', icon: 'pulse-outline' },
      { label: 'Energy', unit: '/ 5', icon: 'flash-outline' },
    ],
    nutritionTips: [
      'Legs house the body\'s largest muscles — they need more calories on leg day',
      'Potassium & magnesium prevent leg cramps after heavy squats',
      'Beet juice increases nitric oxide and improves leg endurance',
    ],
    topFoods: [
      { name: 'Beets', emoji: '🟣', why: 'Nitric oxide boosts blood flow' },
      { name: 'Potato', emoji: '🥔', why: 'Dense carbs for heavy leg sessions' },
      { name: 'Chicken Thigh', emoji: '🍗', why: 'Protein + fat for sustained energy' },
      { name: 'Banana', emoji: '🍌', why: 'Potassium prevents post-workout cramps' },
    ],
    relatedPeptides: ['BPC-157', 'TB-500', 'CJC-1295'],
  },
];

/** Quick lookup by region ID */
export const BODY_REGION_MAP = Object.fromEntries(
  BODY_REGIONS.map((r) => [r.id, r])
) as Record<string, BodyRegion>;
