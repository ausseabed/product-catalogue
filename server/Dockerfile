FROM node:14-alpine as builder
USER node

ENV CATALOGUE_DIR=/home/node/product-catalogue

RUN mkdir -p $CATALOGUE_DIR
RUN chown -R node:node $CATALOGUE_DIR

WORKDIR $CATALOGUE_DIR
ENV NODE_ENV build

ARG AUTH_HOST
ARG AUTH_CLIENT_ID
ARG POSTGRES_PASSWORD
ARG POSTGRES_PORT
ARG POSTGRES_USER
ARG POSTGRES_DATABASE
ARG POSTGRES_HOSTNAME

ADD server/nest-cli.json \
    server/package.json \
    server/yarn.lock \
    server/tsconfig.build.json \
    server/tsconfig.json \
    server/webpack-hmr.config.js \
    $CATALOGUE_DIR/

RUN yarn global add @nestjs/cli

ADD server/src $CATALOGUE_DIR/src

RUN yarn install && yarn build

FROM node:12-alpine as production
USER node


ENV PATH="/home/node/.yarn/bin:${PATH}"
ENV CATALOGUE_DIR=/home/node/product-catalogue
ENV MH370_DIR=/home/node/mh370-api

RUN mkdir -p $CATALOGUE_DIR
RUN chown -R node:node $CATALOGUE_DIR
RUN mkdir -p $MH370_DIR
RUN chown -R node:node $MH370_DIR

ENV NODE_ENV=production
# Disable colourisation in logging messages.
ENV NO_COLOR=true

# Install MH370 API.
WORKDIR $MH370_DIR
COPY --chown=node:node ./mh370-api/. ./
RUN yarn install

# Install product catalogue
WORKDIR $CATALOGUE_DIR
RUN yarn global add ts-node
COPY --from=builder $CATALOGUE_DIR/package*.json $CATALOGUE_DIR/
COPY --from=builder $CATALOGUE_DIR/yarn.lock $CATALOGUE_DIR/
COPY --from=builder $CATALOGUE_DIR/dist/ $CATALOGUE_DIR/dist/
COPY --from=builder $CATALOGUE_DIR/tsconfig.* $CATALOGUE_DIR/
RUN yarn install

# Port for product catalogue.
EXPOSE 3000
# Port for MH370 API.
EXPOSE 3002

ADD server/pm2.process.json $CATALOGUE_DIR/
RUN yarn global add pm2

# Don't use node as the entrypoint.
ENTRYPOINT []

# Run all configured processes.
CMD ["/bin/sh", "-c", "pm2-runtime pm2.process.json"]
