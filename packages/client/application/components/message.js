'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tbackground: ', ';\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 10px 20px;\n'], ['\n\tbackground: ', ';\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 10px 20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tcolor: #fff;\n'], ['\n\tcolor: #fff;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Message;


function Message(props) {
	return _react2.default.createElement(
		StyledMessage,
		null,
		_react2.default.createElement(
			StyledMessageContent,
			null,
			props.message
		)
	);
}

var StyledMessage = _components.styled.div(_templateObject, function (props) {
	return props.theme.error;
});

var StyledMessageContent = _components.styled.pre(_templateObject2);