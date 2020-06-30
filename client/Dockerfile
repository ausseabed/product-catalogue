FROM node:12 as build-stage
ENV APPDIR=/home/node
WORKDIR $APPDIR

ARG AUTH_HOST
ARG AUTH_CLIENT_ID

ADD package.json yarn.lock babel.config.js quasar.conf.js .postcssrc.js tsconfig.json .npmrc $APPDIR/
RUN yarn global add @quasar/cli
ADD src $APPDIR/src

COPY .npmrc $APPDIR/
RUN yarn install && yarn run build

FROM nginx:1.13.9 as production-stage
ADD build/nginx-www.conf /etc/nginx/nginx.conf
ADD build/nginx-www-default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /home/node/dist/spa /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
