import { queues } from './queues'
import { ProcessAllEvents } from './ProcessAllEvents'
import { JobUnique } from './JobUnique'

export class ScheduleProcessAllEthereumEvents extends JobUnique<object> {
  public queue = queues.events

  public async handle() {
    await new ProcessAllEvents().schedule()
  }
}
