import config from '../../config'
import { sleep } from './sleep'

export const devDelay = async () => {
  if (config.dev?.db.averageLatencyMsecs) {
    const ms = 2 * Math.random() * config.dev.db.averageLatencyMsecs // anywhere from 0x to 2x
    await sleep(ms)
  }
}
