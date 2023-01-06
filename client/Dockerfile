FROM node:14 as build-stage
ENV APPDIR=/home/node
WORKDIR $APPDIR

ARG AUTH_HOST
ARG AUTH_CLIENT_ID
ARG APC_VERSION

ADD package.json yarn.lock babel.config.js quasar.conf.js .postcssrc.js tsconfig.json .npmrc .eslintignore .eslintrc.js $APPDIR/
RUN yarn global add @quasar/cli
ADD src $APPDIR/src
ADD public $APPDIR/public

COPY .npmrc $APPDIR/
RUN cat .npmrc
RUN yarn install && yarn run build

FROM nginx:1.13.9 as production-stage
ADD build/nginx-www.conf /etc/nginx/nginx.conf
ADD build/nginx-www-default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /home/node/dist/spa /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
