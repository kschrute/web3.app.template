require('dotenv').config()

import { cache } from './redis'
import { pauseAll, startAll, stopAll } from './jobs/queues/scripts'

async function main() {
  await startAll()
  await pauseAll()
  await stopAll()
  console.log('all queues paused')
  await cache.close()
  console.log('connections closed')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
