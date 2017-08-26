'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _promiseThunkAction = require('./promise-thunk-action');

var _loadPatternDemo = require('./load-pattern-demo');

var _loadPatternDemo2 = _interopRequireDefault(_loadPatternDemo);

var _loadSchema = require('./load-schema');

var _loadSchema2 = _interopRequireDefault(_loadSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _promiseThunkAction.createPromiseThunkAction)('LISTEN', function (payload, dispatch, getState) {
	if (!global.EventSource) {
		return;
	}

	var s = getState();
	var source = new global.EventSource(_url2.default.resolve(s.base, payload.url));

	source.addEventListener('error', function (error) {
		dispatch({
			type: 'ERROR_HEARTBEAT',
			payload: error
		});
	});

	source.addEventListener('heartbeat', function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							dispatch({
								type: 'LISTEN_HEARTBEAT',
								payload: JSON.parse(event.data)
							});

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	}());

	source.addEventListener('change', function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
			var payload, file;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							payload = JSON.parse(event.data);
							file = payload.file || '';

							if (!file.startsWith('patterns')) {
								_context2.next = 8;
								break;
							}

							_context2.t0 = dispatch;
							_context2.next = 6;
							return (0, _loadSchema2.default)();

						case 6:
							_context2.t1 = _context2.sent;
							(0, _context2.t0)(_context2.t1);

						case 8:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x2) {
			return _ref2.apply(this, arguments);
		};
	}());

	source.addEventListener('reload', function (event) {
		var payload = JSON.parse(event.data);
		var state = getState();

		if (state.id === 'pattern/' + payload.pattern) {
			dispatch((0, _loadPatternDemo2.default)({ reloadTime: Date.now() }));
		}
	});
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2xpc3Rlbi5qcyJdLCJuYW1lcyI6WyJwYXlsb2FkIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImdsb2JhbCIsIkV2ZW50U291cmNlIiwicyIsInNvdXJjZSIsInJlc29sdmUiLCJiYXNlIiwidXJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInR5cGUiLCJlcnJvciIsImV2ZW50IiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImZpbGUiLCJzdGFydHNXaXRoIiwic3RhdGUiLCJpZCIsInBhdHRlcm4iLCJyZWxvYWRUaW1lIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxrREFBeUIsUUFBekIsRUFBbUMsVUFBQ0EsT0FBRCxFQUFVQyxRQUFWLEVBQW9CQyxRQUFwQixFQUFpQztBQUNsRixLQUFJLENBQUNDLE9BQU9DLFdBQVosRUFBeUI7QUFDeEI7QUFDQTs7QUFFRCxLQUFNQyxJQUFJSCxVQUFWO0FBQ0EsS0FBTUksU0FBUyxJQUFJSCxPQUFPQyxXQUFYLENBQXVCLGNBQUlHLE9BQUosQ0FBWUYsRUFBRUcsSUFBZCxFQUFvQlIsUUFBUVMsR0FBNUIsQ0FBdkIsQ0FBZjs7QUFFQUgsUUFBT0ksZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsaUJBQVM7QUFDekNULFdBQVM7QUFDUlUsU0FBTSxpQkFERTtBQUVSWCxZQUFTWTtBQUZELEdBQVQ7QUFJQSxFQUxEOztBQU9BTixRQUFPSSxnQkFBUCxDQUF3QixXQUF4QjtBQUFBLHNGQUFxQyxpQkFBTUcsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BDWixnQkFBUztBQUNSVSxjQUFNLGtCQURFO0FBRVJYLGlCQUFTYyxLQUFLQyxLQUFMLENBQVdGLE1BQU1HLElBQWpCO0FBRkQsUUFBVDs7QUFEb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBckM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0FWLFFBQU9JLGdCQUFQLENBQXdCLFFBQXhCO0FBQUEsdUZBQWtDLGtCQUFNRyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQmIsY0FEMkIsR0FDakJjLEtBQUtDLEtBQUwsQ0FBV0YsTUFBTUcsSUFBakIsQ0FEaUI7QUFFM0JDLFdBRjJCLEdBRXBCakIsUUFBUWlCLElBQVIsSUFBZ0IsRUFGSTs7QUFBQSxZQUk3QkEsS0FBS0MsVUFBTCxDQUFnQixVQUFoQixDQUo2QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzQkFLaENqQixRQUxnQztBQUFBO0FBQUEsY0FLakIsMkJBTGlCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFsQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQUssUUFBT0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsaUJBQVM7QUFDMUMsTUFBTVYsVUFBVWMsS0FBS0MsS0FBTCxDQUFXRixNQUFNRyxJQUFqQixDQUFoQjtBQUNBLE1BQU1HLFFBQVFqQixVQUFkOztBQUVBLE1BQUlpQixNQUFNQyxFQUFOLGtCQUF3QnBCLFFBQVFxQixPQUFwQyxFQUErQztBQUM5Q3BCLFlBQVMsK0JBQWdCLEVBQUNxQixZQUFZQyxLQUFLQyxHQUFMLEVBQWIsRUFBaEIsQ0FBVDtBQUNBO0FBQ0QsRUFQRDtBQVFBLENBdkNjLEMiLCJmaWxlIjoibGlzdGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHtjcmVhdGVQcm9taXNlVGh1bmtBY3Rpb259IGZyb20gJy4vcHJvbWlzZS10aHVuay1hY3Rpb24nO1xuaW1wb3J0IGxvYWRQYXR0ZXJuRGVtbyBmcm9tICcuL2xvYWQtcGF0dGVybi1kZW1vJztcbmltcG9ydCBsb2FkU2NoZW1hIGZyb20gJy4vbG9hZC1zY2hlbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9taXNlVGh1bmtBY3Rpb24oJ0xJU1RFTicsIChwYXlsb2FkLCBkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblx0aWYgKCFnbG9iYWwuRXZlbnRTb3VyY2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzID0gZ2V0U3RhdGUoKTtcblx0Y29uc3Qgc291cmNlID0gbmV3IGdsb2JhbC5FdmVudFNvdXJjZSh1cmwucmVzb2x2ZShzLmJhc2UsIHBheWxvYWQudXJsKSk7XG5cblx0c291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IgPT4ge1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdFUlJPUl9IRUFSVEJFQVQnLFxuXHRcdFx0cGF5bG9hZDogZXJyb3Jcblx0XHR9KTtcblx0fSk7XG5cblx0c291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2hlYXJ0YmVhdCcsIGFzeW5jIGV2ZW50ID0+IHtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnTElTVEVOX0hFQVJUQkVBVCcsXG5cdFx0XHRwYXlsb2FkOiBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG5cdFx0fSk7XG5cdH0pO1xuXG5cdHNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyBldmVudCA9PiB7XG5cdFx0Y29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cdFx0Y29uc3QgZmlsZSA9IHBheWxvYWQuZmlsZSB8fCAnJztcblxuXHRcdGlmIChmaWxlLnN0YXJ0c1dpdGgoJ3BhdHRlcm5zJykpIHtcblx0XHRcdGRpc3BhdGNoKGF3YWl0IGxvYWRTY2hlbWEoKSk7XG5cdFx0fVxuXHR9KTtcblxuXHRzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcigncmVsb2FkJywgZXZlbnQgPT4ge1xuXHRcdGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXHRcdGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcblxuXHRcdGlmIChzdGF0ZS5pZCA9PT0gYHBhdHRlcm4vJHtwYXlsb2FkLnBhdHRlcm59YCkge1xuXHRcdFx0ZGlzcGF0Y2gobG9hZFBhdHRlcm5EZW1vKHtyZWxvYWRUaW1lOiBEYXRlLm5vdygpfSkpO1xuXHRcdH1cblx0fSk7XG59KTtcbiJdfQ==