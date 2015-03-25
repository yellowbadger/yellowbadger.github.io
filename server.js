var connect = require('connect');
var serveStatic = require('serve-static');
var path = __dirname;
var port = 8000;
console.log("Serving files from " + path + " on port " + port);
connect().use(serveStatic(path)).listen(port);