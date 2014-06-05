/* global describe,beforeEach,afterEach,it,expect */
define(function (require) {
  'use strict';

  describe('Toggle Done', function () {
    var Editor = require('ft/editor/editor').Editor,
        editor;

    beforeEach(function () {
      editor = new Editor('');
    });

    afterEach(function () {
      editor.removeAndCleanupForCollection();
    });

    it('should move the current line', function () {
      editor.setTextContent("hello\nthere");
      editor.performCommand('Move Down');
      expect(editor.textContent()).toEqual("there\nhello");
    });
  });
});
