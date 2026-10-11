#!/usr/bin/env bash
#
# Deploy the portfolio to GitHub Pages.
#
#   ./scripts/deploy.sh
#
# What it does:
#   1. builds the site (npm run build)
#   2. copies dist/ into a clean staging folder
#   3. commits it and pushes to the gh-pages branch of the Pages repo
#
# GitHub Pages then serves it at https://singhaman15008-bit.github.io
#
# The push needs a token with Contents: Read and write on the Pages repo.
# Put it in the GH_TOKEN environment variable, or let git prompt you.
# Never commit a token to this repository.

set -euo pipefail

REPO="github.com/singhaman15008-bit/singhaman15008-bit.github.io.git"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STAGE="$(mktemp -d)"
MESSAGE="${1:-Deploy portfolio}"

cd "$ROOT"

echo "→ building"
npm run build

echo "→ staging dist/ in $STAGE"
cp -R dist/. "$STAGE/"
# GitHub Pages skips files starting with an underscore unless this is present.
touch "$STAGE/.nojekyll"

cd "$STAGE"
git init -q -b gh-pages
git config user.name "Aman Singh"
git config user.email "singhaman15008@gmail.com"
git add -A
git commit -q -m "$MESSAGE"

if [ -n "${GH_TOKEN:-}" ]; then
  REMOTE="https://x-access-token:${GH_TOKEN}@${REPO}"
else
  REMOTE="https://${REPO}"
fi

echo "→ pushing to gh-pages"
git push "$REMOTE" gh-pages:gh-pages --force

echo "→ done. https://singhaman15008-bit.github.io"
echo "  (Pages takes a minute or two to pick up the new build)"
