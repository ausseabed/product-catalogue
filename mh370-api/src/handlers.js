const productService = require('./product-service');
const errorHandler = require('./error-handler');
const fsExtra = require('fs-extra');
const path = require('path');
const fileUtils = require('./file-utils');
const environment = require('./environment');
const { logger } = require('./logger');
const utils = require('./utils');

let listProducts = function (req, res) {
    logger.info('Executing listProducts...');
    let response = [];
    let products = productService.getAll();
    for (let i = 0; i < products.length; i++) {
        response.push({name: products[i].name});
    }
    logger.info('listProducts completed.');
    res.send(response);
};

let getProductDetails = function (req, res) {
    logger.info('Executing getProductDetails...');
    let product = productService.getDetails(req.params.id);
    if (!product) {
        errorHandler.sendProductNotFound(res);
    } else {
        productService.getReferenceData(product.bundleTable).then(function (response) {
            let data = {
                status: 'ok',
                product: product,
                referenceData: {
                    vessel: response.vessel,
                    bext: response.bext
                }
            };
            productService.getMinMaxDates(product.periodSqlQuery).then(function (response) {
                data['minDate'] = response.min_date;
                data['maxDate'] = response.max_date;
                logger.info('getProductDetails completed.');
                res.send(data);
            });
        }).catch(function (error) {
            errorHandler.sendUnexpectedError(res, error);
        });
    }
};

let queryProduct = function (req, res) {
    logger.info('Executing queryProduct...');
    let product = productService.getDetails(req.params.id);
    if (!product) {
        errorHandler.sendProductNotFound(res);
    } else {
        let formFields = req.query;
        let pagination = {
            pageSize: formFields.pageSize,
            currentPage: formFields.currentPage
        };
        if (pagination.currentPage == 1) {
            productService.countQuery(product.bundleTable, product.geometryTable, formFields).then(function (countData) {
                productService.query(product.bundleTable, product.geometryTable, formFields, pagination, false).then(function (queryData) {
                    logger.debug('queryProduct - countData:', countData);

                    // Get client IP address
                    let clientIP = utils.getClientIP(req);

                    // Get country name
                    getCountryName(null, clientIP).then(function (countryName) {

                        // Log request
                        let dbQueryRequest = {
                            clientIP: clientIP,
                            countryName: countryName,
                            requestDate: new Date(),
                            product: product.name,
                            geometryString: formFields['geom'],
                            fileFormat: formFields['bext'],
                            vessel: formFields['vessel']
                        };

                        // Query response
                        let queryResponse = {
                            status: 'ok',
                            totalRecords: countData.totalRecords,
                            totalFileSize: countData.totalFileSize,
                            totalGeometries: countData.totalGeometries,
                            rows: queryData.rows
                        };

                        logger.info('queryProduct completed.');
                        res.send(queryResponse);
                    });

                }).catch(function (error) {
                    errorHandler.sendUnexpectedError(res, error);
                });
            }).catch(function (error) {
                errorHandler.sendUnexpectedError(res, error);
            });
        } else {
            productService.query(product.bundleTable, product.geometryTable, formFields, pagination, false).then(function (data) {
                logger.info('queryProduct completed.');
                res.send({
                    status: 'ok',
                    rows: data.rows
                });
            }).catch(function (error) {
                errorHandler.sendUnexpectedError(res, error);
            });
        }
    }
};

let downloadUrlList = function (req, res) {
    logger.info('Executing downloadUrlList...');
    let product = productService.getDetails(req.params.id);
    if (!product) {
        res.sendStatus(500);
    } else {
        req.connection.setTimeout(1000 * 60 * 5);   // 5 minutes
        let timestamp = new Date().getTime();
        let formFields = req.query;
        let requestId = formFields.requestId;
        delete formFields['requestId'];
        let pagination = {
            pageSize: 500,
            currentPage: 1
        };
        productService.countFilesQuery(product.bundleTable, product.geometryTable, formFields).then(function (countData) {
            logger.info('downloadUrlList - totalRecords: %s', countData.totalRecords);

            let totalQueries = Math.ceil(countData.totalRecords / pagination.pageSize);

            logger.info('downloadUrlList - totalQueries: %s', totalQueries);

            let promiseArray = [];
            for (let i = 1; i <= totalQueries; i++) {
                promiseArray.push(productService.filesQuery(product.bundleTable, product.geometryTable, formFields, pagination));
                pagination = {
                    pageSize: 500,
                    currentPage: pagination.currentPage + 1
                };
            }
            let row;
            let urlList = [];
            Promise.all(promiseArray).then(function (responses) {
                for (let i = 0; i < responses.length; i++) {
                    for (let j = 0; j < responses[i].rows.length; j++) {
                        row = responses[i].rows[j];
                        if (row.uri) {
                            urlList.push(row.uri);
                        }
                    }
                }
                logger.info('downloadUrlList - finished urlList with size: %s', urlList.length);

                fileUtils.createTextFile(environment.getUrlListFile(timestamp), urlList);
                logger.info('downloadUrlList - created file with URLs');

                fileUtils.copyFile(path.join(__dirname, 'resources', 'download-instructions.txt'), environment.getReadMePath(timestamp));
                logger.info('downloadUrlList - added readme file');

                fileUtils.zipFolder(environment.getDownloadFolder(timestamp), environment.getUrlListZip(timestamp)).then(function (status) {
                    logger.info('downloadUrlList completed.');
                    res.download(environment.getUrlListZip(timestamp), 'products-url-list.zip', function (error) {
                        fsExtra.removeSync(environment.getTempFolder(timestamp));
                    });
                });
            }).catch(function (error) {
                logger.error('downloadUrlList - error: %s', error);
                res.sendStatus(500);
            });
        }).catch(function (error) {
            logger.error('downloadUrlList - error: %s', error);
            res.sendStatus(500);
        });
    }
};

let getFeatures = function (req, res) {
    logger.info('Executing getFeatures...');
    let product = productService.getDetails(req.params.id);
    if (!product) {
        errorHandler.sendProductNotFound(res);
    } else {
        let formFields = req.query;
        let pagination = {
            pageSize: 500,
            currentPage: 1
        };
        let hasGeometry = (product.geometryTable != null);
        productService.countQuery(product.bundleTable, product.geometryTable, formFields).then(function (countData) {
            let totalQueries = Math.ceil(countData.totalGeometries / pagination.pageSize);
            let promiseArray = [];
            for (let i = 1; i <= totalQueries; i++) {
                promiseArray.push(productService.query(product.bundleTable, product.geometryTable, formFields, pagination, hasGeometry));
                pagination = {
                    pageSize: 500,
                    currentPage: pagination.currentPage + 1
                };
            }
            let rows = [];
            Promise.all(promiseArray).then(function (responses) {
                for (let i = 0; i < responses.length; i++) {
                    for (let j = 0; j < responses[i].rows.length; j++) {
                        rows.push(responses[i].rows[j]);
                    }
                }
                logger.info('getFeatures completed.');
                res.send({
                    status: 'ok',
                    rows: rows
                });
            }).catch(function (error) {
                errorHandler.sendUnexpectedError(res, error);
            });
        }).catch(function (error) {
            errorHandler.sendUnexpectedError(res, error);
        });
    }
};

let getCountryName = function (emailAddress, ipAddress) {
    return new Promise(function (resolve, reject) {
        let countryName;
        if (emailAddress) {
            countryName = utils.getCountryByEmail(emailAddress);
        }
        if (!countryName) {
            utils.getCountryByIP(ipAddress).then(function (response) {
                if (!response) {
                    resolve('Unknown');
                }
                resolve(response);
            }).catch(function (error) {
                resolve('Unknown');
            });
        } else {
            resolve(countryName);
        }
    });
};

module.exports = {
    listProducts,
    getProductDetails,
    queryProduct,
    downloadUrlList,
    getFeatures
};
