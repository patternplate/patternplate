'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _getHookTree = require('./get-hook-tree');

var _getHookTree2 = _interopRequireDefault(_getHookTree);

var _load = require('./load');

var _load2 = _interopRequireDefault(_load);

var _runHookTree = require('./run-hook-tree');

var _runHookTree2 = _interopRequireDefault(_runHookTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (application) {
		// load the system hooks
		const hooks = yield (0, _load2.default)(application, (0, _path.resolve)(application.runtime.base, 'application', 'hooks'));

		// allow access to all the hooks
		application.hooks = hooks;

		// register them
		const registered = yield Promise.all(hooks.map((() => {
			var _ref2 = _asyncToGenerator(function* (hook) {
				return hook.register(application);
			});

			return function (_x2) {
				return _ref2.apply(this, arguments);
			};
		})()));

		// get interpendence tree
		const tree = (0, _getHookTree2.default)(registered);

		// run the tree, wait for all dependencies
		const jobs = (0, _runHookTree2.default)(tree, registered, application, {});
		yield Promise.all(jobs);

		return application;
	});

	return function (_x) {
		return _ref.apply(this, arguments);
	};
})();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uIiwiaG9va3MiLCJydW50aW1lIiwiYmFzZSIsInJlZ2lzdGVyZWQiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaG9vayIsInJlZ2lzdGVyIiwidHJlZSIsImpvYnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzhCQUVlLFdBQWVBLFdBQWYsRUFBNEI7QUFDMUM7QUFDQSxRQUFNQyxRQUFRLE1BQU0sb0JBQUtELFdBQUwsRUFBa0IsbUJBQVFBLFlBQVlFLE9BQVosQ0FBb0JDLElBQTVCLEVBQWtDLGFBQWxDLEVBQWlELE9BQWpELENBQWxCLENBQXBCOztBQUVBO0FBQ0FILGNBQVlDLEtBQVosR0FBb0JBLEtBQXBCOztBQUVBO0FBQ0EsUUFBTUcsYUFBYSxNQUFNQyxRQUFRQyxHQUFSLENBQVlMLE1BQU1NLEdBQU47QUFBQSxpQ0FBVSxXQUFNQyxJQUFOO0FBQUEsV0FBY0EsS0FBS0MsUUFBTCxDQUFjVCxXQUFkLENBQWQ7QUFBQSxJQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVosQ0FBekI7O0FBRUE7QUFDQSxRQUFNVSxPQUFPLDJCQUFZTixVQUFaLENBQWI7O0FBRUE7QUFDQSxRQUFNTyxPQUFPLDJCQUFZRCxJQUFaLEVBQWtCTixVQUFsQixFQUE4QkosV0FBOUIsRUFBMkMsRUFBM0MsQ0FBYjtBQUNBLFFBQU1LLFFBQVFDLEdBQVIsQ0FBWUssSUFBWixDQUFOOztBQUVBLFNBQU9YLFdBQVA7QUFDQSxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0cmVzb2x2ZVxufSBmcm9tICdwYXRoJztcblxuaW1wb3J0IGdldEhvb2tUcmVlIGZyb20gJy4vZ2V0LWhvb2stdHJlZSc7XG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQnO1xuaW1wb3J0IHJ1bkhvb2tUcmVlIGZyb20gJy4vcnVuLWhvb2stdHJlZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKGFwcGxpY2F0aW9uKSB7XG5cdC8vIGxvYWQgdGhlIHN5c3RlbSBob29rc1xuXHRjb25zdCBob29rcyA9IGF3YWl0IGxvYWQoYXBwbGljYXRpb24sIHJlc29sdmUoYXBwbGljYXRpb24ucnVudGltZS5iYXNlLCAnYXBwbGljYXRpb24nLCAnaG9va3MnKSk7XG5cblx0Ly8gYWxsb3cgYWNjZXNzIHRvIGFsbCB0aGUgaG9va3Ncblx0YXBwbGljYXRpb24uaG9va3MgPSBob29rcztcblxuXHQvLyByZWdpc3RlciB0aGVtXG5cdGNvbnN0IHJlZ2lzdGVyZWQgPSBhd2FpdCBQcm9taXNlLmFsbChob29rcy5tYXAoYXN5bmMgaG9vayA9PiBob29rLnJlZ2lzdGVyKGFwcGxpY2F0aW9uKSkpO1xuXG5cdC8vIGdldCBpbnRlcnBlbmRlbmNlIHRyZWVcblx0Y29uc3QgdHJlZSA9IGdldEhvb2tUcmVlKHJlZ2lzdGVyZWQpO1xuXG5cdC8vIHJ1biB0aGUgdHJlZSwgd2FpdCBmb3IgYWxsIGRlcGVuZGVuY2llc1xuXHRjb25zdCBqb2JzID0gcnVuSG9va1RyZWUodHJlZSwgcmVnaXN0ZXJlZCwgYXBwbGljYXRpb24sIHt9KTtcblx0YXdhaXQgUHJvbWlzZS5hbGwoam9icyk7XG5cblx0cmV0dXJuIGFwcGxpY2F0aW9uO1xufTtcbiJdfQ==