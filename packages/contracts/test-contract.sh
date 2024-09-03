#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]}")"

export DOCKER_DEFAULT_PLATFORM=linux/amd64

CURRENT_DIR=$(pwd)
DOCKER=$(which docker)
DIRNAME=$(which dirname)
BASENAME=$(which basename)

while true; do
  case "$1" in
    -- ) shift; break ;;
    * ) FILE="$1"; break ;;
  esac
done

echo $CURRENT_DIR
echo $(dirname "$CURRENT_DIR")

SOLIDITY_VERSION=$(grep "pragma solidity " "$FILE" | cut -d" "  -f3- | sed 's/[\^\>\<\=;]//g')
FILEPATH=$($DIRNAME -- "$FILE")
FILENAME=$($BASENAME "$FILE")

if [[ $FILE != *".sol"* ]]; then
  echo "Not sure what to do with this file"
  exit
fi

RELATIVEPATH="${FILE/$CURRENT_DIR/}"

echo "CURRENT_DIR: $CURRENT_DIR"
echo "FILE: $FILE"
echo "FILEPATH: $FILEPATH"
echo "RELATIVEPATH: $RELATIVEPATH"
echo "FILENAME: $FILENAME"
echo "SOLIDITY_VERSION: $SOLIDITY_VERSION"

#$DOCKER pull ghcr.io/trailofbits/eth-security-toolbox:nightly
#--solc-remaps @openzeppelin=/src/lib/openzeppelin-contracts \

$DOCKER run -it \
-v "$CURRENT_DIR/slither.config.json":/home/ethsec/slither.config.json \
-v "$CURRENT_DIR/lib":/src/lib \
-v "$CURRENT_DIR/contracts":/src/contracts ghcr.io/trailofbits/eth-security-toolbox:nightly bash \
-c "
solc-select install $SOLIDITY_VERSION
solc-select use $SOLIDITY_VERSION
slither \
--config-file slither.config.json \
"/src$RELATIVEPATH"
"
