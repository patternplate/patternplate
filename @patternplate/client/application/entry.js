'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.client = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

	return new _promise2.default(function (resolve) {
		var eventEmitter = new _events.EventEmitter();

		_reactRouter2.default.run(getRoutes(), path, function (Handler, state) {
			var appData = (0, _extends3.default)({}, data, state, { eventEmitter: eventEmitter, base: '/' });
			resolve(_server2.default.renderToString(_react2.default.createElement(Handler, appData)));
		});
	});
}

function client(data, el) {
	return new _promise2.default(function (resolve) {
		var eventEmitter = new _events.EventEmitter();
		var base = _url2.default.resolve(global.location.pathname, data.base);

		_reactRouter2.default.run(getRoutes(base), _reactRouter2.default.HistoryLocation, function (Handler, state) {
			var appData = (0, _extends3.default)({}, data, state, { eventEmitter: eventEmitter, base: base });
			resolve(_reactDom2.default.render(_react2.default.createElement(Handler, appData), el));
		});
	});
}

exports.default = router;
exports.client = client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHBsaWNhdGlvbi9lbnRyeS5qcyJdLCJuYW1lcyI6WyJnZXRSb3V0ZXMiLCJiYXNlIiwicm91dGVyIiwicGF0aCIsImRhdGEiLCJldmVudEVtaXR0ZXIiLCJydW4iLCJIYW5kbGVyIiwic3RhdGUiLCJhcHBEYXRhIiwicmVzb2x2ZSIsInJlbmRlclRvU3RyaW5nIiwiY2xpZW50IiwiZWwiLCJnbG9iYWwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiSGlzdG9yeUxvY2F0aW9uIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxTQUFULEdBQStCO0FBQUEsS0FBWkMsSUFBWSx1RUFBTCxHQUFLOztBQUM5QixRQUNDO0FBQUE7QUFBQSxJQUFPLE1BQUssTUFBWixFQUFtQixNQUFNQSxJQUF6QixFQUErQiw2QkFBL0I7QUFDQyw2REFBYyxnQ0FBZCxHQUREO0FBRUMsc0RBQU8sTUFBSyxLQUFaLEVBQWtCLE1BQUssUUFBdkIsRUFBZ0MsZ0NBQWhDLEdBRkQ7QUFHQyxzREFBTyxNQUFLLFNBQVosRUFBc0IsTUFBSyxZQUEzQixFQUF3QywwQkFBeEM7QUFIRCxFQUREO0FBT0E7O0FBRUQsU0FBU0MsTUFBVCxHQUFrQztBQUFBLEtBQWxCQyxJQUFrQix1RUFBWCxHQUFXO0FBQUEsS0FBTkMsSUFBTTs7QUFDakMsUUFBTyxzQkFBWSxtQkFBVztBQUM3QixNQUFNQyxlQUFlLDBCQUFyQjs7QUFFQSx3QkFBT0MsR0FBUCxDQUFXTixXQUFYLEVBQXdCRyxJQUF4QixFQUE4QixVQUFDSSxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDakQsT0FBTUMscUNBQWNMLElBQWQsRUFBdUJJLEtBQXZCLElBQThCSCwwQkFBOUIsRUFBNENKLE1BQU0sR0FBbEQsR0FBTjtBQUNBUyxXQUFRLGlCQUFlQyxjQUFmLENBQThCLDhCQUFDLE9BQUQsRUFBYUYsT0FBYixDQUE5QixDQUFSO0FBQ0EsR0FIRDtBQUlBLEVBUE0sQ0FBUDtBQVFBOztBQUVELFNBQVNHLE1BQVQsQ0FBZ0JSLElBQWhCLEVBQXNCUyxFQUF0QixFQUEwQjtBQUN6QixRQUFPLHNCQUFZLG1CQUFXO0FBQzdCLE1BQU1SLGVBQWUsMEJBQXJCO0FBQ0EsTUFBTUosT0FBTyxjQUFJUyxPQUFKLENBQVlJLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQTVCLEVBQXNDWixLQUFLSCxJQUEzQyxDQUFiOztBQUVBLHdCQUFPSyxHQUFQLENBQVdOLFVBQVVDLElBQVYsQ0FBWCxFQUE0QixzQkFBT2dCLGVBQW5DLEVBQW9ELFVBQUNWLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUN2RSxPQUFNQyxxQ0FBY0wsSUFBZCxFQUF1QkksS0FBdkIsSUFBOEJILDBCQUE5QixFQUE0Q0osVUFBNUMsR0FBTjtBQUNBUyxXQUFRLG1CQUFTUSxNQUFULENBQWdCLDhCQUFDLE9BQUQsRUFBYVQsT0FBYixDQUFoQixFQUF5Q0ksRUFBekMsQ0FBUjtBQUNBLEdBSEQ7QUFJQSxFQVJNLENBQVA7QUFTQTs7a0JBRWNYLE07UUFDR1UsTSxHQUFWQSxNIiwiZmlsZSI6ImVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgUm91dGVyLCB7RGVmYXVsdFJvdXRlLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdldmVudHMnO1xuXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50JztcbmltcG9ydCBEb2N1bWVudGF0aW9uIGZyb20gJy4vY29udGFpbmVycy9kb2N1bWVudGF0aW9uJztcblxuZnVuY3Rpb24gZ2V0Um91dGVzKGJhc2UgPSAnLycpIHtcblx0cmV0dXJuIChcblx0XHQ8Um91dGUgbmFtZT1cInJvb3RcIiBwYXRoPXtiYXNlfSBoYW5kbGVyPXtBcHBsaWNhdGlvbn0+XG5cdFx0XHQ8RGVmYXVsdFJvdXRlIGhhbmRsZXI9e0RvY3VtZW50YXRpb259Lz5cblx0XHRcdDxSb3V0ZSBuYW1lPVwiZG9jXCIgcGF0aD1cIi9kb2MvKlwiIGhhbmRsZXI9e0RvY3VtZW50YXRpb259Lz5cblx0XHRcdDxSb3V0ZSBuYW1lPVwicGF0dGVyblwiIHBhdGg9XCIvcGF0dGVybi8qXCIgaGFuZGxlcj17Q29udGVudH0vPlxuXHRcdDwvUm91dGU+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHJvdXRlcihwYXRoID0gJy8nLCBkYXRhKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRjb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0XHRSb3V0ZXIucnVuKGdldFJvdXRlcygpLCBwYXRoLCAoSGFuZGxlciwgc3RhdGUpID0+IHtcblx0XHRcdGNvbnN0IGFwcERhdGEgPSB7Li4uZGF0YSwgLi4uc3RhdGUsIGV2ZW50RW1pdHRlciwgYmFzZTogJy8nfTtcblx0XHRcdHJlc29sdmUoUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoPEhhbmRsZXIgey4uLmFwcERhdGF9Lz4pKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsaWVudChkYXRhLCBlbCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0Y29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRcdGNvbnN0IGJhc2UgPSB1cmwucmVzb2x2ZShnbG9iYWwubG9jYXRpb24ucGF0aG5hbWUsIGRhdGEuYmFzZSk7XG5cblx0XHRSb3V0ZXIucnVuKGdldFJvdXRlcyhiYXNlKSwgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgKEhhbmRsZXIsIHN0YXRlKSA9PiB7XG5cdFx0XHRjb25zdCBhcHBEYXRhID0gey4uLmRhdGEsIC4uLnN0YXRlLCBldmVudEVtaXR0ZXIsIGJhc2V9O1xuXHRcdFx0cmVzb2x2ZShSZWFjdERPTS5yZW5kZXIoPEhhbmRsZXIgey4uLmFwcERhdGF9Lz4sIGVsKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5leHBvcnQge2NsaWVudCBhcyBjbGllbnR9O1xuIl19