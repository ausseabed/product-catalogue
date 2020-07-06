FROM node:12-alpine as builder
USER node
ENV APPDIR=/home/node
WORKDIR $APPDIR
ENV NODE_ENV build

ARG AUTH_HOST
ARG AUTH_CLIENT_ID
ARG POSTGRES_PASSWORD
ARG POSTGRES_PORT
ARG POSTGRES_USER
ARG POSTGRES_DATABASE
ARG POSTGRES_HOSTNAME

ADD nest-cli.json package.json yarn.lock tsconfig.build.json tsconfig.json webpack-hmr.config.js $APPDIR/

RUN yarn global add @nestjs/cli

ADD src $APPDIR/src

RUN yarn install && yarn build

FROM node:12-alpine as production
USER node
ENV NODE_ENV production
ENV APPDIR=/home/node
WORKDIR $APPDIR

RUN yarn global add ts-node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/yarn.lock /home/node/
COPY --from=builder /home/node/dist/ /home/node/dist/
COPY --from=builder /home/node/tsconfig.* /home/node/
RUN yarn install 

EXPOSE 3000
# Or yarn migration:run
CMD ["yarn", "run", "start:migrate:prod"] 