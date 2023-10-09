import { queues } from '../index'

export const pauseAll = async () => {
  await Promise.all(Object.values(queues).map((q) => q.pause()))
}
