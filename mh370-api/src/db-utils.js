const { Pool } = require('pg');
const { logger } = require('./logger');
const { getSecret } = require("./aws-utils");

let dbProperties;
let pool;

getDBProperties = function () {
    return new Promise(function (resolve, reject) {
        if (dbProperties) {
            resolve(dbProperties);
        } else {
            logger.info('Retrieving database credentials from secrets manager...');
            getSecret('POSTGRES_MARINE_MH370_API_CREDENTIALS').then(secret => {
                dbProperties = {
                    host: secret.host,
                    database: secret.dbname,
                    user: secret.username,
                    password: secret.password,
                    port: secret.port,
                    max: 3,
                    min: 1
                };
                resolve(dbProperties);
            }).catch((error) => {
                logger.error('Failed to retrieve database credentials from secrets manager.');
                logger.error(error);
                reject(error);
            });
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
    connectToRDS
};
