import { CleanQueuesJob } from '../../CleanQueuesJob'
import { SchedulePullAllEthereumEvents } from '../../SchedulePullAllEthereumEvents'

export const REPEAT = {
  EVERY_5_SECONDS: '*/5 * * * * *',
  EVERY_10_SECONDS: '*/10 * * * * *',
  EVERY_15_SECONDS: '*/15 * * * * *',
  EVERY_30_SECONDS: '*/30 * * * * *',
  EVERY_MINUTE: '* * * * *',
  EVERY_FIVE_MINUTES: '0/5 * * * *',
  EVERY_FIFTEEN_MINUTES: '0/15 * * * *',
  EVERY_HALF_HOUR: '0/30 * * * *',
  EVERY_HOUR: '0 * * * *',
  EVERY_THREE_HOURS: '0 */3 * * *',
  EVERY_SIX_HOURS: '0 */6 * * *',
  EVERY_TWELVE_HOURS: '0 */12 * * *',
  DAILY: '0 0 * * *',
  DAILY_AT_MIDNIGHT_PST: '0 8 * * *',
  DAILY_MORNING_PST: '0 18 * * *',
}

export const scheduleJobs = async () => {
  await new SchedulePullAllEthereumEvents().repeat(REPEAT.EVERY_30_SECONDS).schedule()
  await new CleanQueuesJob().repeat(REPEAT.EVERY_HOUR).schedule()
}
