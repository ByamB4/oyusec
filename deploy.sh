#!/usr/bin/env sh
set -e
yarn run build
cd dist
echo "<!-- developed by: ByamB4 -->\n$(cat index.html)" > index.html
git init
git add -A
git commit -m 'dp'
git push -f git@github.com:oyusec/oyusec.github.io.git master:gh-pages
cd -