import Queue from 'bull'
import config from '../../../config'

const redis = `redis://${config.redis.queue.host}:${config.redis.queue.port}`
const queues = ['default', 'events', 'scheduler']

async function main() {
  for (const queueName of queues) {
    const queue = new Queue(queueName, redis)
    console.log('----------------------------------------------------------------------------------')
    console.log(`-- ${queueName}`)
    console.log(await queue.getJobCounts())
    console.log('----------------------------------------------------------------------------------')
    const failed = await queue.getFailed()
    for (const job of failed) {
      console.log(
        JSON.stringify(
          {
            name: job.name,
            attemptsMade: job.attemptsMade,
            finishedOn: new Date(job.finishedOn || 0),
            data: job.data,
            error: job.failedReason,
          },
          null,
          2,
        ),
      )
      console.log('--')
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
