import { JobOptions } from 'bull'
import { defaultOptions, Queue } from './Queue'

export class EventsQueue extends Queue {
  public name = 'events'

  public concurrency = 1

  public options: JobOptions = {
    ...defaultOptions,
  }
}

export const eventsQueue = new EventsQueue()
