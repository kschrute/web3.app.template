#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]}")"

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

$DOCKER run -it \
-v "$CURRENT_DIR/lib":/src/lib \
-v "$CURRENT_DIR/contracts":/src/contracts eth-security-toolbox bash \
-c "
solc-select $SOLIDITY_VERSION
slither \
--exclude naming-convention \
"/src$RELATIVEPATH"
"
