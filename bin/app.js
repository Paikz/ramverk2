"use strict";

//Vars
var express = require("express");
var lessExpress = require('less-express');
const path = require("path");

//Routes
var home = require('../routes/home');
var about = require('../routes/about');
var report = require('../routes/report');
var chat = require('../routes/chat');
var db = require('../routes/db');
var appRoute = require('../routes/app');

var app = express();

//Set view
app.set('view engine', 'pug');

//pug generates minified html, this makes it prettier
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

//map routes to right directory
app.use('/', home);
app.use('/report', report);
app.use('/about', about);
app.use('/app', appRoute);
app.use('/chat', chat);
app.use('/db', db);
app.get('/css/style.css', lessExpress('./public/stylesheets/style.less'));
app.use(express.static(path.join(__dirname, '../public')));


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

//Use line below if you want to use app in other files with app = require(path)
module.exports = app;
