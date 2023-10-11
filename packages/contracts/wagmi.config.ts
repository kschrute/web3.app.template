import { defineConfig } from '@wagmi/cli'
import { foundry as foundryPlugin } from '@wagmi/cli/plugins'
import { config } from './src/config'

export default defineConfig({
  out: 'src/wagmi.ts',
  plugins: [
    foundryPlugin({
      project: './',
      include: config.include,
      deployments: config.deployments,
    }),
  ],
})
