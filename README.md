[![CircleCI](https://circleci.com/gh/ausseabed/product-catalogue.svg?style=svg&circle-token=9fb3c78b6bc5f310b4b684bafe74f92b4138b2ea)](https://circleci.com/gh/ausseabed/product-catalogue)


# Product Catalogue (client)

A simple application for specifying properties of bathymetry products

## EPSG Data
Ownership of the EPSG Dataset by IOGP must be acknowledged in any publication or transmission (by whatever means) thereof (including permitted modifications). See http://www.epsg.org/Termsofuse.aspx. A snapshopt of data from EPSG is in client/src/statics/reference-system.json

## Install the dependencies
```bash
cd client
yarn global add @quasar/cli
yarn install
```

## Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
cd client
yarn dev (or dev_env if you have a .env file)
```

## Build the app for production (run out of circle.ci)
```bash
cd client
docker build ....
```

# Product Catalogue (server)

A restful API for managing products

## Install the dependencies
```bash
cd server
yarn global add mocha typeorm @babel/core reflect-metadata @babel/cli @babel/register pg
yarn install
```

## Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
cd server
yarn dev 
```

## Build the app for production (run out of circle.ci)
```bash
cd server
docker build ....
```
