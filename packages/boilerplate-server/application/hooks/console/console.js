'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const nameSpace = new WeakMap();

class TaskConsole {
  constructor(application, options) {
    const tasks = options.tasks;

    nameSpace.set(this, { application: application, options: options, tasks: tasks });
  }

  run(taskName, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      var _nameSpace$get = nameSpace.get(_this);

      const application = _nameSpace$get.application;
      const tasks = _nameSpace$get.tasks;


      if (typeof taskName !== 'string') {
        throw new TypeError('Missing taskName parameter.');
      }

      if (!tasks[taskName]) {
        const taskNames = Object.keys(tasks).join(', ');
        const taskTerm = taskNames.length > 1 ? 'task' : 'tasks';
        const message = taskNames.length ? `Task "${taskName}" is not available. Available ${taskTerm}: ${taskNames}` : `No tasks available`;

        throw new Error(message);
      }

      if (tasks[taskName] && typeof tasks[taskName].index !== 'function') {
        throw new Error(`Task "${taskName}" is available but invalid.`);
      }

      application.log.info(`Starting taskName "${taskName}"...`);

      const task = tasks[taskName].index;
      const taskConfiguration = _extends({}, application.configuration.tasks[taskName], options);

      if (!taskConfiguration) {
        application.log.info(`Starting taskName "${taskName}" without configuration...`);
      }

      try {
        yield task(application, taskConfiguration);
        application.log.info(`taskName "${taskName}" executed successfully`);
      } catch (err) {
        throw err;
      }
    })();
  }
}

function consoleFactory() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(TaskConsole, [null].concat(args)))();
}

exports.default = consoleFactory;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9jb25zb2xlL2NvbnNvbGUuanMiXSwibmFtZXMiOlsibmFtZVNwYWNlIiwiV2Vha01hcCIsIlRhc2tDb25zb2xlIiwiY29uc3RydWN0b3IiLCJhcHBsaWNhdGlvbiIsIm9wdGlvbnMiLCJ0YXNrcyIsInNldCIsInJ1biIsInRhc2tOYW1lIiwiZ2V0IiwiVHlwZUVycm9yIiwidGFza05hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJ0YXNrVGVybSIsImxlbmd0aCIsIm1lc3NhZ2UiLCJFcnJvciIsImluZGV4IiwibG9nIiwiaW5mbyIsInRhc2siLCJ0YXNrQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb24iLCJlcnIiLCJjb25zb2xlRmFjdG9yeSIsImFyZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLElBQUlDLE9BQUosRUFBbEI7O0FBRUEsTUFBTUMsV0FBTixDQUFrQjtBQUNoQkMsY0FBWUMsV0FBWixFQUF5QkMsT0FBekIsRUFBa0M7QUFBQSxVQUN6QkMsS0FEeUIsR0FDaEJELE9BRGdCLENBQ3pCQyxLQUR5Qjs7QUFFaENOLGNBQVVPLEdBQVYsQ0FBYyxJQUFkLEVBQW9CLEVBQUNILHdCQUFELEVBQWNDLGdCQUFkLEVBQXVCQyxZQUF2QixFQUFwQjtBQUNEOztBQUVLRSxLQUFOLENBQVVDLFFBQVYsRUFBb0JKLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7QUFBQSwyQkFDRUwsVUFBVVUsR0FBVixPQURGOztBQUFBLFlBQ3BCTixXQURvQixrQkFDcEJBLFdBRG9CO0FBQUEsWUFDUEUsS0FETyxrQkFDUEEsS0FETzs7O0FBRzNCLFVBQUksT0FBT0csUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxjQUFNLElBQUlFLFNBQUosQ0FBYyw2QkFBZCxDQUFOO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDTCxNQUFNRyxRQUFOLENBQUwsRUFBc0I7QUFDcEIsY0FBTUcsWUFBWUMsT0FBT0MsSUFBUCxDQUFZUixLQUFaLEVBQW1CUyxJQUFuQixDQUF3QixJQUF4QixDQUFsQjtBQUNBLGNBQU1DLFdBQVdKLFVBQVVLLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsTUFBdkIsR0FBZ0MsT0FBakQ7QUFDQSxjQUFNQyxVQUFVTixVQUFVSyxNQUFWLEdBQ1gsU0FBUVIsUUFBUyxpQ0FBZ0NPLFFBQVMsS0FBSUosU0FBVSxFQUQ3RCxHQUVYLG9CQUZMOztBQUlBLGNBQU0sSUFBSU8sS0FBSixDQUFVRCxPQUFWLENBQU47QUFDRDs7QUFFRCxVQUFJWixNQUFNRyxRQUFOLEtBQW1CLE9BQU9ILE1BQU1HLFFBQU4sRUFBZ0JXLEtBQXZCLEtBQWlDLFVBQXhELEVBQW9FO0FBQ2xFLGNBQU0sSUFBSUQsS0FBSixDQUFXLFNBQVFWLFFBQVMsNkJBQTVCLENBQU47QUFDRDs7QUFFREwsa0JBQVlpQixHQUFaLENBQWdCQyxJQUFoQixDQUFzQixzQkFBcUJiLFFBQVMsTUFBcEQ7O0FBRUEsWUFBTWMsT0FBT2pCLE1BQU1HLFFBQU4sRUFBZ0JXLEtBQTdCO0FBQ0EsWUFBTUksaUNBQ0RwQixZQUFZcUIsYUFBWixDQUEwQm5CLEtBQTFCLENBQWdDRyxRQUFoQyxDQURDLEVBRURKLE9BRkMsQ0FBTjs7QUFLQSxVQUFJLENBQUNtQixpQkFBTCxFQUF3QjtBQUN0QnBCLG9CQUFZaUIsR0FBWixDQUFnQkMsSUFBaEIsQ0FDRyxzQkFBcUJiLFFBQVMsNEJBRGpDO0FBR0Q7O0FBRUQsVUFBSTtBQUNGLGNBQU1jLEtBQUtuQixXQUFMLEVBQWtCb0IsaUJBQWxCLENBQU47QUFDQXBCLG9CQUFZaUIsR0FBWixDQUFnQkMsSUFBaEIsQ0FBc0IsYUFBWWIsUUFBUyx5QkFBM0M7QUFDRCxPQUhELENBR0UsT0FBT2lCLEdBQVAsRUFBWTtBQUNaLGNBQU1BLEdBQU47QUFDRDtBQXhDMEI7QUF5QzVCO0FBL0NlOztBQWtEbEIsU0FBU0MsY0FBVCxHQUFpQztBQUFBLG9DQUFOQyxJQUFNO0FBQU5BLFFBQU07QUFBQTs7QUFDL0IsNENBQVcxQixXQUFYLGdCQUEwQjBCLElBQTFCO0FBQ0Q7O2tCQUVjRCxjIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYW1lU3BhY2UgPSBuZXcgV2Vha01hcCgpO1xuXG5jbGFzcyBUYXNrQ29uc29sZSB7XG4gIGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uLCBvcHRpb25zKSB7XG4gICAgY29uc3Qge3Rhc2tzfSA9IG9wdGlvbnM7XG4gICAgbmFtZVNwYWNlLnNldCh0aGlzLCB7YXBwbGljYXRpb24sIG9wdGlvbnMsIHRhc2tzfSk7XG4gIH1cblxuICBhc3luYyBydW4odGFza05hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7YXBwbGljYXRpb24sIHRhc2tzfSA9IG5hbWVTcGFjZS5nZXQodGhpcyk7XG5cbiAgICBpZiAodHlwZW9mIHRhc2tOYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTWlzc2luZyB0YXNrTmFtZSBwYXJhbWV0ZXIuJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0YXNrc1t0YXNrTmFtZV0pIHtcbiAgICAgIGNvbnN0IHRhc2tOYW1lcyA9IE9iamVjdC5rZXlzKHRhc2tzKS5qb2luKCcsICcpO1xuICAgICAgY29uc3QgdGFza1Rlcm0gPSB0YXNrTmFtZXMubGVuZ3RoID4gMSA/ICd0YXNrJyA6ICd0YXNrcyc7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdGFza05hbWVzLmxlbmd0aFxuICAgICAgICA/IGBUYXNrIFwiJHt0YXNrTmFtZX1cIiBpcyBub3QgYXZhaWxhYmxlLiBBdmFpbGFibGUgJHt0YXNrVGVybX06ICR7dGFza05hbWVzfWBcbiAgICAgICAgOiBgTm8gdGFza3MgYXZhaWxhYmxlYDtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICh0YXNrc1t0YXNrTmFtZV0gJiYgdHlwZW9mIHRhc2tzW3Rhc2tOYW1lXS5pbmRleCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUYXNrIFwiJHt0YXNrTmFtZX1cIiBpcyBhdmFpbGFibGUgYnV0IGludmFsaWQuYCk7XG4gICAgfVxuXG4gICAgYXBwbGljYXRpb24ubG9nLmluZm8oYFN0YXJ0aW5nIHRhc2tOYW1lIFwiJHt0YXNrTmFtZX1cIi4uLmApO1xuXG4gICAgY29uc3QgdGFzayA9IHRhc2tzW3Rhc2tOYW1lXS5pbmRleDtcbiAgICBjb25zdCB0YXNrQ29uZmlndXJhdGlvbiA9IHtcbiAgICAgIC4uLmFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24udGFza3NbdGFza05hbWVdLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG5cbiAgICBpZiAoIXRhc2tDb25maWd1cmF0aW9uKSB7XG4gICAgICBhcHBsaWNhdGlvbi5sb2cuaW5mbyhcbiAgICAgICAgYFN0YXJ0aW5nIHRhc2tOYW1lIFwiJHt0YXNrTmFtZX1cIiB3aXRob3V0IGNvbmZpZ3VyYXRpb24uLi5gXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0YXNrKGFwcGxpY2F0aW9uLCB0YXNrQ29uZmlndXJhdGlvbik7XG4gICAgICBhcHBsaWNhdGlvbi5sb2cuaW5mbyhgdGFza05hbWUgXCIke3Rhc2tOYW1lfVwiIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseWApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb25zb2xlRmFjdG9yeSguLi5hcmdzKSB7XG4gIHJldHVybiBuZXcgVGFza0NvbnNvbGUoLi4uYXJncyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGVGYWN0b3J5O1xuIl19