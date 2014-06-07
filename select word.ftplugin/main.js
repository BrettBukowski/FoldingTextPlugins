/**
 * Selects the current word with Alt-W.
 */
define(function(require) {
  'use strict';

  var Extensions = require('ft/core/extensions').Extensions;

  Extensions.addCommand({
    name: 'Select Word',
    description: 'Selects the current word with Alt-W',
    performCommand: function (editor) {
      var cursorRange = editor.cursorRange(),
          node = editor.selectedRange().startNode,
          content = node.line(),
          start = content.lastIndexOf(' ', cursorRange.startOffset - 1) + 1,
          end = content.indexOf(' ', cursorRange.endOffset),
          newRange;

      if (end == -1) end = content.length;

      newRange = editor.tree().createRangeFromNodes(node, start, node, end);

      editor.setSelectedRange(newRange);
    }
  });

  Extensions.addInit(function (editor) {
    editor.addKeyMap({
      'Alt-W' : 'Select Word'
    });
  });
});
