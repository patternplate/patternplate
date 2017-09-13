'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 0;\n  line-height: 0;\n  cursor: ', ';\n'], ['\n  font-size: 0;\n  line-height: 0;\n  cursor: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _toggleButton = require('./common/toggle-button');

var _toggleButton2 = _interopRequireDefault(_toggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = ToggleDoc;


function ToggleDoc(props) {
  return _react2.default.createElement(
    StyledToggleButton,
    {
      active: props.active,
      enabled: props.enabled,
      shortcut: props.shortcut,
      title: title(props)
    },
    _react2.default.createElement(StyledIcon, {
      active: props.active,
      enabled: props.enabled,
      symbol: 'doc'
    }),
    props.shortcut.toString()
  );
}

function title(props) {
  return props.active ? null : 'No documentation available.';
}

var CURSOR = function CURSOR(props) {
  return props.active ? 'pointer' : 'not-allowed';
};

var COLOR = function COLOR(props) {
  if (props.active) {
    return props.enabled ? props.theme.active : props.theme.color;
  }
  return props.theme.border;
};

var StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject, COLOR);

var StyledToggleButton = (0, _components.styled)(_toggleButton2.default)(_templateObject2, CURSOR);