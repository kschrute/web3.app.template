import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import { config } from '@app/contracts'

export default defineConfig({
  out: 'src/wagmi/generated.ts',
  plugins: [
    foundry({
      project: '../contracts',
      include: config.include,
      deployments: config.deployments,
    }),
    react(),
  ],
})
