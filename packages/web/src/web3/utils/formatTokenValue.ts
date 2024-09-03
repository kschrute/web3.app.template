export const formatTokenValue = (number: number | string | bigint, maxFractionDigits = 18) =>
  Intl.NumberFormat('en', {
    notation: 'standard',
    maximumFractionDigits: maxFractionDigits,
  }).format(Number(number))
