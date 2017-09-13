'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['display: none;'], ['display: none;']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _server = require('react-dom/server');

const _components = require('@patternplate/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/no-danger */


exports.default = layout;


function layout(props) {
  return '<!doctype html>' + (0, _server.renderToStaticMarkup)(_react2.default.createElement(Layout, props));
}

function Layout(props) {
  const attributes = props.attributes.toComponent();
  return _react2.default.createElement(
    'html',
    attributes,
    _react2.default.createElement(
      'head',
      null,
      props.title.toComponent(),
      props.meta.toComponent(),
      props.link.toComponent(),
      props.style.toComponent(),
      props.css
    ),
    _react2.default.createElement(
      'body',
      { 'data-base': props.base },
      _react2.default.createElement(
        IconRegistry,
        null,
        props.icons
      ),
      _react2.default.createElement(Content, { content: props.html }),
      _react2.default.createElement(State, { data: props.data }),
      _react2.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,Array.prototype.includes' }),
      props.scripts.map((src) => {
        return _react2.default.createElement('script', { key: src, src });
      })
    )
  );
}

function IconRegistry(props) {
  return _react2.default.createElement(
    'div',
    { 'data-icon-registry': true, style: { display: 'none' } },
    props.children
  );
}

function Content(props) {
  return _react2.default.createElement('div', { 'data-application': true, dangerouslySetInnerHTML: { __html: props.content } });
}

function State(props) {
  const value = JSON.stringify(props.data);
  return _react2.default.createElement(StyledState, { 'data-application-state': true, value, readOnly: true });
}

var StyledState = _components.styled.textarea(_templateObject);