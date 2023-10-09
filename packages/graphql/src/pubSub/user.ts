import { pubSub } from '.'

export const subscribeUserUpdates = (userAddress: string) => pubSub().subscribe(`user:${userAddress}:update`)

export const publishUserUpdates = (userAddress: string, requestCount: number) =>
  pubSub().publish(`user:${userAddress}:update`, requestCount)
