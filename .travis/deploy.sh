#!/bin/bash
set -e
set -u

BRANCH=$(if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then echo $TRAVIS_BRANCH; else echo $TRAVIS_PULL_REQUEST_BRANCH; fi

if [ "$TRAVIS_SECURE_ENV_VARS" != "true" ]; then
    echo "Skipping deployment, secure env vars not available";
    exit 0;
fi

if [ "$BRANCH" != "master" ]; then
    echo "Skipping deployment, not on master";
    exit 0;
fi

patternplate-deploy --source .tmp \
 --identity=./patternplate-deploy \
 --target=git@github.com:patternplate/patternplate.github.io.git
