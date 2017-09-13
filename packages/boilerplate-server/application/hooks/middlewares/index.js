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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9taWRkbGV3YXJlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZnRlciIsIm1vZGVzIiwic3RhcnQiLCJhcHBsaWNhdGlvbiIsImNvcmVNaWRkbGV3YXJlcyIsImRpcm5hbWUiLCJydW50aW1lIiwiYmFzZSIsImNvbmZpZ3VyYXRpb24iLCJwYXRocyIsIm1pZGRsZXdhcmVzIiwiZmlsdGVyIiwicmVzb2x2ZSIsIm1vZCIsImRlZmF1bHQiLCJ1c2VyTWlkZGxld2FyZXMiLCJwYXRoIiwiQXJyYXkiLCJpc0FycmF5IiwibWlkZGxld2FyZVBhdGhzIiwicmVkdWNlIiwiaXRlbXMiLCJpdGVtIiwiY29uY2F0IiwiY3dkcyIsIm1hcCIsImN3ZCIsIm1pZGRsZXdhcmVQYXRoIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlTWlkZGxld2FyZXMiLCJrZXlzIiwiZW5hYmxlZCIsIm1pZGRsZXdhcmVOYW1lIiwicmVzdWx0IiwibWlkZGxld2FyZU1vZHVsZU5hbWUiLCJyZXF1aXJlIiwibG9nIiwic2lsbHkiLCJlcnIiLCJ3YXJuIiwiZXJyb3IiLCJmb3JFYWNoIiwibWlkZGxld2FyZUZhY3RvcnlGdW5jdGlvbiIsIm1pZGRsZXdhcmVDb25maWciLCJpc09iamVjdCIsImRlYnVnIiwiZm4iLCJyb3V0ZXIiLCJ1c2UiLCJzdGFydE1pZGRsZXdhcmVIb29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7OztBQUVBOzs7Ozs7a0JBRWU7QUFDYkEsU0FBTyxDQUFDLDBCQUFELENBRE07QUFFYkMsU0FBTyxDQUFDLFFBQUQsQ0FGTTs7QUFJYkM7QUFBQSxpQ0FBTyxXQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFBQTs7QUFDckQsWUFBTUMsa0JBQWtCLDBCQUFXO0FBQ2pDQyxpQkFBUyxtQkFDUEYsWUFBWUcsT0FBWixDQUFvQkMsSUFEYixFQUVQSixZQUFZSyxhQUFaLENBQTBCQyxLQUExQixDQUFnQ0MsV0FGekIs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WUFBWUQsaUJBQWlCWixPQUFqQixLQUE2QixJQUY1QyxFQUdFO0FBQ0EsZ0JBQUtLLEdBQUwsQ0FBU1MsS0FBVCxDQUNHLGVBQWNiLGNBQWUsMkJBRGhDO0FBR0E7QUFDRDs7QUFFRCxZQUFJLE9BQU9XLGdCQUFQLEtBQTRCLFdBQWhDLEVBQTZDO0FBQzNDLGdCQUFLUCxHQUFMLENBQVNTLEtBQVQsQ0FDRyxlQUFjYixjQUFlLHNDQURoQztBQUdBO0FBQ0Q7O0FBRUQsY0FBTWMsS0FBS0osMEJBQTBCeEMsV0FBMUIsRUFBdUN5QyxnQkFBdkMsQ0FBWDs7QUFFQSxZQUFJLE9BQU9HLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUM1QixnQkFBS1YsR0FBTCxDQUFTRyxJQUFULENBQ0csSUFBR1AsY0FBZSwwRUFEckI7QUFHQTtBQUNEOztBQUVELFlBQUk7QUFDRjlCLHNCQUFZNkMsTUFBWixDQUFtQkMsR0FBbkIsQ0FBdUJGLEVBQXZCO0FBQ0EsZ0JBQUtWLEdBQUwsQ0FBU1MsS0FBVCxDQUFnQixlQUFjYixjQUFlLFlBQTdDO0FBQ0QsU0FIRCxDQUdFLE9BQU9NLEdBQVAsRUFBWTtBQUNaLGdCQUFLRixHQUFMLENBQVNJLEtBQVQsQ0FBZ0IsWUFBV1IsY0FBZSxvQkFBMUM7QUFDQSxnQkFBS0ksR0FBTCxDQUFTUyxLQUFULENBQWVQLEdBQWY7QUFDQSxnQkFBTUEsR0FBTjtBQUNEO0FBQ0YsT0E3Q0Q7O0FBK0NBLGFBQU9wQyxXQUFQO0FBQ0QsS0FuSEQ7O0FBQUEsYUFBc0IrQyxtQkFBdEI7QUFBQTtBQUFBOztBQUFBLFdBQXNCQSxtQkFBdEI7QUFBQTtBQUphLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgcmVxdWlyZUFsbCBmcm9tICdyZXF1aXJlLWFsbCc7XG5cbmltcG9ydCB7ZXhpc3RzfSBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L3V0aWxpdGllcy9mcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWZ0ZXI6IFsnaG9va3M6cm91dGVzOnN0YXJ0OmFmdGVyJ10sXG4gIG1vZGVzOiBbJ3NlcnZlciddLFxuXG4gIHN0YXJ0OiBhc3luYyBmdW5jdGlvbiBzdGFydE1pZGRsZXdhcmVIb29rKGFwcGxpY2F0aW9uKSB7XG4gICAgY29uc3QgY29yZU1pZGRsZXdhcmVzID0gcmVxdWlyZUFsbCh7XG4gICAgICBkaXJuYW1lOiByZXNvbHZlKFxuICAgICAgICBhcHBsaWNhdGlvbi5ydW50aW1lLmJhc2UsXG4gICAgICAgIGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24ucGF0aHMubWlkZGxld2FyZXNcbiAgICAgICksXG4gICAgICBmaWx0ZXI6IC9eKFteLl0uKilcXC5qcyhvbik/JC8sXG4gICAgICByZXNvbHZlOiBtb2QgPT4gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgfSk7XG4gICAgY29uc3QgdXNlck1pZGRsZXdhcmVzID0ge307XG4gICAgdGhpcy5jb25maWd1cmF0aW9uLnBhdGggPSBBcnJheS5pc0FycmF5KHRoaXMuY29uZmlndXJhdGlvbi5wYXRoKVxuICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aFxuICAgICAgOiBbdGhpcy5jb25maWd1cmF0aW9uLnBhdGhdO1xuXG4gICAgY29uc3QgbWlkZGxld2FyZVBhdGhzID0gdGhpcy5jb25maWd1cmF0aW9uLnBhdGgucmVkdWNlKFxuICAgICAgKGl0ZW1zLCBpdGVtKSA9PlxuICAgICAgICBpdGVtcy5jb25jYXQoYXBwbGljYXRpb24ucnVudGltZS5jd2RzLm1hcChjd2QgPT4gcmVzb2x2ZShjd2QsIGl0ZW0pKSksXG4gICAgICBbXVxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IG1pZGRsZXdhcmVQYXRoIG9mIG1pZGRsZXdhcmVQYXRocykge1xuICAgICAgaWYgKGF3YWl0IGV4aXN0cyhtaWRkbGV3YXJlUGF0aCkpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB1c2VyTWlkZGxld2FyZXMsXG4gICAgICAgICAgcmVxdWlyZUFsbCh7XG4gICAgICAgICAgICBkaXJuYW1lOiBtaWRkbGV3YXJlUGF0aCxcbiAgICAgICAgICAgIGZpbHRlcjogL14oW14uXS4qKVxcLmpzKG9uKT8kLyxcbiAgICAgICAgICAgIHJlc29sdmU6IG1vZCA9PiBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIExvYWQgbW9kdWxlIG1pZGRsZXdhcmVzXG4gICAgY29uc3QgbW9kdWxlTWlkZGxld2FyZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ3VyYXRpb24uZW5hYmxlZClcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIG1pZGRsZXdhcmVOYW1lID0+XG4gICAgICAgICAgdHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkW21pZGRsZXdhcmVOYW1lXS5lbmFibGVkID09PSAnc3RyaW5nJ1xuICAgICAgKVxuICAgICAgLnJlZHVjZSgocmVzdWx0LCBtaWRkbGV3YXJlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBtaWRkbGV3YXJlTW9kdWxlTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkW21pZGRsZXdhcmVOYW1lXVxuICAgICAgICAgIC5lbmFibGVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0W21pZGRsZXdhcmVOYW1lXSA9IHJlcXVpcmUobWlkZGxld2FyZU1vZHVsZU5hbWUpO1xuICAgICAgICAgIHRoaXMubG9nLnNpbGx5KFxuICAgICAgICAgICAgYFJlcXVpcmVkIG1vZHVsZSBtaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgZnJvbSBtb2R1bGUgJyR7bWlkZGxld2FyZU1vZHVsZU5hbWV9J2BcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmxvZy53YXJuKFxuICAgICAgICAgICAgYENvdWxkIG5vdCByZXF1aXJlIG1vZHVsZSBtaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgZnJvbSBtb2R1bGUgJyR7bWlkZGxld2FyZU1vZHVsZU5hbWV9J2BcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMubG9nLmVycm9yKGVycik7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sIHt9KTtcblxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgY29yZU1pZGRsZXdhcmVzLFxuICAgICAgdXNlck1pZGRsZXdhcmVzLFxuICAgICAgbW9kdWxlTWlkZGxld2FyZXNcbiAgICApO1xuXG4gICAgLy8gQ2hlY2sgaWYgcmVxdWlyZWQgbW9kdWxlcyBhcmUgZnVuY3Rpb25zLCBiaW5kIHRvIGVuZ2luZVxuICAgIE9iamVjdC5rZXlzKG1pZGRsZXdhcmVzKS5mb3JFYWNoKG1pZGRsZXdhcmVOYW1lID0+IHtcbiAgICAgIGNvbnN0IG1pZGRsZXdhcmVGYWN0b3J5RnVuY3Rpb24gPSBtaWRkbGV3YXJlc1ttaWRkbGV3YXJlTmFtZV07XG4gICAgICBjb25zdCBtaWRkbGV3YXJlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmVuYWJsZWRbbWlkZGxld2FyZU5hbWVdO1xuXG4gICAgICBpZiAodHlwZW9mIG1pZGRsZXdhcmVGYWN0b3J5RnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5sb2cud2FybihgJyR7bWlkZGxld2FyZU5hbWV9JyBpcyBubyB2YWxpZCBtaWRkbGV3YXJlIGZhY3RvcnlgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc09iamVjdCA9IHR5cGVvZiBtaWRkbGV3YXJlQ29uZmlnID09PSAnb2JqZWN0JztcblxuICAgICAgaWYgKFxuICAgICAgICBtaWRkbGV3YXJlQ29uZmlnID09PSBmYWxzZSB8fFxuICAgICAgICAoaXNPYmplY3QgJiYgbWlkZGxld2FyZUNvbmZpZy5lbmFibGVkICE9PSB0cnVlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFxuICAgICAgICAgIGBNaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgaXMgZXhwbGljaXRseSBkaXNhYmxlZC5gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBtaWRkbGV3YXJlQ29uZmlnID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcbiAgICAgICAgICBgTWlkZGxld2FyZSAnJHttaWRkbGV3YXJlTmFtZX0nIGlzIG5vdCBjb25maWd1cmVkLCB3aWxsIG5vdCBtb3VudC5gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm4gPSBtaWRkbGV3YXJlRmFjdG9yeUZ1bmN0aW9uKGFwcGxpY2F0aW9uLCBtaWRkbGV3YXJlQ29uZmlnKTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmxvZy53YXJuKFxuICAgICAgICAgIGAnJHttaWRkbGV3YXJlTmFtZX0nIG1pZGRsZXdhcmUgZmFjdG9yeSBkb2VzIG5vdCBwcm9kdWNlIHZhbGlkIG1pZGRsZXdhcmVzLCB3aWxsIG5vdCBtb3VudC5gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXBwbGljYXRpb24ucm91dGVyLnVzZShmbik7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGBNaWRkbGV3YXJlICcke21pZGRsZXdhcmVOYW1lfScgbW91bnRlZC5gKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmxvZy5lcnJvcihgQmluZGluZyAnJHttaWRkbGV3YXJlTmFtZX0nIHRvIGVuZ2luZSBmYWlsZWRgKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFwcGxpY2F0aW9uO1xuICB9XG59O1xuIl19