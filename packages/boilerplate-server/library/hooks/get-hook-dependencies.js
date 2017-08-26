'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = getHookDependencies;

var _lodash = require('lodash');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function getHookDependencies(hookName, registered) {
	const hook = (0, _lodash.find)(registered, { name: hookName });

	if (!hook) {
		throw new Error(`Could not find hook ${hookName}`);
	}

	return hook.after.reduce((dependencies, after) => {
		var _after$split = after.split(':');

		var _after$split2 = _slicedToArray(_after$split, 2);

		const nameSpace = _after$split2[0];
		const dependencyName = _after$split2[1];


		if (nameSpace === 'hooks' && !(0, _lodash.find)(registered, { name: dependencyName })) {
			throw new Error(`Could not find hook dependency ${dependencyName} for ${hookName}`);
		}

		return nameSpace === 'hooks' ? dependencies.concat([].concat(_toConsumableArray(getHookDependencies(dependencyName, registered)), [dependencyName])) : dependencies;
	}, []);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2dldC1ob29rLWRlcGVuZGVuY2llcy5qcyJdLCJuYW1lcyI6WyJnZXRIb29rRGVwZW5kZW5jaWVzIiwiaG9va05hbWUiLCJyZWdpc3RlcmVkIiwiaG9vayIsIm5hbWUiLCJFcnJvciIsImFmdGVyIiwicmVkdWNlIiwiZGVwZW5kZW5jaWVzIiwic3BsaXQiLCJuYW1lU3BhY2UiLCJkZXBlbmRlbmN5TmFtZSIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBRXdCQSxtQjs7QUFGeEI7Ozs7QUFFZSxTQUFTQSxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUNDLFVBQXZDLEVBQW1EO0FBQ2pFLE9BQU1DLE9BQU8sa0JBQUtELFVBQUwsRUFBaUIsRUFBQ0UsTUFBTUgsUUFBUCxFQUFqQixDQUFiOztBQUVBLEtBQUksQ0FBQ0UsSUFBTCxFQUFXO0FBQ1YsUUFBTSxJQUFJRSxLQUFKLENBQVcsdUJBQXNCSixRQUFTLEVBQTFDLENBQU47QUFDQTs7QUFFRCxRQUFPRSxLQUFLRyxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBQ0MsWUFBRCxFQUFlRixLQUFmLEtBQXlCO0FBQUEscUJBQ2JBLE1BQU1HLEtBQU4sQ0FBWSxHQUFaLENBRGE7O0FBQUE7O0FBQUEsUUFDMUNDLFNBRDBDO0FBQUEsUUFDL0JDLGNBRCtCOzs7QUFHakQsTUFBSUQsY0FBYyxPQUFkLElBQXlCLENBQUMsa0JBQUtSLFVBQUwsRUFBaUIsRUFBQ0UsTUFBTU8sY0FBUCxFQUFqQixDQUE5QixFQUF3RTtBQUN2RSxTQUFNLElBQUlOLEtBQUosQ0FBVyxrQ0FBaUNNLGNBQWUsUUFBT1YsUUFBUyxFQUEzRSxDQUFOO0FBQ0E7O0FBRUQsU0FBT1MsY0FBYyxPQUFkLEdBQXdCRixhQUFhSSxNQUFiLDhCQUMzQlosb0JBQW9CVyxjQUFwQixFQUFvQ1QsVUFBcEMsQ0FEMkIsSUFFOUJTLGNBRjhCLEdBQXhCLEdBR0ZILFlBSEw7QUFJQSxFQVhNLEVBV0osRUFYSSxDQUFQO0FBWUEiLCJmaWxlIjoiZ2V0LWhvb2stZGVwZW5kZW5jaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5kfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIb29rRGVwZW5kZW5jaWVzKGhvb2tOYW1lLCByZWdpc3RlcmVkKSB7XG5cdGNvbnN0IGhvb2sgPSBmaW5kKHJlZ2lzdGVyZWQsIHtuYW1lOiBob29rTmFtZX0pO1xuXG5cdGlmICghaG9vaykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgaG9vayAke2hvb2tOYW1lfWApO1xuXHR9XG5cblx0cmV0dXJuIGhvb2suYWZ0ZXIucmVkdWNlKChkZXBlbmRlbmNpZXMsIGFmdGVyKSA9PiB7XG5cdFx0Y29uc3QgW25hbWVTcGFjZSwgZGVwZW5kZW5jeU5hbWVdID0gYWZ0ZXIuc3BsaXQoJzonKTtcblxuXHRcdGlmIChuYW1lU3BhY2UgPT09ICdob29rcycgJiYgIWZpbmQocmVnaXN0ZXJlZCwge25hbWU6IGRlcGVuZGVuY3lOYW1lfSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgaG9vayBkZXBlbmRlbmN5ICR7ZGVwZW5kZW5jeU5hbWV9IGZvciAke2hvb2tOYW1lfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiBuYW1lU3BhY2UgPT09ICdob29rcycgPyBkZXBlbmRlbmNpZXMuY29uY2F0KFtcblx0XHRcdC4uLmdldEhvb2tEZXBlbmRlbmNpZXMoZGVwZW5kZW5jeU5hbWUsIHJlZ2lzdGVyZWQpLFxuXHRcdFx0ZGVwZW5kZW5jeU5hbWVcblx0XHRdKSA6IGRlcGVuZGVuY2llcztcblx0fSwgW10pO1xufVxuIl19