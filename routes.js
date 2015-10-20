'use strict';
var configRoutes;

var fs = require ('fs');

configRoutes = function(app, server) {
    app.get('/', function(request, response) {
        response.redirect('/index.html');
    });
    app.get('/api/td', function(client_request, response) {
        //console.log(client_request);
        //console.log(client_request.params);
        var json_str = fs.readFileSync('td.jsonld');
        response.send(json_str);
    });
};

module.exports = {configRoutes: configRoutes};
