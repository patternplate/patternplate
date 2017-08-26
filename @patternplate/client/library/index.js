'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var server = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(opts) {
		var options;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						options = (0, _extends3.default)({
							name: 'patternplate-client',
							cwd: (0, _findRoot2.default)(__dirname)
						}, opts);
						_context.next = 3;
						return (0, _boilerplateServer2.default)(options);

					case 3:
						return _context.abrupt('return', _context.sent);

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function server(_x) {
		return _ref.apply(this, arguments);
	};
}();

var _boilerplateServer = require('boilerplate-server');

var _boilerplateServer2 = _interopRequireDefault(_boilerplateServer);

var _findRoot = require('find-root');

var _findRoot2 = _interopRequireDefault(_findRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = server;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9saWJyYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIm9wdHMiLCJvcHRpb25zIiwibmFtZSIsImN3ZCIsIl9fZGlybmFtZSIsInNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRkFHQSxpQkFBc0JBLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxhQURQO0FBRUVDLGFBQU0scUJBRlI7QUFHRUMsWUFBSyx3QkFBU0MsU0FBVDtBQUhQLFNBSUtKLElBSkw7QUFBQTtBQUFBLGFBT2MsaUNBQVlDLE9BQVosQ0FQZDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEU7O2lCQUFlSSxNOzs7OztBQUhmOzs7O0FBQ0E7Ozs7OztrQkFZZUEsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBib2lsZXJwbGF0ZSBmcm9tICdib2lsZXJwbGF0ZS1zZXJ2ZXInO1xuaW1wb3J0IGZpbmRSb290IGZyb20gJ2ZpbmQtcm9vdCc7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlcnZlcihvcHRzKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0bmFtZTogJ3BhdHRlcm5wbGF0ZS1jbGllbnQnLFxuXHRcdGN3ZDogZmluZFJvb3QoX19kaXJuYW1lKSxcblx0XHQuLi5vcHRzXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGJvaWxlcnBsYXRlKG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG4iXX0=