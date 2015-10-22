'use strict';
var configRoutes;

var fs = require ('fs');
var pi = require ('./pi.js');

configRoutes = function(app, server) {
    app.get('/', function(request, response) {
        response.redirect('/index.html');
    });
    app.get('/td', function(client_request, response) {
      var json_str = fs.readFileSync('td.jsonld');
      response.writeHead(200, { 'Content-Type' : 'application/json' });
      response.end(json_str);
    });
    app.get('/api/fan', function(client_request, response) {
      //pi.initialize();
      response.writeHead(204);
      response.end();
    });
    app.get('/api/fan/properties/speed', function(client_request, response) {
      var data = {speed: 0};
      response.writeHead(200, { 'Content-Type' : 'application/json' });
      response.end(JSON.stringify(data));
    });
    app.put('/api/fan/properties/speed', function(client_request, response) {
      response.writeHead(204);
      response.location('/api/fan/properties/speed');
      response.end();
    });
};

module.exports = {configRoutes: configRoutes};
