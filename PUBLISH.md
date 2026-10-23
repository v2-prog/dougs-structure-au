# Publishing to coeconomics.com

This folder is the complete site. Cloudflare Pages serves the repo root with no build step.

## Option A: GitHub web upload (no tools needed)
1. Open https://github.com/v2-prog/dougs-structure-au
2. Add file -> Upload files. Drag in everything inside this folder, including the `assets` and `research` folders. Commit to `main`.
3. Optional clean-up: older files from earlier builds stay in the repo and are not used. Delete them in GitHub (open a file -> trash icon) if you want a tidy repo.

## Option B: replace everything with one command
Run `bash publish.sh` from this folder. It clones the repo, replaces all contents with this folder, commits and pushes to `main`.

After either option, Cloudflare Pages redeploys in about a minute. Check https://coeconomics.com (poster home page) and https://coeconomics.com/age-18-19.
