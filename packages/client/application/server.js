'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (location, data) {
	var sheet = new _components.ServerStyleSheet();
	var memoryHistory = (0, _reactRouter.createMemoryHistory)(location);
	var store = (0, _store2.default)(memoryHistory, data);
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

	return new Promise(function (resolve, reject) {
		(0, _reactRouter.match)({
			history: history,
			routes: (0, _routes2.default)(store),
			location: location
		}, function (error, redirect, props) {
			if (error) {
				return reject(error);
			}
			var context = sheet.collectStyles(_react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(_reactRouter.RouterContext, props)
			));
			var html = (0, _server.renderToString)(context);
			var css = sheet.getStyleElement();
			resolve({ html: html, css: css });
		});
	});
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _components = require('@patternplate/components');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }