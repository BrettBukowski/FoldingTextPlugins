/* global describe,beforeEach,afterEach,it,expect */
define(function (require) {
  'use strict';

  describe('Toggle Done', function () {
    var Taxonomies = require('ft/core/taxonomies'),
      Editor = require('ft/editor/editor').Editor,
      taxonomy = Taxonomies.taxonomy({
        foldingtext: true,
        multimarkdown: true,
        gitmarkdown: true,
        criticMarkup: true
      }, 'markdown'),
      editor;

    beforeEach(function () {
      editor = new Editor('', taxonomy);
    });

    afterEach(function () {
      editor.removeAndCleanupForCollection();
    });

    it('should toggle the done tag', function () {
      editor.setTextContent('hello');
      editor.performCommand('Toggle Done');
      expect(editor.textContent()).toMatch(/hello @done\([0-9]{4}\-[0-9]{2}\-[0-9]{2}\)/);
      editor.performCommand('Toggle Done');
      expect(editor.textContent()).toEqual('hello');
    });
  });
});
