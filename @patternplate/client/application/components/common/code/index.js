'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: block;\n\toverflow-x: auto;\n\tpadding: 0.5em;\n\tcolor: ', ';\n\tfont-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\n\n\t.hljs-comment,\n\t.hljs-quote {\n\t\tcolor: ', ';\n\t\tfont-style: italic;\n\t}\n\n\t.hljs-doctag,\n\t.hljs-keyword,\n\t.hljs-formula {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-section,\n\t.hljs-name,\n\t.hljs-selector-tag,\n\t.hljs-deletion,\n\t.hljs-subst {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-literal {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-string,\n\t.hljs-regexp,\n\t.hljs-addition,\n\t.hljs-attribute,\n\t.hljs-meta-string {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-built_in,\n\t.hljs-class .hljs-title {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-attr,\n\t.hljs-variable,\n\t.hljs-template-variable,\n\t.hljs-type,\n\t.hljs-selector-class,\n\t.hljs-selector-attr,\n\t.hljs-selector-pseudo,\n\t.hljs-number {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-symbol,\n\t.hljs-bullet,\n\t.hljs-link,\n\t.hljs-meta,\n\t.hljs-selector-id,\n\t.hljs-title {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-emphasis {\n\t\tfont-style: italic;\n\t}\n\n\t.hljs-strong {\n\t\tfont-weight: bold;\n\t}\n\n\t.hljs-link {\n\t\ttext-decoration: underline;\n\t}\n'], ['\n\tdisplay: block;\n\toverflow-x: auto;\n\tpadding: 0.5em;\n\tcolor: ', ';\n\tfont-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\n\n\t.hljs-comment,\n\t.hljs-quote {\n\t\tcolor: ', ';\n\t\tfont-style: italic;\n\t}\n\n\t.hljs-doctag,\n\t.hljs-keyword,\n\t.hljs-formula {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-section,\n\t.hljs-name,\n\t.hljs-selector-tag,\n\t.hljs-deletion,\n\t.hljs-subst {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-literal {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-string,\n\t.hljs-regexp,\n\t.hljs-addition,\n\t.hljs-attribute,\n\t.hljs-meta-string {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-built_in,\n\t.hljs-class .hljs-title {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-attr,\n\t.hljs-variable,\n\t.hljs-template-variable,\n\t.hljs-type,\n\t.hljs-selector-class,\n\t.hljs-selector-attr,\n\t.hljs-selector-pseudo,\n\t.hljs-number {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-symbol,\n\t.hljs-bullet,\n\t.hljs-link,\n\t.hljs-meta,\n\t.hljs-selector-id,\n\t.hljs-title {\n\t\tcolor: ', ';\n\t}\n\n\t.hljs-emphasis {\n\t\tfont-style: italic;\n\t}\n\n\t.hljs-strong {\n\t\tfont-weight: bold;\n\t}\n\n\t.hljs-link {\n\t\ttext-decoration: underline;\n\t}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _highlight = require('./highlight');

var _highlight2 = _interopRequireDefault(_highlight);

var _toElements = require('./to-elements');

var _toElements2 = _interopRequireDefault(_toElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Code;


function Code(props) {
	var source = highlightCode(props.language, props.children);

	var code = _react2.default.createElement(
		StyledCode,
		{ className: props.className },
		source
	);

	return props.block ? _react2.default.createElement(
		'pre',
		null,
		code
	) : code;
}

Code.propTypes = {
	className: _react.PropTypes.string,
	language: _react.PropTypes.string,
	children: _react.PropTypes.string.isRequired
};

var themes = {
	dark: {
		mono1: '#abb2bf',
		mono2: '#818896',
		mono3: '#5c6370',
		hue1: '#56b6c2',
		hue2: '#61aeee',
		hue3: '#c678dd',
		hue4: '#98c379',
		hue5: '#e06c75',
		hue52: '#be5046',
		hue6: '#d19a66',
		hue62: '#e6c07b'
	},
	light: {
		mono1: '#383a42',
		mono2: '#686b77',
		mono3: '#a0a1a7',
		hue1: '#0184bb',
		hue2: '#4078f2',
		hue3: '#a626a4',
		hue4: '#50a14f',
		hue5: '#e45649',
		hue52: '#c91243',
		hue6: '#986801',
		hue62: '#c18401'
	}
};

var themed = function themed(key) {
	return function (props) {
		return themes[props.theme.name][key];
	};
};

var StyledCode = _styledComponents2.default.code(_templateObject, themed('mono1'), themed('mono3'), themed('hue3'), themed('hue5'), themed('hue1'), themed('hue4'), themed('hue62'), themed('hue6'), themed('hue2'));

function highlightCode(language) {
	var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	if (!language) {
		return source;
	}
	if (!source) {
		return source;
	}
	var hast = (0, _highlight2.default)(language, source);
	return (0, _toElements2.default)(hast);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9jb2RlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvZGUiLCJwcm9wcyIsInNvdXJjZSIsImhpZ2hsaWdodENvZGUiLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwiY29kZSIsImNsYXNzTmFtZSIsImJsb2NrIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInRoZW1lcyIsImRhcmsiLCJtb25vMSIsIm1vbm8yIiwibW9ubzMiLCJodWUxIiwiaHVlMiIsImh1ZTMiLCJodWU0IiwiaHVlNSIsImh1ZTUyIiwiaHVlNiIsImh1ZTYyIiwibGlnaHQiLCJ0aGVtZWQiLCJ0aGVtZSIsIm5hbWUiLCJrZXkiLCJTdHlsZWRDb2RlIiwiaGFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztrQkFFZUEsSTs7O0FBRWYsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ3BCLEtBQU1DLFNBQVNDLGNBQWNGLE1BQU1HLFFBQXBCLEVBQThCSCxNQUFNSSxRQUFwQyxDQUFmOztBQUVBLEtBQU1DLE9BQ0w7QUFBQyxZQUFEO0FBQUEsSUFBWSxXQUFXTCxNQUFNTSxTQUE3QjtBQUNFTDtBQURGLEVBREQ7O0FBTUEsUUFBT0QsTUFBTU8sS0FBTixHQUFjO0FBQUE7QUFBQTtBQUFNRjtBQUFOLEVBQWQsR0FBa0NBLElBQXpDO0FBQ0E7O0FBRUROLEtBQUtTLFNBQUwsR0FBaUI7QUFDaEJGLFlBQVcsaUJBQUVHLE1BREc7QUFFaEJOLFdBQVUsaUJBQUVNLE1BRkk7QUFHaEJMLFdBQVUsaUJBQUVLLE1BQUYsQ0FBU0M7QUFISCxDQUFqQjs7QUFNQSxJQUFNQyxTQUFTO0FBQ2RDLE9BQU07QUFDTEMsU0FBTyxTQURGO0FBRUxDLFNBQU8sU0FGRjtBQUdMQyxTQUFPLFNBSEY7QUFJTEMsUUFBTSxTQUpEO0FBS0xDLFFBQU0sU0FMRDtBQU1MQyxRQUFNLFNBTkQ7QUFPTEMsUUFBTSxTQVBEO0FBUUxDLFFBQU0sU0FSRDtBQVNMQyxTQUFPLFNBVEY7QUFVTEMsUUFBTSxTQVZEO0FBV0xDLFNBQU87QUFYRixFQURRO0FBY2RDLFFBQU87QUFDTlgsU0FBTyxTQUREO0FBRU5DLFNBQU8sU0FGRDtBQUdOQyxTQUFPLFNBSEQ7QUFJTkMsUUFBTSxTQUpBO0FBS05DLFFBQU0sU0FMQTtBQU1OQyxRQUFNLFNBTkE7QUFPTkMsUUFBTSxTQVBBO0FBUU5DLFFBQU0sU0FSQTtBQVNOQyxTQUFPLFNBVEQ7QUFVTkMsUUFBTSxTQVZBO0FBV05DLFNBQU87QUFYRDtBQWRPLENBQWY7O0FBNkJBLElBQU1FLFNBQVMsU0FBVEEsTUFBUztBQUFBLFFBQU87QUFBQSxTQUFTZCxPQUFPWCxNQUFNMEIsS0FBTixDQUFZQyxJQUFuQixFQUF5QkMsR0FBekIsQ0FBVDtBQUFBLEVBQVA7QUFBQSxDQUFmOztBQUVBLElBQU1DLGFBQWEsMkJBQU94QixJQUFwQixrQkFJSW9CLE9BQU8sT0FBUCxDQUpKLEVBU0tBLE9BQU8sT0FBUCxDQVRMLEVBZ0JLQSxPQUFPLE1BQVAsQ0FoQkwsRUF3QktBLE9BQU8sTUFBUCxDQXhCTCxFQTRCS0EsT0FBTyxNQUFQLENBNUJMLEVBb0NLQSxPQUFPLE1BQVAsQ0FwQ0wsRUF5Q0tBLE9BQU8sT0FBUCxDQXpDTCxFQW9ES0EsT0FBTyxNQUFQLENBcERMLEVBNkRLQSxPQUFPLE1BQVAsQ0E3REwsQ0FBTjs7QUE2RUEsU0FBU3ZCLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQThDO0FBQUEsS0FBYkYsTUFBYSx1RUFBSixFQUFJOztBQUM3QyxLQUFJLENBQUNFLFFBQUwsRUFBZTtBQUNkLFNBQU9GLE1BQVA7QUFDQTtBQUNELEtBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1osU0FBT0EsTUFBUDtBQUNBO0FBQ0QsS0FBTTZCLE9BQU8seUJBQVUzQixRQUFWLEVBQW9CRixNQUFwQixDQUFiO0FBQ0EsUUFBTywwQkFBVzZCLElBQVgsQ0FBUDtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgaGlnaGxpZ2h0IGZyb20gJy4vaGlnaGxpZ2h0JztcbmltcG9ydCB0b0VsZW1lbnRzIGZyb20gJy4vdG8tZWxlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuXG5mdW5jdGlvbiBDb2RlKHByb3BzKSB7XG5cdGNvbnN0IHNvdXJjZSA9IGhpZ2hsaWdodENvZGUocHJvcHMubGFuZ3VhZ2UsIHByb3BzLmNoaWxkcmVuKTtcblxuXHRjb25zdCBjb2RlID0gKFxuXHRcdDxTdHlsZWRDb2RlIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdHtzb3VyY2V9XG5cdFx0PC9TdHlsZWRDb2RlPlxuXHQpO1xuXG5cdHJldHVybiBwcm9wcy5ibG9jayA/IDxwcmU+e2NvZGV9PC9wcmU+IDogY29kZTtcbn1cblxuQ29kZS5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogdC5zdHJpbmcsXG5cdGxhbmd1YWdlOiB0LnN0cmluZyxcblx0Y2hpbGRyZW46IHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IHRoZW1lcyA9IHtcblx0ZGFyazoge1xuXHRcdG1vbm8xOiAnI2FiYjJiZicsXG5cdFx0bW9ubzI6ICcjODE4ODk2Jyxcblx0XHRtb25vMzogJyM1YzYzNzAnLFxuXHRcdGh1ZTE6ICcjNTZiNmMyJyxcblx0XHRodWUyOiAnIzYxYWVlZScsXG5cdFx0aHVlMzogJyNjNjc4ZGQnLFxuXHRcdGh1ZTQ6ICcjOThjMzc5Jyxcblx0XHRodWU1OiAnI2UwNmM3NScsXG5cdFx0aHVlNTI6ICcjYmU1MDQ2Jyxcblx0XHRodWU2OiAnI2QxOWE2NicsXG5cdFx0aHVlNjI6ICcjZTZjMDdiJ1xuXHR9LFxuXHRsaWdodDoge1xuXHRcdG1vbm8xOiAnIzM4M2E0MicsXG5cdFx0bW9ubzI6ICcjNjg2Yjc3Jyxcblx0XHRtb25vMzogJyNhMGExYTcnLFxuXHRcdGh1ZTE6ICcjMDE4NGJiJyxcblx0XHRodWUyOiAnIzQwNzhmMicsXG5cdFx0aHVlMzogJyNhNjI2YTQnLFxuXHRcdGh1ZTQ6ICcjNTBhMTRmJyxcblx0XHRodWU1OiAnI2U0NTY0OScsXG5cdFx0aHVlNTI6ICcjYzkxMjQzJyxcblx0XHRodWU2OiAnIzk4NjgwMScsXG5cdFx0aHVlNjI6ICcjYzE4NDAxJ1xuXHR9XG59O1xuXG5jb25zdCB0aGVtZWQgPSBrZXkgPT4gcHJvcHMgPT4gdGhlbWVzW3Byb3BzLnRoZW1lLm5hbWVdW2tleV07XG5cbmNvbnN0IFN0eWxlZENvZGUgPSBzdHlsZWQuY29kZWBcblx0ZGlzcGxheTogYmxvY2s7XG5cdG92ZXJmbG93LXg6IGF1dG87XG5cdHBhZGRpbmc6IDAuNWVtO1xuXHRjb2xvcjogJHt0aGVtZWQoJ21vbm8xJyl9O1xuXHRmb250LWZhbWlseTogXCJTRk1vbm8tUmVndWxhclwiLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZTtcblxuXHQuaGxqcy1jb21tZW50LFxuXHQuaGxqcy1xdW90ZSB7XG5cdFx0Y29sb3I6ICR7dGhlbWVkKCdtb25vMycpfTtcblx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdH1cblxuXHQuaGxqcy1kb2N0YWcsXG5cdC5obGpzLWtleXdvcmQsXG5cdC5obGpzLWZvcm11bGEge1xuXHRcdGNvbG9yOiAke3RoZW1lZCgnaHVlMycpfTtcblx0fVxuXG5cdC5obGpzLXNlY3Rpb24sXG5cdC5obGpzLW5hbWUsXG5cdC5obGpzLXNlbGVjdG9yLXRhZyxcblx0LmhsanMtZGVsZXRpb24sXG5cdC5obGpzLXN1YnN0IHtcblx0XHRjb2xvcjogJHt0aGVtZWQoJ2h1ZTUnKX07XG5cdH1cblxuXHQuaGxqcy1saXRlcmFsIHtcblx0XHRjb2xvcjogJHt0aGVtZWQoJ2h1ZTEnKX07XG5cdH1cblxuXHQuaGxqcy1zdHJpbmcsXG5cdC5obGpzLXJlZ2V4cCxcblx0LmhsanMtYWRkaXRpb24sXG5cdC5obGpzLWF0dHJpYnV0ZSxcblx0LmhsanMtbWV0YS1zdHJpbmcge1xuXHRcdGNvbG9yOiAke3RoZW1lZCgnaHVlNCcpfTtcblx0fVxuXG5cdC5obGpzLWJ1aWx0X2luLFxuXHQuaGxqcy1jbGFzcyAuaGxqcy10aXRsZSB7XG5cdFx0Y29sb3I6ICR7dGhlbWVkKCdodWU2MicpfTtcblx0fVxuXG5cdC5obGpzLWF0dHIsXG5cdC5obGpzLXZhcmlhYmxlLFxuXHQuaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcblx0LmhsanMtdHlwZSxcblx0LmhsanMtc2VsZWN0b3ItY2xhc3MsXG5cdC5obGpzLXNlbGVjdG9yLWF0dHIsXG5cdC5obGpzLXNlbGVjdG9yLXBzZXVkbyxcblx0LmhsanMtbnVtYmVyIHtcblx0XHRjb2xvcjogJHt0aGVtZWQoJ2h1ZTYnKX07XG5cdH1cblxuXHQuaGxqcy1zeW1ib2wsXG5cdC5obGpzLWJ1bGxldCxcblx0LmhsanMtbGluayxcblx0LmhsanMtbWV0YSxcblx0LmhsanMtc2VsZWN0b3ItaWQsXG5cdC5obGpzLXRpdGxlIHtcblx0XHRjb2xvcjogJHt0aGVtZWQoJ2h1ZTInKX07XG5cdH1cblxuXHQuaGxqcy1lbXBoYXNpcyB7XG5cdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHR9XG5cblx0LmhsanMtc3Ryb25nIHtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0fVxuXG5cdC5obGpzLWxpbmsge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHR9XG5gO1xuXG5mdW5jdGlvbiBoaWdobGlnaHRDb2RlKGxhbmd1YWdlLCBzb3VyY2UgPSAnJykge1xuXHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0cmV0dXJuIHNvdXJjZTtcblx0fVxuXHRpZiAoIXNvdXJjZSkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblx0Y29uc3QgaGFzdCA9IGhpZ2hsaWdodChsYW5ndWFnZSwgc291cmNlKTtcblx0cmV0dXJuIHRvRWxlbWVudHMoaGFzdCk7XG59XG4iXX0=