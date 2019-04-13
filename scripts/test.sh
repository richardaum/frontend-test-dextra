#!/bin/bash

npm run \
  --scripts-prepend-node-path=true \
  --prefix web test \
  -- \
  --no-watch \
  --coverage && \
  cat ./web/coverage/lcov.info | \
  ./web/node_modules/.bin/coveralls

