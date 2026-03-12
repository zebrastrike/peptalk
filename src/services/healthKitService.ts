/**
 * HealthKit / Apple Health Integration Service for PepTalk
 *
 * Provides read-only access to Apple Health metrics so the app can
 * pre-populate check-ins, show health trends, and inform the PepTalk bot.
 *
 * IMPORTANT NOTES:
 * ----------------
 * - This service ONLY works on iOS in a development build (EAS Build).
 *   It will gracefully return null / false when running in Expo Go or on
 *   Android — no crashes, no red screens.
 * - The native module (@kingstinct/react-native-healthkit) must be installed
 *   and linked via a custom dev client (`npx expo run:ios` or EAS Build).
 * - Future: Android Health Connect integration is planned as a companion
 *   service (healthConnectService.ts) using the same public API shape.
 */

import { Platform } from 'react-native';

// ---------------------------------------------------------------------------
// Dynamic module loading
// ---------------------------------------------------------------------------
// We use a dynamic require wrapped in try/catch so the app doesn't crash
// when the native module isn't available (Expo Go, Android, web).

let HKModule: any = null;

try {
  if (Platform.OS === 'ios') {
    HKModule = require('@kingstinct/react-native-healthkit');
  }
} catch {
  // Module not available — running in Expo Go, on Android, or the native
  // module hasn't been linked. All public functions below will return
  // null / false gracefully.
}

// ---------------------------------------------------------------------------
// Availability check
// ---------------------------------------------------------------------------

/**
 * Returns `true` only when running on iOS AND the native HealthKit module
 * was successfully loaded. Safe to call on any platform.
 */
export function isHealthKitAvailable(): boolean {
  return HKModule !== null && Platform.OS === 'ios';
}

// ---------------------------------------------------------------------------
// Permissions
// ---------------------------------------------------------------------------

/**
 * Request read-only HealthKit permissions for the metrics PepTalk uses.
 *
 * Requested data types:
 *  - Steps (HKQuantityTypeIdentifierStepCount)
 *  - Weight (HKQuantityTypeIdentifierBodyMass)
 *  - Heart Rate (HKQuantityTypeIdentifierHeartRate)
 *  - Sleep Analysis (HKCategoryTypeIdentifierSleepAnalysis)
 *  - Active Energy Burned (HKQuantityTypeIdentifierActiveEnergyBurned)
 *
 * @returns `true` if permissions were granted (or previously granted),
 *          `false` if the module is unavailable or the user denied access.
 */
export async function requestHealthKitPermissions(): Promise<boolean> {
  if (!HKModule) return false;

  try {
    const { HKQuantityTypeIdentifier, HKCategoryTypeIdentifier } = HKModule;

    // requestAuthorization(read[], write[])
    // We only request read access — PepTalk never writes to Apple Health.
    await HKModule.requestAuthorization(
      [
        HKQuantityTypeIdentifier.stepCount,
        HKQuantityTypeIdentifier.bodyMass,
        HKQuantityTypeIdentifier.heartRate,
        HKCategoryTypeIdentifier.sleepAnalysis,
        HKQuantityTypeIdentifier.activeEnergyBurned,
      ],
      [] // no write permissions
    );

    return true;
  } catch (error) {
    console.warn('[HealthKit] Permission request failed:', error);
    return false;
  }
}

// ---------------------------------------------------------------------------
// Data fetching helpers
// ---------------------------------------------------------------------------

/**
 * Fetch today's total step count from Apple Health.
 *
 * @returns Step count as a number, or `null` if unavailable.
 */
export async function fetchTodaySteps(): Promise<number | null> {
  if (!HKModule) return null;

  try {
    const { HKQuantityTypeIdentifier } = HKModule;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const samples = await HKModule.queryStatisticsForQuantity(
      HKQuantityTypeIdentifier.stepCount,
      {
        from: today,
        to: new Date(),
      }
    );

    return samples?.sumQuantity?.doubleValue ?? null;
  } catch (error) {
    console.warn('[HealthKit] Failed to fetch steps:', error);
    return null;
  }
}

/**
 * Fetch the most recent body weight measurement from Apple Health.
 *
 * @returns Weight in pounds (lbs), or `null` if unavailable.
 */
export async function fetchLatestWeight(): Promise<number | null> {
  if (!HKModule) return null;

  try {
    const { HKQuantityTypeIdentifier } = HKModule;

    const samples = await HKModule.queryQuantitySamples(
      HKQuantityTypeIdentifier.bodyMass,
      {
        limit: 1,
        ascending: false,
      }
    );

    if (samples && samples.length > 0) {
      const kilograms = samples[0].quantity;
      // Convert kg to lbs (1 kg = 2.20462 lbs)
      const pounds = kilograms * 2.20462;
      return Math.round(pounds * 10) / 10; // one decimal place
    }

    return null;
  } catch (error) {
    console.warn('[HealthKit] Failed to fetch weight:', error);
    return null;
  }
}

/**
 * Fetch the most recent resting heart rate from Apple Health.
 *
 * @returns Heart rate in BPM, or `null` if unavailable.
 */
export async function fetchLatestHeartRate(): Promise<number | null> {
  if (!HKModule) return null;

  try {
    const { HKQuantityTypeIdentifier } = HKModule;

    const samples = await HKModule.queryQuantitySamples(
      HKQuantityTypeIdentifier.heartRate,
      {
        limit: 1,
        ascending: false,
      }
    );

    if (samples && samples.length > 0) {
      return Math.round(samples[0].quantity);
    }

    return null;
  } catch (error) {
    console.warn('[HealthKit] Failed to fetch heart rate:', error);
    return null;
  }
}

/**
 * Estimate last night's total sleep duration from Apple Health.
 *
 * Looks at sleep samples from 6 PM yesterday to 12 PM (noon) today, sums
 * all "asleep" category samples, and returns the total hours.
 *
 * @returns Sleep duration in hours (e.g. 7.5), or `null` if unavailable.
 */
export async function fetchLastNightSleep(): Promise<number | null> {
  if (!HKModule) return null;

  try {
    const { HKCategoryTypeIdentifier } = HKModule;

    // Define the sleep window: 6 PM yesterday → 12 PM today
    const now = new Date();
    const sleepWindowEnd = new Date(now);
    sleepWindowEnd.setHours(12, 0, 0, 0);

    const sleepWindowStart = new Date(sleepWindowEnd);
    sleepWindowStart.setDate(sleepWindowStart.getDate() - 1);
    sleepWindowStart.setHours(18, 0, 0, 0);

    const samples = await HKModule.queryCategorySamples(
      HKCategoryTypeIdentifier.sleepAnalysis,
      {
        from: sleepWindowStart,
        to: sleepWindowEnd,
      }
    );

    if (!samples || samples.length === 0) return null;

    // Sum up all "asleep" samples (value > 0 typically means asleep/in-bed).
    // HKCategoryValueSleepAnalysis: 0 = inBed, 1 = asleepUnspecified,
    // 2 = awake, 3 = asleepCore, 4 = asleepDeep, 5 = asleepREM
    let totalMinutes = 0;
    for (const sample of samples) {
      const value = sample.value;
      // Count actual sleep states (not just "in bed" or "awake")
      if (value === 1 || value === 3 || value === 4 || value === 5) {
        const start = new Date(sample.startDate).getTime();
        const end = new Date(sample.endDate).getTime();
        totalMinutes += (end - start) / (1000 * 60);
      }
    }

    if (totalMinutes === 0) return null;

    // Return hours rounded to one decimal place
    return Math.round((totalMinutes / 60) * 10) / 10;
  } catch (error) {
    console.warn('[HealthKit] Failed to fetch sleep data:', error);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Composite sync helper
// ---------------------------------------------------------------------------

interface HealthCheckInData {
  steps?: number;
  weightLbs?: number;
  restingHeartRate?: number;
  sleepHours?: number;
}

/**
 * Fetch all available health metrics in one call and return them as a
 * partial check-in data object. Useful for pre-filling the daily check-in
 * screen with real device data.
 *
 * Any metric that is unavailable will simply be omitted from the result.
 *
 * @returns An object with whichever metrics were successfully fetched.
 */
export async function syncHealthDataToCheckIn(): Promise<HealthCheckInData> {
  if (!HKModule) return {};

  // Fetch all metrics concurrently for speed
  const [steps, weightLbs, restingHeartRate, sleepHours] = await Promise.all([
    fetchTodaySteps(),
    fetchLatestWeight(),
    fetchLatestHeartRate(),
    fetchLastNightSleep(),
  ]);

  const data: HealthCheckInData = {};

  if (steps !== null) data.steps = steps;
  if (weightLbs !== null) data.weightLbs = weightLbs;
  if (restingHeartRate !== null) data.restingHeartRate = restingHeartRate;
  if (sleepHours !== null) data.sleepHours = sleepHours;

  return data;
}
