'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = patternRouteFactory;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _stripAnsi = require('strip-ansi');

var _stripAnsi2 = _interopRequireDefault(_stripAnsi);

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _getPatternDemo = require('@patternplate/server/library/get-pattern-demo');

var _getPatternDemo2 = _interopRequireDefault(_getPatternDemo);

var _getPatternFile = require('@patternplate/server/library/get-pattern-file');

var _getPatternFile2 = _interopRequireDefault(_getPatternFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withErrorHandling(fn) {
	return function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var result,
			    _args = arguments;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return fn.apply(undefined, _args);

						case 3:
							result = _context.sent;
							return _context.abrupt('return', [null, result]);

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);
							return _context.abrupt('return', [_context.t0]);

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[0, 7]]);
		}));

		return function () {
			return _ref.apply(this, arguments);
		};
	}();
}

function getPatternId(raw) {
	var parsed = _path2.default.parse(raw);
	var extension = getPatternExtension(raw);
	var base = _path2.default.basename(raw, _path2.default.extname(raw));

	if (base === 'index' && extension !== 'json') {
		return _path2.default.dirname(raw);
	}

	return _path2.default.dirname(raw) + '/' + _path2.default.basename(parsed.base, _path2.default.extname(parsed.base));
}

function getPatternExtension(raw) {
	return _path2.default.extname(raw).slice(1) || 'html';
}

var getPatternDemoOrError = withErrorHandling(_getPatternDemo2.default);
var getPatternFileOrError = withErrorHandling(_getPatternFile2.default);

function patternRouteFactory(application) {
	return function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var server, parsed, id, extension, type, errorType, _parsed$query$environ, environment, filters, _ref3, _ref4, _error, demo, err, _ref5, _ref6, error, file, _err;

			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							server = application.parent.server;
							parsed = _urlQuery2.default.parse(this.params.id);
							id = getPatternId(parsed.pathname);
							extension = getPatternExtension(parsed.pathname);
							type = this.accepts('text', 'html', 'json') || extension;
							errorType = type === 'json' ? 'json' : 'html';
							_parsed$query$environ = parsed.query.environment, environment = _parsed$query$environ === undefined ? 'index' : _parsed$query$environ;
							filters = {
								outFormats: [extension],
								environments: [environment].filter(Boolean)
							};

							if (!(type === 'html' && extension === 'html')) {
								_context2.next = 27;
								break;
							}

							_context2.next = 11;
							return getPatternDemoOrError(server, id, filters, environment, {
								mount: this.query.mount !== 'false'
							}, '/' + this.request.url);

						case 11:
							_ref3 = _context2.sent;
							_ref4 = (0, _slicedToArray3.default)(_ref3, 2);
							_error = _ref4[0];
							demo = _ref4[1];

							if (!_error) {
								_context2.next = 19;
								break;
							}

							this.code = 500;
							this.body = [_error.message, (0, _stripAnsi2.default)(_error.codeFrame)].join('\n');
							return _context2.abrupt('return');

						case 19:
							if (!(demo === null)) {
								_context2.next = 24;
								break;
							}

							err = new Error('Could not find demo for ' + id + '.');

							err.file = __filename;
							this.throw(404, err);
							return _context2.abrupt('return');

						case 24:

							this.type = 'html';
							this.body = demo;
							return _context2.abrupt('return');

						case 27:
							_context2.next = 29;
							return getPatternFileOrError(application.parent.server, id, filters, extension, environment);

						case 29:
							_ref5 = _context2.sent;
							_ref6 = (0, _slicedToArray3.default)(_ref5, 2);
							error = _ref6[0];
							file = _ref6[1];


							if (error) {
								error.expose = true;
								this.type = errorType;
								this.throw(500, error);
							}

							if (file === null) {
								this.type = errorType;
								_err = new Error('Could not find file {index,demo}.' + extension + ' for ' + id + '.');

								_err.file = __filename;
								this.throw(404, _err);
							}

							this.type = extension;
							this.body = file;

						case 37:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function patternRoute() {
			return _ref2.apply(this, arguments);
		}

		return patternRoute;
	}();
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvZGVtby5qcyJdLCJuYW1lcyI6WyJwYXR0ZXJuUm91dGVGYWN0b3J5Iiwid2l0aEVycm9ySGFuZGxpbmciLCJmbiIsInJlc3VsdCIsImdldFBhdHRlcm5JZCIsInJhdyIsInBhcnNlZCIsInBhcnNlIiwiZXh0ZW5zaW9uIiwiZ2V0UGF0dGVybkV4dGVuc2lvbiIsImJhc2UiLCJiYXNlbmFtZSIsImV4dG5hbWUiLCJkaXJuYW1lIiwic2xpY2UiLCJnZXRQYXR0ZXJuRGVtb09yRXJyb3IiLCJnZXRQYXR0ZXJuRmlsZU9yRXJyb3IiLCJhcHBsaWNhdGlvbiIsInNlcnZlciIsInBhcmVudCIsInBhcmFtcyIsImlkIiwicGF0aG5hbWUiLCJ0eXBlIiwiYWNjZXB0cyIsImVycm9yVHlwZSIsInF1ZXJ5IiwiZW52aXJvbm1lbnQiLCJmaWx0ZXJzIiwib3V0Rm9ybWF0cyIsImVudmlyb25tZW50cyIsImZpbHRlciIsIkJvb2xlYW4iLCJtb3VudCIsInJlcXVlc3QiLCJ1cmwiLCJlcnJvciIsImRlbW8iLCJjb2RlIiwiYm9keSIsIm1lc3NhZ2UiLCJjb2RlRnJhbWUiLCJqb2luIiwiZXJyIiwiRXJyb3IiLCJmaWxlIiwiX19maWxlbmFtZSIsInRocm93IiwiZXhwb3NlIiwicGF0dGVyblJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBcUN3QkEsbUI7O0FBckN4Qjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQyxpQkFBVCxDQUEyQkMsRUFBM0IsRUFBK0I7QUFDOUI7QUFBQSxzRkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUVnQkEsMEJBRmhCOztBQUFBO0FBRUNDLGFBRkQ7QUFBQSx3Q0FHRSxDQUFDLElBQUQsRUFBT0EsTUFBUCxDQUhGOztBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUtFLGFBTEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQzFCLEtBQU1DLFNBQVMsZUFBS0MsS0FBTCxDQUFXRixHQUFYLENBQWY7QUFDQSxLQUFNRyxZQUFZQyxvQkFBb0JKLEdBQXBCLENBQWxCO0FBQ0EsS0FBTUssT0FBTyxlQUFLQyxRQUFMLENBQWNOLEdBQWQsRUFBbUIsZUFBS08sT0FBTCxDQUFhUCxHQUFiLENBQW5CLENBQWI7O0FBRUEsS0FBSUssU0FBUyxPQUFULElBQW9CRixjQUFjLE1BQXRDLEVBQThDO0FBQzdDLFNBQU8sZUFBS0ssT0FBTCxDQUFhUixHQUFiLENBQVA7QUFDQTs7QUFFRCxRQUFVLGVBQUtRLE9BQUwsQ0FBYVIsR0FBYixDQUFWLFNBQStCLGVBQUtNLFFBQUwsQ0FBY0wsT0FBT0ksSUFBckIsRUFBMkIsZUFBS0UsT0FBTCxDQUFhTixPQUFPSSxJQUFwQixDQUEzQixDQUEvQjtBQUNBOztBQUVELFNBQVNELG1CQUFULENBQTZCSixHQUE3QixFQUFrQztBQUNqQyxRQUFPLGVBQUtPLE9BQUwsQ0FBYVAsR0FBYixFQUFrQlMsS0FBbEIsQ0FBd0IsQ0FBeEIsS0FBOEIsTUFBckM7QUFDQTs7QUFFRCxJQUFNQyx3QkFBd0JkLDJDQUE5QjtBQUNBLElBQU1lLHdCQUF3QmYsMkNBQTlCOztBQUVlLFNBQVNELG1CQUFULENBQTZCaUIsV0FBN0IsRUFBMEM7QUFDeEQ7QUFBQSx1RkFBTztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FDLGFBREEsR0FDU0QsWUFBWUUsTUFBWixDQUFtQkQsTUFENUI7QUFFQVosYUFGQSxHQUVTLG1CQUFTQyxLQUFULENBQWUsS0FBS2EsTUFBTCxDQUFZQyxFQUEzQixDQUZUO0FBR0FBLFNBSEEsR0FHS2pCLGFBQWFFLE9BQU9nQixRQUFwQixDQUhMO0FBSUFkLGdCQUpBLEdBSVlDLG9CQUFvQkgsT0FBT2dCLFFBQTNCLENBSlo7QUFLQUMsV0FMQSxHQUtPLEtBQUtDLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEtBQXdDaEIsU0FML0M7QUFNQWlCLGdCQU5BLEdBTVlGLFNBQVMsTUFBVCxHQUFrQixNQUFsQixHQUEyQixNQU52QztBQUFBLCtCQU8wQmpCLE9BQU9vQixLQVBqQyxDQU9DQyxXQVBELEVBT0NBLFdBUEQseUNBT2UsT0FQZjtBQVNBQyxjQVRBLEdBU1U7QUFDZkMsb0JBQVksQ0FBQ3JCLFNBQUQsQ0FERztBQUVmc0Isc0JBQWMsQ0FBQ0gsV0FBRCxFQUFjSSxNQUFkLENBQXFCQyxPQUFyQjtBQUZDLFFBVFY7O0FBQUEsYUFjRlQsU0FBUyxNQUFULElBQW1CZixjQUFjLE1BZC9CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsY0FldUJPLHNCQUFzQkcsTUFBdEIsRUFBOEJHLEVBQTlCLEVBQWtDTyxPQUFsQyxFQUEyQ0QsV0FBM0MsRUFBd0Q7QUFDbkZNLGVBQU8sS0FBS1AsS0FBTCxDQUFXTyxLQUFYLEtBQXFCO0FBRHVELFFBQXhELFFBRXJCLEtBQUtDLE9BQUwsQ0FBYUMsR0FGUSxDQWZ2Qjs7QUFBQTtBQUFBO0FBQUE7QUFlRUMsYUFmRjtBQWVTQyxXQWZUOztBQUFBLFlBbUJERCxNQW5CQztBQUFBO0FBQUE7QUFBQTs7QUFvQkEsWUFBS0UsSUFBTCxHQUFZLEdBQVo7QUFDQSxZQUFLQyxJQUFMLEdBQVksQ0FDVkgsT0FBTUksT0FESSxFQUVWLHlCQUFVSixPQUFNSyxTQUFoQixDQUZVLEVBR1ZDLElBSFUsQ0FHTCxJQUhLLENBQVo7QUFyQkE7O0FBQUE7QUFBQSxhQTRCREwsU0FBUyxJQTVCUjtBQUFBO0FBQUE7QUFBQTs7QUE2QkVNLFVBN0JGLEdBNkJRLElBQUlDLEtBQUosOEJBQXFDdkIsRUFBckMsT0E3QlI7O0FBOEJKc0IsV0FBSUUsSUFBSixHQUFXQyxVQUFYO0FBQ0EsWUFBS0MsS0FBTCxDQUFXLEdBQVgsRUFBZ0JKLEdBQWhCO0FBL0JJOztBQUFBOztBQW1DTCxZQUFLcEIsSUFBTCxHQUFZLE1BQVo7QUFDQSxZQUFLZ0IsSUFBTCxHQUFZRixJQUFaO0FBcENLOztBQUFBO0FBQUE7QUFBQSxjQXdDc0JyQixzQkFBc0JDLFlBQVlFLE1BQVosQ0FBbUJELE1BQXpDLEVBQWlERyxFQUFqRCxFQUFxRE8sT0FBckQsRUFBOERwQixTQUE5RCxFQUF5RW1CLFdBQXpFLENBeEN0Qjs7QUFBQTtBQUFBO0FBQUE7QUF3Q0NTLFlBeENEO0FBd0NRUyxXQXhDUjs7O0FBMENOLFdBQUlULEtBQUosRUFBVztBQUNWQSxjQUFNWSxNQUFOLEdBQWUsSUFBZjtBQUNBLGFBQUt6QixJQUFMLEdBQVlFLFNBQVo7QUFDQSxhQUFLc0IsS0FBTCxDQUFXLEdBQVgsRUFBZ0JYLEtBQWhCO0FBQ0E7O0FBRUQsV0FBSVMsU0FBUyxJQUFiLEVBQW1CO0FBQ2xCLGFBQUt0QixJQUFMLEdBQVlFLFNBQVo7QUFDTWtCLFlBRlksR0FFTixJQUFJQyxLQUFKLHVDQUE4Q3BDLFNBQTlDLGFBQStEYSxFQUEvRCxPQUZNOztBQUdsQnNCLGFBQUlFLElBQUosR0FBV0MsVUFBWDtBQUNBLGFBQUtDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCSixJQUFoQjtBQUNBOztBQUVELFlBQUtwQixJQUFMLEdBQVlmLFNBQVo7QUFDQSxZQUFLK0IsSUFBTCxHQUFZTSxJQUFaOztBQXhETTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFQOztBQUFBLFdBQXNCSSxZQUF0QjtBQUFBO0FBQUE7O0FBQUEsU0FBc0JBLFlBQXRCO0FBQUE7QUEwREEiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tICdzdHJpcC1hbnNpJztcblxuaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4uL3V0aWxzL3VybC1xdWVyeSc7XG5pbXBvcnQgZ2V0UGF0dGVybkRlbW8gZnJvbSAnQHBhdHRlcm5wbGF0ZS9zZXJ2ZXIvbGlicmFyeS9nZXQtcGF0dGVybi1kZW1vJztcbmltcG9ydCBnZXRQYXR0ZXJuRmlsZSBmcm9tICdAcGF0dGVybnBsYXRlL3NlcnZlci9saWJyYXJ5L2dldC1wYXR0ZXJuLWZpbGUnO1xuXG5mdW5jdGlvbiB3aXRoRXJyb3JIYW5kbGluZyhmbikge1xuXHRyZXR1cm4gYXN5bmMgZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBmbiguLi5hcmdzKTtcblx0XHRcdHJldHVybiBbbnVsbCwgcmVzdWx0XTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIFtlcnJvcl07XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXR0ZXJuSWQocmF3KSB7XG5cdGNvbnN0IHBhcnNlZCA9IHBhdGgucGFyc2UocmF3KTtcblx0Y29uc3QgZXh0ZW5zaW9uID0gZ2V0UGF0dGVybkV4dGVuc2lvbihyYXcpO1xuXHRjb25zdCBiYXNlID0gcGF0aC5iYXNlbmFtZShyYXcsIHBhdGguZXh0bmFtZShyYXcpKTtcblxuXHRpZiAoYmFzZSA9PT0gJ2luZGV4JyAmJiBleHRlbnNpb24gIT09ICdqc29uJykge1xuXHRcdHJldHVybiBwYXRoLmRpcm5hbWUocmF3KTtcblx0fVxuXG5cdHJldHVybiBgJHtwYXRoLmRpcm5hbWUocmF3KX0vJHtwYXRoLmJhc2VuYW1lKHBhcnNlZC5iYXNlLCBwYXRoLmV4dG5hbWUocGFyc2VkLmJhc2UpKX1gO1xufVxuXG5mdW5jdGlvbiBnZXRQYXR0ZXJuRXh0ZW5zaW9uKHJhdykge1xuXHRyZXR1cm4gcGF0aC5leHRuYW1lKHJhdykuc2xpY2UoMSkgfHwgJ2h0bWwnO1xufVxuXG5jb25zdCBnZXRQYXR0ZXJuRGVtb09yRXJyb3IgPSB3aXRoRXJyb3JIYW5kbGluZyhnZXRQYXR0ZXJuRGVtbyk7XG5jb25zdCBnZXRQYXR0ZXJuRmlsZU9yRXJyb3IgPSB3aXRoRXJyb3JIYW5kbGluZyhnZXRQYXR0ZXJuRmlsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhdHRlcm5Sb3V0ZUZhY3RvcnkoYXBwbGljYXRpb24pIHtcblx0cmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHBhdHRlcm5Sb3V0ZSgpIHtcblx0XHRjb25zdCBzZXJ2ZXIgPSBhcHBsaWNhdGlvbi5wYXJlbnQuc2VydmVyO1xuXHRcdGNvbnN0IHBhcnNlZCA9IHVybFF1ZXJ5LnBhcnNlKHRoaXMucGFyYW1zLmlkKTtcblx0XHRjb25zdCBpZCA9IGdldFBhdHRlcm5JZChwYXJzZWQucGF0aG5hbWUpO1xuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IGdldFBhdHRlcm5FeHRlbnNpb24ocGFyc2VkLnBhdGhuYW1lKTtcblx0XHRjb25zdCB0eXBlID0gdGhpcy5hY2NlcHRzKCd0ZXh0JywgJ2h0bWwnLCAnanNvbicpIHx8IGV4dGVuc2lvbjtcblx0XHRjb25zdCBlcnJvclR5cGUgPSB0eXBlID09PSAnanNvbicgPyAnanNvbicgOiAnaHRtbCc7XG5cdFx0Y29uc3Qge2Vudmlyb25tZW50ID0gJ2luZGV4J30gPSBwYXJzZWQucXVlcnk7XG5cblx0XHRjb25zdCBmaWx0ZXJzID0ge1xuXHRcdFx0b3V0Rm9ybWF0czogW2V4dGVuc2lvbl0sXG5cdFx0XHRlbnZpcm9ubWVudHM6IFtlbnZpcm9ubWVudF0uZmlsdGVyKEJvb2xlYW4pXG5cdFx0fTtcblxuXHRcdGlmICh0eXBlID09PSAnaHRtbCcgJiYgZXh0ZW5zaW9uID09PSAnaHRtbCcpIHtcblx0XHRcdGNvbnN0IFtlcnJvciwgZGVtb10gPSBhd2FpdCBnZXRQYXR0ZXJuRGVtb09yRXJyb3Ioc2VydmVyLCBpZCwgZmlsdGVycywgZW52aXJvbm1lbnQsIHtcblx0XHRcdFx0bW91bnQ6IHRoaXMucXVlcnkubW91bnQgIT09ICdmYWxzZSdcblx0XHRcdH0sIGAvJHt0aGlzLnJlcXVlc3QudXJsfWApO1xuXG5cdFx0XHRpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gNTAwO1xuICAgICAgICB0aGlzLmJvZHkgPSBbXG4gICAgICAgICAgZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICBzdHJpcEFuc2koZXJyb3IuY29kZUZyYW1lKVxuICAgICAgICBdLmpvaW4oJ1xcbicpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkZW1vID09PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IGVyciA9IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgZGVtbyBmb3IgJHtpZH0uYCk7XG5cdFx0XHRcdGVyci5maWxlID0gX19maWxlbmFtZTtcblx0XHRcdFx0dGhpcy50aHJvdyg0MDQsIGVycik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50eXBlID0gJ2h0bWwnO1xuXHRcdFx0dGhpcy5ib2R5ID0gZGVtbztcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBbZXJyb3IsIGZpbGVdID0gYXdhaXQgZ2V0UGF0dGVybkZpbGVPckVycm9yKGFwcGxpY2F0aW9uLnBhcmVudC5zZXJ2ZXIsIGlkLCBmaWx0ZXJzLCBleHRlbnNpb24sIGVudmlyb25tZW50KTtcblxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0ZXJyb3IuZXhwb3NlID0gdHJ1ZTtcblx0XHRcdHRoaXMudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdHRoaXMudGhyb3coNTAwLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0aWYgKGZpbGUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGNvbnN0IGVyciA9IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgZmlsZSB7aW5kZXgsZGVtb30uJHtleHRlbnNpb259IGZvciAke2lkfS5gKTtcblx0XHRcdGVyci5maWxlID0gX19maWxlbmFtZTtcblx0XHRcdHRoaXMudGhyb3coNDA0LCBlcnIpO1xuXHRcdH1cblxuXHRcdHRoaXMudHlwZSA9IGV4dGVuc2lvbjtcblx0XHR0aGlzLmJvZHkgPSBmaWxlO1xuXHR9O1xufVxuIl19