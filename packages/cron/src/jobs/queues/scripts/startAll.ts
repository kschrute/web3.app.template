import { queues } from '../index'

export const startAll = async () => {
  await Promise.all(Object.values(queues).map((q) => q.start()))
}
