#!/bin/bash

npm run \
  --scripts-prepend-node-path=true \
  --prefix web test \
  -- \
  --coverage \
  --watch
