'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _templateObject = _taggedTemplateLiteral(['fill: ', ';'], ['fill: ', ';']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 0;\n  line-height: 0;\n'], ['\n  font-size: 0;\n  line-height: 0;\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _link = require('./common/link');

const _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Fullscreen;


function Fullscreen(props) {
  return _react2.default.createElement(
    StyledLink,
    {
      external: true,
      title: 'Open pattern demo for "' + props.id + '" in a new tab',
      href: props.href
    },
    _react2.default.createElement(StyledIcon, { symbol: 'fullscreen' }),
    'Open pattern demo for "$',
    props.id,
    '" in a new tab'
  );
}

var StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject, (props) => {
  return props.theme.background;
});

var StyledLink = (0, _components.styled)(_link2.default)(_templateObject2);