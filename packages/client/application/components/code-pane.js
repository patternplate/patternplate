'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\t&::before {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-radius: ', ';\n\t\tbackground: ', ';\n\t}\n'], ['\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\t&::before {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-radius: ', ';\n\t\tbackground: ', ';\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 2;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n'], ['\n\tposition: relative;\n\tz-index: 2;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _code = require('./common/code');

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = CodePane;


function CodePane(props) {
	return _react2.default.createElement(
		StyledCodePane,
		{ className: props.className, hermit: props.hermit },
		_react2.default.createElement(
			StyledScrollbox,
			null,
			_react2.default.createElement(
				_code2.default,
				{ block: true, language: 'html' },
				props.source
			)
		)
	);
}

var BORDER_RADIUS = 10;

var StyledCodePane = _components.styled.div(_templateObject, function (props) {
	return props.hermit ? BORDER_RADIUS + 'px' : '0 ' + BORDER_RADIUS + 'px ' + BORDER_RADIUS + 'px 0';
}, function (props) {
	return props.theme.background;
});

var StyledScrollbox = _components.styled.div(_templateObject2);