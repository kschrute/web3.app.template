import { defaultQueue } from './DefaultQueue'
import { eventsQueue } from './EventsQueue'
import { schedulerQueue } from './SchedulerQueue'

export const queues = {
  default: defaultQueue,
  events: eventsQueue,
  scheduler: schedulerQueue,
}
