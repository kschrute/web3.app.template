import { ConnectButton } from '../components/web3/ConnectButton'
import { Connected } from '../components/web3/Connected'
import { NetworkSwitcher } from '../components/web3/NetworkSwitcher'
import { Counter } from '../components/web3/Counter'

export function Page() {
  return (
    <>
      <h1>wagmi + RainbowKit + Next.js</h1>

      <ConnectButton />

      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />

        <Counter />
      </Connected>
    </>
  )
}

export default Page
