/**
 * Renders graph with text symbols. Even though name says ASCII it supports
 * unicode as well.
 *
 * @example
 *   var asciiGraphics = require('ngraph.ascii').graphics(graph);
 *   asciiGraphics.run(); // this will render graph with '*' symbols
 *
 * @param {ngraph.graph} graph - graph object to be rendered
 */
module.exports.graphics = require('./lib/graphics');

/**
 * This primary serves as a mock for terminal, to test this package. But
 * You can also use it if you want to graph as a text to somewhere else
 * See `./lib/arrayScreen` for detailed information
 */
module.exports.arrayScreen = require('./lib/arrayScreen');
