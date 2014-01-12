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


test('screen chooses correct coordinates', function (t) {
  var screen = arrayScreen(80, 24, verifyFrame);

  screen.put(0, 0, '0'); // 0
  screen.put(1, 0, '1'); // 1
  screen.put(0, 1, '2'); // 80
  screen.put(82, 1, '3'); // 159
  screen.flush();
  function verifyFrame(chars) {
    t.equals(chars[0], '0');
    t.equals(chars[1], '1');
    t.equals(chars[80], '2');
    t.equals(chars[159], '3');
    t.end();
  }
});
