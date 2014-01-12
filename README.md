# ngraph.ascii

A simple toy to render a graph with text symbols.

# Example

This will render a 10x10 grid graph on your terminal:

``` js
var graph = require('ngraph.generators').grid(10, 10);
var asciiGraphics = require('ngraph.ascii').graphics(graph);

asciiGraphics.run();
```

You can also customize how each node is rendered, by passing a callback:

``` js
var graph = require('ngraph.generators').grid(10, 10);
var asciiGraphics = require('../').graphics(graph);

asciiGraphics.createNodeUI(function (node) {
  return '+'; each node is now rendered as a '+' symbol
});

asciiGraphics.run();
```

# install

With [npm](https://npmjs.org) do:

```
npm install ngraph.ascii
```

# license

MIT
