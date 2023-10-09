import { queues } from './queues'
import { Job } from './Job'
import { ProcessAllEvents } from './ProcessAllEvents'
import { JobOptions } from 'bull'

export class ScheduleProcessAllEthereumEvents extends Job<{}> {
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
