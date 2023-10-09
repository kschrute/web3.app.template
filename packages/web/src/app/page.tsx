'use client'

import { ConnectButton } from '../components/web3/ConnectButton'
import { Connected } from '../components/web3/Connected'
import { NetworkSwitcher } from '../components/web3/NetworkSwitcher'
import { Counter } from '../components/web3/Counter'
import Layout from '../components/Layout'
import { GraphqlSubscription } from '../data/GraphqlSubscription'
import { GraphqlRequestsCount } from '../data/GraphqlRequestsCount'
import { GraphqlQuery } from '../data/GraphqlQuery'
import CounterContract from '../data/CounterContract'
import { FaucetContract } from '../data/FaucetContract'
import { SubscriptionContract } from '../data/SubscriptionContract'
import { useBlockNumber } from 'wagmi'
import { Text } from '@chakra-ui/react'

export function Page() {
  const { data: blockNumber } = useBlockNumber({ watch: true })
  return (
    <Layout>
      {/*<h1>wagmi + RainbowKit + Next.js</h1>*/}

      {/*<ConnectButton />*/}

      <Connected>
        <Text>Current Block: {blockNumber?.toString()}</Text>
        <FaucetContract />
        <SubscriptionContract />
        <CounterContract />
        <GraphqlSubscription />
        <GraphqlRequestsCount />
        <GraphqlQuery />

      </Connected>
    </Layout>
  )
}

export default Page
