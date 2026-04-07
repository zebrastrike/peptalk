/**
 * Hardcoded test account profiles for dev/testing.
 * Used by the Home dashboard and Profile screen to display
 * correct demographic data without relying on store hydration.
 * Remove once a real backend is in place.
 */

import type { Gender, AgeRange, GoalType, PeptideCategory, Ethnicity } from '../types';

export interface TestProfile {
  gender: Gender;
  ageRange: AgeRange;
  ethnicity?: Ethnicity;
  goals: GoalType[];
  interests: PeptideCategory[];
}

export const TEST_PROFILES: Record<string, TestProfile> = {
  'jake@test.com':     { gender: 'Male',   ageRange: '18-29', goals: ['muscle_gain', 'body_recomp', 'recovery'],   interests: ['Growth Hormone', 'Recovery', 'Metabolic'] },
  'sophia@test.com':   { gender: 'Female', ageRange: '18-29', goals: ['body_recomp', 'skin_hair', 'energy'],       interests: ['Cosmetic', 'Metabolic', 'Longevity'] },
  'marcus@test.com':   { gender: 'Male',   ageRange: '30-44', goals: ['cognitive', 'energy', 'longevity'],          interests: ['Nootropic', 'Longevity', 'Recovery'] },
  'sarah@test.com':    { gender: 'Female', ageRange: '30-44', goals: ['hormonal', 'energy', 'skin_hair'],           interests: ['Cosmetic', 'Immune', 'Sleep'] },
  'richard@test.com':  { gender: 'Male',   ageRange: '45-60', goals: ['longevity', 'hormonal', 'cognitive'],        interests: ['Longevity', 'Sexual Health', 'Growth Hormone'] },
  'diana@test.com':    { gender: 'Female', ageRange: '45-60', goals: ['hormonal', 'skin_hair', 'longevity'],        interests: ['Cosmetic', 'Longevity', 'Immune'] },
  'walter@test.com':   { gender: 'Male',   ageRange: '60+',   goals: ['cognitive', 'recovery', 'longevity'],        interests: ['Nootropic', 'Recovery', 'Longevity'] },
  'margaret@test.com': { gender: 'Female', ageRange: '60+',   goals: ['recovery', 'cognitive', 'skin_hair'],        interests: ['Recovery', 'Longevity', 'Cosmetic'] },
};

/**
 * Get the test profile for an email, or null if not a test account.
 */
export function getTestProfile(email?: string | null): TestProfile | null {
  if (!email) return null;
  return TEST_PROFILES[email.toLowerCase()] ?? null;
}
