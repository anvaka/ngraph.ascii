# ngraph.ascii

A simple toy to render a graph with text symbols.

[![build status](https://secure.travis-ci.org/anvaka/ngraph.ascii.png)](http://travis-ci.org/anvaka/ngraph.ascii)
# Example

This will render a 10x10 grid graph in your terminal:

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
  return '+'; // each node is now rendered as a '+' symbol
});

asciiGraphics.run();
```

Even though the name says `ascii` you can use unicode symbols if your terminal supports them: 

[![http://i.snag.gy/XiQMS.jpg](http://i.snag.gy/XiQMS.jpg)](https://www.youtube.com/watch?v=tCPwCAZ8xFE)

Note: in these examples we are using `ngraph.generators` to create a predefined graph.
You can always use [ngraph.graph](https://github.com/anvaka/ngraph.graph) for custom graphs.

# install

With [npm](https://npmjs.org) do:

```
npm install ngraph.ascii
```

# license

MIT
