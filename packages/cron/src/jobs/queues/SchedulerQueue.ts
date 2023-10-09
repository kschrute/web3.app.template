import { defaultOptions, Queue } from './Queue'
import { JobOptions } from 'bull'

export class SchedulerQueue extends Queue {
  public name = 'scheduler'

  public concurrency = 1

  public options: JobOptions = {
    ...defaultOptions,
  }
}

export const schedulerQueue = new SchedulerQueue()
