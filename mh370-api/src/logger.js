const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate');
const dateformat = require('dateformat');

const APPLICATION_PREFIX = '[mh370-api]';

const getLogger = function(fileName) {
    return new (winston.Logger)({
        level: 'info',
        transports: [
            new (winston.transports.Console)({
                timestamp: function () {
                    return dateformat(new Date(), 'yyyy-mm-dd HH:MM:ss.l');
                },
                formatter: function (options) {
                    return APPLICATION_PREFIX + ' ' +
                        options.timestamp() + ' ' +
                        options.level.toUpperCase() + ' ' +
                        (options.message ? options.message : '') +
                        (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
                }
            }),
            new DailyRotateFile({
                datePattern: '.yyyy-MM-dd',
                filename: fileName,
                maxFiles: '7d',
                timestamp: function () {
                    return dateformat(new Date(), 'yyyy-mm-dd HH:MM:ss.l');
                },
                formatter: function (options) {
                    return APPLICATION_PREFIX + ' ' +
                        options.timestamp() + ' ' +
                        options.level.toUpperCase() + ' ' +
                        (options.message ? options.message : '') +
                        (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
                }
            })
        ]
    });
}

module.exports = {
    logger: getLogger('./mh370-api.log')
};
