#!/bin/bash

git add -A
git commmit -m 'Switiching to dev mode'
git checkout dev
git merge master
git push origin master
git checkout master