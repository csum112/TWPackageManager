#!/usr/bin/env bash
heroku container:login;
# Build the spa
cd spa
npm install
npm run build:prod
cd ..
# Build docker images
docker build . -f ./Dockerfile.web -t registry.heroku.com/twdemi/web
docker build . -f ./Dockerfile.centos -t registry.heroku.com/twdemicentos/web
docker build . -f ./Dockerfile.arch -t registry.heroku.com/twdemiarch/web
docker build . -f ./Dockerfile.debian -t registry.heroku.com/twdemidebian/web