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
docker pull registry.heroku.com/twdemiubuntu/web
docker pull registry.heroku.com/twdemidebian/web
# Build docker images
docker build . -f ./Dockerfile.web --cache-from  registry.heroku.com/twdemi/web -t registry.heroku.com/twdemi/web
docker build . -f ./Dockerfile.centos --cache-from  registry.heroku.com/twdemicentos/web -t registry.heroku.com/twdemicentos/web
docker build . -f ./Dockerfile.ubuntu --cache-from  registry.heroku.com/twdemiubuntu/web -t registry.heroku.com/twdemiubuntu/web
docker build . -f ./Dockerfile.debian --cache-from  registry.heroku.com/twdemidebian/web -t registry.heroku.com/twdemidebian/web