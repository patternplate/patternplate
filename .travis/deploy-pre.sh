#!/bin/bash
set -e
set -u

BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo $TRAVIS_PULL_REQUEST_BRANCH; fi);

if [ "$TRAVIS_SECURE_ENV_VARS" != "true" ]; then
    echo "Skipping preview deployment, secure env vars not available";
    exit 0;
fi

ID=$(if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then echo "pr-$TRAVIS_PULL_REQUEST"; else echo "commit-$TRAVIS_COMMIT"; fi);

patternplate-deploy --source .tmp --name="patternplate-$ID" --provider=surge
