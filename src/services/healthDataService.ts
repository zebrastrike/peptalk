/**
 * Platform-Agnostic Health Data Service for PepTalk
 *
 * This facade delegates to healthKitService (iOS) or healthConnectService
 * (Android) based on the current platform. All consumers should import from
 * this file instead of the platform-specific services directly.
 */

import { Platform } from 'react-native';

import {
  isHealthKitAvailable,
  requestHealthKitPermissions,
  fetchTodaySteps as hkSteps,
  fetchLatestWeight as hkWeight,
  fetchLatestHeartRate as hkHeartRate,
  fetchLastNightSleep as hkSleep,
  syncHealthDataToCheckIn as hkSync,
} from './healthKitService';

import {
  isHealthConnectAvailable,
  requestHealthConnectPermissions,
  fetchTodaySteps as hcSteps,
  fetchLatestWeight as hcWeight,
  fetchLatestHeartRate as hcHeartRate,
  fetchLastNightSleep as hcSleep,
  syncHealthDataToCheckIn as hcSync,
} from './healthConnectService';

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface HealthCheckInData {
  steps?: number;
  weightLbs?: number;
  restingHeartRate?: number;
  sleepHours?: number;
}

export interface HealthMetrics {
  steps: number | null;
  weightLbs: number | null;
  restingHeartRate: number | null;
  sleepHours: number | null;
  /** ISO timestamp of when the data was fetched */
  fetchedAt: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const isIOS = Platform.OS === 'ios';

// ---------------------------------------------------------------------------
// Availability
// ---------------------------------------------------------------------------

/**
 * Returns `true` if health data integration is available on the current
 * platform (HealthKit on iOS, Health Connect on Android).
 */
export function isHealthDataAvailable(): boolean {
  return isIOS ? isHealthKitAvailable() : isHealthConnectAvailable();
}

/**
 * Returns a human-readable label for the health data source on the current
 * platform (e.g. "Apple Health" or "Health Connect").
 */
export function getHealthSourceLabel(): string {
  return isIOS ? 'Apple Health' : 'Health Connect';
}

// ---------------------------------------------------------------------------
// Permissions
// ---------------------------------------------------------------------------

/**
 * Request read permissions for the health metrics PepTalk uses.
 *
 * @returns `true` if permissions were granted.
 */
export async function requestHealthPermissions(): Promise<boolean> {
  return isIOS
    ? requestHealthKitPermissions()
    : requestHealthConnectPermissions();
}

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

/**
 * Fetch all available health metrics and return them in a unified shape.
 */
export async function getHealthMetrics(): Promise<HealthMetrics> {
  const [steps, weightLbs, restingHeartRate, sleepHours] = await Promise.all([
    isIOS ? hkSteps() : hcSteps(),
    isIOS ? hkWeight() : hcWeight(),
    isIOS ? hkHeartRate() : hcHeartRate(),
    isIOS ? hkSleep() : hcSleep(),
  ]);

  return {
    steps,
    weightLbs,
    restingHeartRate,
    sleepHours,
    fetchedAt: new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Check-in sync
// ---------------------------------------------------------------------------

/**
 * Fetch health metrics and return them in a shape compatible with the
 * check-in store's `saveCheckIn` payload.
 */
export async function syncToCheckIn(): Promise<HealthCheckInData> {
  return isIOS ? hkSync() : hcSync();
}
