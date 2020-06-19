#!/usr/bin/env bash
heroku container:login;


# Build docker images
docker build . -f ./Dockerfile.web -t registry.heroku.com/twdemi/web
docker build . -f ./Dockerfile.centos -t registry.heroku.com/twdemicentos/web
docker build . -f ./Dockerfile.arch -t registry.heroku.com/twdemiarch/web
docker build . -f ./Dockerfile.debian -t registry.heroku.com/twdemidebian/web