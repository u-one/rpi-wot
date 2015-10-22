'use strict';
var http = require('http');
var express = require('express');
var routes = require('./routes');
var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));
routes.configRoutes(app, server);

server.on('error', function(e) {
  console.log(e);
});

server.listen(process.env.PORT || 80);

if (server.address()) {
  console.log('listening on port %d', server.address().port);
}
