#!/usr/bin/env node
"use strict";

var http = require('http');
var app = require('./bin/app');
var socket = require('./src/websocket/server');
var server = http.createServer(app);
var socketServer = socket(server);

// Start up server
console.log("Express is ready.");
const port = process.env.DBWEBB_PORT || '3000';

server.listen(port);
console.log("Listening on port: " + port);
