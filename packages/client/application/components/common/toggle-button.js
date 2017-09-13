'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tfont-size: 0;\n\tline-height: 0;\n'], ['\n\tfont-size: 0;\n\tline-height: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = ToggleButton;


function ToggleButton(props) {
  var title = props.title || props.shortcut.description(props) + ' ' + props.shortcut.toString();

  if (props.active === false) {
    return _react2.default.createElement(
      StandIn,
      { className: props.className, title: title },
      props.children
    );
  }

  return _react2.default.createElement(
    _link2.default,
    {
      className: props.className,
      title: title,
      query: _defineProperty({}, props.shortcut.key, !props.enabled)
    },
    props.children
  );
}

var StandIn = _components.styled.div(_templateObject);