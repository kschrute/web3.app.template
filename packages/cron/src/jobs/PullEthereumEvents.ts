import { Contract } from 'ethers'
import { Fragment, Interface } from 'ethers/lib/utils'
import { EventRepo } from '@app/graphql'
import { queues } from './queues'
import { handleEvent } from '../services/ethereum/events'
import { getProvider } from '../lib/providers'
import { getNetworkConfig } from '../lib/getNetworkConfig'
import { Job } from './Job'
import { SchedulePullEthereumEvents } from './SchedulePullEthereumEvents'
import { JobOptions } from 'bull'
import { getAddress } from 'viem'

export interface JobData {
  contractAddress: string
  abi: string
  initialStartFromBlock?: number
  startFromBlockNumber?: number
  blocksPerFetch?: number
  markAsProcessed?: boolean
}

const defaultBlocksPerFetch = 800

export class PullEthereumEvents extends Job<JobData> {
  public queue = queues.events

  public options: JobOptions = {
    jobId: 'PullEthereumEvents',
    removeOnComplete: true,
    removeOnFail: true,
  }

  public async schedule(jobOptions: JobOptions = {}) {
    super.schedule({ ...jobOptions, jobId: `PullEthereumEvents:${this.data.contractAddress}:${this.data.abi}` })
  }

  public async handle() {
    const { contractAddress, abi, initialStartFromBlock, startFromBlockNumber, blocksPerFetch = defaultBlocksPerFetch, markAsProcessed } =
      this.data

    console.log('contractAddress', contractAddress)
    console.log('abi', abi)

    try {
      getAddress(contractAddress)
    } catch (e) {
      return
    }

    const eventFragment = Fragment.fromString(abi)
    const provider = getProvider()

    const contract = new Contract(contractAddress, new Interface([abi]), provider)
    const eventName = eventFragment.name
    const filter = contract.filters[eventName]()

    const latestEvent = (
      await EventRepo.findMany({
        where: { address: contractAddress, name: eventName },
        orderBy: { blockNumber: 'desc' },
        take: 1,
      })
    )[0]

    const currentBlock = await provider.getBlock('latest')

    const startFromBlock = startFromBlockNumber
      ? startFromBlockNumber
      : latestEvent?.blockNumber
      ? Number(latestEvent.blockNumber)
      : initialStartFromBlock ?? getNetworkConfig().startBlock

    const toBlock = blocksPerFetch ? startFromBlock + blocksPerFetch - 1 : 'latest'

    console.log(
      `⏱  Pulling ${eventName} events for ${contractAddress} starting with block ${startFromBlock} up to block ${toBlock} at ${blocksPerFetch} per fetch (markAsProcessed: ${markAsProcessed})`,
    )

    try {
      const events = await contract.queryFilter(filter, startFromBlock, toBlock)

      console.log(`✅ Loaded ${events.length} ${eventName} events. Saving (markAsProcessed: ${markAsProcessed})...`)

      let prevEvent = undefined
      for (const e of events) {
        prevEvent = await handleEvent(e, prevEvent, markAsProcessed)
      }

      if (toBlock !== 'latest' && currentBlock.number > toBlock) {
        console.log(
          `⏱  Scheduling another batch of ${eventName} events for ${contractAddress} starting with block ${
            toBlock + 1
          } at ${blocksPerFetch} per fetch`,
        )
        await new SchedulePullEthereumEvents({
          contractAddress,
          abi,
          markAsProcessed,
          // blocksPerFetch: blocksPerFetch ? Math.ceil(blocksPerFetch * 1.1) : blocksPerFetch,
          startFromBlockNumber: toBlock + 1,
        }).schedule()
      }
    } catch (e: any) {
      console.error(e.message)
      // 'query returned more than 10000 results' error
      if (e.message.includes('error={"code":-32005}')) {
        const newBlocksPerFetch = blocksPerFetch ? Math.floor(blocksPerFetch * 0.8) : blocksPerFetch
        console.log(e.message)
        console.log(
          `🛑 Rescheduling ${eventName} events for ${contractAddress} starting with block ${startFromBlock} at ${newBlocksPerFetch} per fetch`,
        )
        await new SchedulePullEthereumEvents({
          contractAddress,
          abi,
          initialStartFromBlock,
          startFromBlockNumber,
          markAsProcessed,
          blocksPerFetch: newBlocksPerFetch,
        }).schedule()
      }
    }
  }
}
