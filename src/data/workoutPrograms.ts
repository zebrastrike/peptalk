/**
 * Workout programs — starting with Jamie's 8-week Core Challenge.
 *
 * Each program references exercises by ID from the exercise library.
 * The exercise IDs match the normalized name format from exercises.ts.
 */

import type {
  WorkoutProgram,
  WorkoutWeek,
  WorkoutDay,
  ExerciseSet,
  SetType,
} from '../types/fitness';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const exId = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim().replace(/ /g, '-');

function s(
  name: string,
  reps: number[],
  setType: SetType,
  opts?: { timeSeconds?: number; restSeconds?: number },
): ExerciseSet {
  return {
    exerciseId: exId(name),
    reps,
    setType,
    ...opts,
  };
}

function day(
  name: string,
  code: string,
  exercises: ExerciseSet[],
): WorkoutDay {
  return { id: code.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-'), name, code, exercises };
}

// ---------------------------------------------------------------------------
// Week 1
// ---------------------------------------------------------------------------

const week1: WorkoutWeek = {
  weekNumber: 1,
  days: [
    day('Challenge Workout W1/D1', 'W1/D1', [
      s('Up And Down Plank', [1, 1, 1], 'super_set', { timeSeconds: 30 }),
      s('Alternating knee to elbow towel slides', [20, 20, 20], 'super_set'),
      s('SB folding chairs', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W1/D2', 'W1/D2', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('crunch with adduction (pelvic floor)', [20, 20, 20], 'normal', { restSeconds: 15 }),
      s('Table top alternating towel arm slides', [10, 10, 10], 'super_set'),
      s('Low leg bent knee windmill', [12, 12, 12], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W1/D3', 'W1/D3', [
      s('SB plank', [1, 1, 1], 'normal', { timeSeconds: 30, restSeconds: 15 }),
      s('lower leg lifts with block feet holds', [15, 15, 15], 'super_set'),
      s('supported hip dead bug', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W1/D4', 'W1/D4', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('medicine ball dead bugs', [20, 20, 20], 'normal', { restSeconds: 15 }),
      s('Pallof cable press', [12, 12, 12], 'super_set'),
      s('crunch with adduction (pelvic floor)', [15, 15, 15], 'super_set', { restSeconds: 15 }),
    ]),
    day('Challenge Workout W1/D5', 'W1/D5', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('KB pull over with glute bridge', [12, 12, 12], 'super_set'),
      s('Table Top Knee Taps with Block Adduction', [15, 15, 15], 'super_set', { restSeconds: 15 }),
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Week 2
// ---------------------------------------------------------------------------

const week2: WorkoutWeek = {
  weekNumber: 2,
  days: [
    day('Challenge Workout W2/D1', 'W2/D1', [
      s('SB stomach Vaccum', [1, 1, 1], 'super_set', { timeSeconds: 10, restSeconds: 20 }),
      s('Table top alternating towel arm slides', [20, 20, 20], 'super_set'),
      s('stability ball knee tucks', [15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W2/D2', 'W2/D2', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('weighted stability ball crunch', [20, 20, 20], 'normal', { restSeconds: 15 }),
      s('MB pelvic floor heel taps', [20, 20, 20], 'super_set'),
      s('KB pull over with glute bridge', [15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W2/D3', 'W2/D3', [
      s('SB plank', [1, 1, 1], 'normal', { timeSeconds: 30, restSeconds: 15 }),
      s('Bench low leg lifts with glute raise', [15, 15, 15], 'super_set'),
      s('medicine ball dead bugs', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W2/D4', 'W2/D4', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('Table Top Knee Taps with Block Adduction', [20, 20, 20], 'normal', { restSeconds: 15 }),
      s('supported hip dead bug', [20, 20, 20], 'super_set'),
      s('Lower leg windmill', [12, 12, 12], 'super_set', { restSeconds: 15 }),
    ]),
    day('Challenge Workout W2/D5', 'W2/D5', [
      s('SB stomach Vaccum', [1, 1, 1], 'super_set', { timeSeconds: 15 }),
      s('SB folding chairs', [15, 15, 15], 'super_set', { restSeconds: 15 }),
      s('Lower Leg bent knee windmill with block', [12, 12, 12], 'super_set'),
      s('medicine ball crunch', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Week 3
// ---------------------------------------------------------------------------

const week3: WorkoutWeek = {
  weekNumber: 3,
  days: [
    day('Challenge Workout W3/D1', 'W3/D1', [
      s('SB plank', [1, 1, 1], 'normal', { timeSeconds: 30, restSeconds: 15 }),
      s('Alternating knee to elbow towel slides', [20, 20, 20], 'super_set'),
      s('Table Top Knee Taps with Block Adduction', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W3/D2', 'W3/D2', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('medicine ball dead bugs', [20, 20, 20], 'normal', { restSeconds: 15 }),
      s('crunch with adduction (pelvic floor)', [20, 20, 20], 'super_set'),
      s('Lower leg windmill', [15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W3/D3', 'W3/D3', [
      s('Up And Down Plank', [1, 1, 1], 'super_set', { timeSeconds: 30 }),
      s('SB folding chairs', [20, 20, 20], 'super_set'),
      s('Pallof cable press', [15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W3/D4', 'W3/D4', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('lower leg lifts with block feet holds', [20, 20, 20], 'normal', { restSeconds: 15 }),
      s('KB pull over with glute bridge', [15, 15, 15], 'super_set'),
      s('supported hip dead bug', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W3/D5', 'W3/D5', [
      s('SB plank', [1, 1, 1], 'normal', { timeSeconds: 30, restSeconds: 15 }),
      s('Bench low leg lifts with glute raise', [20, 20, 20], 'super_set'),
      s('weighted stability ball crunch', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Week 4
// ---------------------------------------------------------------------------

const week4: WorkoutWeek = {
  weekNumber: 4,
  days: [
    day('Challenge Workout W4/D1', 'W4/D1', [
      s('Up And Down Plank', [1, 1, 1], 'super_set', { timeSeconds: 30 }),
      s('Table top alternating towel arm slides', [20, 20, 20], 'super_set'),
      s('stability ball knee tucks', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W4/D2', 'W4/D2', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('crunch with adduction (pelvic floor)', [20, 20, 20], 'normal', { restSeconds: 15 }),
      s('MB pelvic floor heel taps', [20, 20, 20], 'super_set'),
      s('Lower Leg bent knee windmill with block', [15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W4/D3', 'W4/D3', [
      s('SB plank', [1, 1, 1], 'normal', { timeSeconds: 45, restSeconds: 15 }),
      s('medicine ball dead bugs', [20, 20, 20], 'super_set'),
      s('Pallof cable press', [15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W4/D4', 'W4/D4', [
      s('SB stomach Vaccum', [1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('medicine ball crunch', [20, 20, 20], 'normal', { restSeconds: 15 }),
      s('Alternating knee to elbow towel slides', [20, 20, 20], 'super_set'),
      s('Table Top Knee Taps with Block Adduction', [20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W4/D5', 'W4/D5', [
      s('SB plank', [1, 1, 1], 'normal', { timeSeconds: 45, restSeconds: 15 }),
      s('SB folding chairs', [20, 20, 20], 'super_set'),
      s('KB pull over with glute bridge', [15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Week 5 (progression: 4 sets)
// ---------------------------------------------------------------------------

const week5: WorkoutWeek = {
  weekNumber: 5,
  days: [
    day('Challenge Workout W5/D1', 'W5/D1', [
      s('Up And Down Plank', [1, 1, 1, 1], 'super_set', { timeSeconds: 30 }),
      s('Alternating knee to elbow towel slides', [20, 20, 20, 20], 'super_set'),
      s('SB folding chairs', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W5/D2', 'W5/D2', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('crunch with adduction (pelvic floor)', [20, 20, 20, 20], 'normal', { restSeconds: 15 }),
      s('Table top alternating towel arm slides', [15, 15, 15, 15], 'super_set'),
      s('Lower leg windmill', [15, 15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W5/D3', 'W5/D3', [
      s('SB plank', [1, 1, 1, 1], 'normal', { timeSeconds: 45, restSeconds: 15 }),
      s('lower leg lifts with block feet holds', [20, 20, 20, 20], 'super_set'),
      s('supported hip dead bug', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W5/D4', 'W5/D4', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('medicine ball dead bugs', [20, 20, 20, 20], 'normal', { restSeconds: 15 }),
      s('Pallof cable press', [15, 15, 15, 15], 'super_set'),
      s('crunch with adduction (pelvic floor)', [20, 20, 20, 20], 'super_set', { restSeconds: 15 }),
    ]),
    day('Challenge Workout W5/D5', 'W5/D5', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('KB pull over with glute bridge', [15, 15, 15, 15], 'super_set'),
      s('Table Top Knee Taps with Block Adduction', [20, 20, 20, 20], 'super_set', { restSeconds: 15 }),
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Week 6
// ---------------------------------------------------------------------------

const week6: WorkoutWeek = {
  weekNumber: 6,
  days: [
    day('Challenge Workout W6/D1', 'W6/D1', [
      s('SB plank', [1, 1, 1, 1], 'normal', { timeSeconds: 60, restSeconds: 15 }),
      s('Alternating knee to elbow towel slides', [20, 20, 20, 20], 'super_set'),
      s('Table Top Knee Taps with Block Adduction', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W6/D2', 'W6/D2', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('weighted stability ball crunch', [20, 20, 20, 20], 'normal', { restSeconds: 15 }),
      s('MB pelvic floor heel taps', [20, 20, 20, 20], 'super_set'),
      s('KB pull over with glute bridge', [15, 15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W6/D3', 'W6/D3', [
      s('Up And Down Plank', [1, 1, 1, 1], 'super_set', { timeSeconds: 45 }),
      s('SB folding chairs', [20, 20, 20, 20], 'super_set'),
      s('Pallof cable press', [15, 15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W6/D4', 'W6/D4', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('lower leg lifts with block feet holds', [20, 20, 20, 20], 'normal', { restSeconds: 15 }),
      s('supported hip dead bug', [20, 20, 20, 20], 'super_set'),
      s('medicine ball crunch', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W6/D5', 'W6/D5', [
      s('SB plank', [1, 1, 1, 1], 'normal', { timeSeconds: 60, restSeconds: 15 }),
      s('Bench low leg lifts with glute raise', [20, 20, 20, 20], 'super_set'),
      s('stability ball knee tucks', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Week 7
// ---------------------------------------------------------------------------

const week7: WorkoutWeek = {
  weekNumber: 7,
  days: [
    day('Challenge Workout W7/D1', 'W7/D1', [
      s('SB plank', [1, 1, 1, 1], 'normal', { timeSeconds: 60, restSeconds: 15 }),
      s('medicine ball dead bugs', [20, 20, 20, 20], 'super_set'),
      s('crunch with adduction (pelvic floor)', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W7/D2', 'W7/D2', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('Table top alternating towel arm slides', [20, 20, 20, 20], 'normal', { restSeconds: 15 }),
      s('Lower Leg bent knee windmill with block', [15, 15, 15, 15], 'super_set'),
      s('Table Top Knee Taps with Block Adduction', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W7/D3', 'W7/D3', [
      s('Up And Down Plank', [1, 1, 1, 1], 'super_set', { timeSeconds: 45 }),
      s('Alternating knee to elbow towel slides', [20, 20, 20, 20], 'super_set'),
      s('Pallof cable press', [15, 15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W7/D4', 'W7/D4', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('weighted stability ball crunch', [20, 20, 20, 20], 'normal', { restSeconds: 15 }),
      s('KB pull over with glute bridge', [15, 15, 15, 15], 'super_set'),
      s('supported hip dead bug', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W7/D5', 'W7/D5', [
      s('SB plank', [1, 1, 1, 1], 'normal', { timeSeconds: 60, restSeconds: 15 }),
      s('SB folding chairs', [20, 20, 20, 20], 'super_set'),
      s('MB pelvic floor heel taps', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Week 8
// ---------------------------------------------------------------------------

const week8: WorkoutWeek = {
  weekNumber: 8,
  days: [
    day('Challenge Workout W8/D1', 'W8/D1', [
      s('SB plank', [1, 1, 1, 1], 'normal', { timeSeconds: 60, restSeconds: 15 }),
      s('Alternating knee to elbow towel slides', [20, 20, 20, 20], 'super_set'),
      s('SB folding chairs', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W8/D2', 'W8/D2', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('crunch with adduction (pelvic floor)', [20, 20, 20, 20], 'normal', { restSeconds: 15 }),
      s('Lower Leg bent knee windmill with block', [15, 15, 15, 15], 'super_set'),
      s('stability ball knee tucks', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W8/D3', 'W8/D3', [
      s('Up And Down Plank', [1, 1, 1, 1], 'super_set', { timeSeconds: 45 }),
      s('medicine ball dead bugs', [20, 20, 20, 20], 'super_set'),
      s('Pallof cable press', [15, 15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W8/D4', 'W8/D4', [
      s('SB stomach Vaccum', [1, 1, 1, 1], 'normal', { timeSeconds: 15, restSeconds: 15 }),
      s('Table top alternating towel arm slides', [20, 20, 20, 20], 'normal', { restSeconds: 15 }),
      s('Table Top Knee Taps with Block Adduction', [20, 20, 20, 20], 'super_set'),
      s('Lower leg windmill', [15, 15, 15, 15], 'super_set', { restSeconds: 30 }),
    ]),
    day('Challenge Workout W8/D5', 'W8/D5', [
      s('SB plank', [1, 1, 1, 1], 'normal', { timeSeconds: 60, restSeconds: 15 }),
      s('KB pull over with glute bridge', [15, 15, 15, 15], 'super_set'),
      s('weighted stability ball crunch', [20, 20, 20, 20], 'super_set', { restSeconds: 30 }),
    ]),
  ],
};

// ---------------------------------------------------------------------------
// Programs
// ---------------------------------------------------------------------------

export const CORE_CHALLENGE: WorkoutProgram = {
  id: 'jamie-core-challenge-8wk',
  name: '8-Week Core & Pelvic Floor Challenge',
  description:
    'Jamie Esposito\'s signature 8-week core strengthening and pelvic floor rehabilitation ' +
    'program. Progressive overload from 3 sets (Weeks 1-4) to 4 sets (Weeks 5-8) with ' +
    'increasing hold times and rep counts. 5 workouts per week targeting deep core stability, ' +
    'pelvic floor engagement, and functional core strength.',
  createdBy: 'Jamie Esposito',
  category: ['core', 'pelvic_floor', 'challenge'],
  difficulty: 'all_levels',
  weeks: [week1, week2, week3, week4, week5, week6, week7, week8],
  durationWeeks: 8,
  isPremium: false, // Flagship free program
  tags: [
    'core',
    'pelvic floor',
    'stability ball',
    'postpartum',
    'beginner friendly',
    'progressive overload',
    '8 week challenge',
  ],
};

/** All available workout programs */
export const WORKOUT_PROGRAMS: WorkoutProgram[] = [CORE_CHALLENGE];

/** Lookup by ID */
export function getProgramById(programId: string): WorkoutProgram | undefined {
  return WORKOUT_PROGRAMS.find((p) => p.id === programId);
}

export default WORKOUT_PROGRAMS;
