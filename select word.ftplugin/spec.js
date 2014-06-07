/* global describe,beforeEach,afterEach,it,expect */
define(function (require) {
  'use strict';

  describe('Select Word', function () {
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

    it('should select the current word', function () {
      editor.setTextContent('hello there');
      editor.performCommand('Select Word');
      expect(editor.selectedText()).toEqual('hello');
    });
  });
});
