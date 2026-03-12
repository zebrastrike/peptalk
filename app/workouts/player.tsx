/**
 * Workout Player — live workout experience with set tracking.
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ExerciseVideo } from '../../src/components/ExerciseVideo';
import { GlassCard } from '../../src/components/GlassCard';
import { GradientButton } from '../../src/components/GradientButton';
import { Colors, Spacing, FontSizes, BorderRadius } from '../../src/constants/theme';
import { getProgramById } from '../../src/data/workoutPrograms';
import { getExerciseById } from '../../src/data/exercises';
import { useWorkoutStore } from '../../src/store/useWorkoutStore';
import type { ExerciseSet } from '../../src/types/fitness';

// ---------------------------------------------------------------------------
// Timer Hook
// ---------------------------------------------------------------------------

function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const formatted = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  return { seconds, formatted, running, start, pause, reset };
}

// ---------------------------------------------------------------------------
// Rest Timer Hook (countdown)
// ---------------------------------------------------------------------------

function useRestTimer() {
  const [remaining, setRemaining] = useState(0);
  const [active, setActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!active || remaining <= 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (remaining <= 0) setActive(false);
      return;
    }
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          setActive(false);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active, remaining]);

  const startCountdown = (seconds: number) => {
    setRemaining(seconds);
    setActive(true);
  };

  const cancel = () => {
    setActive(false);
    setRemaining(0);
  };

  const formatted = `${Math.floor(remaining / 60)
    .toString()
    .padStart(2, '0')}:${(remaining % 60).toString().padStart(2, '0')}`;

  return { remaining, active, formatted, startCountdown, cancel };
}

// ---------------------------------------------------------------------------
// Set Input Data
// ---------------------------------------------------------------------------

type SetInputData = Record<string, { weight: string; reps: string }>;

function ExerciseRow({
  exerciseSet,
  index,
  completedSets,
  onToggleSet,
  setInputs,
  onSetInput,
  restTimer,
}: {
  exerciseSet: ExerciseSet;
  index: number;
  completedSets: Set<string>;
  onToggleSet: (key: string, restSeconds?: number) => void;
  setInputs: SetInputData;
  onSetInput: (key: string, field: 'weight' | 'reps', value: string) => void;
  restTimer: ReturnType<typeof useRestTimer>;
}) {
  const info = getExerciseById(exerciseSet.exerciseId);
  const name = info?.name ?? exerciseSet.exerciseId;
  const isTimeBased = info?.isTimeBased ?? false;
  const [videoExpanded, setVideoExpanded] = useState(false);

  return (
    <View style={styles.exRow}>
      {/* Exercise header */}
      <View style={styles.exHeader}>
        <View style={styles.exNumBadge}>
          <Text style={styles.exNum}>{index + 1}</Text>
        </View>
        <View style={styles.exInfo}>
          <TouchableOpacity
            style={styles.exNameTouchable}
            onPress={() => setVideoExpanded((v) => !v)}
            activeOpacity={0.7}
          >
            <Text style={styles.exName}>{name}</Text>
            <Ionicons
              name={videoExpanded ? 'videocam' : 'videocam-outline'}
              size={16}
              color={videoExpanded ? Colors.pepTeal : Colors.darkTextSecondary}
              style={{ marginLeft: 6 }}
            />
          </TouchableOpacity>
          {exerciseSet.setType !== 'normal' && (
            <View style={styles.setTypeBadge}>
              <Text style={styles.setTypeText}>
                {exerciseSet.setType === 'super_set'
                  ? 'Super Set'
                  : exerciseSet.setType === 'super_set_2'
                  ? 'Super Set 2'
                  : exerciseSet.setType}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Video expand section */}
      {videoExpanded && (
        <View style={styles.videoSection}>
          <ExerciseVideo exerciseId={exerciseSet.exerciseId} compact />
        </View>
      )}

      {/* Sets */}
      <View style={styles.setsColumn}>
        {exerciseSet.reps.map((rep, setIdx) => {
          const key = `${index}-${setIdx}`;
          const done = completedSets.has(key);
          const inputData = setInputs[key] ?? { weight: '', reps: '' };
          return (
            <View key={setIdx} style={styles.setRow}>
              {/* Toggle button */}
              <TouchableOpacity
                style={[styles.setCell, done && styles.setCellDone]}
                onPress={() => onToggleSet(key, exerciseSet.restSeconds)}
                activeOpacity={0.7}
              >
                {done ? (
                  <Ionicons name="checkmark-circle" size={18} color={Colors.success} />
                ) : (
                  <Ionicons
                    name="ellipse-outline"
                    size={18}
                    color={Colors.darkTextSecondary}
                  />
                )}
                <Text style={[styles.setText, done && styles.setTextDone]}>
                  Set {setIdx + 1}
                </Text>
                <Text style={[styles.repText, done && styles.repTextDone]}>
                  {isTimeBased && exerciseSet.timeSeconds
                    ? `${exerciseSet.timeSeconds}s`
                    : `${rep} reps`}
                </Text>
              </TouchableOpacity>

              {/* Weight / Reps inputs */}
              <View style={styles.inputGroup}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={[styles.setInput, done && styles.setInputDone]}
                    placeholder="lbs"
                    placeholderTextColor="rgba(255,255,255,0.25)"
                    keyboardType="numeric"
                    value={inputData.weight}
                    onChangeText={(v) => onSetInput(key, 'weight', v)}
                  />
                </View>
                {!isTimeBased && (
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={[styles.setInput, done && styles.setInputDone]}
                      placeholder={`${rep}`}
                      placeholderTextColor="rgba(255,255,255,0.25)"
                      keyboardType="numeric"
                      value={inputData.reps}
                      onChangeText={(v) => onSetInput(key, 'reps', v)}
                    />
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>

      {/* Rest timer countdown */}
      {restTimer.active && (
        <TouchableOpacity style={styles.restTimerRow} onPress={restTimer.cancel} activeOpacity={0.7}>
          <Ionicons name="timer" size={16} color={Colors.pepTeal} />
          <Text style={styles.restTimerText}>
            Rest: {restTimer.formatted}
          </Text>
          <Text style={styles.restTimerSkip}>Tap to skip</Text>
        </TouchableOpacity>
      )}

      {/* Rest indicator (static) */}
      {!restTimer.active && exerciseSet.restSeconds != null && exerciseSet.restSeconds > 0 && (
        <View style={styles.restRow}>
          <Ionicons name="timer-outline" size={14} color={Colors.darkTextSecondary} />
          <Text style={styles.restText}>
            Rest: {exerciseSet.restSeconds}s
          </Text>
        </View>
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function WorkoutPlayerScreen() {
  const router = useRouter();
  const { programId } = useLocalSearchParams<{ programId: string }>();
  const program = getProgramById(programId ?? '');
  const {
    activeProgram,
    beginWorkout,
    logSet,
    finishWorkout,
    cancelWorkout,
    advanceDay,
    inProgress,
  } = useWorkoutStore();

  const timer = useTimer();
  const restTimer = useRestTimer();
  const [completedSets, setCompletedSets] = useState<Set<string>>(new Set());
  const [setInputs, setSetInputs] = useState<SetInputData>({});

  // Determine current day
  const currentWeek = activeProgram?.currentWeek ?? 1;
  const currentDayIdx = activeProgram?.currentDay ?? 0;
  const week = program?.weeks[(currentWeek - 1)] ?? null;
  const day = week?.days[currentDayIdx] ?? null;

  // Start the workout timer on mount
  useEffect(() => {
    if (day && !inProgress) {
      beginWorkout(programId, currentWeek, day.id);
    }
    timer.start();
    return () => timer.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalSets = useMemo(
    () => day?.exercises.reduce((sum, e) => sum + e.reps.length, 0) ?? 0,
    [day],
  );

  const handleToggleSet = (key: string, restSeconds?: number) => {
    setCompletedSets((prev) => {
      const next = new Set(prev);
      const wasCompleted = next.has(key);
      if (wasCompleted) {
        next.delete(key);
        restTimer.cancel();
      } else {
        next.add(key);
        // Start rest timer when completing a set
        if (restSeconds && restSeconds > 0) {
          restTimer.startCountdown(restSeconds);
        }
      }
      return next;
    });
  };

  const handleSetInput = (key: string, field: 'weight' | 'reps', value: string) => {
    // Only allow numeric input
    const cleaned = value.replace(/[^0-9.]/g, '');
    setSetInputs((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        weight: prev[key]?.weight ?? '',
        reps: prev[key]?.reps ?? '',
        [field]: cleaned,
      },
    }));
  };

  const handleFinish = () => {
    Alert.alert(
      'Workout Complete!',
      `Great work! ${Math.floor(timer.seconds / 60)} minutes of effort logged.\n\nWhat would you like to do next?`,
      [
        {
          text: 'Just Finish',
          onPress: () => {
            timer.pause();
            finishWorkout(undefined, undefined);
            advanceDay();
            router.back();
          },
        },
        {
          text: 'Log a Meal',
          onPress: () => {
            timer.pause();
            finishWorkout(undefined, undefined);
            advanceDay();
            router.replace('/nutrition');
          },
        },
        {
          text: 'Check In',
          onPress: () => {
            timer.pause();
            finishWorkout(undefined, undefined);
            advanceDay();
            router.replace('/(tabs)/check-in');
          },
        },
      ],
    );
  };

  const handleQuit = () => {
    Alert.alert('Quit Workout', 'Your progress for this session will be lost.', [
      { text: 'Keep Going', style: 'cancel' },
      {
        text: 'Quit',
        style: 'destructive',
        onPress: () => {
          timer.pause();
          cancelWorkout();
          router.back();
        },
      },
    ]);
  };

  if (!program || !day) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.center}>
          <Ionicons name="checkmark-circle" size={48} color={Colors.success} />
          <Text style={styles.doneTitle}>Program Complete!</Text>
          <Text style={styles.doneDesc}>
            You've finished all available workouts.
          </Text>
          <GradientButton label="Back to Workouts" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleQuit} style={styles.backBtn}>
          <Ionicons name="close" size={24} color={Colors.darkText} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>
            Week {currentWeek} · Day {currentDayIdx + 1}
          </Text>
          <Text style={styles.headerTimer}>{timer.formatted}</Text>
        </View>
        <TouchableOpacity
          onPress={() => (timer.running ? timer.pause() : timer.start())}
          style={styles.backBtn}
        >
          <Ionicons
            name={timer.running ? 'pause' : 'play'}
            size={22}
            color={Colors.pepTeal}
          />
        </TouchableOpacity>
      </View>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${
                totalSets > 0
                  ? Math.round((completedSets.size / totalSets) * 100)
                  : 0
              }%`,
            },
          ]}
        />
      </View>
      <Text style={styles.progressText}>
        {completedSets.size} / {totalSets} sets completed
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {day.exercises.map((exerciseSet, i) => (
          <View key={`${exerciseSet.exerciseId}-${i}`} style={styles.exWrap}>
            <ExerciseRow
              exerciseSet={exerciseSet}
              index={i}
              completedSets={completedSets}
              onToggleSet={handleToggleSet}
              setInputs={setInputs}
              onSetInput={handleSetInput}
              restTimer={restTimer}
            />
          </View>
        ))}

        {/* Finish */}
        <View style={styles.finishSection}>
          <GradientButton
            label="Finish Workout"
            onPress={handleFinish}
            colors={[Colors.pepTeal, Colors.pepBlue]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.darkBg },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: Spacing.lg,
  },
  doneTitle: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.darkText,
  },
  doneDesc: {
    fontSize: FontSizes.md,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: { alignItems: 'center' },
  headerTitle: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.darkText,
  },
  headerTimer: {
    fontSize: FontSizes.xl,
    fontWeight: '800',
    color: Colors.pepTeal,
    fontVariant: ['tabular-nums'],
  },

  // Progress
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginHorizontal: Spacing.lg,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.pepTeal,
    borderRadius: 2,
  },
  progressText: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: Spacing.md,
  },

  scroll: { paddingBottom: 40 },
  exWrap: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
  },

  // Exercise row
  exRow: {
    backgroundColor: Colors.glassBlue,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.glassBlueBorder,
    padding: 14,
  },
  exHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  exNumBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exNum: {
    fontSize: 13,
    fontWeight: '800',
    color: Colors.pepTeal,
  },
  exInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  exNameTouchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exName: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.darkText,
    flexShrink: 1,
  },
  setTypeBadge: {
    backgroundColor: 'rgba(59, 130, 246, 0.12)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  setTypeText: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.pepBlue,
  },

  // Video section
  videoSection: {
    marginBottom: 10,
  },

  // Sets column
  setsColumn: {
    gap: 8,
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  setCell: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    flex: 1,
  },

  // Weight/Rep inputs
  inputGroup: {
    flexDirection: 'row',
    gap: 6,
  },
  inputWrapper: {
    width: 54,
  },
  setInput: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    color: Colors.darkText,
    fontSize: FontSizes.xs,
    paddingHorizontal: 8,
    paddingVertical: 6,
    textAlign: 'center',
  },
  setInputDone: {
    borderColor: 'rgba(16, 185, 129, 0.2)',
    color: Colors.success,
  },
  setCellDone: {
    backgroundColor: 'rgba(16, 185, 129, 0.08)',
    borderColor: 'rgba(16, 185, 129, 0.2)',
  },
  setText: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    fontWeight: '500',
  },
  setTextDone: { color: Colors.success },
  repText: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
  },
  repTextDone: { color: Colors.success },

  // Rest
  restRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  restText: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
  },

  // Rest timer countdown
  restTimerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.15)',
  },
  restTimerText: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.pepTeal,
    fontVariant: ['tabular-nums'],
    flex: 1,
  },
  restTimerSkip: {
    fontSize: FontSizes.xs,
    color: Colors.darkTextSecondary,
    fontWeight: '500',
  },

  // Finish
  finishSection: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
});
