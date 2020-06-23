#!/usr/bin/env bash
heroku container:login;
# Build the spa
cd spa
npm install
npm run build:prod
cd ..
sudo rm -r spa/ app/ srv/
# Pull latest
docker pull registry.heroku.com/twdemi/web
docker pull registry.heroku.com/twdemicentos/web
docker pull registry.heroku.com/twdemiarch/web
docker pull registry.heroku.com/twdemidebian/web
# Build docker images
docker build . -f ./Dockerfile.web -t registry.heroku.com/twdemi/web
docker build . -f ./Dockerfile.centos -t registry.heroku.com/twdemicentos/web
docker build . -f ./Dockerfile.arch -t registry.heroku.com/twdemiarch/web
docker build . -f ./Dockerfile.debian -t registry.heroku.com/twdemidebian/web