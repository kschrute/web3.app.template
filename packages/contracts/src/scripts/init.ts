import { hardhat } from 'viem/chains'
import { publicClient, walletClient } from '../clients'
import { contracts } from '../contracts'
import { counterABI } from '../wagmi'

async function main() {
  const blockNumber = await publicClient.getBlockNumber()
  console.log('blockNumber', blockNumber)

  const read = await publicClient.readContract({
    abi: counterABI,
    address: contracts.Counter.addresses[hardhat.id] as unknown as `0x${string}`,
    functionName: 'number',
  })
  console.log('read', read)

  const { request } = await publicClient.simulateContract({
    account: walletClient.account,
    address: contracts.Counter.addresses[hardhat.id] as unknown as `0x${string}`,
    abi: counterABI,
    functionName: 'increment',
  })
  console.log('request', request)

  const write = await walletClient.writeContract(request)
  console.log('write', write)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})