'use client'

import { Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'
import { useBlockNumber } from 'wagmi'
import Layout from '../components/Layout'
import CounterContract from '../data/CounterContract'
import FaucetContract from '../data/FaucetContract'
import GraphqlQuery from '../data/GraphqlQuery'
import GraphqlRequestsCount from '../data/GraphqlRequestsCount'
import GraphqlSubscription from '../data/GraphqlSubscription'
import MyProjects from '../data/MyProjects'
import SubscriptionContract from '../data/SubscriptionContract'
import WNatContract from '../data/WNatContract'
import WalletRequired from '../web3/WalletRequired'

export default function Page() {
  const { data: blockNumber } = useBlockNumber({ watch: true })
  return (
    <Layout>
      <WalletRequired>
        <Stat>
          <StatLabel>Block</StatLabel>
          <StatNumber>{blockNumber?.toString()}</StatNumber>
          <StatHelpText>Current Block Number</StatHelpText>
        </Stat>

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
