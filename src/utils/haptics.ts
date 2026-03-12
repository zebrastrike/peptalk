/**
 * Haptic feedback utility — wraps expo-haptics with safe no-ops.
 *
 * Import and call these on button taps, achievements, errors, etc.
 */

import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

const canHaptic = Platform.OS === 'ios' || Platform.OS === 'android';

/** Light tap — use for regular button presses, chip selects */
export function tapLight() {
  if (canHaptic) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}

/** Medium tap — use for confirmations, toggle switches */
export function tapMedium() {
  if (canHaptic) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
}

/** Heavy tap — use for destructive actions, important milestones */
export function tapHeavy() {
  if (canHaptic) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
}

/** Success — use for completed actions (saved, logged, achievement unlocked) */
export function notifySuccess() {
  if (canHaptic) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
}

/** Warning — use for approaching limits, caution states */
export function notifyWarning() {
  if (canHaptic) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
}

/** Error — use for validation failures, blocked actions */
export function notifyError() {
  if (canHaptic) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
}

/** Selection tick — use for picker changes, slider movements */
export function selectionTick() {
  if (canHaptic) Haptics.selectionAsync();
}
