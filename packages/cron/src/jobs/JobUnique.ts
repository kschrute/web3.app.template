import { JobOptions } from 'bull'
import { stringify } from 'viem'
import { Job } from './Job'

export abstract class JobUnique<JobData> extends Job<JobData> {
  defaultOptions: JobOptions = {
    removeOnComplete: true,
    removeOnFail: true,
  }

  constructor(public data: JobData = {} as JobData) {
    super()
    this.defaultOptions.jobId = `${this.constructor.name}:${stringify(this.data)}`
  }
}
