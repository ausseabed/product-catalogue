FROM node:12 as develop-stage
ENV APPDIR=/code
WORKDIR $APPDIR

ARG AUTH_HOST
ARG AUTH_CLIENT_ID

ADD package.json yarn.lock babel.config.js quasar.conf.js .postcssrc.js tsconfig.json .npmrc $APPDIR/
RUN yarn global add @quasar/cli
ADD src $APPDIR/src

# build stage
FROM develop-stage as build-stage
ADD product-catalogue-rest-client-0.1.7-npm.tgz $APPDIR/
RUN ls
RUN yarn install && yarn run build

FROM nginx:1.13.9 as production-stage
ADD build/nginx-www.conf /etc/nginx/nginx.conf
ADD build/nginx-www-default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /code/dist/spa /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
