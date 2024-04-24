import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import { contracts } from '@app/shared'
import { erc20Abi } from 'viem'

export default defineConfig({
  out: 'src/wagmi/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20Abi,
    },
  ],
  plugins: [
    foundry({
      project: '../contracts',
      include: contracts.include,
      deployments: contracts.deployments,
    }),
    react(),
  ],
})
