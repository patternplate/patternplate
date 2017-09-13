'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\t&::before {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-radius: ', ';\n\t\tbackground: ', ';\n\t}\n'], ['\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\t&::before {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-radius: ', ';\n\t\tbackground: ', ';\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 2;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n\tpadding: 10px 15px;\n'], ['\n\tposition: relative;\n\tz-index: 2;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n\tpadding: 10px 15px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _markdown = require('./common/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = DocPane;


function DocPane(props) {
	return _react2.default.createElement(
		StyledDocPane,
		{ className: props.className, hermit: props.hermit },
		_react2.default.createElement(
			StyledScrollbox,
			null,
			_react2.default.createElement(_markdown2.default, { source: props.doc, linkable: false })
		)
	);
}

var BORDER_RADIUS = 10;

var StyledDocPane = _components.styled.div(_templateObject, function (props) {
	return props.hermit ? BORDER_RADIUS + 'px' : '0 ' + BORDER_RADIUS + 'px ' + BORDER_RADIUS + 'px 0';
}, function (props) {
	return props.theme.background;
});

var StyledScrollbox = _components.styled.div(_templateObject2);