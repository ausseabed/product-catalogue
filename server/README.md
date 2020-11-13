# Product Catalogue (Server)

A restful API for managing products. The product catalogue server uses NestJS to call a postgres database using TypeORM as an object relational mediator. The database uses history tables to allow old versions of the database to be queried while new data is being added to the database. When adding new fields to the database look at examples of the database migrations to see how history triggers are connected and disconnected, and additional tables added.

## Install the dependencies
```bash
cd server
yarn global add @nestjs/cli
yarn install
```

## Start the app in development mode (hot-code reloading, error reporting, etc.)
First set up the .env file using the .env.example file as a template
```bash
cd server
yarn start:dev 
```

## Build the app for production (run out of circle.ci)
```bash
cd server
docker build ....
```
