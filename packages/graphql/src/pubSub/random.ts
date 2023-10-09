import { pubSub } from '.'

export const subscribeRandomUpdates = () => pubSub().subscribe(`random`)

export const publishRandomUpdates = (randomNumber: number) => pubSub().publish(`random`, randomNumber)
