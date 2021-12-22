const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers');
const { logger } = require('./logger');

logger.info('Starting MH370 API...');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/health', function (req, res) {
    res.sendStatus(200);
});

router.get('/products', handlers.listProducts);

router.get('/products/:id', handlers.getProductDetails);

router.get('/products/:id/query', handlers.queryProduct);

router.get('/products/:id/download-url-list', handlers.downloadUrlList);

router.get('/products/:id/features', handlers.getFeatures);

app.use('/', router);
app.listen(3002);

logger.info('MH370 API listening on port 3002...');
