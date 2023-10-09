import { JobOptions } from 'bull'
import { defaultOptions, Queue } from './Queue'

export class DefaultQueue extends Queue {
  public name = 'default'

  public concurrency = 10

  public options: JobOptions = {
    ...defaultOptions,
    attempts: 1,
  }
}

export const defaultQueue = new DefaultQueue()
