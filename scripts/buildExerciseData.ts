/**
 * Build script: transforms Trainerize exercises_ALL.json (3,030 exercises)
 * into two TypeScript files for the app:
 *
 *   src/data/exerciseIndex.ts  — lightweight searchable array (~300KB)
 *   src/data/exerciseDetails.ts — lazy-loaded media/video detail map
 *
 * Run: npx ts-node scripts/buildExerciseData.ts
 *   or: node -e "require('ts-node').register(); require('./scripts/buildExerciseData.ts')"
 *   or just: node scripts/buildExerciseData.js  (after tsc)
 */

import * as fs from 'fs';
import * as path from 'path';

// ---------------------------------------------------------------------------
// Types (mirror the Trainerize JSON shape)
// ---------------------------------------------------------------------------

interface TrainerizeExercise {
  id: number;
  name: string;
  alternateName: string;
  description: string;
  type: 'custom' | 'system';
  recordType: string;
  media: {
    type: string; // youtube | vimeo | awss3 | none
    token: string | null;
    thumbnailUrl?: { hd?: string; sd?: string };
    default?: {
      videoUrls?: { sd?: string; hd?: string; fhd?: string; hls?: string };
      loopVideoUrls?: { sd?: string; hd?: string };
      thumbnailUrls?: { hd?: string; sd?: string };
    };
  };
  videoType: string;
  videoUrl: string | null;
  tags: string[];
}

// ---------------------------------------------------------------------------
// Inference helpers (copied from src/data/exercises.ts)
// ---------------------------------------------------------------------------

type MuscleGroup = 'chest' | 'back' | 'shoulders' | 'biceps' | 'triceps' | 'core'
  | 'quads' | 'hamstrings' | 'glutes' | 'calves' | 'forearms' | 'full_body'
  | 'pelvic_floor' | 'cardio';

type Equipment = 'none' | 'dumbbell' | 'barbell' | 'kettlebell' | 'cable' | 'machine'
  | 'band' | 'stability_ball' | 'medicine_ball' | 'bench' | 'smith_machine'
  | 'pull_up_bar' | 'plate' | 'towel' | 'block' | 'jump_rope';

type ExerciseDifficulty = 'beginner' | 'intermediate' | 'advanced';
type VideoSource = 'youtube' | 'vimeo' | 'awss3' | 'none';

function inferEquipment(name: string): Equipment[] {
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

function inferMuscle(name: string): MuscleGroup {
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

function inferDifficulty(name: string): ExerciseDifficulty {
  const n = name.toLowerCase();
  if (/\bsingle leg\b|\bunilateral\b|\bpistol\b|\bbulgarian\b|\bdeficit\b|\bdrop set\b|\bhanging\b/.test(n)) return 'advanced';
  if (/\bbarbell\b|\bsmith\b|\bcable\b|\bmachine\b/.test(n)) return 'intermediate';
  return 'beginner';
}

function inferTimeBased(name: string): boolean {
  const n = name.toLowerCase();
  return /\bplank\b|\bvaccum\b|\bwall sit\b|\bisometric\b|\bhold\b/.test(n);
}

// ---------------------------------------------------------------------------
// Load raw data
// ---------------------------------------------------------------------------

const SCRAPE_DIR = path.join(__dirname, '..', '_elevate_audit', 'trainerize_scrape');
const raw: TrainerizeExercise[] = JSON.parse(
  fs.readFileSync(path.join(SCRAPE_DIR, 'exercises_ALL.json'), 'utf8'),
);

console.log(`Loaded ${raw.length} exercises from Trainerize`);

// ---------------------------------------------------------------------------
// Normalize & deduplicate
// ---------------------------------------------------------------------------

const normalize = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();

const toId = (name: string): string =>
  normalize(name).replace(/ /g, '-');

interface IndexEntry {
  id: string;
  trainerizeId: number;
  name: string;
  normalizedName: string;
  primaryMuscle: MuscleGroup;
  equipment: Equipment[];
  difficulty: ExerciseDifficulty;
  isTimeBased: boolean;
  videoSource: VideoSource;
  thumbnailUrl: string | null;
  exerciseType: string; // custom | system
}

interface DetailEntry {
  description: string;
  videoSD: string | null;
  videoHD: string | null;
  videoFHD: string | null;
  videoHLS: string | null;
  youtubeUrl: string | null;
  thumbnailHD: string | null;
  thumbnailSD: string | null;
  loopSD: string | null;
  loopHD: string | null;
}

const indexEntries: IndexEntry[] = [];
const detailMap: Record<string, DetailEntry> = {};
const seenNormalized = new Set<string>();

for (const ex of raw) {
  const normName = normalize(ex.name);
  if (seenNormalized.has(normName)) continue;
  seenNormalized.add(normName);

  const exerciseId = toId(ex.name);
  const m = ex.media || {} as any;
  const d = m.default || {};
  const videoUrls = d.videoUrls || {};
  const loopUrls = d.loopVideoUrls || {};
  const thumbs = m.thumbnailUrl || d.thumbnailUrls || {};

  const videoSource: VideoSource =
    m.type === 'youtube' ? 'youtube' :
    m.type === 'vimeo' ? 'vimeo' :
    m.type === 'awss3' ? 'awss3' : 'none';

  indexEntries.push({
    id: exerciseId,
    trainerizeId: ex.id,
    name: ex.name,
    normalizedName: normName,
    primaryMuscle: inferMuscle(ex.name),
    equipment: inferEquipment(ex.name),
    difficulty: inferDifficulty(ex.name),
    isTimeBased: inferTimeBased(ex.name),
    videoSource,
    thumbnailUrl: thumbs.hd || thumbs.sd || null,
    exerciseType: ex.type,
  });

  const youtubeUrl = ex.videoType === 'youtube' && ex.videoUrl
    ? `https://www.youtube.com/watch?v=${ex.videoUrl}`
    : null;

  detailMap[exerciseId] = {
    description: (ex.description || '').substring(0, 500),
    videoSD: videoUrls.sd || null,
    videoHD: videoUrls.hd || null,
    videoFHD: videoUrls.fhd || null,
    videoHLS: videoUrls.hls || null,
    youtubeUrl,
    thumbnailHD: thumbs.hd || null,
    thumbnailSD: thumbs.sd || null,
    loopSD: loopUrls.sd || null,
    loopHD: loopUrls.hd || null,
  };
}

console.log(`Deduplicated: ${indexEntries.length} unique exercises`);

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

const muscleStats: Record<string, number> = {};
const equipStats: Record<string, number> = {};
const sourceStats: Record<string, number> = {};
for (const e of indexEntries) {
  muscleStats[e.primaryMuscle] = (muscleStats[e.primaryMuscle] || 0) + 1;
  sourceStats[e.videoSource] = (sourceStats[e.videoSource] || 0) + 1;
  for (const eq of e.equipment) {
    equipStats[eq] = (equipStats[eq] || 0) + 1;
  }
}
console.log('\nMuscle groups:', JSON.stringify(muscleStats, null, 2));
console.log('\nVideo sources:', JSON.stringify(sourceStats, null, 2));
console.log('\nEquipment:', JSON.stringify(equipStats, null, 2));

// ---------------------------------------------------------------------------
// Generate exerciseIndex.ts
// ---------------------------------------------------------------------------

const OUT_DIR = path.join(__dirname, '..', 'src', 'data');

let indexFile = `/**
 * Auto-generated exercise index from Trainerize data.
 * ${indexEntries.length} unique exercises.
 * Generated: ${new Date().toISOString().split('T')[0]}
 *
 * DO NOT EDIT — regenerate with: npx ts-node scripts/buildExerciseData.ts
 */

import type { Exercise, VideoSource } from '../types/fitness';

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

export const EXERCISE_INDEX: ExerciseIndexEntry[] = `;

indexFile += JSON.stringify(indexEntries, null, 2) + ';\n';
indexFile += `
export const EXERCISE_INDEX_MAP = new Map<string, ExerciseIndexEntry>(
  EXERCISE_INDEX.map((e) => [e.id, e]),
);

export const TRAINERIZE_ID_MAP = new Map<number, ExerciseIndexEntry>(
  EXERCISE_INDEX.map((e) => [e.trainerizeId, e]),
);
`;

fs.writeFileSync(path.join(OUT_DIR, 'exerciseIndex.ts'), indexFile);
console.log(`\nWrote exerciseIndex.ts (${(indexFile.length / 1024).toFixed(0)}KB)`);

// ---------------------------------------------------------------------------
// Generate exerciseDetails.ts
// ---------------------------------------------------------------------------

let detailFile = `/**
 * Auto-generated exercise details (media URLs, descriptions).
 * Lazy-load this file only when showing exercise detail views.
 * Generated: ${new Date().toISOString().split('T')[0]}
 *
 * DO NOT EDIT — regenerate with: npx ts-node scripts/buildExerciseData.ts
 */

export interface ExerciseDetail {
  description: string;
  videoSD: string | null;
  videoHD: string | null;
  videoFHD: string | null;
  videoHLS: string | null;
  youtubeUrl: string | null;
  thumbnailHD: string | null;
  thumbnailSD: string | null;
  loopSD: string | null;
  loopHD: string | null;
}

export const EXERCISE_DETAILS: Record<string, ExerciseDetail> = `;

detailFile += JSON.stringify(detailMap, null, 2) + ';\n';
detailFile += `
export function getExerciseDetail(exerciseId: string): ExerciseDetail | undefined {
  return EXERCISE_DETAILS[exerciseId];
}
`;

fs.writeFileSync(path.join(OUT_DIR, 'exerciseDetails.ts'), detailFile);
console.log(`Wrote exerciseDetails.ts (${(detailFile.length / 1024).toFixed(0)}KB)`);

console.log('\nDone!');
