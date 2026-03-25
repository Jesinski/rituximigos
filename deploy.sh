#!/usr/bin/env bash
set -e

STAMP=$(date +%s)

# Replace cache bust placeholder with timestamp
sed -i '' "s/__CACHE_BUST__/$STAMP/g" index.html

git add -A
git commit -m "deploy v$STAMP"
git push origin HEAD

# Restore placeholder for future deploys
sed -i '' "s/$STAMP/__CACHE_BUST__/g" index.html

echo "Deployed with cache bust v$STAMP"
