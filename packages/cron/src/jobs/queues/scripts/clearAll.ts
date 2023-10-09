import { queues } from '../index'

export const clearAll = async () => {
  await Promise.all(Object.values(queues).map((q) => q.clear()))
}
