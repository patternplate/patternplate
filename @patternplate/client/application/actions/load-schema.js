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

var _fetch = require('../utils/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _promiseThunkAction.createPromiseThunkAction)('LOAD_SCHEMA', function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_, __, getState) {
		var uri, response;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						uri = _url2.default.resolve(getState().base, 'api');
						_context.next = 3;
						return (0, _fetch2.default)(uri);

					case 3:
						response = _context.sent;
						return _context.abrupt('return', response.json());

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function (_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}());
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2xvYWQtc2NoZW1hLmpzIl0sIm5hbWVzIjpbIl8iLCJfXyIsImdldFN0YXRlIiwidXJpIiwicmVzb2x2ZSIsImJhc2UiLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O2tCQUVlLGtEQUF5QixhQUF6QjtBQUFBLHFGQUF3QyxpQkFBT0EsQ0FBUCxFQUFVQyxFQUFWLEVBQWNDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hEQyxTQURnRCxHQUMxQyxjQUFJQyxPQUFKLENBQVlGLFdBQVdHLElBQXZCLEVBQTZCLEtBQTdCLENBRDBDO0FBQUE7QUFBQSxhQUUvQixxQkFBTUYsR0FBTixDQUYrQjs7QUFBQTtBQUVoREcsY0FGZ0Q7QUFBQSx1Q0FHL0NBLFNBQVNDLElBQVQsRUFIK0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBeEM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSSIsImZpbGUiOiJsb2FkLXNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCB7Y3JlYXRlUHJvbWlzZVRodW5rQWN0aW9ufSBmcm9tICcuL3Byb21pc2UtdGh1bmstYWN0aW9uJztcbmltcG9ydCBmZXRjaCBmcm9tICcuLi91dGlscy9mZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb21pc2VUaHVua0FjdGlvbignTE9BRF9TQ0hFTUEnLCBhc3luYyAoXywgX18sIGdldFN0YXRlKSA9PiB7XG5cdGNvbnN0IHVyaSA9IHVybC5yZXNvbHZlKGdldFN0YXRlKCkuYmFzZSwgJ2FwaScpO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSk7XG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XG59KTtcbiJdfQ==