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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2dldC1ob29rLWRlcGVuZGVuY2llcy5qcyJdLCJuYW1lcyI6WyJnZXRIb29rRGVwZW5kZW5jaWVzIiwiaG9va05hbWUiLCJyZWdpc3RlcmVkIiwiaG9vayIsIm5hbWUiLCJFcnJvciIsImFmdGVyIiwicmVkdWNlIiwiZGVwZW5kZW5jaWVzIiwic3BsaXQiLCJuYW1lU3BhY2UiLCJkZXBlbmRlbmN5TmFtZSIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBRXdCQSxtQjs7QUFGeEI7Ozs7QUFFZSxTQUFTQSxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUNDLFVBQXZDLEVBQW1EO0FBQ2hFLFFBQU1DLE9BQU8sa0JBQUtELFVBQUwsRUFBaUIsRUFBQ0UsTUFBTUgsUUFBUCxFQUFqQixDQUFiOztBQUVBLE1BQUksQ0FBQ0UsSUFBTCxFQUFXO0FBQ1QsVUFBTSxJQUFJRSxLQUFKLENBQVcsdUJBQXNCSixRQUFTLEVBQTFDLENBQU47QUFDRDs7QUFFRCxTQUFPRSxLQUFLRyxLQUFMLENBQVdDLE1BQVgsQ0FBa0IsQ0FBQ0MsWUFBRCxFQUFlRixLQUFmLEtBQXlCO0FBQUEsdUJBQ1pBLE1BQU1HLEtBQU4sQ0FBWSxHQUFaLENBRFk7O0FBQUE7O0FBQUEsVUFDekNDLFNBRHlDO0FBQUEsVUFDOUJDLGNBRDhCOzs7QUFHaEQsUUFBSUQsY0FBYyxPQUFkLElBQXlCLENBQUMsa0JBQUtSLFVBQUwsRUFBaUIsRUFBQ0UsTUFBTU8sY0FBUCxFQUFqQixDQUE5QixFQUF3RTtBQUN0RSxZQUFNLElBQUlOLEtBQUosQ0FDSCxrQ0FBaUNNLGNBQWUsUUFBT1YsUUFBUyxFQUQ3RCxDQUFOO0FBR0Q7O0FBRUQsV0FBT1MsY0FBYyxPQUFkLEdBQ0hGLGFBQWFJLE1BQWIsOEJBQ0taLG9CQUFvQlcsY0FBcEIsRUFBb0NULFVBQXBDLENBREwsSUFFRVMsY0FGRixHQURHLEdBS0hILFlBTEo7QUFNRCxHQWZNLEVBZUosRUFmSSxDQUFQO0FBZ0JEIiwiZmlsZSI6ImdldC1ob29rLWRlcGVuZGVuY2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmluZH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SG9va0RlcGVuZGVuY2llcyhob29rTmFtZSwgcmVnaXN0ZXJlZCkge1xuICBjb25zdCBob29rID0gZmluZChyZWdpc3RlcmVkLCB7bmFtZTogaG9va05hbWV9KTtcblxuICBpZiAoIWhvb2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGhvb2sgJHtob29rTmFtZX1gKTtcbiAgfVxuXG4gIHJldHVybiBob29rLmFmdGVyLnJlZHVjZSgoZGVwZW5kZW5jaWVzLCBhZnRlcikgPT4ge1xuICAgIGNvbnN0IFtuYW1lU3BhY2UsIGRlcGVuZGVuY3lOYW1lXSA9IGFmdGVyLnNwbGl0KCc6Jyk7XG5cbiAgICBpZiAobmFtZVNwYWNlID09PSAnaG9va3MnICYmICFmaW5kKHJlZ2lzdGVyZWQsIHtuYW1lOiBkZXBlbmRlbmN5TmFtZX0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBDb3VsZCBub3QgZmluZCBob29rIGRlcGVuZGVuY3kgJHtkZXBlbmRlbmN5TmFtZX0gZm9yICR7aG9va05hbWV9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZVNwYWNlID09PSAnaG9va3MnXG4gICAgICA/IGRlcGVuZGVuY2llcy5jb25jYXQoW1xuICAgICAgICAgIC4uLmdldEhvb2tEZXBlbmRlbmNpZXMoZGVwZW5kZW5jeU5hbWUsIHJlZ2lzdGVyZWQpLFxuICAgICAgICAgIGRlcGVuZGVuY3lOYW1lXG4gICAgICAgIF0pXG4gICAgICA6IGRlcGVuZGVuY2llcztcbiAgfSwgW10pO1xufVxuIl19