import { queues } from '../index'

export const resumeAll = async () => {
  await Promise.all(Object.values(queues).map((q) => q.resume()))
}
