import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-foundry'
// import '@nomicfoundation/hardhat-chai-matchers'

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      accounts: {
        mnemonic: 'myth like bonus scare over problem client lizard pioneer submit female collect',
        accountsBalance: (100e18).toString(),
        count: 10,
      },
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.4.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
}

export default config
