/**
 * Terminal output
 */
module.exports = function () {
  var utils = require('util');

  var ESC = '\x1b',
      CSI = ESC + '[';

  var padding = 2,
      renderCommands = []; // buffer for rendering commands

  return {
    /**
     * gets screen width
     */
    width: function () {
      return process.stdout.columns - padding;
    },

    /**
     * gets screen height
     */
    height: function () {
      return process.stdout.rows - padding;
    },

    clear: function () {
      renderCommands = [];
      renderCommands.push(CSI + 'H' + CSI + 'J'); // clear
    },

    put: function (x, y, text) {
      x |= 0; y |= 0; // make sure we have integers here
      if (x >= 0 && y >= 0 && x <= this.width() && y <= this.height()) {
        renderCommands.push(CSI + y + ";" + x + "H" + text);
      }
    },

    flush: function () {
      utils.puts(renderCommands.join(''));
    }
  };
}
