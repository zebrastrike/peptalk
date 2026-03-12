/**
 * Notification Service for PepTalk
 *
 * Wraps expo-notifications with dynamic require() so the app works in Expo Go
 * where expo-notifications is NOT available on Android (removed in SDK 53).
 *
 * All functions no-op gracefully when the module is unavailable.
 * Reinstall expo-notifications + expo-device for development builds.
 */

import { Platform } from 'react-native';

// ---------------------------------------------------------------------------
// Dynamic module loading — safe for Expo Go
// ---------------------------------------------------------------------------

let Notifications: any = null;
let Device: any = null;

try {
  Notifications = require('expo-notifications');
} catch {
  // Not installed or not available in Expo Go
}

try {
  Device = require('expo-device');
} catch {
  // Not installed
}

// ---------------------------------------------------------------------------
// Availability check
// ---------------------------------------------------------------------------

function isAvailable(): boolean {
  return Notifications != null;
}

// ─── Configure Notification Handler ──────────────────────────────────────────

export function configureNotificationHandler(): void {
  if (!isAvailable()) return;

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
}

// ─── Register for Push Notifications ─────────────────────────────────────────

export async function registerForPushNotifications(): Promise<string | null> {
  if (!isAvailable()) return null;

  if (Device && !Device.isDevice) {
    if (__DEV__) {
      console.warn('[notificationService] Push notifications require a physical device.');
    }
    return null;
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('reminders', {
      name: 'Reminders',
      importance: Notifications.AndroidImportance?.HIGH ?? 4,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF6B6B',
      sound: 'default',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    if (__DEV__) {
      console.warn('[notificationService] Notification permission not granted.');
    }
    return null;
  }

  const tokenData = await Notifications.getExpoPushTokenAsync();
  return tokenData.data;
}

// ─── Schedule Daily Check-In Reminder ────────────────────────────────────────

export async function scheduleDailyCheckInReminder(time: string): Promise<string> {
  if (!isAvailable()) return '';

  const [hours, minutes] = time.split(':').map(Number);

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Time for your daily check-in',
      body: 'How are you feeling today? Log your mood, energy, and peptide effects.',
      sound: 'default',
      ...(Platform.OS === 'android' && { channelId: 'reminders' }),
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes?.DAILY ?? 'daily',
      hour: hours,
      minute: minutes,
      channelId: Platform.OS === 'android' ? 'reminders' : undefined,
    },
  });

  return identifier;
}

// ─── Schedule Dose Reminder ──────────────────────────────────────────────────

export async function scheduleDoseReminder(
  peptideId: string,
  peptideName: string,
  time: string,
  frequency: string,
): Promise<string> {
  if (!isAvailable()) return '';

  const [hours, minutes] = time.split(':').map(Number);
  const trigger = buildTriggerForFrequency(frequency, hours, minutes);

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: `${peptideName} Dose Reminder`,
      body: 'Time to take your scheduled dose.',
      sound: 'default',
      data: { peptideId, frequency },
      ...(Platform.OS === 'android' && { channelId: 'reminders' }),
    },
    trigger,
    identifier: `dose-${peptideId}-${Date.now()}`,
  });

  return identifier;
}

// ─── Cancel All Reminders ────────────────────────────────────────────────────

export async function cancelAllReminders(): Promise<void> {
  if (!isAvailable()) return;
  await Notifications.cancelAllScheduledNotificationsAsync();
}

// ─── Cancel Reminders By Tag ─────────────────────────────────────────────────

export async function cancelRemindersByTag(tag: string): Promise<void> {
  if (!isAvailable()) return;

  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  const toCancel = scheduled.filter(
    (n: any) => n.identifier && n.identifier.startsWith(tag),
  );

  await Promise.all(
    toCancel.map((n: any) =>
      Notifications.cancelScheduledNotificationAsync(n.identifier),
    ),
  );
}

// ─── Schedule Workout Reminder ────────────────────────────────────────────────

export async function scheduleWorkoutReminder(
  dayName: string,
  time: string,
): Promise<string> {
  if (!isAvailable()) return '';

  const [hours, minutes] = time.split(':').map(Number);
  const weekday = dayNameToWeekday(dayName);

  const trigger =
    weekday != null
      ? {
          type: Notifications?.SchedulableTriggerInputTypes?.WEEKLY ?? 'weekly',
          weekday,
          hour: hours,
          minute: minutes,
          ...(Platform.OS === 'android' && { channelId: 'reminders' }),
        }
      : {
          type: Notifications?.SchedulableTriggerInputTypes?.DAILY ?? 'daily',
          hour: hours,
          minute: minutes,
          ...(Platform.OS === 'android' && { channelId: 'reminders' }),
        };

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Workout Reminder',
      body: `Time to get moving! Your ${dayName} workout is ready.`,
      sound: 'default',
      data: { type: 'workout', dayName },
      ...(Platform.OS === 'android' && { channelId: 'reminders' }),
    },
    trigger,
    identifier: `workout-${dayName.toLowerCase()}-${Date.now()}`,
  });

  return identifier;
}

// ─── Schedule Meal Reminder ──────────────────────────────────────────────────

export async function scheduleMealReminder(
  mealType: string,
  time: string,
): Promise<string> {
  if (!isAvailable()) return '';

  const [hours, minutes] = time.split(':').map(Number);

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: `${capitalize(mealType)} Reminder`,
      body: `Time to prep your ${mealType}. Stay on track with your nutrition goals!`,
      sound: 'default',
      data: { type: 'meal', mealType },
      ...(Platform.OS === 'android' && { channelId: 'reminders' }),
    },
    trigger: {
      type: Notifications?.SchedulableTriggerInputTypes?.DAILY ?? 'daily',
      hour: hours,
      minute: minutes,
      ...(Platform.OS === 'android' && { channelId: 'reminders' }),
    },
    identifier: `meal-${mealType.toLowerCase()}-${Date.now()}`,
  });

  return identifier;
}

// ─── Schedule Weekly Report ──────────────────────────────────────────────────

export async function scheduleWeeklyReport(): Promise<string> {
  if (!isAvailable()) return '';

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Weekly Progress Report',
      body: 'Your weekly summary is ready. See how you did this week!',
      sound: 'default',
      data: { type: 'weekly-report' },
      ...(Platform.OS === 'android' && { channelId: 'reminders' }),
    },
    trigger: {
      type: Notifications?.SchedulableTriggerInputTypes?.WEEKLY ?? 'weekly',
      weekday: 1, // Sunday (Expo uses 1 = Sunday)
      hour: 19,
      minute: 0,
      ...(Platform.OS === 'android' && { channelId: 'reminders' }),
    },
    identifier: `weekly-report-${Date.now()}`,
  });

  return identifier;
}

// ─── Reschedule All From Plan ────────────────────────────────────────────────

export async function rescheduleAllFromPlan(
  reminders: Array<{ type: string; time: string; dayOfWeek?: number }>,
): Promise<string[]> {
  if (!isAvailable()) return [];

  // Cancel everything first
  await Notifications.cancelAllScheduledNotificationsAsync();

  const identifiers: string[] = [];

  for (const reminder of reminders) {
    const [hours, minutes] = reminder.time.split(':').map(Number);
    const isWeekly = reminder.dayOfWeek != null;

    const trigger = isWeekly
      ? {
          type: Notifications?.SchedulableTriggerInputTypes?.WEEKLY ?? 'weekly',
          weekday: reminder.dayOfWeek!,
          hour: hours,
          minute: minutes,
          ...(Platform.OS === 'android' && { channelId: 'reminders' }),
        }
      : {
          type: Notifications?.SchedulableTriggerInputTypes?.DAILY ?? 'daily',
          hour: hours,
          minute: minutes,
          ...(Platform.OS === 'android' && { channelId: 'reminders' }),
        };

    const title = reminderTitle(reminder.type);
    const body = reminderBody(reminder.type);

    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: 'default',
        data: { type: reminder.type },
        ...(Platform.OS === 'android' && { channelId: 'reminders' }),
      },
      trigger,
      identifier: `plan-${reminder.type}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    });

    identifiers.push(id);
  }

  return identifiers;
}

// ─── Cancel All ──────────────────────────────────────────────────────────────

export async function cancelAll(): Promise<void> {
  if (!isAvailable()) return;
  await Notifications.cancelAllScheduledNotificationsAsync();
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildTriggerForFrequency(frequency: string, hours: number, minutes: number): any {
  const dailyType = Notifications?.SchedulableTriggerInputTypes?.DAILY ?? 'daily';
  const weeklyType = Notifications?.SchedulableTriggerInputTypes?.WEEKLY ?? 'weekly';
  const channelId = Platform.OS === 'android' ? 'reminders' : undefined;

  switch (frequency) {
    case 'weekly':
      return { type: weeklyType, weekday: 2, hour: hours, minute: minutes, channelId };
    case 'daily':
    default:
      return { type: dailyType, hour: hours, minute: minutes, channelId };
  }
}

/** Convert a day name (e.g. "Monday") to Expo weekday number (1=Sun … 7=Sat). */
function dayNameToWeekday(dayName: string): number | null {
  const map: Record<string, number> = {
    sunday: 1,
    monday: 2,
    tuesday: 3,
    wednesday: 4,
    thursday: 5,
    friday: 6,
    saturday: 7,
  };
  return map[dayName.toLowerCase()] ?? null;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function reminderTitle(type: string): string {
  switch (type) {
    case 'workout':
      return 'Workout Reminder';
    case 'breakfast':
    case 'lunch':
    case 'dinner':
    case 'meal':
      return `${capitalize(type)} Reminder`;
    case 'check-in':
      return 'Daily Check-In';
    case 'dose':
      return 'Dose Reminder';
    case 'weekly-report':
      return 'Weekly Progress Report';
    default:
      return 'PepTalk Reminder';
  }
}

function reminderBody(type: string): string {
  switch (type) {
    case 'workout':
      return 'Time to get moving! Your workout is ready.';
    case 'breakfast':
      return 'Start your day right — time to prep breakfast!';
    case 'lunch':
      return 'Lunch time! Stay fueled and on track.';
    case 'dinner':
      return 'Dinner time! Keep your nutrition goals going.';
    case 'meal':
      return 'Time to prep your next meal.';
    case 'check-in':
      return 'How are you feeling today? Log your mood and energy.';
    case 'dose':
      return 'Time to take your scheduled dose.';
    case 'weekly-report':
      return 'Your weekly summary is ready. See how you did!';
    default:
      return 'You have a PepTalk reminder.';
  }
}
