var graph = require('ngraph.generators').path(100);
var asciiGraphics = require('../').graphics(graph);

var symbols = ['💐', '💑', '💒', '💓', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '💝', '💞', '💟'];

asciiGraphics.createNodeUI(function (node) {
  return symbols[node.id % symbols.length];
});

asciiGraphics.run();
