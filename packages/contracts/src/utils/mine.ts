import { publicClient } from '../clients'

export default async function mine(callback: () => Promise<`0x${string}`>) {
  const hash = await callback()
  console.log(`Waiting for tx ${hash} to mine...`)
  return publicClient.waitForTransactionReceipt({ hash })
}
