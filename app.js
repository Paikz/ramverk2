#!/usr/bin/env node
"use strict";

//Vars
var express = require("express");
var lessMiddleware = require('less-middleware');
const path = require("path");

//Routes
var index = require('./routes/index');

var app = express();

//Set view
app.set('view engine', 'pug');

//pug generates minified html, this makes it prettier
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

//map routes to right directory
app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', index);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    err.status = err.status || 500;
    res.status(err.status);
    res.render("error", {
        error: err
    });
});

// Start up server
console.log("Express is ready.");
const port = process.env.DBWEBB_PORT || '3000';

app.listen(port);
console.log("Listening on port: " + port);

//Use line below if you want to use app in other files with app = require(path)
//module.exports = app;
