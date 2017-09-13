'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: 7.5px;\n  width: 7.5px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background: ', ';\n  transition: background 0.4s ease-in-out, opacity 0.5s ease-in;\n  opacity: ', ';\n  cursor: ', ';\n  ', ';\n'], ['\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: 7.5px;\n  width: 7.5px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background: ', ';\n  transition: background 0.4s ease-in-out, opacity 0.5s ease-in;\n  opacity: ', ';\n  cursor: ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n'], ['\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 20px;\n  color: ', ';\n  ', ';\n'], ['\n  position: absolute;\n  right: 20px;\n  color: ', ';\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tto {\n\t\topacity: 0;\n\t}\n'], ['\n\tto {\n\t\topacity: 0;\n\t}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    animation: ', ' 1s 0.15s;\n    animation-fill-mode: forwards;\n  '], ['\n    animation: ', ' 1s 0.15s;\n    animation-fill-mode: forwards;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  from {\n    opacity: .6;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(.75);\n  }\n  to {\n    opacity: .6;\n    transform: translate(-50%, -50%) scale(1);\n  }\n'], ['\n  from {\n    opacity: .6;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(.75);\n  }\n  to {\n    opacity: .6;\n    transform: translate(-50%, -50%) scale(1);\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    animation: ', ' 1s infinite;\n  '], ['\n    animation: ', ' 1s infinite;\n  ']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _text = require('./text');

const _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Indicator;


function Indicator(props) {
  return _react2.default.createElement(
    StyledIndicator,
    {
      onClick: props.onClick,
      title: isValid(props.status) ? 'Force sync ' + props.shortcut.toString() : ''
    },
    _react2.default.createElement(
      StyledLabel,
      { size: 's', status: props.status },
      getLabel(props)
    ),
    _react2.default.createElement(StyledDot, { status: props.status })
  );
}

var StyledDot = _components.styled.div(_templateObject, (props) => {
  return props.status === 'error' ? 'rgb(205, 63, 69)' : props.theme.active;
}, (props) => {
  return props.status ? 1 : 0;
}, (props) => {
  return props.status ? 'pointer' : '';
}, (props) => {
  return getGlow(props);
});

var StyledIndicator = _components.styled.div(_templateObject2);

var StyledLabel = (0, _components.styled)(_text2.default)(_templateObject3, (props) => {
  return props.theme.color;
}, (props) => {
  return getOut(props);
});

function getGlow(props) {
  return '\n\t\t&::before {\n\t\t\tcontent: \'\';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\theight: 12px;\n\t\t\twidth: 12px;\n\t\t\tfilter: blur(3px);\n\t\t\tbackground: inherit;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\topacity: .6;\n\t\t\t' + getPulse(props) + ';\n\t\t}\n\t';
}

const out = (0, _components.keyframes)(_templateObject4);

function getOut(props) {
  if (props.status !== 'loaded') {
    return;
  }

  return (0, _components.css)(_templateObject5, out);
}

function getLabel(props) {
  switch (props.status) {
    case 'error':
      return 'offline';
    case 'loaded':
      return 'synced';
    case 'loading':
      return 'syncing';
    default:
      return '';
  }
}

const pulse = (0, _components.keyframes)(_templateObject6);

function getPulse(props) {
  if (props.status !== 'loading') {
    return;
  }

  return (0, _components.css)(_templateObject7, pulse);
}

function isValid(status) {
  return ['loading', 'loaded'].includes(status);
}