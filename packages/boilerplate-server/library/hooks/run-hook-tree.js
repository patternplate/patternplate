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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL3J1bi1ob29rLXRyZWUuanMiXSwibmFtZXMiOlsicnVuSG9va1RyZWUiLCJ0cmVlIiwicmVnaXN0ZXJlZCIsImFwcGxpY2F0aW9uIiwiY2hlY2tsaXN0IiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImVudHJ5IiwiZW50cnlOYW1lIiwiZW50cnlEZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmN5TmFtZSIsImhvb2siLCJuYW1lIiwic3RhZ2VzIiwic3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBTXdCQSxXOztBQU54Qjs7QUFJQTs7Ozs7Ozs7OztBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCQyxVQUEzQixFQUF1Q0MsV0FBdkMsRUFBb0RDLFNBQXBELEVBQStEO0FBQzdFLFFBQU9DLE9BQU9DLE9BQVAsQ0FBZUwsSUFBZixFQUNMTSxHQURLO0FBQUEsK0JBQ0QsV0FBTUMsS0FBTixFQUFlO0FBQUEsK0JBQ29CQSxLQURwQjs7QUFBQSxTQUNaQyxTQURZO0FBQUEsU0FDREMsaUJBREM7O0FBRW5CLFFBQUssTUFBTUMsY0FBWCxpQ0FBaUNELGlCQUFqQyxJQUFvREQsU0FBcEQsSUFBZ0U7QUFDL0QsUUFBSSxDQUFDTCxVQUFVTyxjQUFWLENBQUwsRUFBZ0M7QUFDL0IsV0FBTUMsT0FBTyxrQkFBS1YsVUFBTCxFQUFpQixFQUFDVyxNQUFNRixjQUFQLEVBQWpCLENBQWI7QUFDQVAsZUFBVU8sY0FBVixJQUE0QkMsS0FBS0UsTUFBTCxDQUFZQyxLQUFaLEdBQzNCQyxRQUFRQyxPQUFSLEVBRDJCLEdBRTNCLHVCQUFRTCxJQUFSLEVBQWNULFdBQWQsQ0FGRDtBQUdBO0FBQ0QsVUFBTUMsVUFBVU8sY0FBVixDQUFOO0FBQ0E7QUFDRCxVQUFPUCxVQUFVSyxTQUFWLENBQVA7QUFDQSxHQWJLOztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFjQSIsImZpbGUiOiJydW4taG9vay10cmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0ZmluZFxufSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgcnVuSG9vayBmcm9tICcuL3J1bi1ob29rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuSG9va1RyZWUodHJlZSwgcmVnaXN0ZXJlZCwgYXBwbGljYXRpb24sIGNoZWNrbGlzdCkge1xuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXModHJlZSlcblx0XHQubWFwKGFzeW5jIGVudHJ5ID0+IHtcblx0XHRcdGNvbnN0IFtlbnRyeU5hbWUsIGVudHJ5RGVwZW5kZW5jaWVzXSA9IGVudHJ5O1xuXHRcdFx0Zm9yIChjb25zdCBkZXBlbmRlbmN5TmFtZSBvZiBbLi4uZW50cnlEZXBlbmRlbmNpZXMsIGVudHJ5TmFtZV0pIHtcblx0XHRcdFx0aWYgKCFjaGVja2xpc3RbZGVwZW5kZW5jeU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29uc3QgaG9vayA9IGZpbmQocmVnaXN0ZXJlZCwge25hbWU6IGRlcGVuZGVuY3lOYW1lfSk7XG5cdFx0XHRcdFx0Y2hlY2tsaXN0W2RlcGVuZGVuY3lOYW1lXSA9IGhvb2suc3RhZ2VzLnN0YXJ0ID9cblx0XHRcdFx0XHRcdFByb21pc2UucmVzb2x2ZSgpIDpcblx0XHRcdFx0XHRcdHJ1bkhvb2soaG9vaywgYXBwbGljYXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IGNoZWNrbGlzdFtkZXBlbmRlbmN5TmFtZV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2hlY2tsaXN0W2VudHJ5TmFtZV07XG5cdFx0fSk7XG59XG4iXX0=