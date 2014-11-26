module.exports = function (graph, settings) {
  var merge = require('ngraph.merge');
  settings = merge(settings, {
    // how often do we want to render frames (in ms)?
    frameInterval: 24,
    // how we render characters?
    screen: require('./terminal')()
  });

  // If client does not need custom layout algorithm, let's create default one:
  var layout = settings.layout || require('ngraph.forcelayout')(graph);

  var nodeUIBuilder = defaultCreateNodeUI,
      screen = settings.screen,
      sx, sy, // screen scale, updated per frame;
      // min coordinates of graph nodes. Updated per frame, used for centering
      minX, minY;

  return {
    /**
     * Renders just one frame of animation
     */
    renderOneFrame: renderOneFrame,

    /**
     * Runs animation loop
     */
    run : run,

    /**
     * This callback creates new text UI for a graph node.
     *
     * @callback createNodeUICallback
     * @param {object} node - graph node for which UI is required.
     * @returns {String} a character, which should be rendered as a node
     */
    /**
     * This function allows clients to pass custom node UI creation callback
     * 
     * @param {createNodeUICallback} createNodeUICallback - The callback that 
     * creates new node UI
     * @returns {object} this for chaining.
     */
    createNodeUI: function (cb) {
      nodeUIBuilder = cb;
      return this;
    }
  };

  function run() {
    renderOneFrame();
    setTimeout(run, settings.frameInterval);
  }

  function renderOneFrame() {
    layout.step();
    updateTransform();

    screen.clear();
    graph.forEachNode(renderNode);
    screen.flush();
  }

  function renderNode(node) {
    var pos = layout.getNodePosition(node.id);
    // since graph is centered at (0, 0) we want to move its (minx, miny) to
    // (0,0) of a screen:
    var x = (pos.x - minx) * sx;
    var y = (pos.y - miny) * sy;

    screen.put(x, y, nodeUIBuilder(node));
  }

  function defaultCreateNodeUI(node) {
    return '*';
  }

  function updateTransform() {
    // try to fit graph into what we have in terminal:
    var rect = layout.getGraphRect();

    sx = screen.width()/(rect.x2 - rect.x1);
    sy = screen.height()/(rect.y2 - rect.y1);
    minx = rect.x1;
    miny = rect.y1;
  }
}
