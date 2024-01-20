#!/bin/bash

export DOCKER_DEFAULT_PLATFORM=linux/amd64

docker buildx build --platform=linux/amd64 --progress=plain . -f Dockerfile -t "web3.app.template"
