var express = require('express');
var app = express();
var path = require('path');
var fetchProductsRouter= require('./routes/products')

app.use('/', fetchProductsRouter);

app.listen(8080);

module.exports = app;
