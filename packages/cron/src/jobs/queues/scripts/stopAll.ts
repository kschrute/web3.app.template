import { queues } from '../index'

export const stopAll = async () => {
  await Promise.all(Object.values(queues).map((q) => q.stop()))
}
