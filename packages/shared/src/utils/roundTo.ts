export const roundTo = (value: number, digits: number = 0) => {
  const m = Math.pow(10, digits)
  const n = parseFloat((value * m).toFixed(11))

  return Math.round(n) / m
}
