import 'dotenv/config'
import * as jobs from '../jobs'
import { scheduleJobs, startAll, stopAll } from '../jobs/queues/scripts'

export const main = async () => {
  await startAll()

  const [jobName, paramsJson] = process.argv.slice(2)
  const jobData = paramsJson ? JSON.parse(paramsJson) : {}

  console.log(`Scheduling ${jobName} with ${paramsJson} data`)

  if (jobName === 'schedule') {
    await scheduleJobs()
  } else {
    const jobClasses = jobs as { [key: string]: any }
    const instance = new jobClasses[jobName](jobData)
    await instance.schedule()
  }

  await stopAll()
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
