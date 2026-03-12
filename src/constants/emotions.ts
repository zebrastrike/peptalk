import { EmotionTag } from '../types';

export interface EmotionOption {
  value: EmotionTag;
  label: string;
  icon: string; // Ionicons name
  sentiment: 'positive' | 'neutral' | 'negative';
}

export const EMOTION_OPTIONS: EmotionOption[] = [
  // Positive
  { value: 'happy', label: 'Happy', icon: 'happy-outline', sentiment: 'positive' },
  { value: 'calm', label: 'Calm', icon: 'leaf-outline', sentiment: 'positive' },
  { value: 'grateful', label: 'Grateful', icon: 'heart-outline', sentiment: 'positive' },
  { value: 'motivated', label: 'Motivated', icon: 'rocket-outline', sentiment: 'positive' },
  { value: 'focused', label: 'Focused', icon: 'eye-outline', sentiment: 'positive' },
  { value: 'confident', label: 'Confident', icon: 'shield-outline', sentiment: 'positive' },
  { value: 'social', label: 'Social', icon: 'people-outline', sentiment: 'positive' },
  { value: 'creative', label: 'Creative', icon: 'color-palette-outline', sentiment: 'positive' },

  // Negative
  { value: 'anxious', label: 'Anxious', icon: 'alert-outline', sentiment: 'negative' },
  { value: 'irritable', label: 'Irritable', icon: 'thunderstorm-outline', sentiment: 'negative' },
  { value: 'sad', label: 'Sad', icon: 'sad-outline', sentiment: 'negative' },
  { value: 'fatigued', label: 'Fatigued', icon: 'battery-dead-outline', sentiment: 'negative' },
  { value: 'brain_fog', label: 'Brain Fog', icon: 'cloud-outline', sentiment: 'negative' },
  { value: 'overwhelmed', label: 'Overwhelmed', icon: 'water-outline', sentiment: 'negative' },
  { value: 'numb', label: 'Numb', icon: 'remove-circle-outline', sentiment: 'negative' },
];

export const SIDE_EFFECT_TAGS: string[] = [
  'Nausea',
  'Headache',
  'Injection site redness',
  'Injection site pain',
  'Fatigue',
  'Dizziness',
  'Insomnia',
  'Appetite changes',
  'Mood changes',
  'Flushing',
  'Water retention',
  'Joint pain',
  'Numbness/tingling',
  'GI discomfort',
  'Skin reaction',
];

export const getSentimentColor = (sentiment: EmotionOption['sentiment']): string => {
  switch (sentiment) {
    case 'positive': return 'rgba(16, 185, 129, 0.2)';
    case 'negative': return 'rgba(239, 68, 68, 0.2)';
    default: return 'rgba(99, 102, 241, 0.2)';
  }
};

export const getSentimentBorder = (sentiment: EmotionOption['sentiment']): string => {
  switch (sentiment) {
    case 'positive': return 'rgba(16, 185, 129, 0.5)';
    case 'negative': return 'rgba(239, 68, 68, 0.5)';
    default: return 'rgba(99, 102, 241, 0.5)';
  }
};
