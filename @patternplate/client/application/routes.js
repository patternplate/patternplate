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

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMuanMiXSwibmFtZXMiOlsic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQVFlLFVBQVVBLEtBQVYsRUFBaUI7QUFDL0IsS0FBTUMsUUFBUUQsTUFBTUUsUUFBTixFQUFkO0FBQ0EsUUFDQztBQUFBO0FBQUEsSUFBTyxNQUFNRCxNQUFNRSxJQUFuQixFQUF5QixnQ0FBekI7QUFDQywyREFBWSxrQ0FBWixHQUREO0FBRUMsc0RBQU8sTUFBSyxXQUFaLEVBQXdCLDRCQUF4QixHQUZEO0FBR0Msc0RBQU8sTUFBSyxPQUFaLEVBQW9CLGtDQUFwQixHQUhEO0FBSUMsc0RBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUpELEVBREQ7QUFRQSxDOztBQWxCRDs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlLCBJbmRleFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9jb250YWluZXJzL2FwcGxpY2F0aW9uJztcbmltcG9ydCBQYXR0ZXJuIGZyb20gJy4vY29udGFpbmVycy9wYXR0ZXJuJztcbmltcG9ydCBEb2N1bWVudGF0aW9uIGZyb20gJy4vY29udGFpbmVycy9kb2N1bWVudGF0aW9uJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbnRhaW5lcnMvbm90LWZvdW5kJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0b3JlKSB7XG5cdGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblx0cmV0dXJuIChcblx0XHQ8Um91dGUgcGF0aD17c3RhdGUuYmFzZX0gY29tcG9uZW50PXtBcHBsaWNhdGlvbn0+XG5cdFx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0RvY3VtZW50YXRpb259Lz5cblx0XHRcdDxSb3V0ZSBwYXRoPVwicGF0dGVybi8qXCIgY29tcG9uZW50PXtQYXR0ZXJufS8+XG5cdFx0XHQ8Um91dGUgcGF0aD1cImRvYy8qXCIgY29tcG9uZW50PXtEb2N1bWVudGF0aW9ufS8+XG5cdFx0XHQ8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfS8+XG5cdFx0PC9Sb3V0ZT5cblx0KTtcbn1cbiJdfQ==