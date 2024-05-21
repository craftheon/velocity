#!/bin/bash

jest --coverage

coverage=$(cat coverage/lcov-report/index.html | grep -oP '(\d+\.\d+)%')

if (( $(echo "$coverage < 100" | bc -l) )); then
  echo "Test coverage is below 100%. Current coverage: $coverage"
  exit 1
fi