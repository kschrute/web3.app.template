import { contracts } from '@app/shared'
import { EventRepo } from '@app/graphql'
import { getAddress } from 'viem'
import { queues } from './queues'
import { getChainId } from '../utils/getChainId'
import { JobUnique } from './JobUnique'

interface JobData {
  transactionId: string
}

const exceptions = ['DoNotProcessMe']

const chainId = getChainId()

export class ProcessAllEvents extends JobUnique<JobData> {
  public queue = queues.events

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

      if (!deploymentName) {
        throw Error(`Deployment not found for ${event.address}`)
      }

      const jobName = `${deploymentName}${event.name}EventJob`
      const filePath = `./events/${deploymentName}/${jobName}`

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

const getDeploymentName = (address_: string) => {
  const address = getAddress(address_)
  return Object.entries(contracts.deployments).find(([_, addresses]) => getAddress(addresses[chainId]) === address)?.[0]
}
