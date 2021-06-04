#!/bin/bash

git add .
git commit -a --allow-empty-message -m ''
git push -f heroku master
