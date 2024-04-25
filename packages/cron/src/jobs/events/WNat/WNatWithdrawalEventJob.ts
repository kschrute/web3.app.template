import { db, EventRepo } from '@app/graphql'
import { decodeEventLog, Log, parseAbi } from 'viem'
import { queues } from '../../queues'
import { Job } from '../../Job'

interface JobData {
  eventId: string
}

export class WNatWithdrawalEventJob extends Job<JobData> {
  public queue = queues.events

  public async handle() {
    const { eventId } = this.data
    const event = await EventRepo.findById(eventId)

    if (!event || event.isProcessed) {
      return
    }

    await process(event)
  }
}

const process = async (event: EventRepo.Entity) => {
  const e = event.event as Log

  // const abi = parseAbi([event.signature])
  const abi = parseAbi(['event Withdrawal(address indexed src, uint wad)'])

  const decoded = decodeEventLog({
    abi,
    data: e.data,
    topics: e.topics,
  })

  console.log('decoded', decoded)

  await db.$transaction([
    EventRepo.update(event, { isProcessed: true }),
  ])
}
