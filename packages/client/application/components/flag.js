'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tborder: 1px solid ', ';\n\tborder-radius: 3px;\n\t', '\n'], ['\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tborder: 1px solid ', ';\n\tborder-radius: 3px;\n\t', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTextContent = require('react-addons-text-content');

var _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

var _components = require('@patternplate/components');

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Flag;


function Flag(props) {
	return _react2.default.createElement(
		StyledText,
		{ className: props.className },
		props.children
	);
}

var StyledText = (0, _components.styled)(_text2.default)(_templateObject, function (props) {
	return props.theme.border;
}, function (props) {
	var color = getFlagColor((0, _reactAddonsTextContent2.default)(props.children), props.theme);
	return '\n\t\t\tborder-color: ' + color + ';\n\t\t\tcolor: ' + color + ';\n\t\t';
});

function getFlagColor(flag, theme) {
	switch (flag) {
		case 'alpha':
			return theme.error;
		case 'beta':
			return theme.warning;
		case 'rc':
			return theme.info;
		case 'stable':
			return theme.success;
		case 'deprecated':
			return theme.error;
		default:
			return theme.error;
	}
}