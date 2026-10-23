#!/usr/bin/env bash
# Replace the contents of v2-prog/dougs-structure-au (branch main) with this folder, then push.
# Run from inside the unzipped folder. Needs git and GitHub sign-in on your computer.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
TMP="$(mktemp -d)"
git clone https://github.com/v2-prog/dougs-structure-au.git "$TMP/repo"
cd "$TMP/repo"
git rm -rq . || true
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$HERE"/. .
rm -f publish.sh.bak
git add -A
git commit -m "Economic life stages: poster home page, 35 researched age pages"
git push origin main
echo "Pushed. Cloudflare Pages will redeploy coeconomics.com from main."
