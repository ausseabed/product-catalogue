var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var healthRouter = require('./routes/health');
var productsRouter = require('./routes/products');
var productRouter = require('./routes/product');

require('dotenv').config()


import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { createConnection, getConnectionOptions } from "typeorm"
async function createDefaultConnection () {
  // uncomment to print connection options (including credentials etc.)
  // const config = await getConnectionOptions();
  // console.log(config)
  createConnection().then(async connection => {
    let connOpts = connection.options as PostgresConnectionOptions;
    console.log(`Connected to database ${connOpts.host}:${connOpts.port} ` +
      `(${connOpts.type})`);

  }).catch(error => { console.log(error); });
}

createDefaultConnection()

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const restrictMiddleware = require('./lib/restrictMiddleware')

app.use('/', indexRouter);
app.use('/health', healthRouter);
app.use(restrictMiddleware)
app.use('/products', productsRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
