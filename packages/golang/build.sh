#!/bin/bash
set -e
set -x
process_name=$1

function compile() {
  CGO_ENABLED=0
  GOOS=linux
  GOARCH=amd64
  go mod tidy
  go build -o bin ./cmd/main.go
}

function make_output() {
  (
    compile &&
      rm -rf dist &&
      mkdir -p dist &&
      mkdir -p dist/bin &&
      mkdir -p dist/data &&
      mkdir -p dist/lib &&
      mkdir -p dist/log &&
      mkdir -p dist/testDoc &&
      mkdir -p dist/unittest &&
      mkdir -p dist/cache &&
      cp ./bin dist/bin
  ) || {
    echo "[make output error]"
    exit 1
  }
}

make_output

echo "[build done!]"
exit 0
