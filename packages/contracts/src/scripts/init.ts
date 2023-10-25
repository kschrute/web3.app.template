// eslint-disable no-console
import { getContract } from 'viem'
import { publicClient, walletClient } from '../clients'
import { counterABI, counterAddress } from '../wagmi'
import mine from '../utils/mine'

const chainId = walletClient.chain.id

const counterContract = getContract({
  address: counterAddress[chainId],
  abi: counterABI,
  publicClient,
  walletClient,
})

async function main() {
  const blockNumber = await publicClient.getBlockNumber()
  console.log('blockNumber', blockNumber)

  const read = await counterContract.read.number()

  console.log('read', read)

  const { request } = await counterContract.simulate.increment()

  console.log('request', request)

  const write = await mine(() => counterContract.write.increment())

  console.log('write', write)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
