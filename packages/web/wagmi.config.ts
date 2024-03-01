import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import { contracts } from '@app/shared'

export default defineConfig({
  out: 'src/wagmi/generated.ts',
  plugins: [
    foundry({
      project: '../contracts',
      include: contracts.include,
      deployments: contracts.deployments,
    }),
    react(),
  ],
})
