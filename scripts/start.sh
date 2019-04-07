#!/bin/bash

concurrently --kill-others \
  "npm run --scripts-prepend-node-path=true --prefix web start" \
  "npm run --scripts-prepend-node-path=true --prefix api start"
