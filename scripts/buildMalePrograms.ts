/**
 * Generate male workout program templates and merge with Jamie's.
 * Run: npx tsx scripts/buildMalePrograms.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const templatesPath = path.resolve(__dirname, '../src/data/workoutTemplates.json');
const templates = JSON.parse(fs.readFileSync(templatesPath, 'utf8'));

interface SlotDef {
  muscle: string;
  priority: string;
  reps: string;
  setType: string;
  tempo?: string;
  rest?: string;
}

interface DayDef {
  name: string;
  slots: SlotDef[];
}

interface ProgramConfig {
  label: string;
  goalId: string;
  reps: string;
  coreReps: string;
  tempo: string;
  rest: string;
  splits: Record<number, [string, string, string?][][]>; // [muscle, priority, setType][]
}

function buildProgram(config: ProgramConfig, days: number, duration: number) {
  const dayTemplates: DayDef[] = [];

  for (let d = 1; d <= days; d++) {
    const slots: SlotDef[] = [];
    const dayMuscles = config.splits[days][d - 1];

    dayMuscles.forEach(([muscle, priority, setType]) => {
      slots.push({
        muscle,
        priority,
        reps: config.reps,
        setType: setType || 'normal',
        tempo: config.tempo || undefined,
        rest: config.rest,
      });
    });

    // Add core at end
    if (d <= days - 1 || days <= 3) {
      slots.push({
        muscle: 'core',
        priority: 'P1',
        reps: config.coreReps,
        setType: 'normal',
        rest: config.rest,
      });
    }

    dayTemplates.push({
      name: `${config.label} ${days}D/D${d}`,
      slots,
    });
  }

  return {
    id: `${config.goalId}-${days}d-${duration}m-male`,
    goal: config.goalId,
    daysPerWeek: days,
    durationMinutes: duration,
    gender: 'male',
    label: `${config.label} ${days}-Day`,
    days: dayTemplates,
  };
}

// ── HYPERTROPHY: 10-12 reps, 3-4 sets, 30-45 sec rest ──
const hypertrophy: ProgramConfig = {
  label: 'Hypertrophy',
  goalId: 'hypertrophy',
  reps: '10-12/10-12/10-12/10-12',
  coreReps: '15/15/15',
  tempo: '2010',
  rest: '30-45 seconds',
  splits: {
    3: [
      [['chest','P1','super_set'],['shoulders','P1','super_set'],['triceps','P1','super_set_2'],['chest','P2','super_set_2']],
      [['back','P1','super_set'],['biceps','P1','super_set'],['back','P2','super_set_2'],['shoulders','P2','super_set_2']],
      [['quads','P1','super_set'],['glutes','P1','super_set'],['hamstrings','P1','super_set_2'],['calves','P1','super_set_2']],
    ],
    4: [
      [['chest','P1','super_set'],['back','P1','super_set'],['shoulders','P1','super_set_2'],['biceps','P1','super_set_2'],['triceps','P1']],
      [['quads','P1','super_set'],['glutes','P1','super_set'],['hamstrings','P1','super_set_2'],['calves','P1','super_set_2']],
      [['chest','P1','super_set'],['shoulders','P1','super_set'],['triceps','P1','super_set_2'],['chest','P2','super_set_2']],
      [['back','P1','super_set'],['back','P2','super_set'],['biceps','P1','super_set_2'],['shoulders','P2','super_set_2']],
    ],
    5: [
      [['chest','P1','super_set'],['chest','P1','super_set'],['chest','P2','super_set_2'],['chest','P2','super_set_2']],
      [['back','P1','super_set'],['back','P1','super_set'],['back','P2','super_set_2'],['back','P2','super_set_2']],
      [['shoulders','P1','super_set'],['shoulders','P2','super_set'],['trapezius','P1','super_set_2'],['shoulders','P2','super_set_2']],
      [['quads','P1','super_set'],['glutes','P1','super_set'],['hamstrings','P1','super_set_2'],['calves','P1','super_set_2']],
      [['biceps','P1','super_set'],['triceps','P1','super_set'],['biceps','P1','super_set_2'],['triceps','P1','super_set_2']],
    ],
  },
};

// ── STRENGTH: 6-8 reps, 3-6 sets, 90-120 sec rest ──
const strength: ProgramConfig = {
  label: 'Strength',
  goalId: 'strength',
  reps: '6-8/6-8/6-8/6-8/6-8',
  coreReps: '12/12/12',
  tempo: '3010',
  rest: '90-120 seconds',
  splits: {
    3: [
      [['chest','P1'],['chest','P1'],['shoulders','P1'],['triceps','P1']],
      [['back','P1'],['back','P1'],['biceps','P1'],['shoulders','P1']],
      [['quads','P1'],['hamstrings','P1'],['glutes','P1'],['calves','P1']],
    ],
    4: [
      [['chest','P1'],['chest','P1'],['shoulders','P1'],['triceps','P1']],
      [['quads','P1'],['quads','P1'],['hamstrings','P1'],['glutes','P1']],
      [['back','P1'],['back','P1'],['biceps','P1'],['back','P2']],
      [['shoulders','P1'],['shoulders','P1'],['trapezius','P1'],['calves','P1']],
    ],
    5: [
      [['chest','P1'],['chest','P1'],['chest','P1'],['triceps','P1']],
      [['back','P1'],['back','P1'],['back','P1'],['biceps','P1']],
      [['quads','P1'],['quads','P1'],['hamstrings','P1']],
      [['shoulders','P1'],['shoulders','P1'],['trapezius','P1']],
      [['glutes','P1'],['hamstrings','P1'],['calves','P1'],['biceps','P1'],['triceps','P1']],
    ],
  },
};

// ── AEROBIC/WOD: circuits, timed, minimal rest ──
const aerobic: ProgramConfig = {
  label: 'Aerobic Performance',
  goalId: 'aerobic',
  reps: 'AMRAP/AMRAP/AMRAP',
  coreReps: '30sec/30sec/30sec',
  tempo: '',
  rest: '15-20 seconds',
  splits: {
    3: [
      [['quads','P1','super_set'],['chest','P1','super_set'],['circuit_cardio','P1','super_set_2'],['back','P1','super_set_2'],['circuit_cardio','P1','super_set_3']],
      [['glutes','P1','super_set'],['shoulders','P1','super_set'],['circuit_cardio','P1','super_set_2'],['biceps','P1','super_set_2'],['circuit_cardio','P1','super_set_3']],
      [['hamstrings','P1','super_set'],['back','P1','super_set'],['circuit_cardio','P1','super_set_2'],['chest','P1','super_set_2'],['circuit_cardio','P1','super_set_3']],
    ],
    4: [
      [['quads','P1','super_set'],['circuit_cardio','P1','super_set'],['chest','P1','super_set_2'],['circuit_cardio','P1','super_set_2']],
      [['back','P1','super_set'],['circuit_cardio','P1','super_set'],['shoulders','P1','super_set_2'],['circuit_cardio','P1','super_set_2']],
      [['glutes','P1','super_set'],['circuit_cardio','P1','super_set'],['hamstrings','P1','super_set_2'],['circuit_cardio','P1','super_set_2']],
      [['biceps','P1','super_set'],['triceps','P1','super_set'],['circuit_cardio','P1','super_set_2'],['circuit_cardio','P1','super_set_2']],
    ],
    5: [
      [['quads','P1','super_set'],['circuit_cardio','P1','super_set'],['glutes','P1','super_set_2'],['circuit_cardio','P1','super_set_2']],
      [['chest','P1','super_set'],['circuit_cardio','P1','super_set'],['back','P1','super_set_2'],['circuit_cardio','P1','super_set_2']],
      [['shoulders','P1','super_set'],['circuit_cardio','P1','super_set'],['biceps','P1','super_set_2'],['triceps','P1','super_set_2']],
      [['hamstrings','P1','super_set'],['circuit_cardio','P1','super_set'],['calves','P1','super_set_2'],['circuit_cardio','P1','super_set_2']],
      [['circuit_cardio','P1','super_set'],['quads','P1','super_set'],['circuit_cardio','P1','super_set_2'],['chest','P1','super_set_2']],
    ],
  },
};

// ── BODY RECOMP: hypertrophy + cardio ──
const recomp: ProgramConfig = {
  label: 'Body Recomp',
  goalId: 'body_recomp',
  reps: '10-12/10-12/10-12/10-12',
  coreReps: '15/15/15',
  tempo: '2010',
  rest: '30-45 seconds',
  splits: {
    3: [
      [['chest','P1','super_set'],['back','P1','super_set'],['circuit_cardio','P1'],['shoulders','P1','super_set_2'],['triceps','P1','super_set_2'],['circuit_cardio','P1']],
      [['quads','P1','super_set'],['glutes','P1','super_set'],['circuit_cardio','P1'],['hamstrings','P1','super_set_2'],['calves','P1','super_set_2'],['circuit_cardio','P1']],
      [['back','P1','super_set'],['biceps','P1','super_set'],['circuit_cardio','P1'],['shoulders','P2','super_set_2'],['chest','P2','super_set_2'],['circuit_cardio','P1']],
    ],
    4: [
      [['chest','P1','super_set'],['shoulders','P1','super_set'],['triceps','P1','super_set_2'],['circuit_cardio','P1']],
      [['quads','P1','super_set'],['glutes','P1','super_set'],['hamstrings','P1','super_set_2'],['circuit_cardio','P1']],
      [['back','P1','super_set'],['biceps','P1','super_set'],['back','P2','super_set_2'],['circuit_cardio','P1']],
      [['shoulders','P1','super_set'],['chest','P2','super_set'],['calves','P1','super_set_2'],['circuit_cardio','P1']],
    ],
    5: [
      [['chest','P1','super_set'],['chest','P2','super_set'],['triceps','P1'],['circuit_cardio','P1']],
      [['back','P1','super_set'],['back','P2','super_set'],['biceps','P1'],['circuit_cardio','P1']],
      [['quads','P1','super_set'],['glutes','P1','super_set'],['hamstrings','P1'],['circuit_cardio','P1']],
      [['shoulders','P1','super_set'],['shoulders','P2','super_set'],['trapezius','P1'],['circuit_cardio','P1']],
      [['glutes','P2','super_set'],['calves','P1','super_set'],['biceps','P1','super_set_2'],['triceps','P1','super_set_2'],['circuit_cardio','P1']],
    ],
  },
};

// Generate all 12 male programs
[hypertrophy, strength, aerobic, recomp].forEach(config => {
  [3, 4, 5].forEach(days => {
    templates.push(buildProgram(config, days, 60));
  });
});

fs.writeFileSync(templatesPath, JSON.stringify(templates, null, 2));
console.log(`Total templates: ${templates.length}`);
templates.forEach((t: any) =>
  console.log(`${t.id} (${t.gender}): ${t.days.length} days, ${t.days.reduce((s: number, d: any) => s + d.slots.length, 0)} slots`)
);
