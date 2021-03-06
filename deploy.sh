#!/usr/bin/env bash

function deploy {
    echo \"moving ./build to ./docs\"
    find docs -delete
    mv build/ docs/
    git add .
    now=$(date)
    git commit --allow-empty -m "Deploy on $now"
    git push origin master
}

read -p "Did you already commit your changes? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    deploy
fi