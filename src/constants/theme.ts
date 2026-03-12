export const Colors = {
  rose: '#e3a7a1',
  sage: '#b9cbb6',
  powder: '#c7d7e6',
  bone: '#f7f2ec',
  ink: '#1f2a36',

  // Derived
  roseDark: '#c98a84',
  roseLight: '#f0cbc7',
  sageDark: '#8faa8b',
  sageLight: '#d4e3d2',
  powderDark: '#a3bad2',
  powderLight: '#e0eaf3',

  // Dark mode
  darkBg: '#0f1720',
  darkCard: '#1a2535',
  darkCardBorder: 'rgba(255,255,255,0.08)',
  darkText: '#e8e6e3',
  darkTextSecondary: '#9ca3af',

  // Light mode
  lightBg: '#f7f2ec',
  lightCard: '#ffffff',
  lightCardBorder: 'rgba(0,0,0,0.06)',
  lightText: '#1f2a36',
  lightTextSecondary: '#6b7280',

  // Utility
  white: '#ffffff',
  black: '#000000',
  error: '#ef4444',
  success: '#22c55e',
  warning: '#f59e0b',

  // Glass
  glassWhite: 'rgba(255,255,255,0.12)',
  glassBorder: 'rgba(255,255,255,0.18)',

  // PepTalk Character Palette
  pepBlue: '#3B82F6',
  pepBlueDark: '#2563EB',
  pepBlueLight: '#60A5FA',
  pepTeal: '#06B6D4',
  pepTealLight: '#22D3EE',
  pepCyan: '#67E8F9',

  // Glow
  glowBlue: 'rgba(59, 130, 246, 0.35)',
  glowTeal: 'rgba(6, 182, 212, 0.25)',
  glowRose: 'rgba(227, 167, 161, 0.30)',

  // Glass blue
  glassBlue: 'rgba(59, 130, 246, 0.10)',
  glassBlueBorder: 'rgba(59, 130, 246, 0.20)',
} as const;

export const Gradients = {
  primary: ['#3B82F6', '#06B6D4'] as const,
  character: ['#2563EB', '#0891B2'] as const,
  card: ['rgba(59,130,246,0.12)', 'rgba(6,182,212,0.06)'] as const,
  accent: ['#3B82F6', '#8B5CF6'] as const,
  warm: ['#e3a7a1', '#f59e0b'] as const,
};

export const CategoryColors: Record<string, string> = {
  Metabolic: '#e3a7a1',
  Recovery: '#b9cbb6',
  'Growth Hormone': '#c7d7e6',
  Nootropic: '#d4b8e0',
  Immune: '#f0d68a',
  'Anti-inflammatory': '#a8d8ea',
  Mitochondrial: '#f5c6aa',
  Longevity: '#c5b3e6',
  Sleep: '#7eb5d6',
  Reproductive: '#f0b4c8',
  'Sexual Health': '#e8a0b8',
  Cosmetic: '#d4c5a9',
  Tanning: '#e8c49a',
  Neuropeptide: '#b8c9e0',
  Antimicrobial: '#a0d2db',
};

export const Fonts = {
  heading: 'BodoniModa',
  headingBold: 'BodoniModa-Bold',
  headingItalic: 'BodoniModa-Italic',
  body: 'Sora',
  bodyMedium: 'Sora-Medium',
  bodySemiBold: 'Sora-SemiBold',
  bodyBold: 'Sora-Bold',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const FontSizes = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  xxl: 28,
  hero: 36,
} as const;
