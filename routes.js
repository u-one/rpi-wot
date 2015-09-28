'use strict';
var configRoutes;

var fs = require ('fs');
var pi = require ('./pi.js');

configRoutes = function(app, server) {
    app.get('/', function(request, response) {
        response.redirect('/index.html');
    });
    app.get('/api/td', function(client_request, response) {
        //console.log(client_request);
        //console.log(client_request.params);
        var json_str = fs.readFileSync('td.jsonld');
        response.writeHead(200, { 'Content-Type' : 'application/json' });
        response.end(json_str);
    });
    app.get('/api/motor/switchOnOff', function(client_request, response) {
      pi.initialize();
      var data = {result: 0};
      response.writeHead(200, { 'Content-Type' : 'application/json' });
      response.end(JSON.stringify(data));
    });
};

module.exports = {configRoutes: configRoutes};
