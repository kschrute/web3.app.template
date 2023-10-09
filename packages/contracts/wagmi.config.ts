import { defineConfig } from '@wagmi/cli'
import { foundry as foundryPlugin } from '@wagmi/cli/plugins'
import { deployments } from './src/deployments'

export default defineConfig({
  out: 'src/wagmi.ts',
  plugins: [
    foundryPlugin({
      deployments,
      project: './',
    }),
  ],
})
