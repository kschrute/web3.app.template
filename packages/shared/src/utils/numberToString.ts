export const numberToString = (value: number | any) =>
  Number(value).toLocaleString('fullwide', { useGrouping: false, maximumFractionDigits: 18 })
