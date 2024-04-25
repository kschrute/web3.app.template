// eslint-disable no-console
import { getContract, parseEther } from 'viem'
import { publicClient, walletClient } from '../clients'
import { counterAbi, counterAddress, faucetAddress } from '../wagmi'
import mine from '../utils/mine'

const chainId = walletClient.chain.id

const counterContract = getContract({
  address: counterAddress[chainId],
  abi: counterAbi,
  client: { public: publicClient, wallet: walletClient },
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

  await walletClient.sendTransaction({
    account: walletClient.account,
    to: faucetAddress[chainId],
    value: parseEther('50'),
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
