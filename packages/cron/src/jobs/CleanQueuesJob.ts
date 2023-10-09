import { queues } from './queues'
import { cleanAll } from './queues/scripts'
import { Job } from './Job'

export class CleanQueuesJob extends Job<object> {
  public queue = queues.default

  public async handle() {
    await cleanAll()
  }
}
