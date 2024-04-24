## Prerequisites

```shell
pnpm add -g dotenv-cli 
```

## TODO

- [ ] Move `redis` stuff into a separate package out of cron
- [ ] Remove `import 'dotenv/config'` from the `cron` package?
- [ ] Add docker build (see https://pnpm.io/docker)
- [x] Upgrade `wagmi` and `viem` https://wagmi.sh/react/guides/migrate-from-v1-to-v2
- [x] Add Slither
- [x] Add signatures contract and examples
- [x] Use Forge to deploy contracts
- [x] Set up view for contracts
- [x] Export contracts.ts from the `contracts` package
- [x] Set up @wagmi/cli to generate ABIs and hooks
- [x] Generate ABIs using @wagmi/cli in the contracts package?
- [x] Port web3 examples (contract interactions and subscriptions)
- [x] Port Graphql package
- [x] Port Cron package
- [x] Get rid of Ethers?
- [x] Figure out how to wrap any write into a HOC with error handling (see useNodePackClaimCallback)
- [x] Add an ability to generate a bunch of records and have an infinite scroll
- [ ] Set up eslint for every package
- [ ] Reorder scripts in package.json files
- [ ] https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/
