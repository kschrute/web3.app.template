#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]}")"

DIRNAME=$(which dirname)
BASENAME=$(which basename)
DIR="test"
NETWORK=""
VERBOSE=false

echo $@

while true; do
  case "$1" in
    -d | --dir ) DIR="$2"; shift 2 ;;
    -n | --network ) NETWORK="$2"; shift 2 ;;
    -v | --verbose ) VERBOSE=true; shift ;;
    -- ) shift; break ;;
    * ) FILE="$1"; break ;;
  esac
done

FILEPATH=$($DIRNAME -- "$FILE")
FILENAME=$($BASENAME -- "$FILE")
FILENAME_NO_EXT="${FILENAME%.*}"

TESTFILEPATH=""
OPTIONS=""

if [[ $FILE == *".sol"* ]]; then
  TESTFILEPATH="$DIR/$FILENAME_NO_EXT.test.ts"
elif [[ $FILE == *".test"* ]]; then
  TESTFILEPATH="$FILE"
else
  echo "Not sure what to do with this file"
  exit
fi

echo "FILE: $FILE"
echo "FILEPATH: $FILEPATH"
echo "FILENAME: $FILENAME"
echo "FILENAME_NO_EXT: $FILENAME_NO_EXT"

if [ "$NETWORK" != "" ];then
   OPTIONS="--network $NETWORK $OPTIONS"
fi

PREFIX="packages/contracts/"
TESTFILEPATH="${TESTFILEPATH/$PREFIX/}"

echo "> Running $TESTFILEPATH"

npx hardhat test $OPTIONS "$TESTFILEPATH"
