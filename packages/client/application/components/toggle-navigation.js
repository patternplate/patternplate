'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 0;\n  line-height: 0;\n'], ['\n  font-size: 0;\n  line-height: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _toggleButton = require('./common/toggle-button');

var _toggleButton2 = _interopRequireDefault(_toggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Hamburger;


function Hamburger(props) {
  return _react2.default.createElement(
    StyledToggleButton,
    { enabled: props.enabled, shortcut: props.shortcut },
    _react2.default.createElement(StyledIcon, { symbol: 'hamburger' }),
    ' ',
    props.shortcut.toString()
  );
}

var StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject, function (props) {
  return props.theme.background;
});

var StyledToggleButton = (0, _components.styled)(_toggleButton2.default)(_templateObject2);