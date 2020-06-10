FROM node:lts-buster
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install --save
EXPOSE 8081
ENTRYPOINT [ "npm","start" ]