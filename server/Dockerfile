FROM node:12 as builder
USER node
ENV APPDIR=/home/node
WORKDIR $APPDIR

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

FROM node:12 as production
USER node
ENV APPDIR=/home/node
WORKDIR $APPDIR

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/dist/ /home/node/dist/
RUN yarn install

EXPOSE 3000
# Or yarn migration:run
CMD ["node","dist/main"] 