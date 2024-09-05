FROM node:20-alpine3.19
WORKDIR /App
COPY . /App

WORKDIR /App

ENTRYPOINT ["tail", "-f", "/dev/null"]