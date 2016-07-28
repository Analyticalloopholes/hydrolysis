/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

"use strict";

const assert = require('chai').assert;
const fs = require('fs');
const path = require('path');

const CssParser = require('../../lib/css/css-parser').CssParser;
const CssDocument = require('../../lib/css/css-document').CssDocument;

suite('CssParser', () => {

  suite('parse()', () => {
    let parser;

    setup(() => {
      parser = new CssParser({
        findImports(url, document) {
          return [];
        },
        parse(type, content, url) {
          return null;
        },
      });
    });

    test('parses css', () => {
      let file = fs.readFileSync(
          path.resolve(__dirname, '../static/stylesheet.css'), 'utf8');
      let document = parser.parse(file, '/static/stylesheet.css');
      assert.instanceOf(document, CssDocument);
      assert.equal(document.url, '/static/stylesheet.css');
      assert(document.ast != null);
    });

    test.skip('throws syntax errors', () => {
    });

  });

});