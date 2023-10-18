'use client'

import { Text } from '@chakra-ui/react'
import { useBlockNumber } from 'wagmi'
import Layout from '../components/Layout'
import CounterContract from '../data/CounterContract'
import FaucetContract from '../data/FaucetContract'
import GraphqlQuery from '../data/GraphqlQuery'
import GraphqlRequestsCount from '../data/GraphqlRequestsCount'
import GraphqlSubscription from '../data/GraphqlSubscription'
import SubscriptionContract from '../data/SubscriptionContract'
import WNatContract from '../data/WNatContract'
import WalletRequired from '../web3/WalletRequired'
import MyProjects from '../data/MyProjects'

export function Page() {
  const { data: blockNumber } = useBlockNumber({ watch: true })
  return (
    <Layout>
      <WalletRequired>
        <Text>Current Block: {blockNumber?.toString()}</Text>
        <WNatContract />
        <FaucetContract />
        <SubscriptionContract />
        <CounterContract />
        <GraphqlSubscription />
        <GraphqlRequestsCount />
        <GraphqlQuery />
        <MyProjects />
      </WalletRequired>
    </Layout>
  )
}

export default Page
