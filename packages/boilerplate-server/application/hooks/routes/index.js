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

      // Load physical core routes
      const coreRoutes = (0, _requireAll2.default)((0, _path.resolve)(application.runtime.base, application.configuration.paths.routes));

      // Load physical user routes
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

      // Load module routes
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
          throw new TypeError(`'${routeName}' is no valid route factory`);
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
          throw new TypeError(`'${routeName}' factory returned no valid route for ${routeConfig.path}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYWZ0ZXIiLCJzdGFydCIsImFwcGxpY2F0aW9uIiwicm91dGVyIiwibW9kZSIsImNvcmVSb3V0ZXMiLCJydW50aW1lIiwiYmFzZSIsImNvbmZpZ3VyYXRpb24iLCJwYXRocyIsInJvdXRlcyIsInBhdGgiLCJBcnJheSIsImlzQXJyYXkiLCJyb3V0ZVBhdGhzIiwiUHJvbWlzZSIsImFsbCIsInJlZHVjZSIsIml0ZW1zIiwiaXRlbSIsImNvbmNhdCIsImN3ZHMiLCJtYXAiLCJjd2QiLCJyb3V0ZVBhdGgiLCJleGlzdHMiLCJ1c2VyUm91dGVzIiwicmVnaXN0cnkiLCJlbnRyeSIsImRpcm5hbWUiLCJmaWx0ZXIiLCJyZXNvbHZlIiwibW9kIiwiZGVmYXVsdCIsIm1vZHVsZVJvdXRlcyIsIk9iamVjdCIsImtleXMiLCJlbmFibGVkIiwicm91dGVOYW1lIiwicmVzdWx0Iiwicm91dGVNb2R1bGVOYW1lIiwicmVxdWlyZSIsImxvZyIsImRlYnVnIiwiZXJyIiwid2FybiIsImZvckVhY2giLCJyb3V0ZUZhY3RvcnlGdW5jdGlvbiIsInJvdXRlQ29uZmlnIiwiVHlwZUVycm9yIiwibWV0aG9kcyIsImZuIiwicmVnaXN0ZXIiLCJydW5Sb3V0ZSIsIm5leHQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7OztrQkFFZTtBQUNiQSxTQUFPLENBQUMsMEJBQUQsQ0FETTs7QUFHUEMsT0FITyxpQkFHREMsV0FIQyxFQUdZO0FBQUE7O0FBQUE7QUFDdkJBLGtCQUFZQyxNQUFaLEdBQXFCLDBCQUFyQjs7QUFFQSxVQUFJRCxZQUFZRSxJQUFaLEtBQXFCLFNBQXpCLEVBQW9DO0FBQ2xDLGVBQU9GLFdBQVA7QUFDRDs7QUFFRDtBQUNBLFlBQU1HLGFBQWEsMEJBQ2pCLG1CQUFRSCxZQUFZSSxPQUFaLENB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZXNvbHZlfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IHJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCByZXF1aXJlQWxsIGZyb20gJ3JlcXVpcmUtYWxsJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7ZXhpc3RzfSBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L3V0aWxpdGllcy9mcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWZ0ZXI6IFsnaG9va3M6ZW5naW5lOnN0YXJ0OmFmdGVyJ10sXG5cbiAgYXN5bmMgc3RhcnQoYXBwbGljYXRpb24pIHtcbiAgICBhcHBsaWNhdGlvbi5yb3V0ZXIgPSByb3V0ZXIoKTtcblxuICAgIGlmIChhcHBsaWNhdGlvbi5tb2RlID09PSAnY29uc29sZScpIHtcbiAgICAgIHJldHVybiBhcHBsaWNhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBMb2FkIHBoeXNpY2FsIGNvcmUgcm91dGVzXG4gICAgY29uc3QgY29yZVJvdXRlcyA9IHJlcXVpcmVBbGwoXG4gICAgICByZXNvbHZlKGFwcGxpY2F0aW9uLnJ1bnRpbWUuYmFzZSwgYXBwbGljYXRpb24uY29uZmlndXJhdGlvbi5wYXRocy5yb3V0ZXMpXG4gICAgKTtcblxuICAgIC8vIExvYWQgcGh5c2ljYWwgdXNlciByb3V0ZXNcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aCA9IEFycmF5LmlzQXJyYXkodGhpcy5jb25maWd1cmF0aW9uLnBhdGgpXG4gICAgICA/IHRoaXMuY29uZmlndXJhdGlvbi5wYXRoXG4gICAgICA6IFt0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aF07XG5cbiAgICBjb25zdCByb3V0ZVBhdGhzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aFxuICAgICAgICAucmVkdWNlKFxuICAgICAgICAgIChpdGVtcywgaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW1zLmNvbmNhdChcbiAgICAgICAgICAgICAgYXBwbGljYXRpb24ucnVudGltZS5jd2RzLm1hcChjd2QgPT4gcmVzb2x2ZShjd2QsIGl0ZW0pKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBbXVxuICAgICAgICApXG4gICAgICAgIC5tYXAoYXN5bmMgKHJvdXRlUGF0aCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoOiByb3V0ZVBhdGgsXG4gICAgICAgICAgICBleGlzdHM6IGF3YWl0IGV4aXN0cyhyb3V0ZVBhdGgpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgdXNlclJvdXRlcyA9IHJvdXRlUGF0aHMucmVkdWNlKFxuICAgICAgKHJlZ2lzdHJ5LCBlbnRyeSkgPT5cbiAgICAgICAgZW50cnkuZXhpc3RzXG4gICAgICAgICAgPyBtZXJnZShcbiAgICAgICAgICAgICAgcmVnaXN0cnksXG4gICAgICAgICAgICAgIHJlcXVpcmVBbGwoe1xuICAgICAgICAgICAgICAgIGRpcm5hbWU6IGVudHJ5LnBhdGgsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAvXihbXi5dLiopXFwuanMob24pPyQvLFxuICAgICAgICAgICAgICAgIHJlc29sdmUobW9kKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IHJlZ2lzdHJ5LFxuICAgICAge31cbiAgICApO1xuXG4gICAgLy8gTG9hZCBtb2R1bGUgcm91dGVzXG4gICAgY29uc3QgbW9kdWxlUm91dGVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWQpXG4gICAgICAuZmlsdGVyKFxuICAgICAgICByb3V0ZU5hbWUgPT5cbiAgICAgICAgICB0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWRbcm91dGVOYW1lXS5lbmFibGVkID09PSAnc3RyaW5nJ1xuICAgICAgKVxuICAgICAgLnJlZHVjZSgocmVzdWx0LCByb3V0ZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNb2R1bGVOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWRbcm91dGVOYW1lXS5lbmFibGVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbW9kID0gcmVxdWlyZShyb3V0ZU1vZHVsZU5hbWUpO1xuICAgICAgICAgIHJlc3VsdFtyb3V0ZU5hbWVdID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFxuICAgICAgICAgICAgYFJlcXVpcmVkIG1vZHVsZSByb3V0ZSAnJHtyb3V0ZU5hbWV9JyBmcm9tIG1vZHVsZSAnJHtyb3V0ZU1vZHVsZU5hbWV9J2BcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmxvZy53YXJuKFxuICAgICAgICAgICAgYENvdWxkIG5vdCByZXF1aXJlIG1vZHVsZSByb3V0ZSAnJHtyb3V0ZU5hbWV9JyBmcm9tIG1vZHVsZSAnJHtyb3V0ZU1vZHVsZU5hbWV9J2BcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sIHt9KTtcblxuICAgIGNvbnN0IHJvdXRlcyA9IG1lcmdlKHt9LCBjb3JlUm91dGVzLCBtb2R1bGVSb3V0ZXMsIHVzZXJSb3V0ZXMpO1xuXG4gICAgLy8gQ2hlY2sgaWYgcmVxdWlyZWQgbW9kdWxlcyBhcmUgZnVuY3Rpb25zLCBiaW5kIHRvIHJvdXRlclxuICAgIE9iamVjdC5rZXlzKHJvdXRlcykuZm9yRWFjaChyb3V0ZU5hbWUgPT4ge1xuICAgICAgY29uc3Qgcm91dGVGYWN0b3J5RnVuY3Rpb24gPSByb3V0ZXNbcm91dGVOYW1lXTtcbiAgICAgIGNvbnN0IHJvdXRlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWRbcm91dGVOYW1lXTtcblxuICAgICAgaWYgKHR5cGVvZiByb3V0ZUZhY3RvcnlGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAnJHtyb3V0ZU5hbWV9JyBpcyBubyB2YWxpZCByb3V0ZSBmYWN0b3J5YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcm91dGVDb25maWcgPT09IGZhbHNlIHx8XG4gICAgICAgIChyb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZy5lbmFibGVkID09PSBmYWxzZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhgJyR7cm91dGVOYW1lfScgaXMgZXhwbGljaXRseSBkaXNhYmxlZC5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJvdXRlQ29uZmlnID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhgJyR7cm91dGVOYW1lfScgaXMgbm90IGNvbmZpZ3VyZWQsIHdpbGwgbm90IG1vdW50LmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1ldGhvZHMgPSByb3V0ZUNvbmZpZy5tZXRob2RzIHx8IFtcbiAgICAgICAgJ0dFVCcsXG4gICAgICAgICdQT1NUJyxcbiAgICAgICAgJ1BBVENIJyxcbiAgICAgICAgJ0RFTEVURScsXG4gICAgICAgICdIRUFEJyxcbiAgICAgICAgJ09QVElPTlMnXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBmbiA9IHJvdXRlRmFjdG9yeUZ1bmN0aW9uKGFwcGxpY2F0aW9uLCByb3V0ZUNvbmZpZyk7XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBgJyR7cm91dGVOYW1lfScgZmFjdG9yeSByZXR1cm5lZCBubyB2YWxpZCByb3V0ZSBmb3IgJHtyb3V0ZUNvbmZpZy5wYXRofWBcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2cuZGVidWcoYE1vdW50aW5nICR7cm91dGVOYW1lfSBvbiAke3JvdXRlQ29uZmlnLnBhdGh9YCk7XG5cbiAgICAgIGFwcGxpY2F0aW9uLnJvdXRlci5yZWdpc3RlcihcbiAgICAgICAgcm91dGVOYW1lLFxuICAgICAgICByb3V0ZUNvbmZpZy5wYXRoLFxuICAgICAgICBtZXRob2RzLFxuICAgICAgICBmdW5jdGlvbiogcnVuUm91dGUobmV4dCkge1xuICAgICAgICAgIHlpZWxkIGZuLmJpbmQodGhpcykobmV4dCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXBwbGljYXRpb247XG4gIH1cbn07XG4iXX0=