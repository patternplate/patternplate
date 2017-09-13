'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['\n  font-size: 0;\n  line-height: 0;\n'], ['\n  font-size: 0;\n  line-height: 0;\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _link = require('./link');

const _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = ToggleButton;


function ToggleButton(props) {
  const title = props.title || props.shortcut.description(props) + ' ' + props.shortcut.toString();

  if (props.active === false) {
    return _react2.default.createElement(
      StandIn,
      { className: props.className, title },
      props.children
    );
  }

  return _react2.default.createElement(
    _link2.default,
    {
      className: props.className,
      title,
      query: _defineProperty({}, props.shortcut.key, !props.enabled)
    },
    props.children
  );
}

var StandIn = _components.styled.div(_templateObject);