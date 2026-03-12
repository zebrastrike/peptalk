/**
 * Trend computation utilities for PepTalk visualization system.
 */

export function computeTrend(
  data: number[]
): { direction: 'up' | 'down' | 'flat'; delta: number } {
  if (data.length < 2) {
    return { direction: 'flat', delta: 0 };
  }

  const mid = Math.floor(data.length / 2);
  const firstHalf = data.slice(0, mid);
  const secondHalf = data.slice(mid);

  const firstAvg =
    firstHalf.reduce((sum, v) => sum + v, 0) / firstHalf.length;
  const secondAvg =
    secondHalf.reduce((sum, v) => sum + v, 0) / secondHalf.length;

  const delta = parseFloat((secondAvg - firstAvg).toFixed(2));

  let direction: 'up' | 'down' | 'flat';
  if (delta > 0.3) {
    direction = 'up';
  } else if (delta < -0.3) {
    direction = 'down';
  } else {
    direction = 'flat';
  }

  return { direction, delta };
}

export function computeCorrelation(
  doseStartDate: string,
  metricValues: { date: string; value: number }[]
): { before: number; after: number; change: number } | null {
  const threshold = new Date(doseStartDate).getTime();

  const before: number[] = [];
  const after: number[] = [];

  for (const entry of metricValues) {
    const entryTime = new Date(entry.date).getTime();
    if (entryTime < threshold) {
      before.push(entry.value);
    } else {
      after.push(entry.value);
    }
  }

  // Insufficient data — need at least 2 points on each side
  if (before.length < 2 || after.length < 2) {
    return null;
  }

  const beforeAvg = before.reduce((sum, v) => sum + v, 0) / before.length;
  const afterAvg = after.reduce((sum, v) => sum + v, 0) / after.length;
  const change = parseFloat((afterAvg - beforeAvg).toFixed(2));

  return {
    before: parseFloat(beforeAvg.toFixed(2)),
    after: parseFloat(afterAvg.toFixed(2)),
    change,
  };
}
