'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (store) {
	var state = store.getState();
	return _react2.default.createElement(
		_reactRouter.Route,
		{ path: state.base, component: _application2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _documentation2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'pattern/*', component: _pattern2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'doc/*', component: _documentation2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: '*', component: _notFound2.default })
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _application = require('./containers/application');

var _application2 = _interopRequireDefault(_application);

var _pattern = require('./containers/pattern');

var _pattern2 = _interopRequireDefault(_pattern);

var _documentation = require('./containers/documentation');

var _documentation2 = _interopRequireDefault(_documentation);

var _notFound = require('./containers/not-found');

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }