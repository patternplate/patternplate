'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 20px;\n'], ['\n  background: ', ';\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['color: #fff;'], ['color: #fff;']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Message;


function Message(props) {
  return _react2.default.createElement(
    StyledMessage,
    null,
    _react2.default.createElement(
      StyledMessageContent,
      null,
      props.message
    )
  );
}

var StyledMessage = _components.styled.div(_templateObject, (props) => {
  return props.theme.error;
});

var StyledMessageContent = _components.styled.pre(_templateObject2);