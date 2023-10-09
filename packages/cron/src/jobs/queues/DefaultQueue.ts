import { defaultOptions, Queue } from './Queue'
import { JobOptions } from 'bull'

export class DefaultQueue extends Queue {
  public name = 'default'

  public concurrency = 10

  public options: JobOptions = {
    ...defaultOptions,
    attempts: 1,
  }
}

export const defaultQueue = new DefaultQueue()
