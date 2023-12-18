import 'dotenv/config'
import { cleanAll, pauseAll, resumeAll, scheduleJobs, startAll, stopAll } from './jobs/queues/scripts'

async function main() {
  await startAll()

  console.log('Pausing queues...')
  await pauseAll()

  console.log('Cleaning queues...')
  await cleanAll()

  console.log('Scheduling jobs...')
  await scheduleJobs()

  console.log('Resuming queues...')
  await resumeAll()

  await stopAll()
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
