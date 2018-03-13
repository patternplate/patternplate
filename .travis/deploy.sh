#!/bin/bash
set -e
set -u

if [ "$TRAVIS_SECURE_ENV_VARS" != "true" ]; then
    echo "Skipping deployment, secure env vars not available";
fi

if [ "$TRAVIS_BRANCH" != "master" ]; then
    echo "Skipping deployment, not on master";
fi

yarn components:deploy;

