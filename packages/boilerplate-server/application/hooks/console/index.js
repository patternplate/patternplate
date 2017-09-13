'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _fs = require('../../../library/utilities/fs');

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

var _console = require('./console');

var _console2 = _interopRequireDefault(_console);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  after: ['hooks:log:start:after'],

  start: (() => {
    var _ref = _asyncToGenerator(function* (application) {
      var _this = this;

      const taskPaths = application.runtime.cwds.map(function (loadPath) {
        return (0, _path.resolve)(loadPath, _this.configuration.path);
      }).filter(function (item, index, list) {
        return list.lastIndexOf(item) !== index || list.indexOf(item) === index;
      });

      const existingtaskPaths = [];

      for (const taskPath of taskPaths) {
        if (yield (0, _fs.exists)(taskPath)) {
          existingtaskPaths.push(taskPath);
        }
      }

      const tasks = existingtaskPaths.map(function (tasksPath) {
        return (0, _requireAll2.default)({
          dirname: tasksPath,
          filter: /^([^.].*)\.js(on)?$/,
          resolve: function resolve(mod) {
            return mod.default || mod;
          }
        });
      }).reduce(function (results, task) {
        return Object.assign(results, task);
      }, {});

      // Load module tasks
      const moduleTasks = Object.keys(this.configuration).filter(function (taskName) {
        return typeof _this.configuration[taskName].enabled === 'string';
      }).reduce(function (result, taskName) {
        const taskModuleName = _this.configuration.enabled[taskName].enabled;

        try {
          result[taskName] = require(taskModuleName);
          _this.log.debug(`Required module route '${taskName}' from module '${taskModuleName}'`);
        } catch (err) {
          _this.log.warn(`Could not require module route '${taskName}' from module '${taskModuleName}'`);
          _this.log.debug(err);
        }

        return result;
      }, {});

      Object.assign(tasks, moduleTasks);
      application.console = (0, _console2.default)(application, Object.assign({}, this.configuration, { tasks: tasks }));
      return this;
    });

    function startConsoleHook(_x) {
      return _ref.apply(this, arguments);
    }

    return startConsoleHook;
  })()
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9jb25zb2xlL2luZGV4LmpzIl0sIm5hbWVzIjpbImFmdGVyIiwic3RhcnQiLCJhcHBsaWNhdGlvbiIsInRhc2tQYXRocyIsInJ1bnRpbWUiLCJjd2RzIiwibWFwIiwibG9hZFBhdGgiLCJjb25maWd1cmF0aW9uIiwicGF0aCIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImxpc3QiLCJsYXN0SW5kZXhPZiIsImluZGV4T2YiLCJleGlzdGluZ3Rhc2tQYXRocyIsInRhc2tQYXRoIiwicHVzaCIsInRhc2tzIiwiZGlybmFtZSIsInRhc2tzUGF0aCIsInJlc29sdmUiLCJtb2QiLCJkZWZhdWx0IiwicmVkdWNlIiwicmVzdWx0cyIsInRhc2siLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGVUYXNrcyIsImtleXMiLCJ0YXNrTmFtZSIsImVuYWJsZWQiLCJyZXN1bHQiLCJ0YXNrTW9kdWxlTmFtZSIsInJlcXVpcmUiLCJsb2ciLCJkZWJ1ZyIsImVyciIsIndhcm4iLCJjb25zb2xlIiwic3RhcnRDb25zb2xlSG9vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDYkEsU0FBTyxDQUFDLHVCQUFELENBRE07O0FBR2JDO0FBQUEsaUNBQU8sV0FBZ0NDLFdBQWhDLEVBQTZDO0FBQUE7O0FBQ2xELFlBQU1DLFlBQVlELFlBQVlFLE9BQVosQ0FBb0JDLElBQXBCLENBQ2ZDLEdBRGUsQ0FDWDtBQUFBLGVBQVksbUJBQVFDLFFBQVIsRUFBa0IsTUFBS0MsYUFBTCxDQUFtQkMsSUFBckMsQ0FBWjtBQUFBLE9BRFcsRUFFZkMsTUFGZSxDQUVSLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxJQUFkLEVBQXVCO0FBQzdCLGVBQU9BLEtBQUtDLFdBQUwsQ0FBaUJILElBQWpCLE1BQTJCQyxLQUEzQixJQUFvQ0MsS0FBS0UsT0FBTCxDQUFhSixJQUFiLE1BQXVCQyxLQUFsRTtBQUNELE9BSmUsQ0FBbEI7O0FBTUEsWUFBTUksb0JBQW9CLEVBQTFCOztBQUVBLFdBQUssTUFBTUMsUUFBWCxJQUF1QmQsU0FBdkIsRUFBa0M7QUFDaEMsWUFBSSxNQUFNLGdCQUFPYyxRQUFQLENBQVYsRUFBNEI7QUFDMUJELDRCQUFrQkUsSUFBbEIsQ0FBdUJELFFBQXZCO0FBQ0Q7QUFDRjs7QUFFRCxZQUFNRSxRQUFRSCxrQkFDWFYsR0FEVyxDQUNQO0FBQUEsZUFDSCwwQkFBVztBQUNUYyxtQkFBU0MsU0FEQTtBQUVUWCxrQkFBUSxxQkFGQztBQUdUWSxtQkFBUztBQUFBLG1CQUFPQyxJQUFJQyxPQUFKLElBQWVELEdBQXRCO0FBQUE7QUFIQSxTQUFYLENBREc7QUFBQSxPQURPLEVBUVhFLE1BUlcsQ0FRSixVQUFDQyxPQUFELEVBQVVDLElBQVY7QUFBQSxlQUFtQkMsT0FBT0MsTUFBUCxDQUFjSCxPQUFkLEVBQXVCQyxJQUF2QixDQUFuQjtBQUFBLE9BUkksRUFRNkMsRUFSN0MsQ0FBZDs7QUFVQTtBQUNBLFlBQU1HLGNBQWNGLE9BQU9HLElBQVAsQ0FBWSxLQUFLdkIsYUFBakIsRUFDakJFLE1BRGlCLENBRWhCO0FBQUEsZUFBWSxPQUFPLE1BQUtGLGFBQUwsQ0FBbUJ3QixRQUFuQixFQUE2QkMsT0FBcEMsS0FBZ0QsUUFBNUQ7QUFBQSxPQUZnQixFQUlqQlIsTUFKaUIsQ0FJVixVQUFDUyxNQUFELEVBQVNGLFFBQVQsRUFBc0I7QUFDNUIsY0FBTUcsaUJBQWlCLE1BQUszQixhQUFMLENBQW1CeUIsT0FBbkIsQ0FBMkJELFFBQTNCLEVBQXFDQyxPQUE1RDs7QUFFQSxZQUFJO0FBQ0ZDLGlCQUFPRixRQUFQLElBQW1CSSxRQUFRRCxjQUFSLENBQW5CO0FBQ0EsZ0JBQUtFLEdBQUwsQ0FBU0MsS0FBVCxDQUNHLDBCQUF5Qk4sUUFBUyxrQkFBaUJHLGNBQWUsR0FEckU7QUFHRCxTQUxELENBS0UsT0FBT0ksR0FBUCxFQUFZO0FBQ1osZ0JBQUtGLEdBQUwsQ0FBU0csSUFBVCxDQUNHLG1DQUFrQ1IsUUFBUyxrQkFBaUJHLGNBQWUsR0FEOUU7QUFHQSxnQkFBS0UsR0FBTCxDQUFTQyxLQUFULENBQWVDLEdBQWY7QUFDRDs7QUFFRCxlQUFPTCxNQUFQO0FBQ0QsT0FwQmlCLEVBb0JmLEVBcEJlLENBQXBCOztBQXNCQU4sYUFBT0MsTUFBUCxDQUFjVixLQUFkLEVBQXFCVyxXQUFyQjtBQUNBNUIsa0JBQVl1QyxPQUFaLEdBQXNCLHVCQUNwQnZDLFdBRG9CLEVBRXBCMEIsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS3JCLGFBQXZCLEVBQXNDLEVBQUNXLFlBQUQsRUFBdEMsQ0FGb0IsQ0FBdEI7QUFJQSxhQUFPLElBQVA7QUFDRCxLQXRERDs7QUFBQSxhQUFzQnVCLGdCQUF0QjtBQUFBO0FBQUE7O0FBQUEsV0FBc0JBLGdCQUF0QjtBQUFBO0FBSGEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi4vLi4vLi4vbGlicmFyeS91dGlsaXRpZXMvZnMnO1xuXG5pbXBvcnQgcmVxdWlyZUFsbCBmcm9tICdyZXF1aXJlLWFsbCc7XG5pbXBvcnQgY29uc29sZUZhY3RvcnkgZnJvbSAnLi9jb25zb2xlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZnRlcjogWydob29rczpsb2c6c3RhcnQ6YWZ0ZXInXSxcblxuICBzdGFydDogYXN5bmMgZnVuY3Rpb24gc3RhcnRDb25zb2xlSG9vayhhcHBsaWNhdGlvbikge1xuICAgIGNvbnN0IHRhc2tQYXRocyA9IGFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkc1xuICAgICAgLm1hcChsb2FkUGF0aCA9PiByZXNvbHZlKGxvYWRQYXRoLCB0aGlzLmNvbmZpZ3VyYXRpb24ucGF0aCkpXG4gICAgICAuZmlsdGVyKChpdGVtLCBpbmRleCwgbGlzdCkgPT4ge1xuICAgICAgICByZXR1cm4gbGlzdC5sYXN0SW5kZXhPZihpdGVtKSAhPT0gaW5kZXggfHwgbGlzdC5pbmRleE9mKGl0ZW0pID09PSBpbmRleDtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgZXhpc3Rpbmd0YXNrUGF0aHMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgdGFza1BhdGggb2YgdGFza1BhdGhzKSB7XG4gICAgICBpZiAoYXdhaXQgZXhpc3RzKHRhc2tQYXRoKSkge1xuICAgICAgICBleGlzdGluZ3Rhc2tQYXRocy5wdXNoKHRhc2tQYXRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0YXNrcyA9IGV4aXN0aW5ndGFza1BhdGhzXG4gICAgICAubWFwKHRhc2tzUGF0aCA9PlxuICAgICAgICByZXF1aXJlQWxsKHtcbiAgICAgICAgICBkaXJuYW1lOiB0YXNrc1BhdGgsXG4gICAgICAgICAgZmlsdGVyOiAvXihbXi5dLiopXFwuanMob24pPyQvLFxuICAgICAgICAgIHJlc29sdmU6IG1vZCA9PiBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5yZWR1Y2UoKHJlc3VsdHMsIHRhc2spID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0cywgdGFzayksIHt9KTtcblxuICAgIC8vIExvYWQgbW9kdWxlIHRhc2tzXG4gICAgY29uc3QgbW9kdWxlVGFza3MgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAuZmlsdGVyKFxuICAgICAgICB0YXNrTmFtZSA9PiB0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uW3Rhc2tOYW1lXS5lbmFibGVkID09PSAnc3RyaW5nJ1xuICAgICAgKVxuICAgICAgLnJlZHVjZSgocmVzdWx0LCB0YXNrTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTW9kdWxlTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkW3Rhc2tOYW1lXS5lbmFibGVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0W3Rhc2tOYW1lXSA9IHJlcXVpcmUodGFza01vZHVsZU5hbWUpO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFxuICAgICAgICAgICAgYFJlcXVpcmVkIG1vZHVsZSByb3V0ZSAnJHt0YXNrTmFtZX0nIGZyb20gbW9kdWxlICcke3Rhc2tNb2R1bGVOYW1lfSdgXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5sb2cud2FybihcbiAgICAgICAgICAgIGBDb3VsZCBub3QgcmVxdWlyZSBtb2R1bGUgcm91dGUgJyR7dGFza05hbWV9JyBmcm9tIG1vZHVsZSAnJHt0YXNrTW9kdWxlTmFtZX0nYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCB7fSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRhc2tzLCBtb2R1bGVUYXNrcyk7XG4gICAgYXBwbGljYXRpb24uY29uc29sZSA9IGNvbnNvbGVGYWN0b3J5KFxuICAgICAgYXBwbGljYXRpb24sXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZ3VyYXRpb24sIHt0YXNrc30pXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcbiJdfQ==