#!/usr/bin/env bash

heroku container:login;
# Push images to registires
docker push registry.heroku.com/twdemi/web
docker push registry.heroku.com/twdemicentos/web
docker push registry.heroku.com/twdemiarch/web
docker push registry.heroku.com/twdemidebian/web

# Release the images
heroku container:release web -a twdemi
heroku container:release web -a twdemicentos
heroku container:release web -a twdemiarch
heroku container:release web -a twdemidebian