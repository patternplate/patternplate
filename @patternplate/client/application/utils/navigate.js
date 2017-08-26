'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = navigate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigate(id, navigation) {
	var scope = navigation;
	var fragments = id.split('/');

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _getIterator3.default)(fragments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var fragment = _step.value;

			if (scope && fragment in scope) {
				scope = scope[fragment];
				continue;
			}

			if (scope && scope.children && fragment in scope.children) {
				scope = scope.children[fragment];
				continue;
			}

			return null;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return scope;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9uYXZpZ2F0ZS5qcyJdLCJuYW1lcyI6WyJuYXZpZ2F0ZSIsImlkIiwibmF2aWdhdGlvbiIsInNjb3BlIiwiZnJhZ21lbnRzIiwic3BsaXQiLCJmcmFnbWVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUF3QkEsUTs7OztBQUFULFNBQVNBLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCQyxVQUF0QixFQUFrQztBQUNoRCxLQUFJQyxRQUFRRCxVQUFaO0FBQ0EsS0FBTUUsWUFBWUgsR0FBR0ksS0FBSCxDQUFTLEdBQVQsQ0FBbEI7O0FBRmdEO0FBQUE7QUFBQTs7QUFBQTtBQUloRCxrREFBdUJELFNBQXZCLDRHQUFrQztBQUFBLE9BQXZCRSxRQUF1Qjs7QUFDakMsT0FBSUgsU0FBU0csWUFBWUgsS0FBekIsRUFBZ0M7QUFDL0JBLFlBQVFBLE1BQU1HLFFBQU4sQ0FBUjtBQUNBO0FBQ0E7O0FBRUQsT0FBSUgsU0FBU0EsTUFBTUksUUFBZixJQUEyQkQsWUFBWUgsTUFBTUksUUFBakQsRUFBMkQ7QUFDMURKLFlBQVFBLE1BQU1JLFFBQU4sQ0FBZUQsUUFBZixDQUFSO0FBQ0E7QUFDQTs7QUFFRCxVQUFPLElBQVA7QUFDQTtBQWhCK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQmhELFFBQU9ILEtBQVA7QUFDQSIsImZpbGUiOiJuYXZpZ2F0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmlnYXRlKGlkLCBuYXZpZ2F0aW9uKSB7XG5cdGxldCBzY29wZSA9IG5hdmlnYXRpb247XG5cdGNvbnN0IGZyYWdtZW50cyA9IGlkLnNwbGl0KCcvJyk7XG5cblx0Zm9yIChjb25zdCBmcmFnbWVudCBvZiBmcmFnbWVudHMpIHtcblx0XHRpZiAoc2NvcGUgJiYgZnJhZ21lbnQgaW4gc2NvcGUpIHtcblx0XHRcdHNjb3BlID0gc2NvcGVbZnJhZ21lbnRdO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlICYmIHNjb3BlLmNoaWxkcmVuICYmIGZyYWdtZW50IGluIHNjb3BlLmNoaWxkcmVuKSB7XG5cdFx0XHRzY29wZSA9IHNjb3BlLmNoaWxkcmVuW2ZyYWdtZW50XTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHJldHVybiBzY29wZTtcbn1cbiJdfQ==