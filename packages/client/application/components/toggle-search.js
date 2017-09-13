'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _templateObject = _taggedTemplateLiteral(['fill: ', ';'], ['fill: ', ';']),
    _templateObject2 = _taggedTemplateLiteral(['font-size: 0;'], ['font-size: 0;']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _link = require('./common/link');

const _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = SearchButton;


function SearchButton(props) {
  return _react2.default.createElement(
    StyledLink,
    {
      title: 'Enable search ' + props.shortcut.toString(),
      query: { 'search-enabled': !props.enabled }
    },
    _react2.default.createElement(StyledIcon, { base: props.base, symbol: 'search' }),
    'Search'
  );
}

var StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject, (props) => {
  return props.theme.color;
});

var StyledLink = (0, _components.styled)(_link2.default)(_templateObject2);