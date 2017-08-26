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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9jb2RlL2hpZ2hsaWdodC5qcyJdLCJuYW1lcyI6WyJoaWdobGlnaHQiLCJyZWdpc3Rlckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJzb3VyY2UiLCJjaGlsZHJlbiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkErQ3dCQSxTOztBQS9DeEI7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFDQSxlQUFJQyxnQkFBSixDQUFxQixLQUFyQjtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLE1BQXJCO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsTUFBckI7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixRQUFyQjs7QUFFQTtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLElBQXJCO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsWUFBckI7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixLQUFyQjtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLElBQXJCO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsS0FBckI7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixZQUFyQjtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLE1BQXJCOztBQUVBO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsTUFBckI7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixLQUFyQjtBQUNBLGVBQUlBLGdCQUFKLENBQXFCLElBQXJCO0FBQ0EsZUFBSUEsZ0JBQUosQ0FBcUIsVUFBckI7O0FBRUE7QUFDQSxlQUFJQSxnQkFBSixDQUFxQixNQUFyQjtBQUNBOztBQUVBLElBQU1DLFlBQVksQ0FDakIsS0FEaUIsRUFDVixNQURVLEVBQ0YsTUFERSxFQUNNLFFBRE4sRUFDZ0IsSUFEaEIsRUFDc0IsWUFEdEIsRUFDb0MsS0FEcEMsRUFDMkMsSUFEM0MsRUFDaUQsS0FEakQsRUFFakIsWUFGaUIsRUFFSCxNQUZHLEVBRUssTUFGTCxFQUVhLEtBRmIsRUFFb0IsSUFGcEIsRUFFMEIsVUFGMUIsRUFFc0MsTUFGdEMsQ0FBbEI7O0FBS2UsU0FBU0YsU0FBVCxDQUFtQkcsUUFBbkIsRUFBNkJDLE1BQTdCLEVBQXFDO0FBQ25ELEtBQUksQ0FBQyxzQkFBU0YsU0FBVCxFQUFvQkMsUUFBcEIsQ0FBTCxFQUFvQztBQUNuQyxTQUFPQyxNQUFQO0FBQ0E7O0FBSGtELHNCQUl6QixlQUFJSixTQUFKLENBQWNHLFFBQWQsRUFBd0JDLE1BQXhCLENBSnlCO0FBQUEsS0FJckNDLFFBSnFDLGtCQUk1Q0MsS0FKNEM7O0FBS25ELFFBQU9ELFFBQVA7QUFDQSIsImZpbGUiOiJoaWdobGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luY2x1ZGVzfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGxvdyBmcm9tICdsb3dsaWdodC9saWIvY29yZSc7XG5cbmltcG9ydCBjc3MgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzLmpzJztcbmltcG9ydCBsZXNzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xlc3MuanMnO1xuaW1wb3J0IHNjc3MgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2Nzcy5qcyc7XG5pbXBvcnQgc3R5bHVzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N0eWx1cy5qcyc7XG5cbmltcG9ydCBqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0LmpzJztcbmltcG9ydCB0cyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy90eXBlc2NyaXB0LmpzJztcbmltcG9ydCBqc29uIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2pzb24uanMnO1xuXG5pbXBvcnQgeG1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbC5qcyc7XG5pbXBvcnQgbWQgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWFya2Rvd24uanMnO1xuXG5pbXBvcnQgYmFzaCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9iYXNoLmpzJztcblxuLy8gQ1NTIGFuZCBmcmllbmRzXG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnY3NzJywgY3NzKTtcbmxvdy5yZWdpc3Rlckxhbmd1YWdlKCdsZXNzJywgbGVzcyk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnc2NzcycsIHNjc3MpO1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3N0eWx1cycsIHN0eWx1cyk7XG5cbi8vIEpTIGFuZCBmcmllbmRzXG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnanMnLCBqcyk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIGpzKTtcbmxvdy5yZWdpc3Rlckxhbmd1YWdlKCdqc3gnLCBqcyk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgndHMnLCB0cyk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgndHN4JywgdHMpO1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ3R5cGVzY3JpcHQnLCB0cyk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnanNvbicsIGpzb24pO1xuXG4vLyBIVE1MIGFuZCBmcmllbmRzXG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgnaHRtbCcsIHhtbCk7XG5sb3cucmVnaXN0ZXJMYW5ndWFnZSgneG1sJywgeG1sKTtcbmxvdy5yZWdpc3Rlckxhbmd1YWdlKCdtZCcsIG1kKTtcbmxvdy5yZWdpc3Rlckxhbmd1YWdlKCdtYXJrZG93bicsIG1kKTtcblxuLy8gKHMpaGVsbChpc2gpc1xubG93LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2Jhc2gnLCBiYXNoKTtcbi8vIGxvdy5yZWdpc3Rlckxhbmd1YWdlKCdzaGVsbCcsIGJhc2gpO1xuXG5jb25zdCBsYW5ndWFnZXMgPSBbXG5cdCdjc3MnLCAnbGVzcycsICdzY3NzJywgJ3N0eWx1cycsICdqcycsICdqYXZhc2NyaXB0JywgJ2pzeCcsICd0cycsICd0c3gnLFxuXHQndHlwZXNjcmlwdCcsICdqc29uJywgJ2h0bWwnLCAneG1sJywgJ21kJywgJ21hcmtkb3duJywgJ2Jhc2gnXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWdobGlnaHQobGFuZ3VhZ2UsIHNvdXJjZSkge1xuXHRpZiAoIWluY2x1ZGVzKGxhbmd1YWdlcywgbGFuZ3VhZ2UpKSB7XG5cdFx0cmV0dXJuIHNvdXJjZTtcblx0fVxuXHRjb25zdCB7dmFsdWU6IGNoaWxkcmVufSA9IGxvdy5oaWdobGlnaHQobGFuZ3VhZ2UsIHNvdXJjZSk7XG5cdHJldHVybiBjaGlsZHJlbjtcbn1cbiJdfQ==