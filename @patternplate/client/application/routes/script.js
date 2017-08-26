'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scriptRouteFactory(application) {
	return function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var path;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							path = (0, _path.resolve)(application.runtime.cwd, 'assets', 'script', this.params.path);
							_context.next = 3;
							return (0, _pathExists2.default)(path);

						case 3:
							if (_context.sent) {
								_context.next = 5;
								break;
							}

							return _context.abrupt('return');

						case 5:

							this.type = 'js';
							this.body = (0, _fs.createReadStream)(path);

						case 7:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function scriptRoute() {
			return _ref.apply(this, arguments);
		}

		return scriptRoute;
	}();
}

exports.default = scriptRouteFactory;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbInNjcmlwdFJvdXRlRmFjdG9yeSIsImFwcGxpY2F0aW9uIiwicGF0aCIsInJ1bnRpbWUiLCJjd2QiLCJwYXJhbXMiLCJ0eXBlIiwiYm9keSIsInNjcmlwdFJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxrQkFBVCxDQUE0QkMsV0FBNUIsRUFBeUM7QUFDeEM7QUFBQSxzRkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQUMsV0FEQSxHQUNPLG1CQUFRRCxZQUFZRSxPQUFaLENBQW9CQyxHQUE1QixFQUFpQyxRQUFqQyxFQUEyQyxRQUEzQyxFQUFxRCxLQUFLQyxNQUFMLENBQVlILElBQWpFLENBRFA7QUFBQTtBQUFBLGNBR0ssMEJBQU9BLElBQVAsQ0FITDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQU9OLFlBQUtJLElBQUwsR0FBWSxJQUFaO0FBQ0EsWUFBS0MsSUFBTCxHQUFZLDBCQUFpQkwsSUFBakIsQ0FBWjs7QUFSTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFQOztBQUFBLFdBQXNCTSxXQUF0QjtBQUFBO0FBQUE7O0FBQUEsU0FBc0JBLFdBQXRCO0FBQUE7QUFVQTs7a0JBRWNSLGtCIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlUmVhZFN0cmVhbX0gZnJvbSAnZnMnO1xuaW1wb3J0IGV4aXN0cyBmcm9tICdwYXRoLWV4aXN0cyc7XG5pbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuXG5mdW5jdGlvbiBzY3JpcHRSb3V0ZUZhY3RvcnkoYXBwbGljYXRpb24pIHtcblx0cmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHNjcmlwdFJvdXRlKCkge1xuXHRcdGNvbnN0IHBhdGggPSByZXNvbHZlKGFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkLCAnYXNzZXRzJywgJ3NjcmlwdCcsIHRoaXMucGFyYW1zLnBhdGgpO1xuXG5cdFx0aWYgKCFhd2FpdCBleGlzdHMocGF0aCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnR5cGUgPSAnanMnO1xuXHRcdHRoaXMuYm9keSA9IGNyZWF0ZVJlYWRTdHJlYW0ocGF0aCk7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdFJvdXRlRmFjdG9yeTtcbiJdfQ==