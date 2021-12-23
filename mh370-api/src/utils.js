const { logger } = require('./logger');
const https = require('https');

let ipCountryList = {};

let httpsGetJson = function (url) {
    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            let body = '';
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                resolve(JSON.parse(body));
            });
        }).on('error', function (e) {
            reject(e);
        });
    });
};

module.exports = {
    getClientIP: function (req) {
        let ipAndProxies = req.header('x-forwarded-for');
        if (ipAndProxies) {
            return ipAndProxies.split(',')[0];
        } else {
            let remoteAddress = req.connection.remoteAddress;
            let ipv6Index = remoteAddress.lastIndexOf(":");
            if (ipv6Index >= 0) {
                return remoteAddress.substr(ipv6Index + 1);
            } else {
                return remoteAddress;
            }
        }
    },
    getCountryByIP: function (ipAddress) {
        return new Promise(function (resolve, reject) {
            let countryName = ipCountryList[ipAddress];
            if (countryName) {
                logger.info("getCountryByIP - Country already exists so we won't call the api");
                resolve(countryName);
            } else {
                let url = 'https://ipapi.co/' + ipAddress + '/json/';
                httpsGetJson(url).then(function (jsonObject) {
                    if (jsonObject.error === true) {
                        logger.error(JSON.stringify(jsonObject));
                        reject(`ipapi.co request for country failed: ${jsonObject.reason} - ${jsonObject.message}`);
                        return;
                    }
                    ipCountryList[ipAddress] = jsonObject.country_name;
                    resolve(jsonObject.country_name);
                }).catch(function (error) {
                    reject(error);
                });
            }
        });
    },
    padStart: function (input, targetLength, padString) {
        input = String(input);
        targetLength = targetLength >> 0;   // truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (input.length > targetLength) {
            return input;
        } else {
            targetLength = targetLength - input.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + input;
        }
    }
};
