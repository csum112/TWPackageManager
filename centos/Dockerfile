FROM centos:7.8.2003
RUN yum -y upgrade
# Install node
RUN touch ~/.bashrc && chmod u+x ~/.bashrc \
    && curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh \
    | PROFILE="~/.bashrc" bash \
    && . ~/.nvm/nvm.sh \
    && nvm install v14.4.0 \
    && nvm use v14.4.0
ENV PATH="/root/.nvm/versions/node/v14.4.0/bin:${PATH}"
# Build app
RUN mkdir /app
WORKDIR /app
COPY ./shared/ .
RUN npm install --save
COPY ./centos/ .

#Entry
EXPOSE 8080
ENTRYPOINT ["node", "server.js"]
