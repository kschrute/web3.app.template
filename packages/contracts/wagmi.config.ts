import { defineConfig } from '@wagmi/cli'
import { foundry, actions } from '@wagmi/cli/plugins'
import { contracts } from '@app/shared'
import { erc20Abi } from 'viem'

export default defineConfig({
  out: 'src/wagmi.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20Abi,
    },
  ],
  plugins: [
    actions(),
    foundry({
      project: './',
      include: contracts.include,
      deployments: contracts.deployments,
    }),
  ],
})
