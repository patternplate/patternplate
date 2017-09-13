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

      // Load user hooks
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy91c2VyLWhvb2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyYXRpb25LZXkiLCJhZnRlciIsInN0YXJ0IiwiYXBwbGljYXRpb24iLCJjb3JlSG9va1BhdGgiLCJydW50aW1lIiwiYmFzZSIsImNvbmZpZ3VyYXRpb24iLCJwYXRocyIsImhvb2tzIiwicGF0aCIsIkFycmF5IiwiaXNBcnJheSIsInVzZXJIb29rUGF0aHMiLCJyZWR1Y2UiLCJpdGVtcyIsIml0ZW0iLCJjd2RzIiwibWFwIiwiY3dkIiwiZmlsdGVyIiwidXNlckhvb2tzIiwidXNlckhvb2tQYXRoIiwibG9nIiwiZGVidWciLCJsb2FkZWRIb29rcyIsImNvbmNhdCIsImxlbmd0aCIsImxvYWRlZEhvb2siLCJuYW1lIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJTZXQiLCJyZXZlcnNlIiwiY29uZmxpY3RpbmdDb3JlSG9vayIsImNvcmVIb29rIiwidXNlckhvb2siLCJFcnJvciIsInJlcXVpcmVQYXRoIiwiQm9vbGVhbiIsInJlZ2lzdGVyZWQiLCJob29rIiwicmVnaXN0ZXIiLCJqb2JzIiwiUHJvbWlzZSIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O2tCQUVlO0FBQ2JBLG9CQUFrQixPQURMO0FBRWJDLFNBQU8sQ0FBQyw2QkFBRCxDQUZNO0FBR1BDLE9BSE8saUJBR0RDLFdBSEMsRUFHWTtBQUFBOztBQUFBO0FBQ3ZCLFlBQU1DLGVBQWUsbUJBQ25CRCxZQUFZRSxPQUFaLENBQW9CQyxJQURELEVBRW5CSCxZQUFZSSxhQUFaLENBQTBCQyxLQUExQixDQUFnQ0MsS0FGYixDQUFyQjtBQUlBLFlBQUtGLGFBQUwsQ0FBbUJHLElBQW5CLEdBQTBCQyxNQUFNQyxPQUFOLENBQWMsTUFBS0wsYUFBTCxDQUFtQkcsSUFBakMsSUFDdEIsTUFBS0gsYUFB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IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi4vLi4vLi4vbGlicmFyeS91dGlsaXRpZXMvZnMnO1xuXG5pbXBvcnQgZ2V0SG9va1RyZWUgZnJvbSAnLi4vLi4vLi4vbGlicmFyeS9ob29rcy9nZXQtaG9vay10cmVlJztcbmltcG9ydCBsb2FkIGZyb20gJy4uLy4uLy4uL2xpYnJhcnkvaG9va3MvbG9hZCc7XG5pbXBvcnQgcnVuSG9va1RyZWUgZnJvbSAnLi4vLi4vLi4vbGlicmFyeS9ob29rcy9ydW4taG9vay10cmVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWd1cmF0aW9uS2V5OiAnaG9va3MnLFxuICBhZnRlcjogWydob29rczpjb25maWd1cmU6c3RhcnQ6YWZ0ZXInXSxcbiAgYXN5bmMgc3RhcnQoYXBwbGljYXRpb24pIHtcbiAgICBjb25zdCBjb3JlSG9va1BhdGggPSByZXNvbHZlKFxuICAgICAgYXBwbGljYXRpb24ucnVudGltZS5iYXNlLFxuICAgICAgYXBwbGljYXRpb24uY29uZmlndXJhdGlvbi5wYXRocy5ob29rc1xuICAgICk7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uLnBhdGggPSBBcnJheS5pc0FycmF5KHRoaXMuY29uZmlndXJhdGlvbi5wYXRoKVxuICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aFxuICAgICAgOiBbdGhpcy5jb25maWd1cmF0aW9uLnBhdGhdO1xuXG4gICAgY29uc3QgdXNlckhvb2tQYXRocyA9IFtcbiAgICAgIC4uLnRoaXMuY29uZmlndXJhdGlvbi5wYXRoXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKGl0ZW1zLCBpdGVtKSA9PiBbXG4gICAgICAgICAgICAuLi5pdGVtcyxcbiAgICAgICAgICAgIC4uLmFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkcy5tYXAoY3dkID0+IHJlc29sdmUoY3dkLCBpdGVtKSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtdXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGNvcmVIb29rUGF0aClcbiAgICBdO1xuXG4gICAgbGV0IHVzZXJIb29rcyA9IFtdO1xuXG4gICAgLy8gTG9hZCB1c2VyIGhvb2tzXG4gICAgZm9yIChjb25zdCB1c2VySG9va1BhdGggb2YgdXNlckhvb2tQYXRocykge1xuICAgICAgaWYgKChhd2FpdCBleGlzdHModXNlckhvb2tQYXRoKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHBsaWNhdGlvbi5sb2cuZGVidWcoYExvYWRpbmcgdXNlciBob29rcyBmcm9tICR7dXNlckhvb2tQYXRofS4uLmApO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsb2FkZWRIb29rcyA9IGxvYWQoYXBwbGljYXRpb24sIHVzZXJIb29rUGF0aCwgdHJ1ZSk7XG4gICAgICAgIHVzZXJIb29rcyA9IHVzZXJIb29rcy5jb25jYXQobG9hZGVkSG9va3MpO1xuICAgICAgICBhcHBsaWNhdGlvbi5sb2cuZGVidWcoXG4gICAgICAgICAgYExvYWRlZCAke2xvYWRlZEhvb2tzLmxlbmd0aH0gdXNlciBob29rczogJHtsb2FkZWRIb29rcy5tYXAoXG4gICAgICAgICAgICBsb2FkZWRIb29rID0+IGxvYWRlZEhvb2submFtZVxuICAgICAgICAgICl9YFxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYXBwbGljYXRpb24ubG9nLmVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgbG9hZGluZyBob29rcyBmcm9tICR7dXNlckhvb2tQYXRofTogJHtlcnJvci5tZXNzYWdlfWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGVycm9yLnN0YWNrKSB7XG4gICAgICAgICAgYXBwbGljYXRpb24ubG9nLmVycm9yKGAke2Vycm9yLnN0YWNrfWApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIExldCB0aGUgbGFzdCB1c2VyIGhvb2sgd2l0aCBhIGdpdmVuIG5hbWUgcmVpZ25cbiAgICB1c2VySG9va3MgPSBbLi4ubmV3IFNldCh1c2VySG9va3MucmV2ZXJzZSgpKV0ucmV2ZXJzZSgpO1xuXG4gICAgdXNlckhvb2tzID0gdXNlckhvb2tzXG4gICAgICAubWFwKHVzZXJIb29rID0+IHtcbiAgICAgICAgLy8gRGV0ZWN0IGhvb2tzIGNvbmZsaWN0aW5nIHdpdGggY29yZSBob29rc1xuICAgICAgICBjb25zdCBjb25mbGljdGluZ0NvcmVIb29rID0gYXBwbGljYXRpb24uaG9va3MuZmlsdGVyKFxuICAgICAgICAgIGNvcmVIb29rID0+IGNvcmVIb29rLm5hbWUgPT09IHVzZXJIb29rLm5hbWVcbiAgICAgICAgKVswXTtcbiAgICAgICAgaWYgKGNvbmZsaWN0aW5nQ29yZUhvb2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSG9vayBcIiR7dXNlckhvb2submFtZX1cIiBmcm9tICR7dXNlckhvb2sucmVxdWlyZVBhdGh9IGNvbmZsaWN0cyB3aXRoIGNvcmUgaG9vayBcIiR7Y29uZmxpY3RpbmdDb3JlSG9vay5uYW1lfVwiLCB3aWxsIG5vdCBsb2FkLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VySG9vaztcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgY29uc3QgcmVnaXN0ZXJlZCA9IFsuLi5hcHBsaWNhdGlvbi5ob29rcywgLi4udXNlckhvb2tzXS5tYXAoaG9vayA9PlxuICAgICAgaG9vay5yZWdpc3RlcihhcHBsaWNhdGlvbilcbiAgICApO1xuXG4gICAgY29uc3Qgam9icyA9IHJ1bkhvb2tUcmVlKFxuICAgICAgZ2V0SG9va1RyZWUocmVnaXN0ZXJlZCksXG4gICAgICByZWdpc3RlcmVkLFxuICAgICAgYXBwbGljYXRpb24sXG4gICAgICB7fVxuICAgICk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoam9icyk7XG4gICAgYXBwbGljYXRpb24uaG9va3MgPSByZWdpc3RlcmVkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuIl19