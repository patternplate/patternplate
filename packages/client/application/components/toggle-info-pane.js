'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _templateObject = _taggedTemplateLiteral(['fill: ', ';'], ['fill: ', ';']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 0;\n  line-height: 0;\n'], ['\n  font-size: 0;\n  line-height: 0;\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _toggleButton = require('./common/toggle-button');

const _toggleButton2 = _interopRequireDefault(_toggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Info;


function Info(props) {
  return _react2.default.createElement(
    StyledToggleButton,
    { enabled: props.enabled, shortcut: props.shortcut },
    _react2.default.createElement(StyledIcon, { symbol: 'info' }),
    ' ',
    props.shortcut.toString()
  );
}

var StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject, (props) => {
  return props.theme.background;
});

var StyledToggleButton = (0, _components.styled)(_toggleButton2.default)(_templateObject2);