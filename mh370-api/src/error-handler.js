const { logger } = require('./logger');

module.exports = {
    sendProductNotFound: function (res) {
        res.status(400).send({
            status: "error",
            reason: "Product not found"
        });
    },
    sendUnexpectedError: function (res, error) {
        logger.error(JSON.stringify(error));
        logger.error('error-handler - error: ' + (error.reason ? error.reason : error));
        res.status(500).send({
            status: "error",
            reason: "Unexpected error."
        });
    }
};
