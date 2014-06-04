/**
 * Turns on CodeMirror's activeline addon.
 * CodeMirror then adds a `CodeMirror-activeline-background` class
 * to the current line. This can then be styled in user.less:
 *
 *    .CodeMirror-activeline-background {
 *        background: lighten(@paperColor, 5%);
 *    }
 *
 * @{@link http://codemirror.net/doc/manual.html#addons}
 */
define(function(require) {
  'use strict';

  var Extensions = require('ft/core/extensions').Extensions;

  Extensions.addInit(function (editor) {
    editor.cm().setOption('styleActiveLine', true);
  });
});
