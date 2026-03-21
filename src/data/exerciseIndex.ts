/**
 * Exercise index — 3,006 exercises from Jamie Esposito's Trainerize archive.
 * Data lives in exerciseIndex.json for fast Metro bundling.
 */

import type { Exercise, VideoSource } from '../types/fitness';
import rawData from './exerciseIndex.json';

export interface ExerciseIndexEntry {
  id: string;
  trainerizeId: number;
  name: string;
  normalizedName: string;
  primaryMuscle: Exercise['primaryMuscle'];
  equipment: Exercise['equipment'];
  difficulty: Exercise['difficulty'];
  isTimeBased: boolean;
  videoSource: VideoSource;
  thumbnailUrl: string | null;
  exerciseType: 'custom' | 'system';
}

export const EXERCISE_INDEX: ExerciseIndexEntry[] = rawData as ExerciseIndexEntry[];

export const EXERCISE_INDEX_MAP = new Map<string, ExerciseIndexEntry>(
  EXERCISE_INDEX.map((e) => [e.id, e]),
);

export const TRAINERIZE_ID_MAP = new Map<number, ExerciseIndexEntry>(
  EXERCISE_INDEX.map((e) => [e.trainerizeId, e]),
);
