import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'
import { contracts } from './src/contracts'

export default defineConfig({
  out: 'src/wagmi.ts',
  plugins: [
    foundry({
      deployments: {
        Counter: {
          [chains.mainnet.id]: contracts.Counter.addresses[chains.foundry.id],
          [chains.goerli.id]: contracts.Counter.addresses[chains.foundry.id],
          [chains.foundry.id]: contracts.Counter.addresses[chains.foundry.id],
        },
      },
      project: './',
    }),
  ],
})
