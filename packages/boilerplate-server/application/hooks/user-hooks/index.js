'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _fs = require('../../../library/utilities/fs');

var _getHookTree = require('../../../library/hooks/get-hook-tree');

var _getHookTree2 = _interopRequireDefault(_getHookTree);

var _load = require('../../../library/hooks/load');

var _load2 = _interopRequireDefault(_load);

var _runHookTree = require('../../../library/hooks/run-hook-tree');

var _runHookTree2 = _interopRequireDefault(_runHookTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
	configurationKey: 'hooks',
	after: ['hooks:configure:start:after'],
	start: function start(application) {
		var _this = this;

		return _asyncToGenerator(function* () {
			const coreHookPath = (0, _path.resolve)(application.runtime.base, application.configuration.paths.hooks);
			_this.configuration.path = Array.isArray(_this.configuration.path) ? _this.configuration.path : [_this.configuration.path];

			const userHookPaths = [].concat(_toConsumableArray(_this.configuration.path.reduce(function (items, item) {
				return [].concat(_toConsumableArray(items), _toConsumableArray(application.runtime.cwds.map(function (cwd) {
					return (0, _path.resolve)(cwd, item);
				})));
			}, []).filter(function (item) {
				return item !== coreHookPath;
			})));

			let userHooks = [];

			// load user hooks
			for (const userHookPath of userHookPaths) {
				if ((yield (0, _fs.exists)(userHookPath)) === false) {
					// eslint-disable-line
					continue;
				} else {
					application.log.debug(`Loading user hooks from ${userHookPath}...`);
				}

				try {
					const loadedHooks = (0, _load2.default)(application, userHookPath, true);
					userHooks = userHooks.concat(loadedHooks);
					application.log.debug(`Loaded ${loadedHooks.length} user hooks: ${loadedHooks.map(function (loadedHook) {
						return loadedHook.name;
					})}`);
				} catch (error) {
					application.log.error(`Failed loading hooks from ${userHookPath}: ${error.message}`);
					if (error.stack) {
						application.log.error(`${error.stack}`);
					}
					throw error;
				}
			}

			// Let the last user hook with a given name reign
			userHooks = [].concat(_toConsumableArray(new Set(userHooks.reverse()))).reverse();

			userHooks = userHooks.map(function (userHook) {
				// Detect hooks conflicting with core hooks
				const conflictingCoreHook = application.hooks.filter(function (coreHook) {
					return coreHook.name === userHook.name;
				})[0];
				if (conflictingCoreHook) {
					throw new Error(`Hook "${userHook.name}" from ${userHook.requirePath} conflicts with core hook "${conflictingCoreHook.name}", will not load.`);
				}
				return userHook;
			}).filter(Boolean);

			const registered = [].concat(_toConsumableArray(application.hooks), _toConsumableArray(userHooks)).map(function (hook) {
				return hook.register(application);
			});

			const jobs = (0, _runHookTree2.default)((0, _getHookTree2.default)(registered), registered, application, {});
			yield Promise.all(jobs);
			application.hooks = registered;
			return _this;
		})();
	}
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy91c2VyLWhvb2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyYXRpb25LZXkiLCJhZnRlciIsInN0YXJ0IiwiYXBwbGljYXRpb24iLCJjb3JlSG9va1BhdGgiLCJydW50aW1lIiwiYmFzZSIsImNvbmZpZ3VyYXRpb24iLCJwYXRocyIsImhvb2tzIiwicGF0aCIsIkFycmF5IiwiaXNBcnJheSIsInVzZXJIb29rUGF0aHMiLCJyZWR1Y2UiLCJpdGVtcyIsIml0ZW0iLCJjd2RzIiwibWFwIiwiY3dkIiwiZmlsdGVyIiwidXNlckhvb2tzIiwidXNlckhvb2tQYXRoIiwibG9nIiwiZGVidWciLCJsb2FkZWRIb29rcyIsImNvbmNhdCIsImxlbmd0aCIsImxvYWRlZEhvb2siLCJuYW1lIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJTZXQiLCJyZXZlcnNlIiwiY29uZmxpY3RpbmdDb3JlSG9vayIsImNvcmVIb29rIiwidXNlckhvb2siLCJFcnJvciIsInJlcXVpcmVQYXRoIiwiQm9vbGVhbiIsInJlZ2lzdGVyZWQiLCJob29rIiwicmVnaXN0ZXIiLCJqb2JzIiwiUHJvbWlzZSIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBSUE7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQ2RBLG1CQUFrQixPQURKO0FBRWRDLFFBQU8sQ0FBQyw2QkFBRCxDQUZPO0FBR1JDLE1BSFEsaUJBR0ZDLFdBSEUsRUFHVztBQUFBOztBQUFBO0FBQ3hCLFNBQU1DLGVBQWUsbUJBQVFELFlBQVlFLE9BQVosQ0FBb0JDLElBQTVCLEVBQWtDSCxZQUFZSSxhQUFaLENBQTBCQyxLQUExQixDQUFnQ0MsS0FBbEUsQ0FBckI7QUFDQSxTQUFLRixhQUFMLENBQW1CRyxJQUFuQixHQUEwQkMsTUFBTUMsT0FBTixDQUFjLE1BQUtMLGFBQUwsQ0FBbUJHLElBQWpDLElBQXlDLE1BQUtILGFB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dHJlc29sdmVcbn0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7XG5cdGV4aXN0c1xufSBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L3V0aWxpdGllcy9mcyc7XG5cbmltcG9ydCBnZXRIb29rVHJlZSBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L2hvb2tzL2dldC1ob29rLXRyZWUnO1xuaW1wb3J0IGxvYWQgZnJvbSAnLi4vLi4vLi4vbGlicmFyeS9ob29rcy9sb2FkJztcbmltcG9ydCBydW5Ib29rVHJlZSBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L2hvb2tzL3J1bi1ob29rLXRyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbmZpZ3VyYXRpb25LZXk6ICdob29rcycsXG5cdGFmdGVyOiBbJ2hvb2tzOmNvbmZpZ3VyZTpzdGFydDphZnRlciddLFxuXHRhc3luYyBzdGFydChhcHBsaWNhdGlvbikge1xuXHRcdGNvbnN0IGNvcmVIb29rUGF0aCA9IHJlc29sdmUoYXBwbGljYXRpb24ucnVudGltZS5iYXNlLCBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnBhdGhzLmhvb2tzKTtcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aCA9IEFycmF5LmlzQXJyYXkodGhpcy5jb25maWd1cmF0aW9uLnBhdGgpID8gdGhpcy5jb25maWd1cmF0aW9uLnBhdGggOiBbdGhpcy5jb25maWd1cmF0aW9uLnBhdGhdO1xuXG5cdFx0Y29uc3QgdXNlckhvb2tQYXRocyA9IFsuLi50aGlzLmNvbmZpZ3VyYXRpb24ucGF0aFxuXHRcdFx0LnJlZHVjZSgoaXRlbXMsIGl0ZW0pID0+IFtcblx0XHRcdFx0Li4uaXRlbXMsXG5cdFx0XHRcdC4uLmFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkcy5tYXAoY3dkID0+IHJlc29sdmUoY3dkLCBpdGVtKSlcblx0XHRcdF0sIFtdKVxuXHRcdFx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGNvcmVIb29rUGF0aCldO1xuXG5cdFx0bGV0IHVzZXJIb29rcyA9IFtdO1xuXG5cdFx0Ly8gbG9hZCB1c2VyIGhvb2tzXG5cdFx0Zm9yIChjb25zdCB1c2VySG9va1BhdGggb2YgdXNlckhvb2tQYXRocykge1xuXHRcdFx0aWYgKGF3YWl0IGV4aXN0cyh1c2VySG9va1BhdGgpID09PSBmYWxzZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXBwbGljYXRpb24ubG9nLmRlYnVnKGBMb2FkaW5nIHVzZXIgaG9va3MgZnJvbSAke3VzZXJIb29rUGF0aH0uLi5gKTtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgbG9hZGVkSG9va3MgPSBsb2FkKGFwcGxpY2F0aW9uLCB1c2VySG9va1BhdGgsIHRydWUpO1xuXHRcdFx0XHR1c2VySG9va3MgPSB1c2VySG9va3MuY29uY2F0KGxvYWRlZEhvb2tzKTtcblx0XHRcdFx0YXBwbGljYXRpb24ubG9nLmRlYnVnKGBMb2FkZWQgJHtsb2FkZWRIb29rcy5sZW5ndGh9IHVzZXIgaG9va3M6ICR7bG9hZGVkSG9va3MubWFwKGxvYWRlZEhvb2sgPT4gbG9hZGVkSG9vay5uYW1lKX1gKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGFwcGxpY2F0aW9uLmxvZy5lcnJvcihgRmFpbGVkIGxvYWRpbmcgaG9va3MgZnJvbSAke3VzZXJIb29rUGF0aH06ICR7ZXJyb3IubWVzc2FnZX1gKTtcblx0XHRcdFx0aWYgKGVycm9yLnN0YWNrKSB7XG5cdFx0XHRcdFx0YXBwbGljYXRpb24ubG9nLmVycm9yKGAke2Vycm9yLnN0YWNrfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIExldCB0aGUgbGFzdCB1c2VyIGhvb2sgd2l0aCBhIGdpdmVuIG5hbWUgcmVpZ25cblx0XHR1c2VySG9va3MgPSBbLi4ubmV3IFNldCh1c2VySG9va3MucmV2ZXJzZSgpKV0ucmV2ZXJzZSgpO1xuXG5cdFx0dXNlckhvb2tzID0gdXNlckhvb2tzXG5cdFx0XHQubWFwKHVzZXJIb29rID0+IHtcblx0XHRcdFx0Ly8gRGV0ZWN0IGhvb2tzIGNvbmZsaWN0aW5nIHdpdGggY29yZSBob29rc1xuXHRcdFx0XHRjb25zdCBjb25mbGljdGluZ0NvcmVIb29rID0gYXBwbGljYXRpb24uaG9va3MuZmlsdGVyKGNvcmVIb29rID0+IGNvcmVIb29rLm5hbWUgPT09IHVzZXJIb29rLm5hbWUpWzBdO1xuXHRcdFx0XHRpZiAoY29uZmxpY3RpbmdDb3JlSG9vaykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgSG9vayBcIiR7dXNlckhvb2submFtZX1cIiBmcm9tICR7dXNlckhvb2sucmVxdWlyZVBhdGh9IGNvbmZsaWN0cyB3aXRoIGNvcmUgaG9vayBcIiR7Y29uZmxpY3RpbmdDb3JlSG9vay5uYW1lfVwiLCB3aWxsIG5vdCBsb2FkLmApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB1c2VySG9vaztcblx0XHRcdH0pXG5cdFx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdFx0Y29uc3QgcmVnaXN0ZXJlZCA9IFtcblx0XHRcdC4uLmFwcGxpY2F0aW9uLmhvb2tzLFxuXHRcdFx0Li4udXNlckhvb2tzXG5cdFx0XS5tYXAoaG9vayA9PiBob29rLnJlZ2lzdGVyKGFwcGxpY2F0aW9uKSk7XG5cblx0XHRjb25zdCBqb2JzID0gcnVuSG9va1RyZWUoZ2V0SG9va1RyZWUocmVnaXN0ZXJlZCksIHJlZ2lzdGVyZWQsIGFwcGxpY2F0aW9uLCB7fSk7XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwoam9icyk7XG5cdFx0YXBwbGljYXRpb24uaG9va3MgPSByZWdpc3RlcmVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xuIl19