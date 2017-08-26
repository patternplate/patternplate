'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = reload;


function reload() {
	var _this = this;

	return function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
			var actions;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							actions = [(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
								return _regenerator2.default.wrap(function _callee$(_context) {
									while (1) {
										switch (_context.prev = _context.next) {
											case 0:
												_context.t0 = dispatch;
												_context.next = 3;
												return (0, _.loadSchema)();

											case 3:
												_context.t1 = _context.sent;
												return _context.abrupt('return', (0, _context.t0)(_context.t1));

											case 5:
											case 'end':
												return _context.stop();
										}
									}
								}, _callee, _this);
							}))];
							_context2.next = 3;
							return _promise2.default.all(actions.map(dispatch));

						case 3:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this);
		}));

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	}();
}

reload.type = 'RELOAD';
reload.key = '';
reload.property = '';
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3JlbG9hZC5qcyJdLCJuYW1lcyI6WyJyZWxvYWQiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJhbGwiLCJtYXAiLCJ0eXBlIiwia2V5IiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O2tCQUVlQSxNOzs7QUFFZixTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQ2pCO0FBQUEsc0ZBQU8sa0JBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FDLGNBREEsR0FDVSwwRUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQVlELFFBQVo7QUFBQTtBQUFBLG1CQUEyQixtQkFBM0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGUsR0FEVjtBQUFBO0FBQUEsY0FNQSxrQkFBUUUsR0FBUixDQUFZRCxRQUFRRSxHQUFSLENBQVlILFFBQVosQ0FBWixDQU5BOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTs7QUFFREQsT0FBT0ssSUFBUCxHQUFjLFFBQWQ7QUFDQUwsT0FBT00sR0FBUCxHQUFhLEVBQWI7QUFDQU4sT0FBT08sUUFBUCxHQUFrQixFQUFsQiIsImZpbGUiOiJyZWxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRTY2hlbWF9IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgcmVsb2FkO1xuXG5mdW5jdGlvbiByZWxvYWQoKSB7XG5cdHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XG5cdFx0Y29uc3QgYWN0aW9ucyA9IFtcblx0XHRcdGFzeW5jICgpID0+IGRpc3BhdGNoKGF3YWl0IGxvYWRTY2hlbWEoKSksXG5cdFx0XHQvLyBsb2FkUGF0dGVybih7cmVsb2FkVGltZTogRGF0ZS5ub3coKX0pXG5cdFx0XTtcblxuXHRcdGF3YWl0IFByb21pc2UuYWxsKGFjdGlvbnMubWFwKGRpc3BhdGNoKSk7XG5cdH07XG59XG5cbnJlbG9hZC50eXBlID0gJ1JFTE9BRCc7XG5yZWxvYWQua2V5ID0gJyc7XG5yZWxvYWQucHJvcGVydHkgPSAnJztcbiJdfQ==