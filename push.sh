#!/bin/bash

git add -A
# git commit -a --allow-empty-message -m ''
git commit -m ":heavy_check_mark: $1"
git push origin byamb4
