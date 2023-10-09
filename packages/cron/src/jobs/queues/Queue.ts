import Bull, { JobOptions } from 'bull'
import * as jobs from '../index'
import { Job } from '../Job'
import config from '../../../config'

export const defaultOptions: JobOptions = {
  timeout: 60 * 1000,
  removeOnComplete: true,
  attempts: 3,
}

export abstract class Queue {
  public abstract readonly name: string

  public concurrency = 1

  public options: JobOptions = {}

  protected queue: Bull.Queue | null = null

  public async start() {
    console.log(`Starting ${this.name} queue...`)

    if (this.queue) {
      throw new Error('Queue is already running')
    }

    const redisSettings = {
      host: config.redis.queue.host,
      port: config.redis.queue.port,
    }

    console.log(`Using ${JSON.stringify(redisSettings)} config`)

    this.queue = new Bull(this.name, { redis: redisSettings })

    await this.queue?.resume()
  }

  public async stop() {
    if (!this.queue) {
      throw new Error(`Queue ${this.name} is not running`)
    }

    console.log(`Stopping ${this.queue.name} queue...`)

    await this.queue.close()
    this.queue = null
  }

  public async schedule(job: Job<any>, jobOptions: JobOptions = {}) {
    if (!this.queue) {
      throw new Error(`Queue ${this.name} is not running`)
    }

    const { name } = job.constructor
    const { data } = job

    await this.queue.add(name, data, { ...this.options, ...jobOptions })
  }

  public async process() {
    if (!this.queue) {
      throw new Error(`Queue ${this.name} is not running`)
    }

    const stats = await this.queue.getJobCounts()
    console.log(`Queue '${this.name}' listening...`)
    console.log(`Queue '${this.name}' stats: ${JSON.stringify(stats)}`)

    this.queue.on('error', (err) => {
      console.log('Logging error:', err)
    })

    this.queue.on('failed', (job, err) => {
      console.log(`✖︎ ${this.name}: ${job.name} job failed (id ${job.id}) ${JSON.stringify(job.data)}`)
      console.log('err', err)
    })

    this.queue.process('*', this.concurrency, this.handle)
  }

  public async pause() {
    if (!this.queue) {
      throw new Error(`Queue ${this.name} is not running`)
    }

    console.log(`Pausing ${this.queue.name} queue...`)

    const scheduledJobs = await this.queue.getRepeatableJobs()

    console.log('Removing repeatable jobs', scheduledJobs)

    await this.queue.pause()
    await Promise.all(scheduledJobs.map((job) => this.queue?.removeRepeatable(job.name, { cron: job.cron })))

    console.log(`Paused ${this.queue.name}`)
  }

  public async resume() {
    if (!this.queue) {
      throw new Error(`Queue ${this.name} is not running`)
    }

    console.log(`Resuming ${this.queue.name} queue...`)

    await this.queue.resume()

    console.log(`Resumed ${this.queue.name}`)
  }

  public async clear() {
    if (!this.queue) {
      throw new Error(`Queue ${this.name} is not running`)
    }

    console.log(`Clearing ${this.queue.name} queue...`)

    await this.queue.clean(0, 'active')

    console.log(`Cleared ${this.queue.name} queue`)
  }

  public async clean() {
    if (!this.queue) {
      throw new Error(`Queue ${this.name} is not running`)
    }

    console.log(`Cleaning ${this.queue.name} queue...`)

    await this.queue.clean(3 * 24 * 60 * 1000, 'completed')
    await this.queue.clean(30 * 24 * 60 * 1000, 'failed')

    console.log(`Cleaned ${this.queue.name} queue`)
  }

  private readonly handle = async (job: Bull.Job<any>) => {
    try {
      const jobName = job.name
      console.log(`► ${this.name}: ${jobName} job executing...`)
      const jobClasses = jobs as { [key: string]: any }
      const instance = new jobClasses[jobName](job.data) as Job<any>
      await instance.handle()
      console.log(`✔︎ ${this.name}: ${jobName} job completed`)
    } catch (e) {
      console.log('Logging error:', e)
      throw e
    }
  }
}
