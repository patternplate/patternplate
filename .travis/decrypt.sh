#!/bin/bash
set -e
set -u

if [ "$TRAVIS_SECURE_ENV_VARS" != "true" ]; then
    echo "Skipping decryption, secure env vars not available";
    exit 0;
fi

openssl aes-256-cbc \
  -K $encrypted_b9bd228152b0_key \
  -iv $encrypted_b9bd228152b0_iv \
  -in patternplate-deploy.enc \
  -out patternplate-deploy -d

chmod 600 patternplate-deploy;
eval $(ssh-agent -s);
ssh-add patternplate-deploy;
rm patternplate-deploy;
