const SecretsManager = require('aws-sdk/clients/secretsmanager');
const { logger } = require('./logger');

const secretsManager = new SecretsManager({
    apiVersion: '2017-10-17',
    region: 'ap-southeast-2'
});

module.exports = {
    getSecret: function (secretName) {
        return new Promise(function (resolve, reject) {
            const params = {
                SecretId: secretName
            };
            secretsManager.getSecretValue(params, function(error, data) {
                if (error) {
                    logger.error(error.stack);
                    reject(error.message);
                } else {
                    resolve(JSON.parse(data.SecretString));
                }
            });
        });
    }
};
