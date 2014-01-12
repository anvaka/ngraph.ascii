var graph = require('ngraph.generators').grid(10, 10);
var asciiGraphics = require('../').graphics(graph);

var symbols = ['👰','👱','👲','👳','👴','👵','👶','👷','👸'];

asciiGraphics.createNodeUI(function (node) {
  return symbols[node.id % symbols.length];
});

asciiGraphics.run();
