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

ADD nest-cli.json package.json yarn.lock tsconfig.build.json tsconfig.json webpack-hmr.config.js $APPDIR/

# RUN yarn global add mocha typeorm @babel/core reflect-metadata @babel/cli @babel/register pg

ADD src $APPDIR/src

RUN yarn install 
EXPOSE 3000
# Or yarn migration:run
CMD ["yarn","run","start"] 