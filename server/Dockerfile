FROM node:12-alpine as builder
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

ENV CATALOGUE_DIR=/home/node/product-catalogue
ENV MARINE_DIR=/home/node/marine-api

RUN mkdir -p $CATALOGUE_DIR
RUN chown -R node:node $CATALOGUE_DIR
RUN mkdir -p $MARINE_DIR
RUN chown -R node:node $MARINE_DIR

ENV NODE_ENV production

#Install marine API.
WORKDIR $MARINE_DIR
COPY --chown=node:node ./marine-api/. ./
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
# Port for marine API.
EXPOSE 3002

ADD pm2.process.json $CATALOGUE_DIR/
RUN yarn global add pm2
RUN yarn run typeorm:prod migration:run

# Run all configured processes.
CMD ["pm2-runtime", "pm2.process.json"]
