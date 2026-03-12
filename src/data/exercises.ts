/**
 * Master exercise library — 3,006 exercises from Jamie Esposito's Trainerize archive.
 *
 * Backed by auto-generated exerciseIndex.ts (lightweight) and exerciseDetails.ts (lazy).
 * The original inference helpers are preserved for any runtime categorization needs.
 */

import type { Exercise, MuscleGroup, Equipment, ExerciseDifficulty } from '../types/fitness';
import { EXERCISE_INDEX, EXERCISE_INDEX_MAP, TRAINERIZE_ID_MAP } from './exerciseIndex';
import type { ExerciseIndexEntry } from './exerciseIndex';

// Re-export for convenience
export { EXERCISE_INDEX, EXERCISE_INDEX_MAP, TRAINERIZE_ID_MAP };
export type { ExerciseIndexEntry };

// ---------------------------------------------------------------------------
// Inference Helpers (kept for runtime use & new exercises)
// ---------------------------------------------------------------------------

const normalize = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();

const id = (name: string): string =>
  normalize(name).replace(/ /g, '-');

/** Infer equipment from exercise name */
export function inferEquipment(name: string): Equipment[] {
  const n = name.toLowerCase();
  const eq: Equipment[] = [];
  if (/\bdumbbell\b|\bdb\b/.test(n)) eq.push('dumbbell');
  if (/\bbarbell\b/.test(n)) eq.push('barbell');
  if (/\bkettlebell\b|\bkb\b/.test(n)) eq.push('kettlebell');
  if (/\bcable\b/.test(n)) eq.push('cable');
  if (/\bmachine\b|\bleg press\b|\bhack\b|\bpreacher curls machine\b/.test(n)) eq.push('machine');
  if (/\bband\b|\bbanded\b|\bresistance band\b/.test(n)) eq.push('band');
  if (/\bstability ball\b|\bsb\b|\bball\b/.test(n)) eq.push('stability_ball');
  if (/\bmedicine ball\b|\bmb\b/.test(n)) eq.push('medicine_ball');
  if (/\bbench\b/.test(n)) eq.push('bench');
  if (/\bsmith machine\b|\bsmith\b/.test(n)) eq.push('smith_machine');
  if (/\bhanging\b|\bpull up\b|\bchin up\b/.test(n)) eq.push('pull_up_bar');
  if (/\bplate\b/.test(n)) eq.push('plate');
  if (/\btowel\b/.test(n)) eq.push('towel');
  if (/\bblock\b/.test(n)) eq.push('block');
  if (/\bjump rope\b/.test(n)) eq.push('jump_rope');
  if (eq.length === 0) eq.push('none');
  return eq;
}

/** Infer primary muscle group from exercise name */
export function inferMuscle(name: string): MuscleGroup {
  const n = name.toLowerCase();
  if (/\bplank\b|\bcrunch\b|\bdead bug\b|\bvaccum\b|\bpike\b|\bwindmill\b|\btable top\b|\bknee raise\b|\bleg raise\b|\bleg lift\b|\bshoulder tap\b|\boblique\b|\bwoodchop\b|\bpelvic\b|\bpallof\b|\bfolding chair\b|\bsuperman\b/.test(n)) return 'core';
  if (/\bpelvic floor\b/.test(n)) return 'pelvic_floor';
  if (/\bglute\b|\bhip thrust\b|\bkickback\b|\bfire hydrant\b|\bclam\b|\bdonkey\b|\babduction\b|\badduction\b|\brainbow\b|\bbridge\b/.test(n)) return 'glutes';
  if (/\bsquat\b|\blunge\b|\bleg press\b|\bhack\b|\bstep up\b|\bpistol\b|\bleg extension\b|\bcalf\b|\bwall sit\b|\bleg curl\b|\bhamstring curl\b|\bjump\b|\bduck walk\b|\bcrab walk\b/.test(n)) return 'quads';
  if (/\brdl\b|\bdeadlift\b|\bgood morning\b|\bhamstring\b|\brack pull\b/.test(n)) return 'hamstrings';
  if (/\bchest press\b|\bchest fly\b|\bpush up\b|\bpush-up\b|\bflys?\b|\bnarrow.*press\b|\bincline.*press\b|\bflat.*press\b|\bdecline.*push\b/.test(n)) return 'chest';
  if (/\brow\b|\bpull ?down\b|\bpullover\b|\blat\b|\bback extension\b|\bhyperextension\b|\bface ?pull\b|\breverse fly\b|\bchin up\b|\brenegade\b/.test(n)) return 'back';
  if (/\bshoulder press\b|\barnold\b|\blateral raise\b|\bfrontal raise\b|\bupright row\b|\bshrug\b|\breverse deltoid\b|\bshoulder\b|\baround the world\b/.test(n)) return 'shoulders';
  if (/\bbicep\b|\bcurl\b|\bhammer curl\b/.test(n)) return 'biceps';
  if (/\btricep\b|\bskull ?crush\b|\bpushdown\b|\bkickback\b|\bdip\b|\boverhead.*extension\b/.test(n)) return 'triceps';
  if (/\bjump rope\b|\bburpee\b|\bhop\b|\bshuffle\b|\bswing\b/.test(n)) return 'cardio';
  return 'full_body';
}

/** Infer difficulty */
export function inferDifficulty(name: string): ExerciseDifficulty {
  const n = name.toLowerCase();
  if (/\bsingle leg\b|\bunilateral\b|\bpistol\b|\bbulgarian\b|\bdeficit\b|\bdrop set\b|\bhanging\b/.test(n)) return 'advanced';
  if (/\bbarbell\b|\bsmith\b|\bcable\b|\bmachine\b/.test(n)) return 'intermediate';
  return 'beginner';
}

export function inferTimeBased(name: string): boolean {
  const n = name.toLowerCase();
  return /\bplank\b|\bvaccum\b|\bwall sit\b|\bisometric\b|\bhold\b/.test(n);
}

// ---------------------------------------------------------------------------
// Convert index entry → full Exercise (for backward compatibility)
// ---------------------------------------------------------------------------

function indexToExercise(entry: ExerciseIndexEntry): Exercise {
  return {
    id: entry.id,
    name: entry.name,
    normalizedName: entry.normalizedName,
    primaryMuscle: entry.primaryMuscle,
    secondaryMuscles: [],
    equipment: entry.equipment,
    difficulty: entry.difficulty,
    isTimeBased: entry.isTimeBased,
    tags: [],
    trainerizeId: entry.trainerizeId,
    videoSource: entry.videoSource,
    thumbnailUrl: entry.thumbnailUrl ?? undefined,
  };
}

// ---------------------------------------------------------------------------
// Exported Exercise Library (backward-compatible API)
// ---------------------------------------------------------------------------

export const EXERCISES: Exercise[] = EXERCISE_INDEX.map(indexToExercise);

/** Quick lookup by ID */
export const EXERCISE_MAP = new Map<string, Exercise>(
  EXERCISES.map((e) => [e.id, e]),
);

/** Get exercise by ID */
export function getExerciseById(exerciseId: string): Exercise | undefined {
  return EXERCISE_MAP.get(exerciseId);
}

/** Search exercises by name fragment */
export function searchExercises(query: string): Exercise[] {
  const q = query.toLowerCase().trim();
  if (!q) return EXERCISES;
  return EXERCISES.filter(
    (e) =>
      e.normalizedName.includes(q) ||
      e.primaryMuscle.includes(q) ||
      e.equipment.some((eq) => eq.includes(q)),
  );
}

/** Filter by muscle group */
export function getExercisesByMuscle(muscle: MuscleGroup): Exercise[] {
  return EXERCISES.filter((e) => e.primaryMuscle === muscle);
}

/** Filter by equipment */
export function getExercisesByEquipment(equip: Equipment): Exercise[] {
  return EXERCISES.filter((e) => e.equipment.includes(equip));
}

/** Get exercises that have video content */
export function getExercisesWithVideo(): Exercise[] {
  return EXERCISES.filter((e) => e.videoSource && e.videoSource !== 'none');
}

/** Get Jamie's custom exercises only */
export function getCustomExercises(): Exercise[] {
  const customIds = new Set(
    EXERCISE_INDEX.filter((e) => e.exerciseType === 'custom').map((e) => e.id),
  );
  return EXERCISES.filter((e) => customIds.has(e.id));
}

export default EXERCISES;
