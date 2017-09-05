'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

var _lodash = require('lodash');

var _fs = require('../../../library/utilities/fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
	after: ['hooks:engine:start:after'],

	start: function start(application) {
		var _this = this;

		return _asyncToGenerator(function* () {
			application.router = (0, _koaRouter2.default)();

			if (application.mode === 'console') {
				return application;
			}

			// load physical core routes
			const coreRoutes = (0, _requireAll2.default)((0, _path.resolve)(application.runtime.base, application.configuration.paths.routes));

			// load physical user routes
			_this.configuration.path = Array.isArray(_this.configuration.path) ? _this.configuration.path : [_this.configuration.path];

			const routePaths = yield Promise.all(_this.configuration.path.reduce(function (items, item) {
				return items.concat(application.runtime.cwds.map(function (cwd) {
					return (0, _path.resolve)(cwd, item);
				}));
			}, []).map((() => {
				var _ref = _asyncToGenerator(function* (routePath) {
					return {
						path: routePath,
						exists: yield (0, _fs.exists)(routePath)
					};
				});

				return function (_x) {
					return _ref.apply(this, arguments);
				};
			})()));

			const userRoutes = routePaths.reduce(function (registry, entry) {
				return entry.exists ? (0, _lodash.merge)(registry, (0, _requireAll2.default)({
					dirname: entry.path,
					filter: /^([^.].*)\.js(on)?$/,
					resolve: function resolve(mod) {
						return mod.default || mod;
					}
				})) : registry;
			}, {});

			// load module routes
			const moduleRoutes = Object.keys(_this.configuration.enabled).filter(function (routeName) {
				return typeof _this.configuration.enabled[routeName].enabled === 'string';
			}).reduce(function (result, routeName) {
				const routeModuleName = _this.configuration.enabled[routeName].enabled;

				try {
					const mod = require(routeModuleName);
					result[routeName] = mod.default || mod;
					_this.log.debug(`Required module route '${routeName}' from module '${routeModuleName}'`);
				} catch (err) {
					_this.log.warn(`Could not require module route '${routeName}' from module '${routeModuleName}'`);
					_this.log.debug(err);
				}
				return result;
			}, {});

			const routes = (0, _lodash.merge)({}, coreRoutes, moduleRoutes, userRoutes);

			// Check if required modules are functions, bind to router
			Object.keys(routes).forEach(function (routeName) {
				const routeFactoryFunction = routes[routeName];
				const routeConfig = _this.configuration.enabled[routeName];

				if (typeof routeFactoryFunction !== 'function') {
					throw new Error(`'${routeName}' is no valid route factory`);
				}

				if (routeConfig === false || routeConfig && routeConfig.enabled === false) {
					_this.log.debug(`'${routeName}' is explicitly disabled.`);
					return;
				}

				if (typeof routeConfig === 'undefined') {
					_this.log.debug(`'${routeName}' is not configured, will not mount.`);
					return;
				}

				const methods = routeConfig.methods || ['GET', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];

				const fn = routeFactoryFunction(application, routeConfig);

				if (typeof fn !== 'function') {
					throw new Error(`'${routeName}' factory returned no valid route for ${routeConfig.path}`);
				}

				_this.log.debug(`Mounting ${routeName} on ${routeConfig.path}`);

				application.router.register(routeName, routeConfig.path, methods, function* runRoute(next) {
					yield fn.bind(this)(next);
				});
			});

			return application;
		})();
	}
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYWZ0ZXIiLCJzdGFydCIsImFwcGxpY2F0aW9uIiwicm91dGVyIiwibW9kZSIsImNvcmVSb3V0ZXMiLCJydW50aW1lIiwiYmFzZSIsImNvbmZpZ3VyYXRpb24iLCJwYXRocyIsInJvdXRlcyIsInBhdGgiLCJBcnJheSIsImlzQXJyYXkiLCJyb3V0ZVBhdGhzIiwiUHJvbWlzZSIsImFsbCIsInJlZHVjZSIsIml0ZW1zIiwiaXRlbSIsImNvbmNhdCIsImN3ZHMiLCJtYXAiLCJjd2QiLCJyb3V0ZVBhdGgiLCJleGlzdHMiLCJ1c2VyUm91dGVzIiwicmVnaXN0cnkiLCJlbnRyeSIsImRpcm5hbWUiLCJmaWx0ZXIiLCJyZXNvbHZlIiwibW9kIiwiZGVmYXVsdCIsIm1vZHVsZVJvdXRlcyIsIk9iamVjdCIsImtleXMiLCJlbmFibGVkIiwicm91dGVOYW1lIiwicmVzdWx0Iiwicm91dGVNb2R1bGVOYW1lIiwicmVxdWlyZSIsImxvZyIsImRlYnVnIiwiZXJyIiwid2FybiIsImZvckVhY2giLCJyb3V0ZUZhY3RvcnlGdW5jdGlvbiIsInJvdXRlQ29uZmlnIiwiRXJyb3IiLCJtZXRob2RzIiwiZm4iLCJyZWdpc3RlciIsInJ1blJvdXRlIiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7O2tCQUVlO0FBQ2RBLFFBQU8sQ0FBQywwQkFBRCxDQURPOztBQUdSQyxNQUhRLGlCQUdGQyxXQUhFLEVBR1c7QUFBQTs7QUFBQTtBQUN4QkEsZUFBWUMsTUFBWixHQUFxQiwwQkFBckI7O0FBRUEsT0FBSUQsWUFBWUUsSUFBWixLQUFxQixTQUF6QixFQUFvQztBQUNuQyxXQUFPRixXQUFQO0FBQ0E7O0FBRUQ7QUFDQSxTQUFNRyxhQUFhLDBCQUFXLG1CQUFRSCxZQUFZSSxPQUFaLENBQW9CQyxJ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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgcm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IHJlcXVpcmVBbGwgZnJvbSAncmVxdWlyZS1hbGwnO1xuaW1wb3J0IHttZXJnZX0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4uLy4uLy4uL2xpYnJhcnkvdXRpbGl0aWVzL2ZzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRhZnRlcjogWydob29rczplbmdpbmU6c3RhcnQ6YWZ0ZXInXSxcblxuXHRhc3luYyBzdGFydChhcHBsaWNhdGlvbikge1xuXHRcdGFwcGxpY2F0aW9uLnJvdXRlciA9IHJvdXRlcigpO1xuXG5cdFx0aWYgKGFwcGxpY2F0aW9uLm1vZGUgPT09ICdjb25zb2xlJykge1xuXHRcdFx0cmV0dXJuIGFwcGxpY2F0aW9uO1xuXHRcdH1cblxuXHRcdC8vIGxvYWQgcGh5c2ljYWwgY29yZSByb3V0ZXNcblx0XHRjb25zdCBjb3JlUm91dGVzID0gcmVxdWlyZUFsbChyZXNvbHZlKGFwcGxpY2F0aW9uLnJ1bnRpbWUuYmFzZSwgYXBwbGljYXRpb24uY29uZmlndXJhdGlvbi5wYXRocy5yb3V0ZXMpKTtcblxuXHRcdC8vIGxvYWQgcGh5c2ljYWwgdXNlciByb3V0ZXNcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aCA9IEFycmF5LmlzQXJyYXkodGhpcy5jb25maWd1cmF0aW9uLnBhdGgpID9cblx0XHRcdHRoaXMuY29uZmlndXJhdGlvbi5wYXRoIDpcblx0XHRcdFt0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aF07XG5cblx0XHRjb25zdCByb3V0ZVBhdGhzID0gYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5jb25maWd1cmF0aW9uLnBhdGhcblx0XHRcdC5yZWR1Y2UoKGl0ZW1zLCBpdGVtKSA9PiBpdGVtcy5jb25jYXQoXG5cdFx0XHRcdGFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkcy5tYXAoY3dkID0+IHJlc29sdmUoY3dkLCBpdGVtKSlcblx0XHRcdCksIFtdKVxuXHRcdFx0Lm1hcChhc3luYyBmdW5jdGlvbihyb3V0ZVBhdGgpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRwYXRoOiByb3V0ZVBhdGgsXG5cdFx0XHRcdFx0ZXhpc3RzOiBhd2FpdCBleGlzdHMocm91dGVQYXRoKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSlcblx0XHQpO1xuXG5cdFx0Y29uc3QgdXNlclJvdXRlcyA9IHJvdXRlUGF0aHMucmVkdWNlKChyZWdpc3RyeSwgZW50cnkpID0+IGVudHJ5LmV4aXN0cyA/XG5cdFx0XHRcdG1lcmdlKHJlZ2lzdHJ5LCByZXF1aXJlQWxsKHtcblx0XHRcdFx0XHRkaXJuYW1lOiBlbnRyeS5wYXRoLFxuXHRcdFx0XHRcdGZpbHRlcjogL14oW14uXS4qKVxcLmpzKG9uKT8kLyxcblx0XHRcdFx0XHRyZXNvbHZlKG1vZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1vZC5kZWZhdWx0IHx8IG1vZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKSA6XG5cdFx0XHRcdHJlZ2lzdHJ5XG5cdFx0XHQsIHt9KTtcblxuXHRcdC8vIGxvYWQgbW9kdWxlIHJvdXRlc1xuXHRcdGNvbnN0IG1vZHVsZVJvdXRlcyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkKVxuXHRcdFx0LmZpbHRlcihyb3V0ZU5hbWUgPT4gdHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkW3JvdXRlTmFtZV0uZW5hYmxlZCA9PT0gJ3N0cmluZycpXG5cdFx0XHQucmVkdWNlKChyZXN1bHQsIHJvdXRlTmFtZSkgPT4ge1xuXHRcdFx0XHRjb25zdCByb3V0ZU1vZHVsZU5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZW5hYmxlZFtyb3V0ZU5hbWVdLmVuYWJsZWQ7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBtb2QgPSByZXF1aXJlKHJvdXRlTW9kdWxlTmFtZSk7XG5cdFx0XHRcdFx0cmVzdWx0W3JvdXRlTmFtZV0gPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG5cdFx0XHRcdFx0dGhpcy5sb2cuZGVidWcoYFJlcXVpcmVkIG1vZHVsZSByb3V0ZSAnJHtyb3V0ZU5hbWV9JyBmcm9tIG1vZHVsZSAnJHtyb3V0ZU1vZHVsZU5hbWV9J2ApO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHR0aGlzLmxvZy53YXJuKGBDb3VsZCBub3QgcmVxdWlyZSBtb2R1bGUgcm91dGUgJyR7cm91dGVOYW1lfScgZnJvbSBtb2R1bGUgJyR7cm91dGVNb2R1bGVOYW1lfSdgKTtcblx0XHRcdFx0XHR0aGlzLmxvZy5kZWJ1ZyhlcnIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRjb25zdCByb3V0ZXMgPSBtZXJnZSh7fSwgY29yZVJvdXRlcywgbW9kdWxlUm91dGVzLCB1c2VyUm91dGVzKTtcblxuXHRcdC8vIENoZWNrIGlmIHJlcXVpcmVkIG1vZHVsZXMgYXJlIGZ1bmN0aW9ucywgYmluZCB0byByb3V0ZXJcblx0XHRPYmplY3Qua2V5cyhyb3V0ZXMpLmZvckVhY2gocm91dGVOYW1lID0+IHtcblx0XHRcdGNvbnN0IHJvdXRlRmFjdG9yeUZ1bmN0aW9uID0gcm91dGVzW3JvdXRlTmFtZV07XG5cdFx0XHRjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkW3JvdXRlTmFtZV07XG5cblx0XHRcdGlmICh0eXBlb2Ygcm91dGVGYWN0b3J5RnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGAnJHtyb3V0ZU5hbWV9JyBpcyBubyB2YWxpZCByb3V0ZSBmYWN0b3J5YCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyb3V0ZUNvbmZpZyA9PT0gZmFsc2UgfHwgKHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnLmVuYWJsZWQgPT09IGZhbHNlKSkge1xuXHRcdFx0XHR0aGlzLmxvZy5kZWJ1ZyhgJyR7cm91dGVOYW1lfScgaXMgZXhwbGljaXRseSBkaXNhYmxlZC5gKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHJvdXRlQ29uZmlnID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmxvZy5kZWJ1ZyhgJyR7cm91dGVOYW1lfScgaXMgbm90IGNvbmZpZ3VyZWQsIHdpbGwgbm90IG1vdW50LmApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1ldGhvZHMgPSByb3V0ZUNvbmZpZy5tZXRob2RzIHx8IFsnR0VUJywgJ1BPU1QnLCAnUEFUQ0gnLCAnREVMRVRFJywgJ0hFQUQnLCAnT1BUSU9OUyddO1xuXG5cdFx0XHRjb25zdCBmbiA9IHJvdXRlRmFjdG9yeUZ1bmN0aW9uKGFwcGxpY2F0aW9uLCByb3V0ZUNvbmZpZyk7XG5cblx0XHRcdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGAnJHtyb3V0ZU5hbWV9JyBmYWN0b3J5IHJldHVybmVkIG5vIHZhbGlkIHJvdXRlIGZvciAke3JvdXRlQ29uZmlnLnBhdGh9YCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubG9nLmRlYnVnKGBNb3VudGluZyAke3JvdXRlTmFtZX0gb24gJHtyb3V0ZUNvbmZpZy5wYXRofWApO1xuXG5cdFx0XHRhcHBsaWNhdGlvbi5yb3V0ZXIucmVnaXN0ZXIocm91dGVOYW1lLCByb3V0ZUNvbmZpZy5wYXRoLCBtZXRob2RzLCBmdW5jdGlvbiAqIHJ1blJvdXRlKG5leHQpIHtcblx0XHRcdFx0eWllbGQgZm4uYmluZCh0aGlzKShuZXh0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFwcGxpY2F0aW9uO1xuXHR9XG59O1xuIl19