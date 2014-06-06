/**
 * Selects the current line with Shift-Alt-S.
 */
define(function(require) {
  'use strict';

  var Extensions = require('ft/core/extensions').Extensions;

  Extensions.addCommand({
    name: 'Select Line',
    description: 'Toggles the done tag on the current line',
    performCommand: function (editor) {
      var tree = editor.tree(),
          range = editor.selectedRange(),
          node = range.nodesInRange()[0],
          newRange = tree.createRangeFromNodes(node, 0, node, -1);

      editor.setSelectedRange(newRange);
    }
  });

  Extensions.addInit(function (editor) {
    editor.addKeyMap({
      'Shift-Alt-S' : 'Select Line'
    });
  });
});
