/**
 * Moves the current line up/down with Cmd-Ctrl-(Up|Down).
 * Doesn't work with multiple selected lines.
 */
define(function(require) {
  'use strict';

  var Extensions = require('ft/core/extensions').Extensions;

  function toggleTag(editor, direction) {
    var tree = editor.tree(),
        range = editor.selectedRange(),
        nodes = range.nodesInRange(),
        node = nodes[0],
        content = node.line(),
        sibling = (direction == 'down') ? node.nextLineNode() : node.previousLineNode();

    tree.beginUpdates();

    node.setLine(sibling.line());
    sibling.setLine(content);
    editor.setSelectedRange(tree.createRangeFromNodes(sibling, 0));

    tree.endUpdates();
  }

  Extensions.addCommand({
    name: 'Move Down',
    description: 'Toggles the done tag on the current line',
    performCommand: function (editor) {
      toggleTag(editor, 'down');
    }
  });

  Extensions.addCommand({
    name: 'Move Up',
    description: 'Toggles the done tag on the current line',
    performCommand: function (editor) {
      toggleTag(editor, 'up');
    }
  });

  Extensions.addInit(function (editor) {
    editor.addKeyMap({
      'Cmd-Ctrl-Down' : 'Move Down',
      'Cmd-Ctrl-Up'   : 'Move Up',
    });
  });
});
