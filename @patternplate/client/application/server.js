'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (location, data) {
	var sheet = new _styledComponents.ServerStyleSheet();
	var memoryHistory = (0, _reactRouter.createMemoryHistory)(location);
	var store = (0, _store2.default)(memoryHistory, data);
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

	return new _promise2.default(function (resolve, reject) {
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

var _styledComponents = require('styled-components');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zZXJ2ZXIuanMiXSwibmFtZXMiOlsibG9jYXRpb24iLCJkYXRhIiwic2hlZXQiLCJtZW1vcnlIaXN0b3J5Iiwic3RvcmUiLCJoaXN0b3J5IiwicmVzb2x2ZSIsInJlamVjdCIsInJvdXRlcyIsImVycm9yIiwicmVkaXJlY3QiLCJwcm9wcyIsImNvbnRleHQiLCJjb2xsZWN0U3R5bGVzIiwiaHRtbCIsImNzcyIsImdldFN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFVZSxVQUFVQSxRQUFWLEVBQW9CQyxJQUFwQixFQUEwQjtBQUN4QyxLQUFNQyxRQUFRLHdDQUFkO0FBQ0EsS0FBTUMsZ0JBQWdCLHNDQUFvQkgsUUFBcEIsQ0FBdEI7QUFDQSxLQUFNSSxRQUFRLHFCQUFlRCxhQUFmLEVBQThCRixJQUE5QixDQUFkO0FBQ0EsS0FBTUksVUFBVSw0Q0FBcUJGLGFBQXJCLEVBQW9DQyxLQUFwQyxDQUFoQjs7QUFFQSxRQUFPLHNCQUFZLFVBQUNFLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2QywwQkFBTTtBQUNMRixtQkFESztBQUVMRyxXQUFRLHNCQUFPSixLQUFQLENBRkg7QUFHTEo7QUFISyxHQUFOLEVBSUcsVUFBQ1MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxLQUFsQixFQUE0QjtBQUM5QixPQUFJRixLQUFKLEVBQVc7QUFDVixXQUFPRixPQUFPRSxLQUFQLENBQVA7QUFDQTtBQUNELE9BQU1HLFVBQVVWLE1BQU1XLGFBQU4sQ0FDZjtBQUFBO0FBQUEsTUFBVSxPQUFPVCxLQUFqQjtBQUNDLDhEQUFtQk8sS0FBbkI7QUFERCxJQURlLENBQWhCO0FBS0EsT0FBTUcsT0FBTyw0QkFBZUYsT0FBZixDQUFiO0FBQ0EsT0FBTUcsTUFBTWIsTUFBTWMsZUFBTixFQUFaO0FBQ0FWLFdBQVEsRUFBQ1EsVUFBRCxFQUFPQyxRQUFQLEVBQVI7QUFDQSxHQWhCRDtBQWlCQSxFQWxCTSxDQUFQO0FBbUJBLEM7O0FBbkNEOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQSIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJUb1N0cmluZ30gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQge2NyZWF0ZU1lbW9yeUhpc3RvcnksIG1hdGNoLCBSb3V0ZXJDb250ZXh0fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtzeW5jSGlzdG9yeVdpdGhTdG9yZX0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7U2VydmVyU3R5bGVTaGVldH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGxvY2F0aW9uLCBkYXRhKSB7XG5cdGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcblx0Y29uc3QgbWVtb3J5SGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkobG9jYXRpb24pO1xuXHRjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKG1lbW9yeUhpc3RvcnksIGRhdGEpO1xuXHRjb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUobWVtb3J5SGlzdG9yeSwgc3RvcmUpO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bWF0Y2goe1xuXHRcdFx0aGlzdG9yeSxcblx0XHRcdHJvdXRlczogcm91dGVzKHN0b3JlKSxcblx0XHRcdGxvY2F0aW9uXG5cdFx0fSwgKGVycm9yLCByZWRpcmVjdCwgcHJvcHMpID0+IHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGNvbnRleHQgPSBzaGVldC5jb2xsZWN0U3R5bGVzKFxuXHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0XHQ8Um91dGVyQ29udGV4dCB7Li4ucHJvcHN9Lz5cblx0XHRcdFx0PC9Qcm92aWRlcj5cblx0XHRcdCk7XG5cdFx0XHRjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcoY29udGV4dCk7XG5cdFx0XHRjb25zdCBjc3MgPSBzaGVldC5nZXRTdHlsZUVsZW1lbnQoKTtcblx0XHRcdHJlc29sdmUoe2h0bWwsIGNzc30pO1xuXHRcdH0pO1xuXHR9KTtcbn1cbiJdfQ==