'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _renderPage = require('../../library/render-page');

var _renderPage2 = _interopRequireDefault(_renderPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function indexRouteFactory(application) {
	return function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var parsed, rewritten;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							parsed = _url2.default.parse(this.request.url);

							if (!(!parsed.pathname.endsWith('/') && !_path2.default.extname(this.request.url))) {
								_context.next = 6;
								break;
							}

							parsed.pathname = parsed.pathname + '/';
							rewritten = _url2.default.format(parsed);

							this.redirect(rewritten);
							return _context.abrupt('return');

						case 6:
							_context.next = 8;
							return (0, _renderPage2.default)(application, this.request.url);

						case 8:
							this.body = _context.sent;

						case 9:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function indexRoute() {
			return _ref.apply(this, arguments);
		}

		return indexRoute;
	}();
}

exports.default = indexRouteFactory;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXhSb3V0ZUZhY3RvcnkiLCJhcHBsaWNhdGlvbiIsInBhcnNlZCIsInBhcnNlIiwicmVxdWVzdCIsInVybCIsInBhdGhuYW1lIiwiZW5kc1dpdGgiLCJleHRuYW1lIiwicmV3cml0dGVuIiwiZm9ybWF0IiwicmVkaXJlY3QiLCJib2R5IiwiaW5kZXhSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxXQUEzQixFQUF3QztBQUN2QztBQUFBLHNGQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBQyxhQURBLEdBQ1MsY0FBSUMsS0FBSixDQUFVLEtBQUtDLE9BQUwsQ0FBYUMsR0FBdkIsQ0FEVDs7QUFBQSxhQUdGLENBQUNILE9BQU9JLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCLEdBQXpCLENBQUQsSUFBa0MsQ0FBQyxlQUFLQyxPQUFMLENBQWEsS0FBS0osT0FBTCxDQUFhQyxHQUExQixDQUhqQztBQUFBO0FBQUE7QUFBQTs7QUFJTEgsY0FBT0ksUUFBUCxHQUFxQkosT0FBT0ksUUFBNUI7QUFDTUcsZ0JBTEQsR0FLYSxjQUFJQyxNQUFKLENBQVdSLE1BQVgsQ0FMYjs7QUFNTCxZQUFLUyxRQUFMLENBQWNGLFNBQWQ7QUFOSzs7QUFBQTtBQUFBO0FBQUEsY0FVWSwwQkFBV1IsV0FBWCxFQUF3QixLQUFLRyxPQUFMLENBQWFDLEdBQXJDLENBVlo7O0FBQUE7QUFVTixZQUFLTyxJQVZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVA7O0FBQUEsV0FBc0JDLFVBQXRCO0FBQUE7QUFBQTs7QUFBQSxTQUFzQkEsVUFBdEI7QUFBQTtBQVlBOztrQkFFY2IsaUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCByZW5kZXJQYWdlIGZyb20gJy4uLy4uL2xpYnJhcnkvcmVuZGVyLXBhZ2UnO1xuXG5mdW5jdGlvbiBpbmRleFJvdXRlRmFjdG9yeShhcHBsaWNhdGlvbikge1xuXHRyZXR1cm4gYXN5bmMgZnVuY3Rpb24gaW5kZXhSb3V0ZSgpIHtcblx0XHRjb25zdCBwYXJzZWQgPSB1cmwucGFyc2UodGhpcy5yZXF1ZXN0LnVybCk7XG5cblx0XHRpZiAoIXBhcnNlZC5wYXRobmFtZS5lbmRzV2l0aCgnLycpICYmICFwYXRoLmV4dG5hbWUodGhpcy5yZXF1ZXN0LnVybCkpIHtcblx0XHRcdHBhcnNlZC5wYXRobmFtZSA9IGAke3BhcnNlZC5wYXRobmFtZX0vYDtcblx0XHRcdGNvbnN0IHJld3JpdHRlbiA9IHVybC5mb3JtYXQocGFyc2VkKTtcblx0XHRcdHRoaXMucmVkaXJlY3QocmV3cml0dGVuKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmJvZHkgPSBhd2FpdCByZW5kZXJQYWdlKGFwcGxpY2F0aW9uLCB0aGlzLnJlcXVlc3QudXJsKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhSb3V0ZUZhY3Rvcnk7XG4iXX0=