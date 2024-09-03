import { EventRepo } from '@app/graphql'
import { getAddress, parseAbiItem, stringify } from 'viem'
import { AbiEvent } from 'abitype'
import { JobOptions } from 'bull'
import { queues } from './queues'
import { getNetworkConfig } from '../utils/getNetworkConfig'
import { SchedulePullEthereumEvents } from './SchedulePullEthereumEvents'
import { publicClient } from '../web3/clients'
import { JobUnique } from './JobUnique'

export interface JobData {
  contractAddress: string
  abi: string
  initialStartFromBlock?: bigint
  startFromBlockNumber?: bigint | string
  blocksPerFetch?: bigint
  markAsProcessed?: boolean
}

const defaultBlocksPerFetch = BigInt(800)

export class PullEthereumEvents extends JobUnique<JobData> {
  public queue = queues.events

  public async schedule(jobOptions: JobOptions = {}) {
    super.schedule({ ...jobOptions, jobId: `${this.constructor.name}:${this.data.contractAddress}:${this.data.abi}` })
  }

  public async handle() {
    const {
      contractAddress,
      abi,
      initialStartFromBlock,
      startFromBlockNumber,
      blocksPerFetch = defaultBlocksPerFetch,
      markAsProcessed,
    } = this.data

    try {
      getAddress(contractAddress)
    } catch (e) {
      return
    }

    const abiEvent = parseAbiItem(abi) as AbiEvent
    const eventName = abiEvent.name

    const latestEvent = (
      await EventRepo.findMany({
        where: { address: contractAddress, name: eventName },
        orderBy: { blockNumber: 'desc' },
        take: 1,
      })
    )[0]

    const currentBlock = await publicClient.getBlockNumber()

    const startFromBlock =
      startFromBlockNumber !== undefined
        ? BigInt(startFromBlockNumber)
        : latestEvent?.blockNumber
          ? latestEvent.blockNumber
          : initialStartFromBlock ?? getNetworkConfig().startBlock

    const toBlock = blocksPerFetch ? startFromBlock + blocksPerFetch - BigInt(1) : currentBlock

    console.log(
      `⏱  Pulling ${eventName} events for ${contractAddress} starting with block ${startFromBlock} up to block ${toBlock} at ${blocksPerFetch} per fetch (markAsProcessed: ${markAsProcessed})`,
    )

    try {
      const events = await publicClient.getLogs({
        address: contractAddress as `0x${string}`,
        event: abiEvent,
        fromBlock: startFromBlock,
        toBlock,
      })

      console.log(`✅ Loaded ${events.length} ${eventName} events. Saving (markAsProcessed: ${markAsProcessed})...`)

      let prevEvent
      for (const e of events) {
        // prevEvent = await handleEvent<typeof e>(e, prevEvent, markAsProcessed)
        const { address, blockNumber, blockHash, transactionHash, logIndex, args } = e
        const existingEvent = await EventRepo.findUnique(blockHash!, transactionHash!, logIndex!)

        if (existingEvent) {
          prevEvent = existingEvent
        } else {
          // prevEvent = await createEventRecord(e, prevEvent, markAsProcessed)
          prevEvent = await EventRepo.create({
            address,
            blockNumber: blockNumber!,
            blockHash: blockHash!,
            transactionHash: transactionHash!,
            logIndex: logIndex!,
            isProcessed: markAsProcessed,
            args: JSON.parse(stringify(args)),
            name: e.eventName,
            signature: abi,
            event: JSON.parse(stringify(e)),
            prevEvent: prevEvent && { connect: { id: prevEvent.id } },
          })
        }
      }

      if (currentBlock > toBlock) {
        console.log(
          `⏱  Scheduling another batch of ${eventName} events for ${contractAddress} starting with block ${
            toBlock + BigInt(1)
          } at ${blocksPerFetch} per fetch`,
        )
        await new SchedulePullEthereumEvents({
          contractAddress,
          abi,
          markAsProcessed,
          // blocksPerFetch: blocksPerFetch ? blocksPerFetch  * BigInt(110) / BigInt(100) : blocksPerFetch,
          startFromBlockNumber: toBlock + BigInt(1),
        }).schedule()
      }
    } catch (e: any) {
      console.error(e.message)
      // 'query returned more than 10000 results' error
      if (e.message.includes('error={"code":-32005}')) {
        const newBlocksPerFetch = blocksPerFetch ? (blocksPerFetch * BigInt(80)) / BigInt(100) : blocksPerFetch
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
