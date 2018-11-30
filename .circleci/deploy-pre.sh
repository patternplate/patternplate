#!/bin/bash
set -e

ID=$(if [[ -z "$CIRCLE_PR_NUMBER" ]]; then echo "commit-$CIRCLE_SHA1"; else echo "pr-$CIRCLE_PR_NUMBER"; fi);

yarn patternplate-deploy --source .tmp --name="$CIRCLE_PROJECT_REPONAME-$ID" --provider=surge
