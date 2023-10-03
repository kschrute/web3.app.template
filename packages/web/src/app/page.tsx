import { ConnectButton } from '../components/ConnectButton'
import { Connected } from '../components/Connected'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { Counter } from '../components/Counter'

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
