#!/usr/bin/env bash
set -e

STAMP=$(date +%s)

# Stamp asset URLs in index.html
sed -i '' -E "s/(style\.css|app\.js)\?v=[0-9]+/\1?v=$STAMP/g" index.html

git add index.html
git commit -m "deploy v$STAMP"
git push origin HEAD

echo "Deployed with cache bust v$STAMP"
