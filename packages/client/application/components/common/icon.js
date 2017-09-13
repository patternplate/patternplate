'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  width: ', 'px;\n  height: ', 'px;\n  justify-content: center;\n  align-items: center;\n'], ['\n  display: flex;\n  width: ', 'px;\n  height: ', 'px;\n  justify-content: center;\n  align-items: center;\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const SIZES = {
  s: 15,
  m: 30,
  l: 50
};

exports.default = Icon;


function Icon(props) {
  return _react2.default.createElement(
    StyledIcon,
    { className: props.className, size: props.size },
    _react2.default.createElement('use', { xlinkHref: '#' + (props.symbol || 'placeholder') })
  );
}

Icon.defaultProps = {
  size: 'm',
  symbol: 'placeholder'
};

var StyledIcon = _components.styled.svg(_templateObject, (props) => {
  return SIZES[props.size];
}, (props) => {
  return SIZES[props.size];
});