'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tposition: relative;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\theight: 7.5px;\n\twidth: 7.5px;\n\tmargin-right: 5px;\n\tborder-radius: 50%;\n\tbackground: ', ';\n\ttransition: background .4s ease-in-out, opacity .5s ease-in;\n\topacity: ', ';\n\tcursor: ', ';\n\t', '\n'], ['\n\tposition: relative;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\theight: 7.5px;\n\twidth: 7.5px;\n\tmargin-right: 5px;\n\tborder-radius: 50%;\n\tbackground: ', ';\n\ttransition: background .4s ease-in-out, opacity .5s ease-in;\n\topacity: ', ';\n\tcursor: ', ';\n\t', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n\tposition: relative;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n\tposition: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tposition: absolute;\n\tright: 20px;\n\tcolor: ', ';\n\t', '\n'], ['\n\tposition: absolute;\n\tright: 20px;\n\tcolor: ', ';\n\t', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tto {\n\t\topacity: 0;\n\t}\n'], ['\n\tto {\n\t\topacity: 0;\n\t}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t\tanimation: ', ' 1s .15s;\n\t\tanimation-fill-mode: forwards;\n\t'], ['\n\t\tanimation: ', ' 1s .15s;\n\t\tanimation-fill-mode: forwards;\n\t']),
    _templateObject6 = _taggedTemplateLiteral(['\n  from {\n    opacity: .6;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(.75);\n  }\n  to {\n    opacity: .6;\n    transform: translate(-50%, -50%) scale(1);\n  }\n'], ['\n  from {\n    opacity: .6;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(.75);\n  }\n  to {\n    opacity: .6;\n    transform: translate(-50%, -50%) scale(1);\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['animation: ', ' 1s infinite;'], ['animation: ', ' 1s infinite;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Indicator;


function Indicator(props) {
	return _react2.default.createElement(
		StyledIndicator,
		{
			onClick: props.onClick,
			title: isValid(props.status) ? 'Force sync ' + props.shortcut.toString() : ''
		},
		_react2.default.createElement(
			StyledLabel,
			{ size: 's', status: props.status },
			getLabel(props)
		),
		_react2.default.createElement(StyledDot, { status: props.status })
	);
}

var StyledDot = _components.styled.div(_templateObject, function (props) {
	return props.status === 'error' ? 'rgb(205, 63, 69)' : props.theme.active;
}, function (props) {
	return props.status ? 1 : 0;
}, function (props) {
	return props.status ? 'pointer' : '';
}, function (props) {
	return getGlow(props);
});

var StyledIndicator = _components.styled.div(_templateObject2);

var StyledLabel = (0, _components.styled)(_text2.default)(_templateObject3, function (props) {
	return props.theme.color;
}, function (props) {
	return getOut(props);
});

function getGlow(props) {
	return '\n\t\t&::before {\n\t\t\tcontent: \'\';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\theight: 12px;\n\t\t\twidth: 12px;\n\t\t\tfilter: blur(3px);\n\t\t\tbackground: inherit;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\topacity: .6;\n\t\t\t' + getPulse(props) + ';\n\t\t}\n\t';
}

var out = (0, _components.keyframes)(_templateObject4);

function getOut(props) {
	if (props.status !== 'loaded') {
		return;
	}

	return (0, _components.css)(_templateObject5, out);
}

function getLabel(props) {
	switch (props.status) {
		case 'error':
			return 'offline';
		case 'loaded':
			return 'synced';
		case 'loading':
			return 'syncing';
		default:
			return '';
	}
}

var pulse = (0, _components.keyframes)(_templateObject6);

function getPulse(props) {
	if (props.status !== 'loading') {
		return;
	}

	return (0, _components.css)(_templateObject7, pulse);
}

function isValid(status) {
	return ['loading', 'loaded'].includes(status);
}