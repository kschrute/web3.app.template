import { queues } from '../index'

export const cleanAll = async () => {
  await Promise.all(Object.values(queues).map((q) => q.clean()))
}
