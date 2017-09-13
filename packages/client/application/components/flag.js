'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding: 2px 4px;\n  border: 1px solid ', ';\n  border-radius: 3px;\n  ', ';\n'], ['\n  display: inline-block;\n  padding: 2px 4px;\n  border: 1px solid ', ';\n  border-radius: 3px;\n  ', ';\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _reactAddonsTextContent = require('react-addons-text-content');

const _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

const _components = require('@patternplate/components');

const _text = require('./text');

const _text2 = _interopRequireDefault(_text);

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

var StyledText = (0, _components.styled)(_text2.default)(_templateObject, (props) => {
  return props.theme.border;
}, (props) => {
  const color = getFlagColor((0, _reactAddonsTextContent2.default)(props.children), props.theme);
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