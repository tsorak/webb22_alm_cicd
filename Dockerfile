FROM alpine:3.16
FROM node:18-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "src/index.js" ]
