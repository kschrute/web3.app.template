import hre, { viem } from 'hardhat'

export const blockTimestamp = async () => {
  const publicClient = await viem.getPublicClient()
  // @ts-ignore
  return (await publicClient.getBlock('latest')).timestamp
}
