export const INITIAL_COUNT = 0;
export const STEP = 1;
export const MAX_HISTORY = 7;

export function increment(count) {
  return count + STEP;
}

export function decrement(count) {
  return count - STEP;
}

export function reset() {
  return INITIAL_COUNT;
}

export function addToHistory(history, type) {
  const updated = [...history, type];
  if (updated.length > MAX_HISTORY) updated.shift();
  return updated;
}
