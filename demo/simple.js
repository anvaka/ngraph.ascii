var graph = require('ngraph.generators').grid(10, 10);
var asciiGraphics = require('../').graphics(graph);

asciiGraphics.run();
