#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE:-$0}")"

ENV_FILE="${1:-.env}"

source "$ENV_FILE"

deploy() {
  echo "Deploying..."
  RPC_URL="$1"
  PRIVATE_KEY="$2"
  forge create contracts/Counter.sol:Counter --rpc-url $RPC_URL --private-key $PRIVATE_KEY
  forge create contracts/Faucet.sol:Faucet --rpc-url $RPC_URL --private-key $PRIVATE_KEY
  forge create contracts/Subscription.sol:Subscription --rpc-url $RPC_URL --private-key $PRIVATE_KEY
  forge create contracts/WNat.sol:WNat --rpc-url $RPC_URL --private-key $PRIVATE_KEY
}

init() {
  echo "Initializing on Chain $1..."
  CHAIN_ID="$1" dotenv -e "$ENV_FILE" -- pnpm exec tsx src/scripts/init.ts
}

deploy "$FORGE_RPC_URL" "$FORGE_PRIVATE_KEY"
