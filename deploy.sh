#!/usr/bin/env sh
set -e
cd dist
echo 'www.oyusec.ml' > CNAME
git init
git add -A
git commit -a --allow-empty-message -m ''
git push -f git@github.com:oyusec/oyusec.github.io.git master:gh-pages
cd -