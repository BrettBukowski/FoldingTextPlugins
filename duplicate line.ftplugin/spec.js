/* global describe,beforeEach,afterEach,it,expect */
define(function (require) {
  'use strict';

  describe('Duplicate Line', function () {
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

    it('should duplicate the current line', function () {
      editor.setTextContent('hello there');
      editor.performCommand('Duplicate Line');
      expect(editor.textContent()).toEqual('hello there\nhello there');
    });
  });
});
