const environment = require('./environment');
const dbUtils = require('./db-utils');
const { logger } = require('./logger');

buildWhereClause = function (queryFilter) {
    let index = 1;
    let whereClause = '';
    let paramValues = [];
    let hasGeomParam = false;
    let includeEmptyValues = (queryFilter['includeEmptyValues'] === 'true');

    for (let key in queryFilter) {
        if (queryFilter.hasOwnProperty(key)) {
            if (key !== 'pageSize' && key !== 'currentPage' && key !== 'includeEmptyValues' && queryFilter[key] !== '') {
                paramValues.push(queryFilter[key]);
                if (key === 'bundle') {
                    whereClause += (' AND t.bundle LIKE $' + index);
                } else if (key === 'geom') {
                    hasGeomParam = true;
                    whereClause += (' AND (ST_Intersects(g.geom, ST_GeometryFromText($' + index + ', 4326)))');
                } else if (key === 'time_start') {
                    whereClause += (' AND (t.time_start >= $' + index + (includeEmptyValues ? ' OR t.time_start IS NULL)' : ')'));
                } else if (key === 'time_end') {
                    whereClause += (' AND (t.time_end <= $' + index + (includeEmptyValues ? ' OR t.time_end IS NULL)' : ')'));
                } else {
                    whereClause += (' AND (t.' + key + ' = $' + index + (includeEmptyValues ? ' OR t.' + key + ' IS NULL)' : ')'));
                }
                index++;
            }
        }
    }

    return {
        index: index,
        whereClause: whereClause,
        paramValues: paramValues,
        hasGeomParam: hasGeomParam
    };
};

buildCountQuery = function (bundleTable, geometryTable, queryFilter) {
    // Set array of param values
    let whereClauseData = buildWhereClause(queryFilter);
    let whereClause = whereClauseData.whereClause;
    let paramValues = whereClauseData.paramValues;
    let hasGeomParam = whereClauseData.hasGeomParam;

    // Create sql statement
    let sql;

    if (typeof geometryTable === 'undefined') {
        sql = `SELECT COUNT(t.*), SUM(t.file_size), 0
            FROM ${bundleTable} AS t`;
    } else {
        sql = `SELECT COUNT(t.*), SUM(t.file_size), COUNT(DISTINCT t.geom_id)
            FROM ${bundleTable} AS t
            LEFT JOIN ${geometryTable} AS g ON (t.geom_id = g.id)`;
    }

    if (paramValues.length > 0) {
        sql += ' WHERE 1 = 1 ' + whereClause;
    }

    logger.debug('buildCountQuery - sql:', sql);

    return {
        text: sql,
        values: paramValues,
        rowMode: 'array'
    };
};

buildCountFilesQuery = function (bundleTable, geometryTable, queryFilter) {
    // Set array of param values
    let whereClauseData = buildWhereClause(queryFilter);
    let whereClause = whereClauseData.whereClause;
    let paramValues = whereClauseData.paramValues;
    let hasGeomParam = whereClauseData.hasGeomParam;

    // Create sql statement
    let sql;
    let tableName = bundleTable.replace('_bundle', '');

    if (hasGeomParam) {
        sql = `SELECT COUNT(DISTINCT f.*)
            FROM ${tableName} AS f
            JOIN ${bundleTable} AS t ON (f.bundle = t.bundle)
            JOIN ${geometryTable} AS g ON (t.geom_id = g.id)`;
    } else {
        sql = `SELECT COUNT(DISTINCT f.*)
            FROM ${tableName} AS f
            JOIN ${bundleTable} AS t ON (f.bundle = t.bundle)`;
    }

    if (paramValues.length > 0) {
        sql += ' WHERE 1 = 1 ' + whereClause;
    }

    logger.debug('buildCountFilesQuery - sql:', sql);

    return {
        text: sql,
        values: paramValues,
        rowMode: 'array'
    };
};

buildQuery = function (bundleTable, geometryTable, queryFilter, pagination, includeGeometry) {
    // Set array of param values
    let whereClauseData = buildWhereClause(queryFilter);
    let index = whereClauseData.index;
    let whereClause = whereClauseData.whereClause;
    let paramValues = whereClauseData.paramValues;
    let hasGeomParam = whereClauseData.hasGeomParam;

    // Create sql statement
    let sql;
    if (includeGeometry) {
        sql = `SELECT DISTINCT g.id, ST_AsGeoJSON(g.geom) AS geometry
            FROM ${bundleTable} t`;

    } else {
        sql = `SELECT DISTINCT t.bundle, t.file_size
            FROM ${bundleTable} t`;
    }

    if (includeGeometry || (hasGeomParam)) {
        sql += ` JOIN ${geometryTable} AS g ON (t.geom_id = g.id)`;
    }

    if (paramValues.length > 0) {
        sql += ' WHERE 1 = 1 ' + whereClause;
    }

    sql += ` ORDER BY 1 LIMIT $${index++} OFFSET $${index}`;

    // Add values for LIMIT and OFFSET
    let offset = (pagination.currentPage - 1) * pagination.pageSize;
    paramValues.push(pagination.pageSize);
    paramValues.push(offset);

    logger.debug('buildQuery - sql:', sql);

    return {
        text: sql,
        values: paramValues
    };
};

buildFilesQuery = function (bundleTable, geometryTable, queryFilter, pagination) {
    // Set array of param values
    let whereClauseData = buildWhereClause(queryFilter);
    let index = whereClauseData.index;
    let whereClause = whereClauseData.whereClause;
    let paramValues = whereClauseData.paramValues;
    let hasGeomParam = whereClauseData.hasGeomParam;
    let tableName = bundleTable.replace('_bundle', '');

    // Create sql statement
    let sql = `SELECT DISTINCT f.name, f.uri, f.file_size
        FROM ${tableName} f
        JOIN ${bundleTable} AS t ON (f.bundle = t.bundle)`;

    if (hasGeomParam) {
        sql += ` JOIN ${geometryTable} AS g ON (t.geom_id = g.id)`;
    }

    if (paramValues.length > 0) {
        sql += ' WHERE 1 = 1 ' + whereClause;
    }

    sql += ` ORDER BY 1 LIMIT $${index++} OFFSET $${index}`;

    // Add values for LIMIT and OFFSET
    let offset = (pagination.currentPage - 1) * pagination.pageSize;
    paramValues.push(pagination.pageSize);
    paramValues.push(offset);

    logger.debug('buildFilesQuery - sql:', sql);

    return {
        text: sql,
        values: paramValues
    };
};

getAll = function () {
    let products = environment.products;
    return products.sort(function (obj1, obj2) {
        if (obj1.name < obj2.name) {
            return -1;
        }
        if (obj1.name > obj2.name) {
            return 1;
        }
        return 0;
    });
};

getDetails = function (productName) {
    const products = getAll();
    let matchedProducts = products.filter(function (product) {
        return product.name === productName;
    });
    return matchedProducts[0];
};

getErrorData = function (error, client) {
    if (client) {
        client.release();
    }
    return {
        status: 'error',
        reason: error
    };
};

countQuery = function (bundleTable, geometryTable, queryFilter) {
    return new Promise(function (resolve, reject) {
        dbUtils.connectToRDS().then(function (client) {
            let sql = buildCountQuery(bundleTable, geometryTable, queryFilter);
            client.query(sql).then(function (response) {
                resolve({
                    totalRecords: response.rows[0][0],
                    totalFileSize: response.rows[0][1],
                    totalGeometries: response.rows[0][2]
                });
                client.release();
            }).catch(function (error) {
                reject(getErrorData(error, client));
            });
        }).catch(function (error) {
            reject(getErrorData(error));
        });
    });
};

countFilesQuery = function (bundleTable, geometryTable, queryFilter) {
    return new Promise(function (resolve, reject) {
        dbUtils.connectToRDS().then(function (client) {
            let sql = buildCountFilesQuery(bundleTable, geometryTable, queryFilter);
            client.query(sql).then(function (response) {
                resolve({
                    totalRecords: response.rows[0][0]
                });
                client.release();
            }).catch(function (error) {
                reject(getErrorData(error, client));
            });
        }).catch(function (error) {
            reject(getErrorData(error));
        });
    });
};

doQuery = function (bundleTable, geometryTable, queryFilter, pagination, includeGeometry, includeFiles) {
    return new Promise(function (resolve, reject) {
        dbUtils.connectToRDS().then(function (client) {
            let sql;
            if (includeFiles) {
                sql = buildFilesQuery(bundleTable, geometryTable, queryFilter, pagination);
            } else {
                sql = buildQuery(bundleTable, geometryTable, queryFilter, pagination, includeGeometry);
            }
            client.query(sql).then(function (response) {
                resolve(response);
                client.release();
            }).catch(function (error) {
                reject(getErrorData(error, client));
            });
        }).catch(function (error) {
            reject(getErrorData(error));
        });
    });
};

query = function (bundleTable, geometryTable, queryFilter, pagination, includeGeometry) {
    return doQuery(bundleTable, geometryTable, queryFilter, pagination, includeGeometry, false);
};

filesQuery = function (bundleTable, geometryTable, queryFilter, pagination) {
    return doQuery(bundleTable, geometryTable, queryFilter, pagination, false, true);
};

getReferenceData = function (bundleTable) {
    return new Promise(function (resolve, reject) {
        dbUtils.connectToRDS().then(function (client) {
            Promise.all([
                client.query({
                    text: `SELECT DISTINCT vessel FROM ${bundleTable} WHERE vessel IS NOT NULL ORDER BY vessel`,
                    rowMode: 'array'
                }),
                client.query({
                    text: `SELECT DISTINCT bext FROM ${bundleTable} WHERE bext IS NOT NULL ORDER BY bext`,
                    rowMode: 'array'
                })
            ]).then(function (values) {
                resolve({
                    vessel: values[0].rows,
                    bext: values[1].rows,
                });
                client.release();
            });
        }).catch(function (error) {
            reject(getErrorData(error));
        });
    });
};

getMinMaxDates = function (sql) {
    return new Promise(function (resolve, reject) {
        dbUtils.connectToRDS().then(function (client) {
            client.query(sql).then(function (response) {
                resolve(response.rows[0]);
                client.release();
            }).catch(function (error) {
                reject(getErrorData(error, client));
            });
        }).catch(function (error) {
            reject(getErrorData(error));
        });
    });
};

module.exports = {
    getAll,
    getDetails,
    countQuery,
    query,
    getReferenceData,
    getMinMaxDates,
    countFilesQuery,
    filesQuery
};
