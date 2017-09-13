'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = highlight;

const _lodash = require('lodash');

const _core = require('lowlight/lib/core');

const _core2 = _interopRequireDefault(_core);

const _css = require('highlight.js/lib/languages/css.js');

const _css2 = _interopRequireDefault(_css);

const _less = require('highlight.js/lib/languages/less.js');

const _less2 = _interopRequireDefault(_less);

const _scss = require('highlight.js/lib/languages/scss.js');

const _scss2 = _interopRequireDefault(_scss);

const _stylus = require('highlight.js/lib/languages/stylus.js');

const _stylus2 = _interopRequireDefault(_stylus);

const _javascript = require('highlight.js/lib/languages/javascript.js');

const _javascript2 = _interopRequireDefault(_javascript);

const _typescript = require('highlight.js/lib/languages/typescript.js');

const _typescript2 = _interopRequireDefault(_typescript);

const _json = require('highlight.js/lib/languages/json.js');

const _json2 = _interopRequireDefault(_json);

const _xml = require('highlight.js/lib/languages/xml.js');

const _xml2 = _interopRequireDefault(_xml);

const _markdown = require('highlight.js/lib/languages/markdown.js');

const _markdown2 = _interopRequireDefault(_markdown);

const _bash = require('highlight.js/lib/languages/bash.js');

const _bash2 = _interopRequireDefault(_bash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CSS and friends
_core2.default.registerLanguage('css', _css2.default);
_core2.default.registerLanguage('less', _less2.default);
_core2.default.registerLanguage('scss', _scss2.default);
_core2.default.registerLanguage('stylus', _stylus2.default);

// JS and friends
_core2.default.registerLanguage('js', _javascript2.default);
_core2.default.registerLanguage('javascript', _javascript2.default);
_core2.default.registerLanguage('jsx', _javascript2.default);
_core2.default.registerLanguage('ts', _typescript2.default);
_core2.default.registerLanguage('tsx', _typescript2.default);
_core2.default.registerLanguage('typescript', _typescript2.default);
_core2.default.registerLanguage('json', _json2.default);

// HTML and friends
_core2.default.registerLanguage('html', _xml2.default);
_core2.default.registerLanguage('xml', _xml2.default);
_core2.default.registerLanguage('md', _markdown2.default);
_core2.default.registerLanguage('markdown', _markdown2.default);

// (s)hell(ish)s
_core2.default.registerLanguage('bash', _bash2.default);
// Low.registerLanguage('shell', bash);

const languages = ['css', 'less', 'scss', 'stylus', 'js', 'javascript', 'jsx', 'ts', 'tsx', 'typescript', 'json', 'html', 'xml', 'md', 'markdown', 'bash'];

function highlight(language, source) {
  if (!(0, _lodash.includes)(languages, language)) {
    return source;
  }

  let _low$highlight = _core2.default.highlight(language, source),
      children = _low$highlight.value;

  return children;
}