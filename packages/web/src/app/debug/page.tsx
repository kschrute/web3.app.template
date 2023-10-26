import { Account } from '../../components/web3/Account'
import { Balance } from '../../components/web3/Balance'
import { BlockNumber } from '../../components/web3/BlockNumber'
import { ConnectButton } from '../../components/web3/ConnectButton'
import { Connected } from '../../components/web3/Connected'
import { NetworkSwitcher } from '../../components/web3/NetworkSwitcher'
import { ReadContract } from '../../components/web3/ReadContract'
import { ReadContracts } from '../../components/web3/ReadContracts'
import { ReadContractsInfinite } from '../../components/web3/ReadContractsInfinite'
import { SendTransaction } from '../../components/web3/SendTransaction'
import { SendTransactionPrepared } from '../../components/web3/SendTransactionPrepared'
import { SignMessage } from '../../components/web3/SignMessage'
import { SignTypedData } from '../../components/web3/SignTypedData'
import { Token } from '../../components/web3/Token'
import { WatchContractEvents } from '../../components/web3/WatchContractEvents'
import { WatchPendingTransactions } from '../../components/web3/WatchPendingTransactions'
import { WriteContract } from '../../components/web3/WriteContract'
import { WriteContractPrepared } from '../../components/web3/WriteContractPrepared'

export default function Page() {
  return (
    <>
      <h1>wagmi + RainbowKit + Next.js</h1>

      <ConnectButton />

      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Read Contract</h2>
        <ReadContract />
        <br />
        <hr />
        <h2>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />
        <h2>Sign Message</h2>
        <SignMessage />
        <br />
        <hr />
        <h2>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr />
        <h2>Token</h2>
        <Token />
        <br />
        <hr />
        <h2>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr />
        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
        <h2>Write Contract</h2>
        <WriteContract />
        <br />
        <hr />
        <h2>Write Contract (Prepared)</h2>
        <WriteContractPrepared />
      </Connected>
    </>
  )
}
