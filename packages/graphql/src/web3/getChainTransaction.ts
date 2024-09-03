import { getPublicClient } from '@app/shared'
import type { GetTransactionReturnType } from 'viem'

export const getChainTransaction = async (
  chainId: number,
  hash: string,
): Promise<GetTransactionReturnType<any, 'latest'> | undefined> => {
  try {
    const publicClient = getPublicClient(chainId)
    return await publicClient.getTransaction({
      hash: hash as `0x${string}`,
    })
  } catch (e) {
    e instanceof Error && console.log(e.message)
  }

  return undefined
}
