'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (data, el) {
	var store = (0, _store2.default)(_reactRouter.browserHistory, data);
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	var router = _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: history },
			(0, _routes2.default)(store)
		)
	);

	return (0, _reactDom.render)(router, el);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }