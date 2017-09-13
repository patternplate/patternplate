'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.client = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _events = require('events');

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _content = require('./components/content');

var _content2 = _interopRequireDefault(_content);

var _documentation = require('./containers/documentation');

var _documentation2 = _interopRequireDefault(_documentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRoutes() {
	var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

	return _react2.default.createElement(
		_reactRouter.Route,
		{ name: 'root', path: base, handler: _components2.default },
		_react2.default.createElement(_reactRouter.DefaultRoute, { handler: _documentation2.default }),
		_react2.default.createElement(_reactRouter.Route, { name: 'doc', path: '/doc/*', handler: _documentation2.default }),
		_react2.default.createElement(_reactRouter.Route, { name: 'pattern', path: '/pattern/*', handler: _content2.default })
	);
}

function router() {
	var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
	var data = arguments[1];

	return new Promise(function (resolve) {
		var eventEmitter = new _events.EventEmitter();

		_reactRouter2.default.run(getRoutes(), path, function (Handler, state) {
			var appData = _extends({}, data, state, { eventEmitter: eventEmitter, base: '/' });
			resolve(_server2.default.renderToString(_react2.default.createElement(Handler, appData)));
		});
	});
}

function client(data, el) {
	return new Promise(function (resolve) {
		var eventEmitter = new _events.EventEmitter();
		var base = _url2.default.resolve(global.location.pathname, data.base);

		_reactRouter2.default.run(getRoutes(base), _reactRouter2.default.HistoryLocation, function (Handler, state) {
			var appData = _extends({}, data, state, { eventEmitter: eventEmitter, base: base });
			resolve(_reactDom2.default.render(_react2.default.createElement(Handler, appData), el));
		});
	});
}

exports.default = router;
exports.client = client;