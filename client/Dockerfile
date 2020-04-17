FROM node:12 as develop-stage
ENV APPDIR=/code
WORKDIR $APPDIR

ARG AUTH_HOST
ARG AUTH_CLIENT_ID

ADD package.json yarn.lock jsconfig.json babel.config.js quasar.conf.js .postcssrc.js $APPDIR/
RUN yarn global add @quasar/cli
ADD src $APPDIR/src

# build stage
FROM develop-stage as build-stage
RUN yarn install 
RUN quasar build

EXPOSE 443
CMD ["yarn run dev"]
# TODO: [NGA-286] the following is to move from dev to nginx hosted
#FROM nginx:1.13.9 as production-stage
#COPY --from=build-stage /code/dist/spa /usr/share/nginx/html
#WORKDIR /code
#CMD ["nginx", "-g", "daemon off;"]
