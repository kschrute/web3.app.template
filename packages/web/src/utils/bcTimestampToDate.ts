export const bcTimestampToDate = (timestamp: number | bigint) => new Date(Number(timestamp) * 1000)
