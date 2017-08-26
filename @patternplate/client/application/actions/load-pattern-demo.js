'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _demo = require('../selectors/demo');

var demo = _interopRequireWildcard(_demo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
			var getSrc, uri, response, body;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							getSrc = src(getState);
							uri = getSrc();

							if (uri) {
								_context.next = 4;
								break;
							}

							return _context.abrupt('return');

						case 4:

							dispatch({
								type: 'LOAD_PATTERN_DEMO_START',
								payload: { id: uri }
							});

							_context.next = 7;
							return (0, _isomorphicFetch2.default)(uri, {
								headers: { Accept: 'text/html' }
							});

						case 7:
							response = _context.sent;

							if (!(uri !== getSrc())) {
								_context.next = 10;
								break;
							}

							return _context.abrupt('return');

						case 10:
							_context.next = 12;
							return response.text();

						case 12:
							body = _context.sent;

							if (!(uri !== getSrc())) {
								_context.next = 15;
								break;
							}

							return _context.abrupt('return');

						case 15:
							if (!(response.status >= 400)) {
								_context.next = 17;
								break;
							}

							return _context.abrupt('return', dispatch({
								type: 'LOAD_PATTERN_DEMO_ERROR',
								payload: { id: uri, error: body }
							}));

						case 17:

							dispatch({
								type: 'LOAD_PATTERN_DEMO_SUCCESS',
								payload: { id: uri, contents: body }
							});

						case 18:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();
};

function src(getState) {
	return function () {
		return demo.selectSrc(getState());
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2xvYWQtcGF0dGVybi1kZW1vLmpzIl0sIm5hbWVzIjpbImRlbW8iLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiZ2V0U3JjIiwic3JjIiwidXJpIiwidHlwZSIsInBheWxvYWQiLCJpZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJyZXNwb25zZSIsInRleHQiLCJib2R5Iiwic3RhdHVzIiwiZXJyb3IiLCJjb250ZW50cyIsInNlbGVjdFNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxJOzs7Ozs7a0JBRUcsWUFBTTtBQUNwQjtBQUFBLHNGQUFPLGlCQUFPQyxRQUFQLEVBQWlCQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQUMsYUFEQSxHQUNTQyxJQUFJRixRQUFKLENBRFQ7QUFFQUcsVUFGQSxHQUVNRixRQUZOOztBQUFBLFdBSURFLEdBSkM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBUU5KLGdCQUFTO0FBQ1JLLGNBQU0seUJBREU7QUFFUkMsaUJBQVMsRUFBQ0MsSUFBSUgsR0FBTDtBQUZELFFBQVQ7O0FBUk07QUFBQSxjQWFpQiwrQkFBTUEsR0FBTixFQUFXO0FBQ2pDSSxpQkFBUyxFQUFDQyxRQUFRLFdBQVQ7QUFEd0IsUUFBWCxDQWJqQjs7QUFBQTtBQWFBQyxlQWJBOztBQUFBLGFBa0JGTixRQUFRRixRQWxCTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUEsY0FzQmFRLFNBQVNDLElBQVQsRUF0QmI7O0FBQUE7QUFzQkFDLFdBdEJBOztBQUFBLGFBeUJGUixRQUFRRixRQXpCTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLGFBNkJGUSxTQUFTRyxNQUFULElBQW1CLEdBN0JqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSx3Q0E4QkViLFNBQVM7QUFDZkssY0FBTSx5QkFEUztBQUVmQyxpQkFBUyxFQUFDQyxJQUFJSCxHQUFMLEVBQVVVLE9BQU9GLElBQWpCO0FBRk0sUUFBVCxDQTlCRjs7QUFBQTs7QUFvQ05aLGdCQUFTO0FBQ1JLLGNBQU0sMkJBREU7QUFFUkMsaUJBQVMsRUFBQ0MsSUFBSUgsR0FBTCxFQUFVVyxVQUFVSCxJQUFwQjtBQUZELFFBQVQ7O0FBcENNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5Q0EsQzs7QUFFRCxTQUFTVCxHQUFULENBQWFGLFFBQWIsRUFBdUI7QUFDdEIsUUFBTztBQUFBLFNBQU1GLEtBQUtpQixTQUFMLENBQWVmLFVBQWYsQ0FBTjtBQUFBLEVBQVA7QUFDQSIsImZpbGUiOiJsb2FkLXBhdHRlcm4tZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCAqIGFzIGRlbW8gZnJvbSAnLi4vc2VsZWN0b3JzL2RlbW8nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG5cdFx0Y29uc3QgZ2V0U3JjID0gc3JjKGdldFN0YXRlKTtcblx0XHRjb25zdCB1cmkgPSBnZXRTcmMoKTtcblxuXHRcdGlmICghdXJpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0xPQURfUEFUVEVSTl9ERU1PX1NUQVJUJyxcblx0XHRcdHBheWxvYWQ6IHtpZDogdXJpfVxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmksIHtcblx0XHRcdGhlYWRlcnM6IHtBY2NlcHQ6ICd0ZXh0L2h0bWwnfVxuXHRcdH0pO1xuXG5cdFx0Ly8gQmFpbCBpZiB0aGUgc3JjIGNoYW5nZWQgaW4gdGhlIG1lYW50aW1lXG5cdFx0aWYgKHVyaSAhPT0gZ2V0U3JjKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBib2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXG5cdFx0Ly8gQmFpbCBpZiB0aGUgc3JjIGNoYW5nZWQgaW4gdGhlIG1lYW50aW1lXG5cdFx0aWYgKHVyaSAhPT0gZ2V0U3JjKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0cmV0dXJuIGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogJ0xPQURfUEFUVEVSTl9ERU1PX0VSUk9SJyxcblx0XHRcdFx0cGF5bG9hZDoge2lkOiB1cmksIGVycm9yOiBib2R5fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogJ0xPQURfUEFUVEVSTl9ERU1PX1NVQ0NFU1MnLFxuXHRcdFx0cGF5bG9hZDoge2lkOiB1cmksIGNvbnRlbnRzOiBib2R5fVxuXHRcdH0pO1xuXHR9O1xufTtcblxuZnVuY3Rpb24gc3JjKGdldFN0YXRlKSB7XG5cdHJldHVybiAoKSA9PiBkZW1vLnNlbGVjdFNyYyhnZXRTdGF0ZSgpKTtcbn1cbiJdfQ==