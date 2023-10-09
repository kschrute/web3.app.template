import { JobOptions } from 'bull'
import { queues } from './queues'
import { Job } from './Job'
import { ProcessAllEvents } from './ProcessAllEvents'

export class ScheduleProcessAllEthereumEvents extends Job<object> {
  public queue = queues.events

  public options: JobOptions = {
    jobId: 'ScheduleProcessAllEthereumEvents',
    removeOnComplete: true,
    removeOnFail: true,
  }

  public async handle() {
    await new ProcessAllEvents().schedule()
  }
}
