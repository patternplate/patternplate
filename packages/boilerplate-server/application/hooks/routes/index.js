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
				return entry.exists ? (0, _lodash.merge)(registry, (0, _requireAll2.default)(entry.path)) : registry;
			}, {});

			// load module routes
			const moduleRoutes = Object.keys(_this.configuration.enabled).filter(function (routeName) {
				return typeof _this.configuration.enabled[routeName].enabled === 'string';
			}).reduce(function (result, routeName) {
				const routeModuleName = _this.configuration.enabled[routeName].enabled;

				try {
					result[routeName] = require(routeModuleName);
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
					_this.log.warn(`${routeName} factory returned no valid route for ${routeConfig.path}`);
					return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYWZ0ZXIiLCJzdGFydCIsImFwcGxpY2F0aW9uIiwicm91dGVyIiwibW9kZSIsImNvcmVSb3V0ZXMiLCJydW50aW1lIiwiYmFzZSIsImNvbmZpZ3VyYXRpb24iLCJwYXRocyIsInJvdXRlcyIsInBhdGgiLCJBcnJheSIsImlzQXJyYXkiLCJyb3V0ZVBhdGhzIiwiUHJvbWlzZSIsImFsbCIsInJlZHVjZSIsIml0ZW1zIiwiaXRlbSIsImNvbmNhdCIsImN3ZHMiLCJtYXAiLCJjd2QiLCJyb3V0ZVBhdGgiLCJleGlzdHMiLCJ1c2VyUm91dGVzIiwicmVnaXN0cnkiLCJlbnRyeSIsIm1vZHVsZVJvdXRlcyIsIk9iamVjdCIsImtleXMiLCJlbmFibGVkIiwiZmlsdGVyIiwicm91dGVOYW1lIiwicmVzdWx0Iiwicm91dGVNb2R1bGVOYW1lIiwicmVxdWlyZSIsImxvZyIsImRlYnVnIiwiZXJyIiwid2FybiIsImZvckVhY2giLCJyb3V0ZUZhY3RvcnlGdW5jdGlvbiIsInJvdXRlQ29uZmlnIiwiRXJyb3IiLCJtZXRob2RzIiwiZm4iLCJyZWdpc3RlciIsInJ1blJvdXRlIiwibmV4dCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7O2tCQUVlO0FBQ2RBLFFBQU8sQ0FBQywwQkFBRCxDQURPOztBQUdSQyxNQUhRLGlCQUdGQyxXQUhFLEVBR1c7QUFBQTs7QUFBQTtBQUN4QkEsZUFBWUMsTUFBWixHQUFxQiwwQkFBckI7O0FBRUEsT0FBSUQsWUFBWUUsSUFBWixLQUFxQixTQUF6QixFQUFvQztBQUNuQyxXQUFPRixXQUFQO0FBQ0E7O0FBRUQ7QUFDQSxTQUFNRyxhQUFhLDBCQUFXLG1CQUFRSCxZQUFZSSxPQUFaLENBQW9CQyxJQUE1QixFQUFrQ0wsWUFBWU0sYUFBWixDQUEwQkMsS0FBMUIs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MkJBQTdCO0FBQ0E7QUFDQTs7QUFFRCxRQUFJLE9BQU9VLFdBQVAsS0FBdUIsV0FBM0IsRUFBd0M7QUFDdkMsV0FBS04sR0FBTCxDQUFTQyxLQUFULENBQWdCLElBQUdMLFNBQVUsc0NBQTdCO0FBQ0E7QUFDQTs7QUFFRCxVQUFNWSxVQUFVRixZQUFZRSxPQUFaLElBQXVCLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsT0FBaEIsRUFBeUIsUUFBekIsRUFBbUMsTUFBbkMsRUFBMkMsU0FBM0MsQ0FBdkM7QUFDQSxVQUFNQyxLQUFLSixxQkFBcUJ6QyxXQUFyQixFQUFrQzBDLFdBQWxDLENBQVg7O0FBRUEsUUFBSSxPQUFPRyxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDN0IsV0FBS1QsR0FBTCxDQUFTRyxJQUFULENBQWUsR0FBRVAsU0FBVSx3Q0FBdUNVLFlBQVlqQyxJQUFLLEVBQW5GO0FBQ0E7QUFDQTs7QUFFRCxVQUFLMkIsR0FBTCxDQUFTQyxLQUFULENBQWdCLFlBQVdMLFNBQVUsT0FBTVUsWUFBWWpDLElBQUssRUFBNUQ7O0FBRUFULGdCQUFZQyxNQUFaLENBQW1CNkMsUUFBbkIsQ0FBNEJkLFNBQTVCLEVBQXVDVSxZQUFZakMsSUFBbkQsRUFBeURtQyxPQUF6RCxFQUFrRSxVQUFXRyxRQUFYLENBQW9CQyxJQUFwQixFQUEwQjtBQUMzRixXQUFNSCxHQUFHSSxJQUFILENBQVEsSUFBUixFQUFjRCxJQUFkLENBQU47QUFDQSxLQUZEO0FBR0EsSUEvQkQ7O0FBaUNBLFVBQU9oRCxXQUFQO0FBcEZ3QjtBQXFGeEI7QUF4RmEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCByb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgcmVxdWlyZUFsbCBmcm9tICdyZXF1aXJlLWFsbCc7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi4vLi4vLi4vbGlicmFyeS91dGlsaXRpZXMvZnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGFmdGVyOiBbJ2hvb2tzOmVuZ2luZTpzdGFydDphZnRlciddLFxuXG5cdGFzeW5jIHN0YXJ0KGFwcGxpY2F0aW9uKSB7XG5cdFx0YXBwbGljYXRpb24ucm91dGVyID0gcm91dGVyKCk7XG5cblx0XHRpZiAoYXBwbGljYXRpb24ubW9kZSA9PT0gJ2NvbnNvbGUnKSB7XG5cdFx0XHRyZXR1cm4gYXBwbGljYXRpb247XG5cdFx0fVxuXG5cdFx0Ly8gbG9hZCBwaHlzaWNhbCBjb3JlIHJvdXRlc1xuXHRcdGNvbnN0IGNvcmVSb3V0ZXMgPSByZXF1aXJlQWxsKHJlc29sdmUoYXBwbGljYXRpb24ucnVudGltZS5iYXNlLCBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnBhdGhzLnJvdXRlcykpO1xuXG5cdFx0Ly8gbG9hZCBwaHlzaWNhbCB1c2VyIHJvdXRlc1xuXHRcdHRoaXMuY29uZmlndXJhdGlvbi5wYXRoID0gQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aCkgP1xuXHRcdFx0dGhpcy5jb25maWd1cmF0aW9uLnBhdGggOlxuXHRcdFx0W3RoaXMuY29uZmlndXJhdGlvbi5wYXRoXTtcblxuXHRcdGNvbnN0IHJvdXRlUGF0aHMgPSBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aFxuXHRcdFx0LnJlZHVjZSgoaXRlbXMsIGl0ZW0pID0+IGl0ZW1zLmNvbmNhdChcblx0XHRcdFx0YXBwbGljYXRpb24ucnVudGltZS5jd2RzLm1hcChjd2QgPT4gcmVzb2x2ZShjd2QsIGl0ZW0pKVxuXHRcdFx0KSwgW10pXG5cdFx0XHQubWFwKGFzeW5jIGZ1bmN0aW9uKHJvdXRlUGF0aCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHBhdGg6IHJvdXRlUGF0aCxcblx0XHRcdFx0XHRleGlzdHM6IGF3YWl0IGV4aXN0cyhyb3V0ZVBhdGgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KVxuXHRcdCk7XG5cblx0XHRjb25zdCB1c2VyUm91dGVzID0gcm91dGVQYXRocy5yZWR1Y2UoKHJlZ2lzdHJ5LCBlbnRyeSkgPT4gZW50cnkuZXhpc3RzID9cblx0XHRcdFx0bWVyZ2UocmVnaXN0cnksIHJlcXVpcmVBbGwoZW50cnkucGF0aCkpIDpcblx0XHRcdFx0cmVnaXN0cnlcblx0XHRcdCwge30pO1xuXG5cdFx0Ly8gbG9hZCBtb2R1bGUgcm91dGVzXG5cdFx0Y29uc3QgbW9kdWxlUm91dGVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWQpXG5cdFx0XHQuZmlsdGVyKHJvdXRlTmFtZSA9PiB0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWRbcm91dGVOYW1lXS5lbmFibGVkID09PSAnc3RyaW5nJylcblx0XHRcdC5yZWR1Y2UoKHJlc3VsdCwgcm91dGVOYW1lKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJvdXRlTW9kdWxlTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkW3JvdXRlTmFtZV0uZW5hYmxlZDtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdFtyb3V0ZU5hbWVdID0gcmVxdWlyZShyb3V0ZU1vZHVsZU5hbWUpO1xuXHRcdFx0XHRcdHRoaXMubG9nLmRlYnVnKGBSZXF1aXJlZCBtb2R1bGUgcm91dGUgJyR7cm91dGVOYW1lfScgZnJvbSBtb2R1bGUgJyR7cm91dGVNb2R1bGVOYW1lfSdgKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0dGhpcy5sb2cud2FybihgQ291bGQgbm90IHJlcXVpcmUgbW9kdWxlIHJvdXRlICcke3JvdXRlTmFtZX0nIGZyb20gbW9kdWxlICcke3JvdXRlTW9kdWxlTmFtZX0nYCk7XG5cdFx0XHRcdFx0dGhpcy5sb2cuZGVidWcoZXJyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSwge30pO1xuXG5cdFx0Y29uc3Qgcm91dGVzID0gbWVyZ2Uoe30sIGNvcmVSb3V0ZXMsIG1vZHVsZVJvdXRlcywgdXNlclJvdXRlcyk7XG5cblx0XHQvLyBDaGVjayBpZiByZXF1aXJlZCBtb2R1bGVzIGFyZSBmdW5jdGlvbnMsIGJpbmQgdG8gcm91dGVyXG5cdFx0T2JqZWN0LmtleXMocm91dGVzKS5mb3JFYWNoKHJvdXRlTmFtZSA9PiB7XG5cdFx0XHRjb25zdCByb3V0ZUZhY3RvcnlGdW5jdGlvbiA9IHJvdXRlc1tyb3V0ZU5hbWVdO1xuXHRcdFx0Y29uc3Qgcm91dGVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZW5hYmxlZFtyb3V0ZU5hbWVdO1xuXG5cdFx0XHRpZiAodHlwZW9mIHJvdXRlRmFjdG9yeUZ1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgJyR7cm91dGVOYW1lfScgaXMgbm8gdmFsaWQgcm91dGUgZmFjdG9yeWApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocm91dGVDb25maWcgPT09IGZhbHNlIHx8IHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnLmVuYWJsZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMubG9nLmRlYnVnKGAnJHtyb3V0ZU5hbWV9JyBpcyBleHBsaWNpdGx5IGRpc2FibGVkLmApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygcm91dGVDb25maWcgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRoaXMubG9nLmRlYnVnKGAnJHtyb3V0ZU5hbWV9JyBpcyBub3QgY29uZmlndXJlZCwgd2lsbCBub3QgbW91bnQuYCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbWV0aG9kcyA9IHJvdXRlQ29uZmlnLm1ldGhvZHMgfHwgWydHRVQnLCAnUE9TVCcsICdQQVRDSCcsICdERUxFVEUnLCAnSEVBRCcsICdPUFRJT05TJ107XG5cdFx0XHRjb25zdCBmbiA9IHJvdXRlRmFjdG9yeUZ1bmN0aW9uKGFwcGxpY2F0aW9uLCByb3V0ZUNvbmZpZyk7XG5cblx0XHRcdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5sb2cud2FybihgJHtyb3V0ZU5hbWV9IGZhY3RvcnkgcmV0dXJuZWQgbm8gdmFsaWQgcm91dGUgZm9yICR7cm91dGVDb25maWcucGF0aH1gKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxvZy5kZWJ1ZyhgTW91bnRpbmcgJHtyb3V0ZU5hbWV9IG9uICR7cm91dGVDb25maWcucGF0aH1gKTtcblxuXHRcdFx0YXBwbGljYXRpb24ucm91dGVyLnJlZ2lzdGVyKHJvdXRlTmFtZSwgcm91dGVDb25maWcucGF0aCwgbWV0aG9kcywgZnVuY3Rpb24gKiBydW5Sb3V0ZShuZXh0KSB7XG5cdFx0XHRcdHlpZWxkIGZuLmJpbmQodGhpcykobmV4dCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBhcHBsaWNhdGlvbjtcblx0fVxufTtcbiJdfQ==