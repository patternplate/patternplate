#!/bin/bash
set -e
set -u

ID=$(if [ "$CIRCLE_PR_NUMBER" != "false" ]; then echo "pr-$CIRCLE_PR_NUMBER"; else echo "commit-$CIRCLE_SHA1"; fi);

patternplate-deploy --source .tmp --name="$CIRCLE_PROJECT_REPONAME-$ID" --provider=surge
