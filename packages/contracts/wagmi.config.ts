import { defineConfig } from '@wagmi/cli'
import { foundry, actions, erc } from '@wagmi/cli/plugins'
import { contracts } from '@app/shared'

export default defineConfig({
  out: 'src/wagmi.ts',
  plugins: [
    actions({
      watchContractEvent: false,
    }),
    erc({
      20: true,
    }),
    foundry({
      project: './',
      include: contracts.include,
      deployments: contracts.deployments,
    }),
  ],
})
