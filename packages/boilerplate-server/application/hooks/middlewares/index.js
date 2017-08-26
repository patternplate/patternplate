'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

var _fs = require('../../../library/utilities/fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
	after: ['hooks:routes:start:after'],
	modes: ['server'],

	start: (() => {
		var _ref = _asyncToGenerator(function* (application) {
			var _this = this;

			const coreMiddlewares = (0, _requireAll2.default)((0, _path.resolve)(application.runtime.base, application.configuration.paths.middlewares));
			const userMiddlewares = {};
			this.configuration.path = Array.isArray(this.configuration.path) ? this.configuration.path : [this.configuration.path];

			const middlewarePaths = this.configuration.path.reduce(function (items, item) {
				return items.concat(application.runtime.cwds.map(function (cwd) {
					return (0, _path.resolve)(cwd, item);
				}));
			}, []);

			for (const middlewarePath of middlewarePaths) {
				if (yield (0, _fs.exists)(middlewarePath)) {
					Object.assign(userMiddlewares, (0, _requireAll2.default)(middlewarePath));
				}
			}

			// Load module middlewares
			const moduleMiddlewares = Object.keys(this.configuration.enabled).filter(function (middlewareName) {
				return typeof _this.configuration.enabled[middlewareName].enabled === 'string';
			}).reduce(function (result, middlewareName) {
				const middlewareModuleName = _this.configuration.enabled[middlewareName].enabled;

				try {
					result[middlewareName] = require(middlewareModuleName);
					_this.log.silly(`Required module middleware '${middlewareName}' from module '${middlewareModuleName}'`);
				} catch (err) {
					_this.log.warn(`Could not require module middleware '${middlewareName}' from module '${middlewareModuleName}'`);
					_this.log.error(err);
					throw err;
				}

				return result;
			}, {});

			const middlewares = Object.assign({}, coreMiddlewares, userMiddlewares, moduleMiddlewares);

			// Check if required modules are functions, bind to engine
			Object.keys(middlewares).forEach(function (middlewareName) {
				const middlewareFactoryFunction = middlewares[middlewareName];
				const middlewareConfig = _this.configuration.enabled[middlewareName];

				if (typeof middlewareFactoryFunction !== 'function') {
					_this.log.warn(`'${middlewareName}' is no valid middleware factory`);
					return;
				}

				const isObject = typeof middlewareConfig === 'object';

				if (middlewareConfig === false || isObject && middlewareConfig.enabled !== true) {
					_this.log.debug(`Middleware '${middlewareName}' is explicitly disabled.`);
					return;
				}

				if (typeof middlewareConfig === 'undefined') {
					_this.log.debug(`Middleware '${middlewareName}' is not configured, will not mount.`);
					return;
				}

				const fn = middlewareFactoryFunction(application, middlewareConfig);

				if (typeof fn !== 'function') {
					_this.log.warn(`'${middlewareName}' middleware factory does not produce valid middlewares, will not mount.`);
					return;
				}

				try {
					application.router.use(fn);
					_this.log.debug(`Middleware '${middlewareName}' mounted.`);
				} catch (err) {
					_this.log.error(`Binding '${middlewareName}' to engine failed`);
					_this.log.debug(err);
					throw err;
				}
			});

			return application;
		});

		function startMiddlewareHook(_x) {
			return _ref.apply(this, arguments);
		}

		return startMiddlewareHook;
	})()
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9taWRkbGV3YXJlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZnRlciIsIm1vZGVzIiwic3RhcnQiLCJhcHBsaWNhdGlvbiIsImNvcmVNaWRkbGV3YXJlcyIsInJ1bnRpbWUiLCJiYXNlIiwiY29uZmlndXJhdGlvbiIsInBhdGhzIiwibWlkZGxld2FyZXMiLCJ1c2VyTWlkZGxld2FyZXMiLCJwYXRoIiwiQXJyYXkiLCJpc0FycmF5IiwibWlkZGxld2FyZVBhdGhzIiwicmVkdWNlIiwiaXRlbXMiLCJpdGVtIiwiY29uY2F0IiwiY3dkcyIsIm1hcCIsImN3ZCIsIm1pZGRsZXdhcmVQYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlTWlkZGxld2FyZXMiLCJrZXlzIiwiZW5hYmxlZCIsImZpbHRlciIsIm1pZGRsZXdhcmVOYW1lIiwicmVzdWx0IiwibWlkZGxld2FyZU1vZHVsZU5hbWUiLCJyZXF1aXJlIiwibG9nIiwic2lsbHkiLCJlcnIiLCJ3YXJuIiwiZXJyb3IiLCJmb3JFYWNoIiwibWlkZGxld2FyZUZhY3RvcnlGdW5jdGlvbiIsIm1pZGRsZXdhcmVDb25maWciLCJpc09iamVjdCIsImRlYnVnIiwiZm4iLCJyb3V0ZXIiLCJ1c2UiLCJzdGFydE1pZGRsZXdhcmVIb29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7OztBQUVBOzs7Ozs7a0JBRWU7QUFDZEEsUUFBTyxDQUFDLDBCQUFELENBRE87QUFFZEMsUUFBTyxDQUFDLFFBQUQsQ0FGTzs7QUFJZEM7QUFBQSwrQkFBTyxXQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFBQTs7QUFDdEQsU0FBTUMsa0JBQWtCLDBCQUFXLG1CQUFRRCxZQUFZRSxPQUFaLENBQW9CQyxJQUE1QixFQUFrQ0gsWUFBWUksYUFBWixDQUEwQkMsS0FBMUIsQ0FBZ0NDLFdBQWxFLENBQVgsQ0FBeEI7QUFDQSxTQUFNQyxrQkFBa0IsRUFBeEI7QUFDQSxRQUFLSCxh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MUIsRUFBdUNxQyxnQkFBdkMsQ0FBWDs7QUFFQSxRQUFJLE9BQU9HLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUM3QixXQUFLVixHQUFMLENBQVNHLElBQVQsQ0FBZSxJQUFHUCxjQUFlLDBFQUFqQztBQUNBO0FBQ0E7O0FBRUQsUUFBSTtBQUNIMUIsaUJBQVl5QyxNQUFaLENBQW1CQyxHQUFuQixDQUF1QkYsRUFBdkI7QUFDQSxXQUFLVixHQUFMLENBQVNTLEtBQVQsQ0FBZ0IsZUFBY2IsY0FBZSxZQUE3QztBQUNBLEtBSEQsQ0FHRSxPQUFPTSxHQUFQLEVBQVk7QUFDYixXQUFLRixHQUFMLENBQVNJLEtBQVQsQ0FBZ0IsWUFBV1IsY0FBZSxvQkFBMUM7QUFDQSxXQUFLSSxHQUFMLENBQVNTLEtBQVQsQ0FBZVAsR0FBZjtBQUNBLFdBQU1BLEdBQU47QUFDQTtBQUNELElBcENEOztBQXNDQSxVQUFPaEMsV0FBUDtBQUNBLEdBNUVEOztBQUFBLFdBQXNCMkMsbUJBQXRCO0FBQUE7QUFBQTs7QUFBQSxTQUFzQkEsbUJBQXRCO0FBQUE7QUFKYyxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXNvbHZlfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IHJlcXVpcmVBbGwgZnJvbSAncmVxdWlyZS1hbGwnO1xuXG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi4vLi4vLi4vbGlicmFyeS91dGlsaXRpZXMvZnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGFmdGVyOiBbJ2hvb2tzOnJvdXRlczpzdGFydDphZnRlciddLFxuXHRtb2RlczogWydzZXJ2ZXInXSxcblxuXHRzdGFydDogYXN5bmMgZnVuY3Rpb24gc3RhcnRNaWRkbGV3YXJlSG9vayhhcHBsaWNhdGlvbikge1xuXHRcdGNvbnN0IGNvcmVNaWRkbGV3YXJlcyA9IHJlcXVpcmVBbGwocmVzb2x2ZShhcHBsaWNhdGlvbi5ydW50aW1lLmJhc2UsIGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24ucGF0aHMubWlkZGxld2FyZXMpKTtcblx0XHRjb25zdCB1c2VyTWlkZGxld2FyZXMgPSB7fTtcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aCA9IEFycmF5LmlzQXJyYXkodGhpcy5jb25maWd1cmF0aW9uLnBhdGgpID8gdGhpcy5jb25maWd1cmF0aW9uLnBhdGggOiBbdGhpcy5jb25maWd1cmF0aW9uLnBhdGhdO1xuXG5cdFx0Y29uc3QgbWlkZGxld2FyZVBhdGhzID0gdGhpcy5jb25maWd1cmF0aW9uLnBhdGhcblx0XHRcdC5yZWR1Y2UoKGl0ZW1zLCBpdGVtKSA9PiBpdGVtcy5jb25jYXQoXG5cdFx0XHRcdGFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkcy5tYXAoY3dkID0+IHJlc29sdmUoY3dkLCBpdGVtKSlcblx0XHRcdCksIFtdKTtcblxuXHRcdGZvciAoY29uc3QgbWlkZGxld2FyZVBhdGggb2YgbWlkZGxld2FyZVBhdGhzKSB7XG5cdFx0XHRpZiAoYXdhaXQgZXhpc3RzKG1pZGRsZXdhcmVQYXRoKSkge1xuXHRcdFx0XHRPYmplY3QuYXNzaWduKHVzZXJNaWRkbGV3YXJlcywgcmVxdWlyZUFsbChtaWRkbGV3YXJlUGF0aCkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIExvYWQgbW9kdWxlIG1pZGRsZXdhcmVzXG5cdFx0Y29uc3QgbW9kdWxlTWlkZGxld2FyZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ3VyYXRpb24uZW5hYmxlZClcblx0XHRcdC5maWx0ZXIobWlkZGxld2FyZU5hbWUgPT4gdHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkW21pZGRsZXdhcmVOYW1lXS5lbmFibGVkID09PSAnc3RyaW5nJylcblx0XHRcdC5yZWR1Y2UoKHJlc3VsdCwgbWlkZGxld2FyZU5hbWUpID0+IHtcblx0XHRcdFx0Y29uc3QgbWlkZGxld2FyZU1vZHVsZU5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZW5hYmxlZFttaWRkbGV3YXJlTmFtZV0uZW5hYmxlZDtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdFttaWRkbGV3YXJlTmFtZV0gPSByZXF1aXJlKG1pZGRsZXdhcmVNb2R1bGVOYW1lKTtcblx0XHRcdFx0XHR0aGlzLmxvZy5zaWxseShgUmVxdWlyZWQgbW9kdWxlIG1pZGRsZXdhcmUgJyR7bWlkZGxld2FyZU5hbWV9JyBmcm9tIG1vZHVsZSAnJHttaWRkbGV3YXJlTW9kdWxlTmFtZX0nYCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdHRoaXMubG9nLndhcm4oYENvdWxkIG5vdCByZXF1aXJlIG1vZHVsZSBtaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgZnJvbSBtb2R1bGUgJyR7bWlkZGxld2FyZU1vZHVsZU5hbWV9J2ApO1xuXHRcdFx0XHRcdHRoaXMubG9nLmVycm9yKGVycik7XG5cdFx0XHRcdFx0dGhyb3cgZXJyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0sIHt9KTtcblxuXHRcdGNvbnN0IG1pZGRsZXdhcmVzID0gT2JqZWN0LmFzc2lnbih7fSwgY29yZU1pZGRsZXdhcmVzLCB1c2VyTWlkZGxld2FyZXMsIG1vZHVsZU1pZGRsZXdhcmVzKTtcblxuXHRcdC8vIENoZWNrIGlmIHJlcXVpcmVkIG1vZHVsZXMgYXJlIGZ1bmN0aW9ucywgYmluZCB0byBlbmdpbmVcblx0XHRPYmplY3Qua2V5cyhtaWRkbGV3YXJlcykuZm9yRWFjaChtaWRkbGV3YXJlTmFtZSA9PiB7XG5cdFx0XHRjb25zdCBtaWRkbGV3YXJlRmFjdG9yeUZ1bmN0aW9uID0gbWlkZGxld2FyZXNbbWlkZGxld2FyZU5hbWVdO1xuXHRcdFx0Y29uc3QgbWlkZGxld2FyZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkW21pZGRsZXdhcmVOYW1lXTtcblxuXHRcdFx0aWYgKHR5cGVvZiBtaWRkbGV3YXJlRmFjdG9yeUZ1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRoaXMubG9nLndhcm4oYCcke21pZGRsZXdhcmVOYW1lfScgaXMgbm8gdmFsaWQgbWlkZGxld2FyZSBmYWN0b3J5YCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaXNPYmplY3QgPSB0eXBlb2YgbWlkZGxld2FyZUNvbmZpZyA9PT0gJ29iamVjdCc7XG5cblx0XHRcdGlmIChtaWRkbGV3YXJlQ29uZmlnID09PSBmYWxzZSB8fCBpc09iamVjdCAmJiBtaWRkbGV3YXJlQ29uZmlnLmVuYWJsZWQgIT09IHRydWUpIHtcblx0XHRcdFx0dGhpcy5sb2cuZGVidWcoYE1pZGRsZXdhcmUgJyR7bWlkZGxld2FyZU5hbWV9JyBpcyBleHBsaWNpdGx5IGRpc2FibGVkLmApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgbWlkZGxld2FyZUNvbmZpZyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dGhpcy5sb2cuZGVidWcoYE1pZGRsZXdhcmUgJyR7bWlkZGxld2FyZU5hbWV9JyBpcyBub3QgY29uZmlndXJlZCwgd2lsbCBub3QgbW91bnQuYCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZm4gPSBtaWRkbGV3YXJlRmFjdG9yeUZ1bmN0aW9uKGFwcGxpY2F0aW9uLCBtaWRkbGV3YXJlQ29uZmlnKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aGlzLmxvZy53YXJuKGAnJHttaWRkbGV3YXJlTmFtZX0nIG1pZGRsZXdhcmUgZmFjdG9yeSBkb2VzIG5vdCBwcm9kdWNlIHZhbGlkIG1pZGRsZXdhcmVzLCB3aWxsIG5vdCBtb3VudC5gKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhcHBsaWNhdGlvbi5yb3V0ZXIudXNlKGZuKTtcblx0XHRcdFx0dGhpcy5sb2cuZGVidWcoYE1pZGRsZXdhcmUgJyR7bWlkZGxld2FyZU5hbWV9JyBtb3VudGVkLmApO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHRoaXMubG9nLmVycm9yKGBCaW5kaW5nICcke21pZGRsZXdhcmVOYW1lfScgdG8gZW5naW5lIGZhaWxlZGApO1xuXHRcdFx0XHR0aGlzLmxvZy5kZWJ1ZyhlcnIpO1xuXHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gYXBwbGljYXRpb247XG5cdH1cbn07XG4iXX0=