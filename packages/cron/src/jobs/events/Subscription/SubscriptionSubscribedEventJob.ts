import { db, EventRepo, UserRepo } from '@app/graphql'
import { decodeEventLog, Log, parseAbi } from 'viem'
import { queues } from '../../queues'
import { Job } from '../../Job'

interface JobData {
  eventId: string
}

export class SubscriptionSubscribedEventJob extends Job<JobData> {
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

  const abi = parseAbi([event.signature])

  const decoded = decodeEventLog({
    abi,
    data: e.data,
    topics: e.topics,
  })

  // const { user } = e.args
  const { args: { user } } = decoded

  await db.$transaction([
    UserRepo.update({ address: user }, { isSubscribed: true }),
    EventRepo.update(event, { isProcessed: true }),
  ])
}
