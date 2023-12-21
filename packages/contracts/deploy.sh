#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]}")"

source .env

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
  echo "Initializing..."
}

deploy "$FORGE_RPC_URL" "$FORGE_PRIVATE_KEY"
