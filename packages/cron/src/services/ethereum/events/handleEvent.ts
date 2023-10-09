import { EventRepo } from '@app/graphql'
import { createEventRecord } from './createEventRecord'
import { Event } from 'ethers'

export const handleEvent = async (e: Event, prevEvent?: EventRepo.Entity, isProcessed = false) => {
  const { blockHash, transactionHash, logIndex } = e

  const existingEvent = await EventRepo.findUnique(blockHash, transactionHash, logIndex)

  if (existingEvent) {
    return existingEvent
  }

  return await createEventRecord(e, prevEvent, isProcessed)
}
