/**
 * useTheme — returns the resolved color palette based on the user's theme preference.
 *
 * Usage:
 *   const t = useTheme();
 *   <View style={{ backgroundColor: t.bg }}>
 *     <Text style={{ color: t.text }}>Hello</Text>
 *   </View>
 */

import { useThemeStore } from '../store/useThemeStore';
import { Colors } from '../constants/theme';

export interface ThemeColors {
  /** True when dark mode is active */
  isDark: boolean;

  // Backgrounds
  bg: string;
  card: string;
  cardBorder: string;
  tabBar: string;
  /** Slightly elevated surface (modal, overlay) */
  surface: string;

  // Text
  text: string;
  textSecondary: string;
  textMuted: string;

  // Glass
  glass: string;
  glassBorder: string;
  glassElevated: string;
  glassElevatedBorder: string;
  glassAccent: string;
  glassAccentBorder: string;

  // Status bar
  statusBar: 'light' | 'dark';

  // Header
  headerTint: string;

  // Input
  inputBg: string;
  inputBorder: string;
  placeholder: string;

  // Gradients (splash, etc.)
  splashGradient: readonly [string, string, string];

  // Interactive elements
  /** Icon color for secondary/muted icons */
  icon: string;
  /** Accent-aware text for tappable items (powder blue in dark, strong blue in light) */
  tint: string;

  // Shadows
  shadow: string;
  shadowOpacity: number;
}

const dark: ThemeColors = {
  isDark: true,
  bg: '#0f1720',
  card: '#1a2535',
  cardBorder: 'rgba(255,255,255,0.08)',
  tabBar: '#0a1018',
  surface: '#162030',

  text: '#e8e6e3',
  textSecondary: '#9ca3af',
  textMuted: 'rgba(255,255,255,0.45)',

  glass: 'rgba(255, 255, 255, 0.08)',
  glassBorder: 'rgba(255, 255, 255, 0.12)',
  glassElevated: 'rgba(255, 255, 255, 0.14)',
  glassElevatedBorder: 'rgba(255, 255, 255, 0.18)',
  glassAccent: 'rgba(227, 167, 161, 0.15)',
  glassAccentBorder: 'rgba(227, 167, 161, 0.25)',

  statusBar: 'light',
  headerTint: '#e8e6e3',

  inputBg: 'rgba(255,255,255,0.08)',
  inputBorder: 'rgba(255,255,255,0.12)',
  placeholder: '#6b7280',

  splashGradient: ['#0f1720', '#0d2235', '#0f1720'],

  icon: '#9ca3af',
  tint: '#c7d7e6',

  shadow: '#000',
  shadowOpacity: 0.4,
};

const light: ThemeColors = {
  isDark: false,
  bg: '#f0ebe4',
  card: '#ffffff',
  cardBorder: 'rgba(0,0,0,0.12)',
  tabBar: '#ffffff',
  surface: '#e8e2da',

  text: '#111827',
  textSecondary: '#4b5563',
  textMuted: 'rgba(0,0,0,0.50)',

  glass: 'rgba(255, 255, 255, 0.80)',
  glassBorder: 'rgba(0, 0, 0, 0.15)',
  glassElevated: 'rgba(255, 255, 255, 0.90)',
  glassElevatedBorder: 'rgba(0, 0, 0, 0.18)',
  glassAccent: 'rgba(227, 167, 161, 0.18)',
  glassAccentBorder: 'rgba(227, 167, 161, 0.35)',

  statusBar: 'dark',
  headerTint: '#111827',

  inputBg: '#ffffff',
  inputBorder: 'rgba(0,0,0,0.18)',
  placeholder: '#6b7280',

  splashGradient: ['#f0ebe4', '#e0d8ce', '#f0ebe4'],

  icon: '#4b5563',
  tint: '#2563eb',

  shadow: '#000',
  shadowOpacity: 0.12,
};

export function useTheme(): ThemeColors {
  const isDark = useThemeStore((s) => s.isDark());
  // Also subscribe to mode so the component re-renders when mode changes
  useThemeStore((s) => s.mode);
  return isDark ? dark : light;
}

/** Non-hook version for use outside React components (StyleSheet creation, etc.) */
export function getThemeColors(isDark: boolean): ThemeColors {
  return isDark ? dark : light;
}
