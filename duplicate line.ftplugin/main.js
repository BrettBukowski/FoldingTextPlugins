/**
 * Duplicates the current line with Cmd-Shift-D.
 */
define(function(require) {
  'use strict';

  var Extensions = require('ft/core/extensions').Extensions;

  Extensions.addCommand({
    name: 'Duplicate Line',
    description: 'Duplicates the current line with Cmd-Shift-D',
    performCommand: function (editor) {
      var tree = editor.tree(),
          range = editor.selectedRange(),
          node = range.nodesInRange()[0],
          newNode, newRange;

      tree.beginUpdates();

      newNode = tree.createNode(node.line());
      tree.insertNodeBefore(newNode, node.nextLineNode());

      tree.endUpdates();

      newRange = tree.createRangeFromNodes(newNode, range.startOffset, newNode, range.startOffset);
      editor.setSelectedRange(newRange);
    }
  });

  Extensions.addInit(function (editor) {
    editor.addKeyMap({
      'Shift-Cmd-D' : 'Duplicate Line'
    });
  });
});
