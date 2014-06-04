/* global describe, beforeEach,it,afterEach,it,expect */
define(function (require) {
  'use strict';

  describe('Active Line', function () {
    var Editor = require('ft/editor/editor').Editor,
        editor;

    beforeEach(function () {
      editor = new Editor('');
    });

    afterEach(function () {
      editor.removeAndCleanupForCollection();
    });

    it("should turn on CodeMirror's styleActiveLine option", function () {
      expect(editor.cm().getOption('styleActiveLine')).toBe(true);
    });
  });
});
