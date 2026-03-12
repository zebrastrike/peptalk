import { GoalType } from '../types';

export interface GoalOption {
  value: GoalType;
  label: string;
  icon: string; // Ionicons name
  color: string;
}

export const GOAL_OPTIONS: GoalOption[] = [
  { value: 'weight_loss', label: 'Weight Loss', icon: 'scale-outline', color: '#f59e0b' },
  { value: 'muscle_gain', label: 'Muscle Gain', icon: 'barbell-outline', color: '#ef4444' },
  { value: 'body_recomp', label: 'Body Recomp', icon: 'body-outline', color: '#f97316' },
  { value: 'recovery', label: 'Recovery', icon: 'bandage-outline', color: '#10b981' },
  { value: 'longevity', label: 'Longevity', icon: 'hourglass-outline', color: '#8b5cf6' },
  { value: 'cognitive', label: 'Cognitive', icon: 'bulb-outline', color: '#3b82f6' },
  { value: 'sleep', label: 'Sleep', icon: 'moon-outline', color: '#6366f1' },
  { value: 'energy', label: 'Energy', icon: 'flash-outline', color: '#eab308' },
  { value: 'immune', label: 'Immune', icon: 'shield-checkmark-outline', color: '#14b8a6' },
  { value: 'gut_health', label: 'Gut Health', icon: 'nutrition-outline', color: '#22c55e' },
  { value: 'skin_hair', label: 'Skin & Hair', icon: 'sparkles-outline', color: '#ec4899' },
  { value: 'hormonal', label: 'Hormonal', icon: 'pulse-outline', color: '#e3a7a1' },
  { value: 'general_wellness', label: 'General Wellness', icon: 'heart-outline', color: '#06b6d4' },
];

export const getGoalLabel = (goal: GoalType): string =>
  GOAL_OPTIONS.find((g) => g.value === goal)?.label ?? goal.replace(/_/g, ' ');

export const getGoalColor = (goal: GoalType): string =>
  GOAL_OPTIONS.find((g) => g.value === goal)?.color ?? '#9ca3af';
