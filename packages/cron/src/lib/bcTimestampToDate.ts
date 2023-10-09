import { BigNumberish } from 'ethers'

export const bcTimestampToDate = (timestamp: BigNumberish) => {
  return new Date(Number(timestamp) * 1000)
}
