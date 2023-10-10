'use client'

import { Text } from '@chakra-ui/react'
import { useBlockNumber } from 'wagmi'
import Layout from '../components/Layout'
import { GraphqlSubscription } from '../data/GraphqlSubscription'
import { GraphqlRequestsCount } from '../data/GraphqlRequestsCount'
import { GraphqlQuery } from '../data/GraphqlQuery'
import CounterContract from '../data/CounterContract'
import { FaucetContract } from '../data/FaucetContract'
import { SubscriptionContract } from '../data/SubscriptionContract'
import { WalletRequired } from '../web3/WalletRequired'

export function Page() {
  const { data: blockNumber } = useBlockNumber({ watch: true })
  return (
    <Layout>
      {/* <h1>wagmi + RainbowKit + Next.js</h1> */}

      {/* <ConnectButton /> */}

      <WalletRequired>
        <Text>
          Current Block:
          {blockNumber?.toString()}
        </Text>
        <FaucetContract />
        <SubscriptionContract />
        <CounterContract />
        <GraphqlSubscription />
        <GraphqlRequestsCount />
        <GraphqlQuery />
      </WalletRequired>

    </Layout>
  )
}

export default Page
