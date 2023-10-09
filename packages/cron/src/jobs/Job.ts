import { JobOptions } from 'bull'
import { Queue } from './queues/Queue'

export abstract class Job<JobData> {
  public queue: Queue | undefined

  private cron: string | null = null

  constructor(public data: JobData = {} as JobData) {}

  public options: JobOptions = {}

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

    await this.queue?.schedule(this, { ...this.options, ...jobOptions })
  }
}
