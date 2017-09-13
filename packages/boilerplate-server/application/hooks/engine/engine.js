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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9lbmdpbmUvZW5naW5lLmpzIl0sIm5hbWVzIjpbImVuZ2luZUJsdWVwcmludCIsIm5hbWVTcGFjZSIsIldlYWtNYXAiLCJFbmdpbmUiLCJjb25zdHJ1Y3RvciIsImFwcGxpY2F0aW9uIiwiZnVlbCIsImV4cGVyaW1lbnRhbCIsImVudiIsInNldCIsIm1vdW50cyIsInN0YXJ0IiwiaG9zdCIsInBvcnQiLCJnZXQiLCJzZXJ2ZXIiLCJjb25maWd1cmF0aW9uIiwiZW52aXJvbm1lbnQiLCJyb3V0ZXIiLCJsb2ciLCJkZWJ1ZyIsInVzZSIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwicnVudGltZSIsInRlc3QiLCJhdXRvUG9ydCIsIkVycm9yIiwid2FybiIsImZpbmQiLCJzdWJzIiwiZm9yRWFjaCIsInN1YiIsIm5hbWUiLCJtb3VudGFibGUiLCJjbGllbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzaWxseSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodHRwIiwibGlzdGVuIiwiaW5mbyIsInN0b3AiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNsb3NlIiwiZXJyIiwibW91bnQiLCJwYXRoIiwiZnJhZ21lbnRzIiwic3BsaXQiLCJob3N0RnJhZ21lbnRzIiwicHJlZml4Iiwic3RhY2siLCJyb3V0ZSIsIm1hdGNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY29uY2F0IiwibWlkZGxld2FyZSIsImZpbHRlciIsIm1vdW50TWlkZGxld2FyZSIsInB1c2giLCJtaWRkbGV3YXJlcyIsIm1pZGRsZXdhcmVOYW1lIiwia2V5cyIsImVuYWJsZWQiLCJjb25maWciLCJtb3VudGFibGVDb25maWciLCJCb29sZWFuIiwiam9pbiIsImVuZ2luZUZhY3RvcnkiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFFQSxTQUFTQSxlQUFULEdBQTJC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QUFBLFlBQ0pSLElBREksbUJBQ0pBLElBREk7QUFBQSxZQUNFRCxXQURGLG1CQUNFQSxXQURGOztBQUVYQyxXQUFLZSxHQUFMO0FBQ0EsYUFBT2hCLFdBQVA7QUFDRDtBQWpNaUIsR0FBcEI7QUFtTUQ7O0FBRUQsU0FBU3NFLGFBQVQsR0FBZ0M7QUFBQSxvQ0FBTkMsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQzlCLDRDQUFZNUUsaUJBQVosZ0JBQWtDNEUsSUFBbEM7QUFDRDs7a0JBRWNELGEiLCJmaWxlIjoiZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IHttZXJnZX0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHBvcnRzIGZyb20gJy4uLy4uLy4uL2xpYnJhcnkvdXRpbGl0aWVzL3BvcnRzJztcblxuZnVuY3Rpb24gZW5naW5lQmx1ZXByaW50KCkge1xuICBjb25zdCBuYW1lU3BhY2UgPSBuZXcgV2Vha01hcCgpO1xuXG4gIHJldHVybiBjbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uKSB7XG4gICAgICBjb25zdCBmdWVsID0ga29hKCk7XG4gICAgICBmdWVsLmV4cGVyaW1lbnRhbCA9IHRydWU7XG5cbiAgICAgIHRoaXMuZW52ID0gZnVlbC5lbnY7XG4gICAgICBuYW1lU3BhY2Uuc2V0KHRoaXMsIHthcHBsaWNhdGlvbiwgZnVlbCwgbW91bnRzOiB7fX0pO1xuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KGhvc3QsIHBvcnQpIHtcbiAgICAgIGNvbnN0IHtmdWVsLCBhcHBsaWNhdGlvbn0gPSBuYW1lU3BhY2UuZ2V0KHRoaXMpO1xuICAgICAgY29uc3Qgc2VydmVyID0gYXBwbGljYXRpb24uY29uZmlndXJhdGlvbi5zZXJ2ZXI7XG4gICAgICBjb25zdCBlbnYgPSBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLmVudmlyb25tZW50O1xuXG4gICAgICBpZiAoYXBwbGljYXRpb24ucm91dGVyKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uLmxvZy5kZWJ1ZyhgS2lja2luZyBvZmYgcm91dGVyIC4uLmApO1xuICAgICAgICBmdWVsLnVzZShhcHBsaWNhdGlvbi5yb3V0ZXIucm91dGVzKCkpO1xuICAgICAgICBmdWVsLnVzZShhcHBsaWNhdGlvbi5yb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSk7XG4gICAgICAgIGFwcGxpY2F0aW9uLmxvZy5kZWJ1ZyhgS2lja2VkIG9mZiByb3V0ZXIgLi4uYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcHBsaWNhdGlvbi5ydW50aW1lLmVudiA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAoKGF3YWl0IHBvcnRzLnRlc3QocG9ydCwgaG9zdCkpICE9PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHNlcnZlci5hdXRvUG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgUG9ydCAke3BvcnR9IGlzIHRha2VuIGFuZCBzZXJ2ZXIuYXV0UG9ydCBpcyBkaXNhYmxlZCwgY291bGQgbm90IHN0YXJ0IHNlcnZlci5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFwcGxpY2F0aW9uLmxvZy53YXJuKFxuICAgICAgICAgICAgYFBvcnQgJHtwb3J0fSBpcyB0YWtlbiwgdHJ5aW5nIHRvIG9idGFpbiBuZXh0IG9wZW4gcG9ydC4uLiBgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXJ2ZXIucG9ydCA9IGF3YWl0IHBvcnRzLmZpbmQoXG4gICAgICAgICAgICBzZXJ2ZXIucG9ydCArIDEsXG4gICAgICAgICAgICBzZXJ2ZXIucG9ydCArIDUxLFxuICAgICAgICAgICAgc2VydmVyLmhvc3RcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgYXBwbGljYXRpb24uc3Vicy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5sb2cuZGVidWcoXG4gICAgICAgICAgICAgIGBDaGFuZ2luZyBjb25maWd1cmF0aW9uIG9mIHN1YmFwcGxpY2F0aW9ucyAke3N1Yi5uYW1lfWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHN1Yi5tb3VudGFibGUuY29uZmlndXJhdGlvbi5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgICAgICAgICBzdWIubW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uY2xpZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgc3ViLm1vdW50YWJsZS5jb25maWd1cmF0aW9uLmNsaWVudCB8fCB7fSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhvc3Q6IHNlcnZlci5ob3N0LFxuICAgICAgICAgICAgICAgIHBvcnQ6IHNlcnZlci5wb3J0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmxvZy5zaWxseShcbiAgICAgICAgICAgICAgYCR7c3ViLm1vdW50YWJsZS5uYW1lfS5jb25maWd1cmF0aW9uLnNlcnZlcjogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBzdWIubW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uc2VydmVyXG4gICAgICAgICAgICAgICl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmxvZy5zaWxseShcbiAgICAgICAgICAgICAgYCR7c3ViLm1vdW50YWJsZS5uYW1lfS5jb25maWd1cmF0aW9uLmNsaWVudDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBzdWIubW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uY2xpZW50XG4gICAgICAgICAgICAgICl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHBsaWNhdGlvbi5sb2cuZGVidWcoXG4gICAgICAgIGBTdGFydGluZyBlbmdpbmUgYXQgaHR0cDovLyR7c2VydmVyLmhvc3R9OiR7c2VydmVyLnBvcnR9IGluIGVudmlyb25tZW50ICcke2Vudn0nIC4uLmBcbiAgICAgICk7XG4gICAgICBjb25zdCBodHRwID0gYXdhaXQgZnVlbC5saXN0ZW4oc2VydmVyLnBvcnQpO1xuICAgICAgYXBwbGljYXRpb24ubG9nLmluZm8oXG4gICAgICAgIGBTdGFydGVkICR7ZW52fSBzZXJ2ZXIgYXQgaHR0cDovLyR7c2VydmVyLmhvc3R9OiR7c2VydmVyLnBvcnR9YFxuICAgICAgKTtcblxuICAgICAgbmFtZVNwYWNlLnNldCh0aGlzLCB7aHR0cH0pO1xuICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uO1xuICAgIH1cblxuICAgIGFzeW5jIHN0b3AoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB7aHR0cCwgYXBwbGljYXRpb259ID0gbmFtZVNwYWNlLmdldCh0aGlzKTtcblxuICAgICAgICBodHRwLmNsb3NlKGVyciA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShhcHBsaWNhdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW91bnQobW91bnRhYmxlLCBwYXRoID0gJy8nKSB7XG4gICAgICBjb25zdCB7ZnVlbCwgYXBwbGljYXRpb259ID0gbmFtZVNwYWNlLmdldCh0aGlzKTtcbiAgICAgIGNvbnN0IGZyYWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IGhvc3RGcmFnbWVudHMgPSBhcHBsaWNhdGlvbi5ydW50aW1lLnByZWZpeC5zcGxpdCgnLycpO1xuXG4gICAgICBhcHBsaWNhdGlvbi5sb2cuZGVidWcoYE1vdW50aW5nICR7bW91bnRhYmxlLm5hbWV9IG9uICR7cGF0aH1gKTtcblxuICAgICAgaWYgKHBhdGggPT09ICcvJykge1xuICAgICAgICBtb3VudGFibGUucm91dGVyLnN0YWNrLnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IGFwcGxpY2F0aW9uLnJvdXRlci5yb3V0ZShyb3V0ZS5uYW1lKTtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXBwbGljYXRpb24ucm91dGVyLnN0YWNrLnJvdXRlcy5pbmRleE9mKG1hdGNoKTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLnJvdXRlci5zdGFjay5yb3V0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmxvZy5kZWJ1ZyhcbiAgICAgICAgICAgICAgYFJvdXRlIFwiJHtyb3V0ZS5uYW1lfVwiIG9mIFwiJHttb3VudGFibGUubmFtZX1cIiBvdmVyd3JpdGVzICR7YXBwbGljYXRpb24ubmFtZX0ncyByb3V0ZSB3aXRoIHNhbWUgbmFtZS5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXBwbGljYXRpb24ucm91dGVyLnN0YWNrLnJvdXRlcyA9IGFwcGxpY2F0aW9uLnJvdXRlci5zdGFjay5yb3V0ZXMuY29uY2F0KFxuICAgICAgICAgIG1vdW50YWJsZS5yb3V0ZXIuc3RhY2sucm91dGVzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3VudGFibGUucm91dGVyLnByZWZpeChwYXRoKTtcbiAgICAgIH1cblxuICAgICAgYXBwbGljYXRpb24ucm91dGVyLnN0YWNrLm1pZGRsZXdhcmUuZm9yRWFjaChtaWRkbGV3YXJlID0+IHtcbiAgICAgICAgY29uc3QgW21hdGNoXSA9IG1vdW50YWJsZS5yb3V0ZXIuc3RhY2subWlkZGxld2FyZS5maWx0ZXIoXG4gICAgICAgICAgbW91bnRNaWRkbGV3YXJlID0+IG1vdW50TWlkZGxld2FyZS5uYW1lID09PSBtaWRkbGV3YXJlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1vdW50YWJsZS5yb3V0ZXIuc3RhY2subWlkZGxld2FyZS5wdXNoKG1pZGRsZXdhcmUpO1xuICAgICAgfSk7XG5cbiAgICAgIG1vdW50YWJsZS5jb25maWd1cmF0aW9uLm1pZGRsZXdhcmVzID1cbiAgICAgICAgbW91bnRhYmxlLmNvbmZpZ3VyYXRpb24ubWlkZGxld2FyZXMgfHwge307XG5cbiAgICAgIC8vIE92ZXJyaWRlIG1pZGRsZXdhcmUgY29uZmlnIG9uIG1vdW50YWJsZSBieSBob3N0IG1pZGRsZXdhcmUgY29uZmlnXG4gICAgICBmb3IgKGNvbnN0IG1pZGRsZXdhcmVOYW1lIG9mIE9iamVjdC5rZXlzKFxuICAgICAgICBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLm1pZGRsZXdhcmVzLmVuYWJsZWQgfHwge31cbiAgICAgICkpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID1cbiAgICAgICAgICBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLm1pZGRsZXdhcmVzLmVuYWJsZWRbbWlkZGxld2FyZU5hbWVdO1xuICAgICAgICBsZXQgbW91bnRhYmxlQ29uZmlnID1cbiAgICAgICAgICBtb3VudGFibGUuY29uZmlndXJhdGlvbi5taWRkbGV3YXJlcy5lbmFibGVkW21pZGRsZXdhcmVOYW1lXTtcblxuICAgICAgICBtb3VudGFibGVDb25maWcgPVxuICAgICAgICAgIHR5cGVvZiBtb3VudGFibGVDb25maWcgPT09ICd1bmRlZmluZWQnID8gY29uZmlnIDogbW91bnRhYmxlQ29uZmlnO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIG1lcmdlKG1vdW50YWJsZUNvbmZpZywgY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3VudGFibGVDb25maWcgPSBjb25maWc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVlbC51c2UobW91bnRhYmxlLnJvdXRlci5yb3V0ZXMoKSk7XG4gICAgICBmdWVsLnVzZShtb3VudGFibGUucm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuXG4gICAgICBhcHBsaWNhdGlvbi5yb3V0ZXIuc3VicyA9IGFwcGxpY2F0aW9uLnJvdXRlci5zdWJzIHx8IFtdO1xuICAgICAgYXBwbGljYXRpb24ucm91dGVyLnN1YnMucHVzaChtb3VudGFibGUucm91dGVyKTtcblxuICAgICAgY29uc3QgcHJlZml4ID0gZnJhZ21lbnRzXG4gICAgICAgIC5jb25jYXQoaG9zdEZyYWdtZW50cylcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignLycpO1xuICAgICAgbW91bnRhYmxlLnJ1bnRpbWUucHJlZml4ID0gW2AvJHtwcmVmaXh9YF07XG5cbiAgICAgIGFwcGxpY2F0aW9uLnN1YnMucHVzaCh7cGF0aCwgbW91bnRhYmxlfSk7XG5cbiAgICAgIG1vdW50YWJsZS5jb25maWd1cmF0aW9uLnNlcnZlciA9IHtcbiAgICAgICAgLi4ubW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uc2VydmVyLFxuICAgICAgICAuLi5hcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnNlcnZlclxuICAgICAgfTtcbiAgICAgIG1vdW50YWJsZS5jb25maWd1cmF0aW9uLmNsaWVudCA9IHtcbiAgICAgICAgLi4ubW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uY2xpZW50LFxuICAgICAgICAuLi5hcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLnNlcnZlclxuICAgICAgfTtcblxuICAgICAgYXBwbGljYXRpb24ubG9nLmRlYnVnKFxuICAgICAgICBgQ2hhbmdpbmcgY29uZmlndXJhdGlvbiBvZiBzdWJhcHBsaWNhdGlvbnMgJHttb3VudGFibGUubmFtZX1gXG4gICAgICApO1xuICAgICAgYXBwbGljYXRpb24ubG9nLnNpbGx5KFxuICAgICAgICBgJHttb3VudGFibGUubmFtZX0uY29uZmlndXJhdGlvbi5zZXJ2ZXI6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgbW91bnRhYmxlLmNvbmZpZ3VyYXRpb24uc2VydmVyXG4gICAgICAgICl9YFxuICAgICAgKTtcbiAgICAgIGFwcGxpY2F0aW9uLmxvZy5zaWxseShcbiAgICAgICAgYCR7bW91bnRhYmxlLm5hbWV9LmNvbmZpZ3VyYXRpb24uY2xpZW50OiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIG1vdW50YWJsZS5jb25maWd1cmF0aW9uLmNsaWVudFxuICAgICAgICApfWBcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBhcHBsaWNhdGlvbjtcbiAgICB9XG5cbiAgICB1c2UoLi4uYXJncykge1xuICAgICAgY29uc3Qge2Z1ZWwsIGFwcGxpY2F0aW9ufSA9IG5hbWVTcGFjZS5nZXQodGhpcyk7XG4gICAgICBmdWVsLnVzZSguLi5hcmdzKTtcbiAgICAgIHJldHVybiBhcHBsaWNhdGlvbjtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuZ2luZUZhY3RvcnkoLi4uYXJncykge1xuICByZXR1cm4gbmV3IChlbmdpbmVCbHVlcHJpbnQoKSkoLi4uYXJncyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuZ2luZUZhY3Rvcnk7XG4iXX0=