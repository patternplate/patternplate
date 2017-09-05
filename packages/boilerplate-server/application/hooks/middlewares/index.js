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

			const coreMiddlewares = (0, _requireAll2.default)({
				dirname: (0, _path.resolve)(application.runtime.base, application.configuration.paths.middlewares),
				filter: /^([^.].*)\.js(on)?$/,
				resolve: function resolve(mod) {
					return mod.default || mod;
				}
			});
			const userMiddlewares = {};
			this.configuration.path = Array.isArray(this.configuration.path) ? this.configuration.path : [this.configuration.path];

			const middlewarePaths = this.configuration.path.reduce(function (items, item) {
				return items.concat(application.runtime.cwds.map(function (cwd) {
					return (0, _path.resolve)(cwd, item);
				}));
			}, []);

			for (const middlewarePath of middlewarePaths) {
				if (yield (0, _fs.exists)(middlewarePath)) {
					Object.assign(userMiddlewares, (0, _requireAll2.default)({
						dirname: middlewarePath,
						filter: /^([^.].*)\.js(on)?$/,
						resolve: function resolve(mod) {
							return mod.default || mod;
						}
					}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9taWRkbGV3YXJlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZnRlciIsIm1vZGVzIiwic3RhcnQiLCJhcHBsaWNhdGlvbiIsImNvcmVNaWRkbGV3YXJlcyIsImRpcm5hbWUiLCJydW50aW1lIiwiYmFzZSIsImNvbmZpZ3VyYXRpb24iLCJwYXRocyIsIm1pZGRsZXdhcmVzIiwiZmlsdGVyIiwicmVzb2x2ZSIsIm1vZCIsImRlZmF1bHQiLCJ1c2VyTWlkZGxld2FyZXMiLCJwYXRoIiwiQXJyYXkiLCJpc0FycmF5IiwibWlkZGxld2FyZVBhdGhzIiwicmVkdWNlIiwiaXRlbXMiLCJpdGVtIiwiY29uY2F0IiwiY3dkcyIsIm1hcCIsImN3ZCIsIm1pZGRsZXdhcmVQYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlTWlkZGxld2FyZXMiLCJrZXlzIiwiZW5hYmxlZCIsIm1pZGRsZXdhcmVOYW1lIiwicmVzdWx0IiwibWlkZGxld2FyZU1vZHVsZU5hbWUiLCJyZXF1aXJlIiwibG9nIiwic2lsbHkiLCJlcnIiLCJ3YXJuIiwiZXJyb3IiLCJmb3JFYWNoIiwibWlkZGxld2FyZUZhY3RvcnlGdW5jdGlvbiIsIm1pZGRsZXdhcmVDb25maWciLCJpc09iamVjdCIsImRlYnVnIiwiZm4iLCJyb3V0ZXIiLCJ1c2UiLCJzdGFydE1pZGRsZXdhcmVIb29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7OztBQUVBOzs7Ozs7a0JBRWU7QUFDZEEsUUFBTyxDQUFDLDBCQUFELENBRE87QUFFZEMsUUFBTyxDQUFDLFFBQUQsQ0FGTzs7QUFJZEM7QUFBQSwrQkFBTyxXQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFBQTs7QUFDdEQsU0FBTUMsa0JBQWtCLDBCQUFXO0FBQ2xDQyxhQUFTLG1CQUFRRixZQUFZRyxPQUFaLENBQW9CQyxJQUE1QixFQUFrQ0osWUFBWUssYUFBWixDQUEwQkMsS0FBMUIsQ0FBZ0NDLFdBQWxF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WUQsaUJBQWlCWixPQUFqQixLQUE2QixJQUEzRSxFQUFpRjtBQUNoRixXQUFLSyxHQUFMLENBQVNTLEtBQVQsQ0FBZ0IsZUFBY2IsY0FBZSwyQkFBN0M7QUFDQTtBQUNBOztBQUVELFFBQUksT0FBT1csZ0JBQVAsS0FBNEIsV0FBaEMsRUFBNkM7QUFDNUMsV0FBS1AsR0FBTCxDQUFTUyxLQUFULENBQWdCLGVBQWNiLGNBQWUsc0NBQTdDO0FBQ0E7QUFDQTs7QUFFRCxVQUFNYyxLQUFLSiwwQkFBMEJ4QyxXQUExQixFQUF1Q3lDLGdCQUF2QyxDQUFYOztBQUVBLFFBQUksT0FBT0csRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzdCLFdBQUtWLEdBQUwsQ0FBU0csSUFBVCxDQUFlLElBQUdQLGNBQWUsMEVBQWpDO0FBQ0E7QUFDQTs7QUFFRCxRQUFJO0FBQ0g5QixpQkFBWTZDLE1BQVosQ0FBbUJDLEdBQW5CLENBQXVCRixFQUF2QjtBQUNBLFdBQUtWLEdBQUwsQ0FBU1MsS0FBVCxDQUFnQixlQUFjYixjQUFlLFlBQTdDO0FBQ0EsS0FIRCxDQUdFLE9BQU9NLEdBQVAsRUFBWTtBQUNiLFdBQUtGLEdBQUwsQ0FBU0ksS0FBVCxDQUFnQixZQUFXUixjQUFlLG9CQUExQztBQUNBLFdBQUtJLEdBQUwsQ0FBU1MsS0FBVCxDQUFlUCxHQUFmO0FBQ0EsV0FBTUEsR0FBTjtBQUNBO0FBQ0QsSUFwQ0Q7O0FBc0NBLFVBQU9wQyxXQUFQO0FBQ0EsR0FwRkQ7O0FBQUEsV0FBc0IrQyxtQkFBdEI7QUFBQTtBQUFBOztBQUFBLFNBQXNCQSxtQkFBdEI7QUFBQTtBQUpjLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgcmVxdWlyZUFsbCBmcm9tICdyZXF1aXJlLWFsbCc7XG5cbmltcG9ydCB7ZXhpc3RzfSBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L3V0aWxpdGllcy9mcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0YWZ0ZXI6IFsnaG9va3M6cm91dGVzOnN0YXJ0OmFmdGVyJ10sXG5cdG1vZGVzOiBbJ3NlcnZlciddLFxuXG5cdHN0YXJ0OiBhc3luYyBmdW5jdGlvbiBzdGFydE1pZGRsZXdhcmVIb29rKGFwcGxpY2F0aW9uKSB7XG5cdFx0Y29uc3QgY29yZU1pZGRsZXdhcmVzID0gcmVxdWlyZUFsbCh7XG5cdFx0XHRkaXJuYW1lOiByZXNvbHZlKGFwcGxpY2F0aW9uLnJ1bnRpbWUuYmFzZSwgYXBwbGljYXRpb24uY29uZmlndXJhdGlvbi5wYXRocy5taWRkbGV3YXJlcyksXG5cdFx0XHRmaWx0ZXI6IC9eKFteLl0uKilcXC5qcyhvbik/JC8sXG5cdFx0XHRyZXNvbHZlOiBtb2QgPT4gbW9kLmRlZmF1bHQgfHwgbW9kXG5cdFx0fSk7XG5cdFx0Y29uc3QgdXNlck1pZGRsZXdhcmVzID0ge307XG5cdFx0dGhpcy5jb25maWd1cmF0aW9uLnBhdGggPSBBcnJheS5pc0FycmF5KHRoaXMuY29uZmlndXJhdGlvbi5wYXRoKSA/IHRoaXMuY29uZmlndXJhdGlvbi5wYXRoIDogW3RoaXMuY29uZmlndXJhdGlvbi5wYXRoXTtcblxuXHRcdGNvbnN0IG1pZGRsZXdhcmVQYXRocyA9IHRoaXMuY29uZmlndXJhdGlvbi5wYXRoXG5cdFx0XHQucmVkdWNlKChpdGVtcywgaXRlbSkgPT4gaXRlbXMuY29uY2F0KFxuXHRcdFx0XHRhcHBsaWNhdGlvbi5ydW50aW1lLmN3ZHMubWFwKGN3ZCA9PiByZXNvbHZlKGN3ZCwgaXRlbSkpXG5cdFx0XHQpLCBbXSk7XG5cblx0XHRmb3IgKGNvbnN0IG1pZGRsZXdhcmVQYXRoIG9mIG1pZGRsZXdhcmVQYXRocykge1xuXHRcdFx0aWYgKGF3YWl0IGV4aXN0cyhtaWRkbGV3YXJlUGF0aCkpIHtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbih1c2VyTWlkZGxld2FyZXMsIHJlcXVpcmVBbGwoe1xuXHRcdFx0XHRcdGRpcm5hbWU6IG1pZGRsZXdhcmVQYXRoLFxuXHRcdFx0XHRcdGZpbHRlcjogL14oW14uXS4qKVxcLmpzKG9uKT8kLyxcblx0XHRcdFx0XHRyZXNvbHZlOiBtb2QgPT4gbW9kLmRlZmF1bHQgfHwgbW9kXG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBMb2FkIG1vZHVsZSBtaWRkbGV3YXJlc1xuXHRcdGNvbnN0IG1vZHVsZU1pZGRsZXdhcmVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWQpXG5cdFx0XHQuZmlsdGVyKG1pZGRsZXdhcmVOYW1lID0+IHR5cGVvZiB0aGlzLmNvbmZpZ3VyYXRpb24uZW5hYmxlZFttaWRkbGV3YXJlTmFtZV0uZW5hYmxlZCA9PT0gJ3N0cmluZycpXG5cdFx0XHQucmVkdWNlKChyZXN1bHQsIG1pZGRsZXdhcmVOYW1lKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG1pZGRsZXdhcmVNb2R1bGVOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWRbbWlkZGxld2FyZU5hbWVdLmVuYWJsZWQ7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHRbbWlkZGxld2FyZU5hbWVdID0gcmVxdWlyZShtaWRkbGV3YXJlTW9kdWxlTmFtZSk7XG5cdFx0XHRcdFx0dGhpcy5sb2cuc2lsbHkoYFJlcXVpcmVkIG1vZHVsZSBtaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgZnJvbSBtb2R1bGUgJyR7bWlkZGxld2FyZU1vZHVsZU5hbWV9J2ApO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHR0aGlzLmxvZy53YXJuKGBDb3VsZCBub3QgcmVxdWlyZSBtb2R1bGUgbWlkZGxld2FyZSAnJHttaWRkbGV3YXJlTmFtZX0nIGZyb20gbW9kdWxlICcke21pZGRsZXdhcmVNb2R1bGVOYW1lfSdgKTtcblx0XHRcdFx0XHR0aGlzLmxvZy5lcnJvcihlcnIpO1xuXHRcdFx0XHRcdHRocm93IGVycjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LCB7fSk7XG5cblx0XHRjb25zdCBtaWRkbGV3YXJlcyA9IE9iamVjdC5hc3NpZ24oe30sIGNvcmVNaWRkbGV3YXJlcywgdXNlck1pZGRsZXdhcmVzLCBtb2R1bGVNaWRkbGV3YXJlcyk7XG5cblx0XHQvLyBDaGVjayBpZiByZXF1aXJlZCBtb2R1bGVzIGFyZSBmdW5jdGlvbnMsIGJpbmQgdG8gZW5naW5lXG5cdFx0T2JqZWN0LmtleXMobWlkZGxld2FyZXMpLmZvckVhY2gobWlkZGxld2FyZU5hbWUgPT4ge1xuXHRcdFx0Y29uc3QgbWlkZGxld2FyZUZhY3RvcnlGdW5jdGlvbiA9IG1pZGRsZXdhcmVzW21pZGRsZXdhcmVOYW1lXTtcblx0XHRcdGNvbnN0IG1pZGRsZXdhcmVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZW5hYmxlZFttaWRkbGV3YXJlTmFtZV07XG5cblx0XHRcdGlmICh0eXBlb2YgbWlkZGxld2FyZUZhY3RvcnlGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aGlzLmxvZy53YXJuKGAnJHttaWRkbGV3YXJlTmFtZX0nIGlzIG5vIHZhbGlkIG1pZGRsZXdhcmUgZmFjdG9yeWApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGlzT2JqZWN0ID0gdHlwZW9mIG1pZGRsZXdhcmVDb25maWcgPT09ICdvYmplY3QnO1xuXG5cdFx0XHRpZiAobWlkZGxld2FyZUNvbmZpZyA9PT0gZmFsc2UgfHwgaXNPYmplY3QgJiYgbWlkZGxld2FyZUNvbmZpZy5lbmFibGVkICE9PSB0cnVlKSB7XG5cdFx0XHRcdHRoaXMubG9nLmRlYnVnKGBNaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgaXMgZXhwbGljaXRseSBkaXNhYmxlZC5gKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIG1pZGRsZXdhcmVDb25maWcgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRoaXMubG9nLmRlYnVnKGBNaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgaXMgbm90IGNvbmZpZ3VyZWQsIHdpbGwgbm90IG1vdW50LmApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZuID0gbWlkZGxld2FyZUZhY3RvcnlGdW5jdGlvbihhcHBsaWNhdGlvbiwgbWlkZGxld2FyZUNvbmZpZyk7XG5cblx0XHRcdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5sb2cud2FybihgJyR7bWlkZGxld2FyZU5hbWV9JyBtaWRkbGV3YXJlIGZhY3RvcnkgZG9lcyBub3QgcHJvZHVjZSB2YWxpZCBtaWRkbGV3YXJlcywgd2lsbCBub3QgbW91bnQuYCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXBwbGljYXRpb24ucm91dGVyLnVzZShmbik7XG5cdFx0XHRcdHRoaXMubG9nLmRlYnVnKGBNaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgbW91bnRlZC5gKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHR0aGlzLmxvZy5lcnJvcihgQmluZGluZyAnJHttaWRkbGV3YXJlTmFtZX0nIHRvIGVuZ2luZSBmYWlsZWRgKTtcblx0XHRcdFx0dGhpcy5sb2cuZGVidWcoZXJyKTtcblx0XHRcdFx0dGhyb3cgZXJyO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFwcGxpY2F0aW9uO1xuXHR9XG59O1xuIl19