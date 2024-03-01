export const convertValueToScale = (oldValue: number, oldMin: number, oldMax: number, newMin: number, newMax: number) =>
  (((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin
