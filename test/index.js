var test = require('tap').test,
    createGraphics = require('../').graphics,
    arrayScreen = require('../').arrayScreen;

test('it renders graph', function (t) {
  t.plan(1);

  var graph = require('ngraph.generators').path(2);
  var screen = arrayScreen(80, 24, verifyFrame);

  var graphics = createGraphics(graph, {
    screen: screen
  });

  graphics.renderOneFrame();

  function verifyFrame(screen) {
    var starsCount = 0;
    for (var i = 0; i < screen.length; ++i) {
      if (screen[i] === '*') {
        starsCount += 1;
      }
    }
    t.equals(starsCount, 2, 'Found two stars for each node');
  }
});
