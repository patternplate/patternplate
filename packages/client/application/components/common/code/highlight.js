'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = highlight;

var _lodash = require('lodash');

var _core = require('lowlight/lib/core');

var _core2 = _interopRequireDefault(_core);

var _css = require('highlight.js/lib/languages/css.js');

var _css2 = _interopRequireDefault(_css);

var _less = require('highlight.js/lib/languages/less.js');

var _less2 = _interopRequireDefault(_less);

var _scss = require('highlight.js/lib/languages/scss.js');

var _scss2 = _interopRequireDefault(_scss);

var _stylus = require('highlight.js/lib/languages/stylus.js');

var _stylus2 = _interopRequireDefault(_stylus);

var _javascript = require('highlight.js/lib/languages/javascript.js');

var _javascript2 = _interopRequireDefault(_javascript);

var _typescript = require('highlight.js/lib/languages/typescript.js');

var _typescript2 = _interopRequireDefault(_typescript);

var _json = require('highlight.js/lib/languages/json.js');

var _json2 = _interopRequireDefault(_json);

var _xml = require('highlight.js/lib/languages/xml.js');

var _xml2 = _interopRequireDefault(_xml);

var _markdown = require('highlight.js/lib/languages/markdown.js');

var _markdown2 = _interopRequireDefault(_markdown);

var _bash = require('highlight.js/lib/languages/bash.js');

var _bash2 = _interopRequireDefault(_bash);

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
// low.registerLanguage('shell', bash);

var languages = ['css', 'less', 'scss', 'stylus', 'js', 'javascript', 'jsx', 'ts', 'tsx', 'typescript', 'json', 'html', 'xml', 'md', 'markdown', 'bash'];

function highlight(language, source) {
	if (!(0, _lodash.includes)(languages, language)) {
		return source;
	}

	var _low$highlight = _core2.default.highlight(language, source),
	    children = _low$highlight.value;

	return children;
}