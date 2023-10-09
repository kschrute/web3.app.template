import { Contract, Event } from 'ethers'
import { queues } from './queues'
import { EventRepo, UserRepo, db } from '@app/graphql'
import { subscriptionABI } from '@app/contracts'
import { Job } from './Job'

interface JobData {
  eventId: string
}

export class ProcessSubscribedJob extends Job<JobData> {
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
  const { event: e, name } = event
  const { data, topics } = e as unknown as Event

  const contractInterface = Contract.getInterface(subscriptionABI)
  const fragment = contractInterface.getEvent(name)
  const args = contractInterface.decodeEventLog(fragment, data, topics)
  const [user, when] = args || []

  await db.$transaction([
    UserRepo.update({ address: user }, { isSubscribed: true }),
    EventRepo.update(event, { isProcessed: true }),
  ])
}
