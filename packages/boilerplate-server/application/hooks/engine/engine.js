'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _lodash = require('lodash');

var _ports = require('../../../library/utilities/ports');

var _ports2 = _interopRequireDefault(_ports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function engineBlueprint() {
	const nameSpace = new WeakMap();

	return class Engine {
		constructor(application) {
			const fuel = (0, _koa2.default)();
			fuel.experimental = true;

			this.env = fuel.env;
			nameSpace.set(this, { application: application, fuel: fuel, mounts: {} });
		}

		start(host, port) {
			var _this = this;

			return _asyncToGenerator(function* () {
				var _nameSpace$get = nameSpace.get(_this);

				const fuel = _nameSpace$get.fuel;
				const application = _nameSpace$get.application;

				const server = application.configuration.server;
				const env = application.configuration.environment;

				if (application.router) {
					application.log.debug(`Kicking off router ...`);
					fuel.use(application.router.routes());
					fuel.use(application.router.allowedMethods());
					application.log.debug(`Kicked off router ...`);
				}

				if (application.runtime.env === 'development') {
					if ((yield _ports2.default.test(port, host)) !== true) {
						if (server.autoPort !== true) {
							throw new Error(`Port ${port} is taken and server.autPort is disabled, could not start server.`);
						}

						application.log.warn(`Port ${port} is taken, trying to obtain next open port... `);
						server.port = yield _ports2.default.find(server.port + 1, server.port + 51, server.host);

						application.subs.forEach(function (sub) {
							application.log.debug(`Changing configuration of subapplications ${sub.name}`);

							sub.mountable.configuration.server = server;
							sub.mountable.configuration.client = Object.assign(sub.mountable.configuration.client || {}, {
								host: server.host,
								port: server.port
							});

							application.log.silly(`${sub.mountable.name}.configuration.server: ${JSON.stringify(sub.mountable.configuration.server)}`);
							application.log.silly(`${sub.mountable.name}.configuration.client: ${JSON.stringify(sub.mountable.configuration.client)}`);
						});
					}
				}

				application.log.debug(`Starting engine at http://${server.host}:${server.port} in environment '${env}' ...`);
				const http = yield fuel.listen(server.port);
				application.log.info(`Started ${env} server at http://${server.host}:${server.port}`);

				nameSpace.set(_this, { http: http });
				return application;
			})();
		}

		stop() {
			var _this2 = this;

			return _asyncToGenerator(function* () {
				return new Promise(function (resolve, reject) {
					var _nameSpace$get2 = nameSpace.get(_this2);

					const http = _nameSpace$get2.http;
					const application = _nameSpace$get2.application;


					http.close(function (err) {
						if (err) {
							return reject(err);
						}
						return resolve(application);
					});
				});
			})();
		}

		mount(mountable) {
			let path = arguments.length <= 1 || arguments[1] === undefined ? '/' : arguments[1];

			var _nameSpace$get3 = nameSpace.get(this);

			const fuel = _nameSpace$get3.fuel;
			const application = _nameSpace$get3.application;

			const fragments = path.split('/');
			const hostFragments = application.runtime.prefix.split('/');

			application.log.debug(`Mounting ${mountable.name} on ${path}`);

			if (path === '/') {
				mountable.router.stack.routes.forEach(route => {
					const match = application.router.route(route.name);
					if (match) {
						const index = application.router.stack.routes.indexOf(match);
						application.router.stack.routes.splice(index, 1);
						application.log.debug(`Route "${route.name}" of "${mountable.name}" overwrites ${application.name}'s route with same name.`);
					}
				});

				application.router.stack.routes = application.router.stack.routes.concat(mountable.router.stack.routes);
			} else {
				mountable.router.prefix(path);
			}

			application.router.stack.middleware.forEach(middleware => {
				var _mountable$router$sta = mountable.router.stack.middleware.filter(mountMiddleware => mountMiddleware.name === middleware.name);

				var _mountable$router$sta2 = _slicedToArray(_mountable$router$sta, 1);

				const match = _mountable$router$sta2[0];

				if (match) {
					return;
				}
				mountable.router.stack.middleware.push(middleware);
			});

			mountable.configuration.middlewares = mountable.configuration.middlewares || {};

			// Override middleware config on mountable by host middleware config
			for (const middlewareName of Object.keys(application.configuration.middlewares.enabled || {})) {
				const config = application.configuration.middlewares.enabled[middlewareName];
				let mountableConfig = mountable.configuration.middlewares.enabled[middlewareName];

				mountableConfig = typeof mountableConfig === 'undefined' ? config : mountableConfig;

				if (typeof config === 'object') {
					(0, _lodash.merge)(mountableConfig, config);
				} else {
					mountableConfig = config;
				}
			}

			fuel.use(mountable.router.routes());
			fuel.use(mountable.router.allowedMethods());

			application.router.subs = application.router.subs || [];
			application.router.subs.push(mountable.router);

			const prefix = fragments.concat(hostFragments).filter(Boolean).join('/');
			mountable.runtime.prefix = [`/${prefix}`];

			application.subs.push({ path: path, mountable: mountable });

			mountable.configuration.server = _extends({}, mountable.configuration.server, application.configuration.server);
			mountable.configuration.client = _extends({}, mountable.configuration.client, application.configuration.server);

			application.log.debug(`Changing configuration of subapplications ${mountable.name}`);
			application.log.silly(`${mountable.name}.configuration.server: ${JSON.stringify(mountable.configuration.server)}`);
			application.log.silly(`${mountable.name}.configuration.client: ${JSON.stringify(mountable.configuration.client)}`);

			return application;
		}

		use() {
			var _nameSpace$get4 = nameSpace.get(this);

			const fuel = _nameSpace$get4.fuel;
			const application = _nameSpace$get4.application;

			fuel.use.apply(fuel, arguments);
			return application;
		}
	};
}

function engineFactory() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(engineBlueprint(), [null].concat(args)))();
}

exports.default = engineFactory;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9lbmdpbmUvZW5naW5lLmpzIl0sIm5hbWVzIjpbImVuZ2luZUJsdWVwcmludCIsIm5hbWVTcGFjZSIsIldlYWtNYXAiLCJFbmdpbmUiLCJjb25zdHJ1Y3RvciIsImFwcGxpY2F0aW9uIiwiZnVlbCIsImV4cGVyaW1lbnRhbCIsImVudiIsInNldCIsIm1vdW50cyIsInN0YXJ0IiwiaG9zdCIsInBvcnQiLCJnZXQiLCJzZXJ2ZXIiLCJjb25maWd1cmF0aW9uIiwiZW52aXJvbm1lbnQiLCJyb3V0ZXIiLCJsb2ciLCJkZWJ1ZyIsInVzZSIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwicnVudGltZSIsInRlc3QiLCJhdXRvUG9ydCIsIkVycm9yIiwid2FybiIsImZpbmQiLCJzdWJzIiwiZm9yRWFjaCIsInN1YiIsIm5hbWUiLCJtb3VudGFibGUiLCJjbGllbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzaWxseSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodHRwIiwibGlzdGVuIiwiaW5mbyIsInN0b3AiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNsb3NlIiwiZXJyIiwibW91bnQiLCJwYXRoIiwiZnJhZ21lbnRzIiwic3BsaXQiLCJob3N0RnJhZ21lbnRzIiwicHJlZml4Iiwic3RhY2siLCJyb3V0ZSIsIm1hdGNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY29uY2F0IiwibWlkZGxld2FyZSIsImZpbHRlciIsIm1vdW50TWlkZGxld2FyZSIsInB1c2giLCJtaWRkbGV3YXJlcyIsIm1pZGRsZXdhcmVOYW1lIiwia2V5cyIsImVuYWJsZWQiLCJjb25maWciLCJtb3VudGFibGVDb25maWciLCJCb29sZWFuIiwiam9pbiIsImVuZ2luZUZhY3RvcnkiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFFQSxTQUFTQSxlQUFULEdBQTJC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QUFBQSxTQUNMUixJQURLLG1CQUNMQSxJQURLO0FBQUEsU0FDQ0QsV0FERCxtQkFDQ0EsV0FERDs7QUFFWkMsUUFBS2UsR0FBTDtBQUNBLFVBQU9oQixXQUFQO0FBQ0E7QUExSWtCLEVBQXBCO0FBNElBOztBQUVELFNBQVNzRSxhQUFULEdBQWdDO0FBQUEsbUNBQU5DLElBQU07QUFBTkEsTUFBTTtBQUFBOztBQUMvQiwyQ0FBWTVFLGlCQUFaLGdCQUFrQzRFLElBQWxDO0FBQ0E7O2tCQUVjRCxhIiwiZmlsZSI6ImVuZ2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrb2EgZnJvbSAna29hJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBwb3J0cyBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L3V0aWxpdGllcy9wb3J0cyc7XG5cbmZ1bmN0aW9uIGVuZ2luZUJsdWVwcmludCgpIHtcblx0Y29uc3QgbmFtZVNwYWNlID0gbmV3IFdlYWtNYXAoKTtcblxuXHRyZXR1cm4gY2xhc3MgRW5naW5lIHtcblx0XHRjb25zdHJ1Y3RvcihhcHBsaWNhdGlvbikge1xuXHRcdFx0Y29uc3QgZnVlbCA9IGtvYSgpO1xuXHRcdFx0ZnVlbC5leHBlcmltZW50YWwgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLmVudiA9IGZ1ZWwuZW52O1xuXHRcdFx0bmFtZVNwYWNlLnNldCh0aGlzLCB7YXBwbGljYXRpb24sIGZ1ZWwsIG1vdW50czoge319KTtcblx0XHR9XG5cblx0XHRhc3luYyBzdGFydChob3N0LCBwb3J0KSB7XG5cdFx0XHRjb25zdCB7ZnVlbCwgYXBwbGljYXRpb259ID0gbmFtZVNwYWNlLmdldCh0aGlzKTtcblx0XHRcdGNvbnN0IHNlcnZlciA9IGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24uc2VydmVyO1xuXHRcdFx0Y29uc3QgZW52ID0gYXBwbGljYXRpb24uY29uZmlndXJhdGlvbi5lbnZpcm9ubWVudDtcblxuXHRcdFx0aWYgKGFwcGxpY2F0aW9uLnJvdXRlcikge1xuXHRcdFx0XHRhcHBsaWNhdGlvbi5sb2cuZGVidWcoYEtpY2tpbmcgb2ZmIHJvdXRlciAuLi5gKTtcblx0XHRcdFx0ZnVlbC51c2UoYXBwbGljYXRpb24ucm91dGVyLnJvdXRlcygpKTtcblx0XHRcdFx0ZnVlbC51c2UoYXBwbGljYXRpb24ucm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuXHRcdFx0XHRhcHBsaWNhdGlvbi5sb2cuZGVidWcoYEtpY2tlZCBvZmYgcm91dGVyIC4uLmApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXBwbGljYXRpb24ucnVudGltZS5lbnYgPT09ICdkZXZlbG9wbWVudCcpIHtcblx0XHRcdFx0aWYgKGF3YWl0IHBvcnRzLnRlc3QocG9ydCwgaG9zdCkgIT09IHRydWUpIHtcblx0XHRcdFx0XHRpZiAoc2VydmVyLmF1dG9Qb3J0ICE9PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFBvcnQgJHtwb3J0fSBpcyB0YWtlbiBhbmQgc2VydmVyLmF1dFBvcnQgaXMgZGlzYWJsZWQsIGNvdWxkIG5vdCBzdGFydCBzZXJ2ZXIuYCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YXBwbGljYXRpb24ubG9nLndhcm4oYFBvcnQgJHtwb3J0fSBpcyB0YWtlbiwgdHJ5aW5nIHRvIG9idGFpbiBuZXh0IG9wZW4gcG9ydC4uLiBgKTtcblx0XHRcdFx0XHRzZXJ2ZXIucG9ydCA9IGF3YWl0IHBvcnRzLmZpbmQoc2VydmVyLnBvcnQgKyAxLCBzZXJ2ZXIucG9ydCArIDUxLCBzZXJ2ZXIuaG9zdCk7XG5cblx0XHRcdFx0XHRhcHBsaWNhdGlvbi5zdWJzLmZvckVhY2goc3ViID0+IHtcblx0XHRcdFx0XHRcdGFwcGxpY2F0aW9uLmxvZy5kZWJ1ZyhgQ2hhbmdpbmcgY29uZmlndXJhdGlvbiBvZiBzdWJhcHBsaWNhdGlvbnMgJHtzdWIubmFtZX1gKTtcblxuXHRcdFx0XHRcdFx0c3ViLm1vdW50YWJsZS5jb25maWd1cmF0aW9uLnNlcnZlciA9IHNlcnZlcjtcblx0XHRcdFx0XHRcdHN1Yi5tb3VudGFibGUuY29uZmlndXJhdGlvbi5jbGllbnQgPSBPYmplY3QuYXNzaWduKHN1Yi5tb3VudGFibGUuY29uZmlndXJhdGlvbi5jbGllbnQgfHwge30sIHtcblx0XHRcdFx0XHRcdFx0aG9zdDogc2VydmVyLmhvc3QsXG5cdFx0XHRcdFx0XHRcdHBvcnQ6IHNlcnZlci5wb3J0XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0YXBwbGljYXRpb24ubG9nLnNpbGx5KGAke3N1Yi5tb3VudGFibGUubmFtZX0uY29uZmlndXJhdGlvbi5zZXJ2ZXI6ICR7SlNPTi5zdHJpbmdpZnkoc3ViLm1vdW50YWJsZS5jb25maWd1cmF0aW9uLnNlcnZlcil9YCk7XG5cdFx0XHRcdFx0XHRhcHBsaWNhdGlvbi5sb2cuc2lsbHkoYCR7c3ViLm1vdW50YWJsZS5uYW1lfS5jb25maWd1cmF0aW9uLmNsaWVudDogJHtKU09OLnN0cmluZ2lmeShzdWIubW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uY2xpZW50KX1gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhcHBsaWNhdGlvbi5sb2cuZGVidWcoYFN0YXJ0aW5nIGVuZ2luZSBhdCBodHRwOi8vJHtzZXJ2ZXIuaG9zdH06JHtzZXJ2ZXIucG9ydH0gaW4gZW52aXJvbm1lbnQgJyR7ZW52fScgLi4uYCk7XG5cdFx0XHRjb25zdCBodHRwID0gYXdhaXQgZnVlbC5saXN0ZW4oc2VydmVyLnBvcnQpO1xuXHRcdFx0YXBwbGljYXRpb24ubG9nLmluZm8oYFN0YXJ0ZWQgJHtlbnZ9IHNlcnZlciBhdCBodHRwOi8vJHtzZXJ2ZXIuaG9zdH06JHtzZXJ2ZXIucG9ydH1gKTtcblxuXHRcdFx0bmFtZVNwYWNlLnNldCh0aGlzLCB7aHR0cH0pO1xuXHRcdFx0cmV0dXJuIGFwcGxpY2F0aW9uO1xuXHRcdH1cblxuXHRcdGFzeW5jIHN0b3AoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCB7aHR0cCwgYXBwbGljYXRpb259ID0gbmFtZVNwYWNlLmdldCh0aGlzKTtcblxuXHRcdFx0XHRodHRwLmNsb3NlKGVyciA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShhcHBsaWNhdGlvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0bW91bnQobW91bnRhYmxlLCBwYXRoID0gJy8nKSB7XG5cdFx0XHRjb25zdCB7ZnVlbCwgYXBwbGljYXRpb259ID0gbmFtZVNwYWNlLmdldCh0aGlzKTtcblx0XHRcdGNvbnN0IGZyYWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcblx0XHRcdGNvbnN0IGhvc3RGcmFnbWVudHMgPSBhcHBsaWNhdGlvbi5ydW50aW1lLnByZWZpeC5zcGxpdCgnLycpO1xuXG5cdFx0XHRhcHBsaWNhdGlvbi5sb2cuZGVidWcoYE1vdW50aW5nICR7bW91bnRhYmxlLm5hbWV9IG9uICR7cGF0aH1gKTtcblxuXHRcdFx0aWYgKHBhdGggPT09ICcvJykge1xuXHRcdFx0XHRtb3VudGFibGUucm91dGVyLnN0YWNrLnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcblx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IGFwcGxpY2F0aW9uLnJvdXRlci5yb3V0ZShyb3V0ZS5uYW1lKTtcblx0XHRcdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gYXBwbGljYXRpb24ucm91dGVyLnN0YWNrLnJvdXRlcy5pbmRleE9mKG1hdGNoKTtcblx0XHRcdFx0XHRcdGFwcGxpY2F0aW9uLnJvdXRlci5zdGFjay5yb3V0ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRcdGFwcGxpY2F0aW9uLmxvZy5kZWJ1ZyhgUm91dGUgXCIke3JvdXRlLm5hbWV9XCIgb2YgXCIke21vdW50YWJsZS5uYW1lfVwiIG92ZXJ3cml0ZXMgJHthcHBsaWNhdGlvbi5uYW1lfSdzIHJvdXRlIHdpdGggc2FtZSBuYW1lLmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0YXBwbGljYXRpb24ucm91dGVyLnN0YWNrLnJvdXRlcyA9IGFwcGxpY2F0aW9uLnJvdXRlci5zdGFjay5yb3V0ZXMuY29uY2F0KG1vdW50YWJsZS5yb3V0ZXIuc3RhY2sucm91dGVzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1vdW50YWJsZS5yb3V0ZXIucHJlZml4KHBhdGgpO1xuXHRcdFx0fVxuXG5cdFx0XHRhcHBsaWNhdGlvbi5yb3V0ZXIuc3RhY2subWlkZGxld2FyZS5mb3JFYWNoKG1pZGRsZXdhcmUgPT4ge1xuXHRcdFx0XHRjb25zdCBbbWF0Y2hdID0gbW91bnRhYmxlLnJvdXRlci5zdGFjay5taWRkbGV3YXJlXG5cdFx0XHRcdFx0LmZpbHRlcihtb3VudE1pZGRsZXdhcmUgPT4gbW91bnRNaWRkbGV3YXJlLm5hbWUgPT09IG1pZGRsZXdhcmUubmFtZSk7XG5cdFx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRtb3VudGFibGUucm91dGVyLnN0YWNrLm1pZGRsZXdhcmUucHVzaChtaWRkbGV3YXJlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtb3VudGFibGUuY29uZmlndXJhdGlvbi5taWRkbGV3YXJlcyA9IG1vdW50YWJsZS5jb25maWd1cmF0aW9uLm1pZGRsZXdhcmVzIHx8IHt9O1xuXG5cdFx0XHQvLyBPdmVycmlkZSBtaWRkbGV3YXJlIGNvbmZpZyBvbiBtb3VudGFibGUgYnkgaG9zdCBtaWRkbGV3YXJlIGNvbmZpZ1xuXHRcdFx0Zm9yIChjb25zdCBtaWRkbGV3YXJlTmFtZSBvZiBPYmplY3Qua2V5cyhhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLm1pZGRsZXdhcmVzLmVuYWJsZWQgfHwge30pKSB7XG5cdFx0XHRcdGNvbnN0IGNvbmZpZyA9IGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24ubWlkZGxld2FyZXMuZW5hYmxlZFttaWRkbGV3YXJlTmFtZV07XG5cdFx0XHRcdGxldCBtb3VudGFibGVDb25maWcgPSBtb3VudGFibGUuY29uZmlndXJhdGlvbi5taWRkbGV3YXJlcy5lbmFibGVkW21pZGRsZXdhcmVOYW1lXTtcblxuXHRcdFx0XHRtb3VudGFibGVDb25maWcgPSB0eXBlb2YgbW91bnRhYmxlQ29uZmlnID09PSAndW5kZWZpbmVkJyA/IGNvbmZpZyA6IG1vdW50YWJsZUNvbmZpZztcblxuXHRcdFx0XHRpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRtZXJnZShtb3VudGFibGVDb25maWcsIGNvbmZpZyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bW91bnRhYmxlQ29uZmlnID0gY29uZmlnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1ZWwudXNlKG1vdW50YWJsZS5yb3V0ZXIucm91dGVzKCkpO1xuXHRcdFx0ZnVlbC51c2UobW91bnRhYmxlLnJvdXRlci5hbGxvd2VkTWV0aG9kcygpKTtcblxuXHRcdFx0YXBwbGljYXRpb24ucm91dGVyLnN1YnMgPSBhcHBsaWNhdGlvbi5yb3V0ZXIuc3VicyB8fCBbXTtcblx0XHRcdGFwcGxpY2F0aW9uLnJvdXRlci5zdWJzLnB1c2gobW91bnRhYmxlLnJvdXRlcik7XG5cblx0XHRcdGNvbnN0IHByZWZpeCA9IGZyYWdtZW50cy5jb25jYXQoaG9zdEZyYWdtZW50cykuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJy8nKTtcblx0XHRcdG1vdW50YWJsZS5ydW50aW1lLnByZWZpeCA9IFtgLyR7cHJlZml4fWBdO1xuXG5cdFx0XHRhcHBsaWNhdGlvbi5zdWJzLnB1c2goe3BhdGgsIG1vdW50YWJsZX0pO1xuXG5cdFx0XHRtb3VudGFibGUuY29uZmlndXJhdGlvbi5zZXJ2ZXIgPSB7Li4ubW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uc2VydmVyLCAuLi5hcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnNlcnZlcn07XG5cdFx0XHRtb3VudGFibGUuY29uZmlndXJhdGlvbi5jbGllbnQgPSB7Li4ubW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uY2xpZW50LCAuLi5hcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnNlcnZlcn07XG5cblx0XHRcdGFwcGxpY2F0aW9uLmxvZy5kZWJ1ZyhgQ2hhbmdpbmcgY29uZmlndXJhdGlvbiBvZiBzdWJhcHBsaWNhdGlvbnMgJHttb3VudGFibGUubmFtZX1gKTtcblx0XHRcdGFwcGxpY2F0aW9uLmxvZy5zaWxseShgJHttb3VudGFibGUubmFtZX0uY29uZmlndXJhdGlvbi5zZXJ2ZXI6ICR7SlNPTi5zdHJpbmdpZnkobW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uc2VydmVyKX1gKTtcblx0XHRcdGFwcGxpY2F0aW9uLmxvZy5zaWxseShgJHttb3VudGFibGUubmFtZX0uY29uZmlndXJhdGlvbi5jbGllbnQ6ICR7SlNPTi5zdHJpbmdpZnkobW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uY2xpZW50KX1gKTtcblxuXHRcdFx0cmV0dXJuIGFwcGxpY2F0aW9uO1xuXHRcdH1cblxuXHRcdHVzZSguLi5hcmdzKSB7XG5cdFx0XHRjb25zdCB7ZnVlbCwgYXBwbGljYXRpb259ID0gbmFtZVNwYWNlLmdldCh0aGlzKTtcblx0XHRcdGZ1ZWwudXNlKC4uLmFyZ3MpO1xuXHRcdFx0cmV0dXJuIGFwcGxpY2F0aW9uO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gZW5naW5lRmFjdG9yeSguLi5hcmdzKSB7XG5cdHJldHVybiBuZXcgKGVuZ2luZUJsdWVwcmludCgpKSguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5naW5lRmFjdG9yeTtcbiJdfQ==