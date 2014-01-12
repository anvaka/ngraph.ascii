/**
 * Output graph to array of characters
 *
 * @param {Number} screenWidth width of a screen in characters.
 * @param {Number} screenHeight height of a screen in characters.
 * @param {Function=} onFlushed callback to be called when screen needs to be flushed.
 * takes one argument - array of all characters.
 */
module.exports = function (screenWidth, screenHeight, onFlushed) {
  if (typeof screenWidth !== 'number' || typeof screenHeight !== 'number') {
    throw new Error('Width and height are required to be numbers for array screen');
  }

  var maxElements = screenWidth * screenHeight;
  var screen = new Array(maxElements);

  return {
    width: function () {
      return screenWidth;
    },

    height: function () {
      return screenHeight;
    },

    clear: function () {
      for (var i = 0; i < maxElements; ++i) {
        screen[i] = ' ';
      }
    },

    put: function (x, y, text) {
      x |= 0; y |= 0; // make sure we have integers here
      if (x >= 0 && y >= 0 && x <= this.width() && y <= this.height()) {
        screen[x * this.width() + y] = text[0]; // NOTE: problem with unicode here
      }
    },

    flush: function () {
      if (typeof onFlushed === 'function') {
        onFlushed(screen); // let outter world know
      }
    }
  };
}
