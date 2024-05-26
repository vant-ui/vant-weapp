#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # build
  npm run build:lib
  if [[ `git status --porcelain` ]]; 
  then
    git add -A
    git commit -am "build: compile $VERSION"
  fi

  # commit
  npm version $VERSION --message "release: $VERSION"

  # publish
  git push origin dev
  git push origin refs/tags/v$VERSION

  if [[ $VERSION =~ [beta] ]]
  then
    npm publish --tag beta
  else 
    npm publish
  fi
fi
