import { viem } from 'hardhat'
import { DateTime, DurationLike } from 'luxon'
import { blockTimestamp } from './blockTimestamp'

export const mineAt = async (time: DateTime) => {
  const publicClient = await viem.getPublicClient()
  return await publicClient
    .request({
      // @ts-ignore
      method: 'evm_mine',
      // @ts-ignore
      params: [time.toSeconds()],
    })
}

export const minePlus = async (duration: DurationLike) =>
  await mineAt(DateTime.fromSeconds(Number(await blockTimestamp())).plus(duration))
