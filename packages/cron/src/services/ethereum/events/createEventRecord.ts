import { EventRepo } from '@app/graphql'
import { Event } from 'ethers'

export const createEventRecord = (e: Event, prevEvent?: EventRepo.Entity, isProcessed = false) => {
  const { address, args, blockNumber, blockHash, transactionHash, logIndex } = e

  return EventRepo.create({
    address,
    blockNumber,
    blockHash,
    transactionHash,
    logIndex,
    isProcessed,
    args: args!,
    name: e.event || '',
    event: e as {},
    prevEvent: prevEvent && { connect: { id: prevEvent.id } },
  })
}
