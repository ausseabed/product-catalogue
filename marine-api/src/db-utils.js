const { Pool } = require('pg');
const { logger } = require('./logger');

let dbProperties;
let pool;

getDBProperties = function () {
    return new Promise(function (resolve, reject) {
        if (dbProperties) {
            resolve(dbProperties);
        } else {
            dbProperties = {
                host: process.env.POSTGRES_HOSTNAME,
                database: process.env.POSTGRES_DATABASE,
                user: process.env.POSTGRES_USER,
                password: JSON.parse(process.env.POSTGRES_PASSWORD)["TF_VAR_postgres_admin_password"],
                port: parseInt(process.env.POSTGRES_PORT),
                max: 3,
                min: 1
            };
            resolve(dbProperties);
        }
    });
};

getPool = function () {
    return new Promise(function (resolve, reject) {
        if (pool) {
            resolve(pool);
        } else {
            getDBProperties().then(function (dbProperties) {
                pool = new Pool(dbProperties);

                // The pool will emit an error on behalf of any idle clients if a backend or network error happens
                pool.on('error', (error, client) => {
                    logger.error('Unexpected error on idle DB client:', error);
                    client.end();
                });

                resolve(pool);
            }).catch(function (error) {
                reject(error);
            });
        }
    });
};

connectToRDS = function () {
    return new Promise(function (resolve, reject) {
        getPool().then(function (pool) {
            pool.connect().then(function (client) {
                resolve(client);
            }).catch(function (error) {
                reject(error.error);
            });
        }).catch(function (error) {
            reject(error);
        });
    });
};

module.exports = {
    connectToRDS: connectToRDS
};
