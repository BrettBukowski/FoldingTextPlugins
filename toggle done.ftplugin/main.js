define(function(require) {
  'use strict';

  var Extensions = require('ft/core/extensions').Extensions;

  function toggleTag(editor, tagName, tagValue) {
    var tree = editor.tree(),
        range = editor.selectedRange(),
        addTag;

    tree.beginUpdates();
    range.forEachNodeInRange(function (node) {
      if (addTag === undefined) {
        addTag = (node.tag(tagName) === undefined);
      }

      if (addTag) {
        node.addTag(tagName, tagValue);
      }
      else {
        node.removeTag(tagName);
      }
    });
    tree.endUpdates();
  }

  Extensions.addCommand({
    name: 'Toggle Done',
    description: 'Toggles the done tag on the current line',
    performCommand: function (editor) {
      toggleTag(editor, 'done', new Date().format('isoDate'));
    }
  });

  Extensions.addInit(function (editor) {
    editor.addKeyMap({
      'Cmd-D' : 'Toggle Done'
    });
  });
});
