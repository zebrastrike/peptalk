const fs = require('fs');
const content = fs.readFileSync('./src/data/exerciseIndex.ts', 'utf8');

// The data is already JSON objects — just strip the TS wrapper
// Line 25: export const EXERCISE_INDEX: ExerciseIndexEntry[] = [
// Strip the type annotation and grab the raw JSON array
const cleaned = content
  .replace(/export const EXERCISE_INDEX: ExerciseIndexEntry\[\] = /, 'const EXERCISE_INDEX = ')
  .replace(/export const EXERCISE_INDEX_MAP[\s\S]*$/, '') // drop the rest
  .replace(/export interface[\s\S]*?^}/m, '')
  .replace(/import type[\s\S]*?\n/g, '');

// Just parse the array directly — it's valid JSON between [ and ] as const;
const arrStart = content.indexOf(': ExerciseIndexEntry[] = ') + ': ExerciseIndexEntry[] = '.length;
const arrEnd = content.indexOf('\n] as const;') + 2; // include ]\n

const jsonStr = content.slice(arrStart, arrEnd).replace('as const;', '').trim();

try {
  const arr = JSON.parse(jsonStr);
  fs.writeFileSync('./src/data/exerciseIndex.json', JSON.stringify(arr));
  console.log('Done:', arr.length, 'exercises written to exerciseIndex.json');
} catch (e) {
  console.error('Parse error:', e.message.slice(0, 300));
}
