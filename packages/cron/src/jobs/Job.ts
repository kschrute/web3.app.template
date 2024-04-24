import { JobOptions } from 'bull'
import { Queue } from './queues/Queue'

// TODO: Create a batch job class
export abstract class Job<JobData> {
  private cron: string | null = null

  protected defaultOptions: JobOptions = {}

  public queue: Queue | undefined

  public options: JobOptions = {}

  constructor(public data: JobData = {} as JobData) {}

  public abstract handle(): Promise<any>

  public onQueue(queue: Queue) {
    this.queue = queue
    return this
  }

  public repeat(cron: string) {
    this.cron = cron
    return this
  }

  public async schedule(jobOptions: JobOptions = {}) {
    if (this.cron) {
      jobOptions.repeat = {
        cron: this.cron,
      }
    }

    await this.queue?.schedule(this, { ...this.defaultOptions, ...this.options, ...jobOptions })
  }
}
