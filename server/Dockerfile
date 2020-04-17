FROM node:12 as builder
ENV APPDIR=/code
WORKDIR $APPDIR

ARG AUTH_HOST
ARG AUTH_CLIENT_ID
ARG POSTGRES_PASSWORD
ARG POSTGRES_PORT
ARG POSTGRES_USER
ARG POSTGRES_DATABASE
ARG POSTGRES_HOSTNAME

ADD package.json yarn.lock tsconfig.json ormconfig.js $APPDIR/

RUN yarn global add mocha typeorm @babel/core reflect-metadata @babel/cli @babel/register pg

ADD src $APPDIR/src

RUN yarn install 
EXPOSE 3000
CMD bash -c "typeorm migration:run && yarn run start"