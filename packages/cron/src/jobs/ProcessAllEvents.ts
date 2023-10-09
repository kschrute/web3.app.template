import { queues } from './queues'
import { contracts } from '@app/contracts'
import { EventRepo } from '@app/graphql'
import { getChainId } from '../lib/getChainId'
import { Job } from './Job'
import { JobOptions } from 'bull'

const exceptions = ['DoNotProcessMe']

const chainId = getChainId()

export class ProcessAllEvents extends Job<{}> {
  public queue = queues.events

  public options: JobOptions = {
    jobId: 'ProcessAllEvents',
    removeOnComplete: true,
    removeOnFail: true,
  }

  public async handle() {
    const events = await EventRepo.findMany({
      select: { id: true, name: true, address: true },
      where: exceptions.length ? { isProcessed: false, NOT: { name: { in: exceptions } } } : { isProcessed: false },
      orderBy: [{ blockNumber: 'asc' }, { logIndex: 'asc' }],
      take: 1000,
    })

    console.log(`Scheduling ${events.length} events...`)

    for (const event of events) {
      console.log(`Scheduling ${event.address} ${event.name} event`)

      const deploymentName = getDeploymentName(event.address)
      const jobName = `${deploymentName}${event.name}EventJob`
      const filePath = `./events/${deploymentName}/${jobName}.ts`

      try {
        const instance = require(filePath)[jobName]
        await new instance({ eventId: event.id }).schedule()
      } catch (e) {
        console.info(`⚠️  Job ${jobName} not found at ${filePath}`)
        console.log(e)
      }
    }
  }
}

const getDeploymentName = (address: string) =>
  Object.values(contracts).find(c => c.addresses[chainId].toUpperCase() === address.toUpperCase())?.name
