import 'dotenv/config'
import { cache } from './redis'
import { cleanAll, pauseAll, processAll, resumeAll, scheduleJobs, startAll } from './jobs/queues/scripts'

async function main() {
  if (process.env.NODE_ENV === 'development') {
    console.log('Flushing redis cache...')
    await cache.flush()
  }

  await startAll()

  console.log('Pausing queues...')
  await pauseAll()

  console.log('Cleaning queues...')
  await cleanAll()

  console.log('Scheduling jobs...')
  await scheduleJobs()

  console.log('Resuming queues...')
  await resumeAll()

  await processAll()
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
