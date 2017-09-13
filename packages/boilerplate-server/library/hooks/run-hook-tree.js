'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = runHookTree;

var _lodash = require('lodash');

var _runHook = require('./run-hook');

var _runHook2 = _interopRequireDefault(_runHook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function runHookTree(tree, registered, application, checklist) {
  return Object.entries(tree).map((() => {
    var _ref = _asyncToGenerator(function* (entry) {
      var _entry = _slicedToArray(entry, 2);

      const entryName = _entry[0];
      const entryDependencies = _entry[1];

      for (const dependencyName of [].concat(_toConsumableArray(entryDependencies), [entryName])) {
        if (!checklist[dependencyName]) {
          const hook = (0, _lodash.find)(registered, { name: dependencyName });
          checklist[dependencyName] = hook.stages.start ? Promise.resolve() : (0, _runHook2.default)(hook, application);
        }
        yield checklist[dependencyName];
      }
      return checklist[entryName];
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })());
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL3J1bi1ob29rLXRyZWUuanMiXSwibmFtZXMiOlsicnVuSG9va1RyZWUiLCJ0cmVlIiwicmVnaXN0ZXJlZCIsImFwcGxpY2F0aW9uIiwiY2hlY2tsaXN0IiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwiZW50cnlOYW1lIiwiZW50cnlEZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmN5TmFtZSIsImhvb2siLCJuYW1lIiwic3RhZ2VzIiwic3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBSXdCQSxXOztBQUp4Qjs7QUFFQTs7Ozs7Ozs7OztBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxVQUEzQixFQUF1Q0MsV0FBdkMsRUFBb0RDLFNBQXBELEVBQStEO0FBQzVFLFNBQU9DLE9BQU9DLE9BQVAsQ0FBZUwsSUFBZixFQUFxQk0sR0FBckI7QUFBQSxpQ0FBeUIsV0FBTUMsS0FBTixFQUFlO0FBQUEsa0NBQ05BLEtBRE07O0FBQUEsWUFDdENDLFNBRHNDO0FBQUEsWUFDM0JDLGlCQUQyQjs7QUFFN0MsV0FBSyxNQUFNQyxjQUFYLGlDQUFpQ0QsaUJBQWpDLElBQW9ERCxTQUFwRCxJQUFnRTtBQUM5RCxZQUFJLENBQUNMLFVBQVVPLGNBQVYsQ0FBTCxFQUFnQztBQUM5QixnQkFBTUMsT0FBTyxrQkFBS1YsVUFBTCxFQUFpQixFQUFDVyxNQUFNRixjQUFQLEVBQWpCLENBQWI7QUFDQVAsb0JBQVVPLGNBQVYsSUFBNEJDLEtBQUtFLE1BQUwsQ0FBWUMsS0FBWixHQUN4QkMsUUFBUUMsT0FBUixFQUR3QixHQUV4Qix1QkFBUUwsSUFBUixFQUFjVCxXQUFkLENBRko7QUFHRDtBQUNELGNBQU1DLFVBQVVPLGNBQVYsQ0FBTjtBQUNEO0FBQ0QsYUFBT1AsVUFBVUssU0FBVixDQUFQO0FBQ0QsS0FaTTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBYUQiLCJmaWxlIjoicnVuLWhvb2stdHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmluZH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHJ1bkhvb2sgZnJvbSAnLi9ydW4taG9vayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bkhvb2tUcmVlKHRyZWUsIHJlZ2lzdGVyZWQsIGFwcGxpY2F0aW9uLCBjaGVja2xpc3QpIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRyZWUpLm1hcChhc3luYyBlbnRyeSA9PiB7XG4gICAgY29uc3QgW2VudHJ5TmFtZSwgZW50cnlEZXBlbmRlbmNpZXNdID0gZW50cnk7XG4gICAgZm9yIChjb25zdCBkZXBlbmRlbmN5TmFtZSBvZiBbLi4uZW50cnlEZXBlbmRlbmNpZXMsIGVudHJ5TmFtZV0pIHtcbiAgICAgIGlmICghY2hlY2tsaXN0W2RlcGVuZGVuY3lOYW1lXSkge1xuICAgICAgICBjb25zdCBob29rID0gZmluZChyZWdpc3RlcmVkLCB7bmFtZTogZGVwZW5kZW5jeU5hbWV9KTtcbiAgICAgICAgY2hlY2tsaXN0W2RlcGVuZGVuY3lOYW1lXSA9IGhvb2suc3RhZ2VzLnN0YXJ0XG4gICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgIDogcnVuSG9vayhob29rLCBhcHBsaWNhdGlvbik7XG4gICAgICB9XG4gICAgICBhd2FpdCBjaGVja2xpc3RbZGVwZW5kZW5jeU5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gY2hlY2tsaXN0W2VudHJ5TmFtZV07XG4gIH0pO1xufVxuIl19