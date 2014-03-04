var q = require('q');
var http = require('http');
var querystring = require('querystring');
var graph = require('ngraph.graph')();
var graphBuilder = require('npmgraphbuilder')(httpClient);
var pkgName = process.argv[2] || 'browserify';

graphBuilder.createNpmDependenciesGraph(pkgName, graph)
  .then(renderGraph)
  .fail(function (err) {
    console.error('Failed to build graph: ', err);
  });

function renderGraph(graph) {
  var asciiGraphics = require('../').graphics(graph);
  asciiGraphics.run();
}


function httpClient(url, data) {
  console.log('getting ' + url);
  var defer = q.defer();
  http.get(url + '?' + querystring.stringify(data), function (res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      body += chunk;
    }).on('end', function () {
      defer.resolve({ data: JSON.parse(body) });
    });
  });

  return defer.promise;
}
