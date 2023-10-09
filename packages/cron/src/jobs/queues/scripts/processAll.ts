import { queues } from '../index'

export const processAll = async () => {
  await Promise.all(Object.values(queues).map((q) => q.process()))
}
