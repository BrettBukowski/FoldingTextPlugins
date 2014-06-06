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
      editor.performCommand('Select Line');

      expect(editor.selectedText()).toEqual('hello');
      expect(editor.selectedRange().startLine()).toEqual(1);
      expect(editor.selectedRange().endLine()).toEqual(1);
    });
  });
});
