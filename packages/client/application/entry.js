'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = undefined;

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _url = require('url');

const _url2 = _interopRequireDefault(_url);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _reactDom = require('react-dom');

const _reactDom2 = _interopRequireDefault(_reactDom);

const _server = require('react-dom/server');

const _server2 = _interopRequireDefault(_server);

const _reactRouter = require('react-router');

const _reactRouter2 = _interopRequireDefault(_reactRouter);

const _events = require('events');

const _components = require('./components');

const _components2 = _interopRequireDefault(_components);

const _content = require('./components/content');

const _content2 = _interopRequireDefault(_content);

const _documentation = require('./containers/documentation');

const _documentation2 = _interopRequireDefault(_documentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRoutes() {
  const base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

  return _react2.default.createElement(
    _reactRouter.Route,
    { name: 'root', path: base, handler: _components2.default },
    _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _documentation2.default }),
    _react2.default.createElement(_reactRouter.Route, { name: 'doc', path: '/doc/*', handler: _documentation2.default }),
    _react2.default.createElement(_reactRouter.Route, { name: 'pattern', path: '/pattern/*', handler: _content2.default })
  );
}

function router() {
  const path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  const data = arguments[1];

  return new Promise((resolve) => {
    const eventEmitter = new _events.EventEmitter();

    _reactRouter2.default.run(getRoutes(), path, (Handler, state) => {
      const appData = _extends({}, data, state, { eventEmitter, base: '/' });
      resolve(_server2.default.renderToString(_react2.default.createElement(Handler, appData)));
    });
  });
}

function client(data, el) {
  return new Promise((resolve) => {
    const eventEmitter = new _events.EventEmitter();
    const base = _url2.default.resolve(global.location.pathname, data.base);

    _reactRouter2.default.run(getRoutes(base), _reactRouter2.default.HistoryLocation, (Handler, state) => {
      const appData = _extends({}, data, state, { eventEmitter, base });
      resolve(_reactDom2.default.render(_react2.default.createElement(Handler, appData), el));
    });
  });
}

exports.default = router;
exports.client = client;