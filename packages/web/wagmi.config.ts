import { defineConfig } from '@wagmi/cli'
import { contracts } from '@app/contracts'
import { foundry, react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

export default defineConfig({
  out: 'src/wagmi/generated.ts',
  plugins: [
    foundry({
      deployments: {
        Counter: {
          [chains.mainnet.id]: contracts.Counter.addresses[chains.foundry.id],
          [chains.goerli.id]: contracts.Counter.addresses[chains.foundry.id],
          [chains.foundry.id]: contracts.Counter.addresses[chains.foundry.id],
        },
      },
      project: '../contracts',
    }),
    react(),
  ],
})
