'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (location, data) {
  const sheet = new _components.ServerStyleSheet();
  const memoryHistory = (0, _reactRouter.createMemoryHistory)(location);
  const store = (0, _store2.default)(memoryHistory, data);
  const history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

  return new Promise((resolve, reject) => {
    (0, _reactRouter.match)({
      history,
      routes: (0, _routes2.default)(store),
      location
    }, (error, redirect, props) => {
      if (error) {
        return reject(error);
      }
      const context = sheet.collectStyles(_react2.default.createElement(
        _reactRedux.Provider,
        { store },
        _react2.default.createElement(_reactRouter.RouterContext, props)
      ));
      const html = (0, _server.renderToString)(context);
      const css = sheet.getStyleElement();
      resolve({ html, css });
    });
  });
};

const _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _components = require('@patternplate/components');

const _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

const _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }