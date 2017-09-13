'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = navigate;
function navigate(id, navigation) {
	var scope = navigation;
	var fragments = id.split('/');

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = fragments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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