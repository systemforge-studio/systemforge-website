export const STAGGER_DELAY_CLASSES = [
  "delay-0",
  "delay-75",
  "delay-150",
  "delay-200",
  "delay-300",
  "delay-500",
  "delay-700",
] as const;

export function getStaggerDelayClass(index: number) {
  return STAGGER_DELAY_CLASSES[index % STAGGER_DELAY_CLASSES.length];
}