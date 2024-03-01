import { defineConfig } from '@wagmi/cli'
import { foundry, actions } from '@wagmi/cli/plugins'
import { contracts } from '@app/shared'

export default defineConfig({
  out: 'src/wagmi.ts',
  plugins: [
    actions(),
    foundry({
      project: './',
      include: contracts.include,
      deployments: contracts.deployments,
    }),
  ],
})
