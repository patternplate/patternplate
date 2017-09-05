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
	'after': ['hooks:log:start:after'],

	'start': (() => {
		var _ref = _asyncToGenerator(function* (application) {
			var _this = this;

			let taskPaths = application.runtime.cwds.map(function (loadPath) {
				return (0, _path.resolve)(loadPath, _this.configuration.path);
			}).filter(function (item, index, list) {
				return list.lastIndexOf(item) !== index || list.indexOf(item) === index;
			});

			let existingtaskPaths = [];

			for (let taskPath of taskPaths) {
				if (yield (0, _fs.exists)(taskPath)) {
					existingtaskPaths.push(taskPath);
				}
			}

			let tasks = existingtaskPaths.map(function (tasksPath) {
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

			// load module tasks
			let moduleTasks = Object.keys(this.configuration).filter(function (taskName) {
				return typeof _this.configuration[taskName].enabled === 'string';
			}).reduce(function (result, taskName) {
				let taskModuleName = _this.configuration.enabled[taskName].enabled;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9jb25zb2xlL2luZGV4LmpzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uIiwidGFza1BhdGhzIiwicnVudGltZSIsImN3ZHMiLCJtYXAiLCJsb2FkUGF0aCIsImNvbmZpZ3VyYXRpb24iLCJwYXRoIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwibGlzdCIsImxhc3RJbmRleE9mIiwiaW5kZXhPZiIsImV4aXN0aW5ndGFza1BhdGhzIiwidGFza1BhdGgiLCJwdXNoIiwidGFza3MiLCJ0YXNrc1BhdGgiLCJkaXJuYW1lIiwicmVzb2x2ZSIsIm1vZCIsImRlZmF1bHQiLCJyZWR1Y2UiLCJyZXN1bHRzIiwidGFzayIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZVRhc2tzIiwia2V5cyIsInRhc2tOYW1lIiwiZW5hYmxlZCIsInJlc3VsdCIsInRhc2tNb2R1bGVOYW1lIiwicmVxdWlyZSIsImxvZyIsImRlYnVnIiwiZXJyIiwid2FybiIsImNvbnNvbGUiLCJzdGFydENvbnNvbGVIb29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztrQkFFZTtBQUNkLFVBQVMsQ0FBRSx1QkFBRixDQURLOztBQUdkO0FBQUEsK0JBQVMsV0FBa0NBLFdBQWxDLEVBQWdEO0FBQUE7O0FBQ3hELE9BQUlDLFlBQVlELFlBQVlFLE9BQVosQ0FBb0JDLElBQXBCLENBQ2RDLEdBRGMsQ0FDVCxVQUFFQyxRQUFGO0FBQUEsV0FBZ0IsbUJBQVNBLFFBQVQsRUFBbUIsTUFBS0MsYUFBTCxDQUFtQkMsSUFBdEMsQ0FBaEI7QUFBQSxJQURTLEVBRWRDLE1BRmMsQ0FFTixVQUFFQyxJQUFGLEVBQVFDLEtBQVIsRUFBZUMsSUFBZixFQUF5QjtBQUNqQyxXQUFPQSxLQUFLQyxXQUFMLENBQWtCSCxJQUFsQixNQUE2QkMsS0FBN0IsSUFBc0NDLEtBQUtFLE9BQUwsQ0FBY0osSUFBZCxNQUF5QkMsS0FBdEU7QUFDQSxJQUpjLENBQWhCOztBQU1BLE9BQUlJLG9CQUFvQixFQUF4Qjs7QUFFQSxRQUFNLElBQUlDLFFBQVYsSUFBc0JkLFNBQXRCLEVBQWtDO0FBQ2pDLFFBQUssTUFBTSxnQkFBUWMsUUFBUixDQUFYLEVBQWdDO0FBQy9CRCx1QkFBa0JFLElBQWxCLENBQXdCRCxRQUF4QjtBQUNBO0FBQ0Q7O0FBRUQsT0FBSUUsUUFBUUgsa0JBQWtCVixHQUFsQixDQUF1QixVQUFFYyxTQUFGO0FBQUEsV0FBaUIsMEJBQVc7QUFDOURDLGNBQVNELFNBRHFEO0FBRTlEVixhQUFRLHFCQUZzRDtBQUc5RFksY0FBUztBQUFBLGFBQU9DLElBQUlDLE9BQUosSUFBZUQsR0FBdEI7QUFBQTtBQUhxRCxLQUFYLENBQWpCO0FBQUEsSUFBdkIsRUFLVkUsTUFMVSxDQUtGLFVBQUVDLE9BQUYsRUFBV0MsSUFBWDtBQUFBLFdBQXFCQyxPQUFPQyxNQUFQLENBQWVILE9BQWYsRUFBd0JDLElBQXhCLENBQXJCO0FBQUEsSUFMRSxFQUttRCxFQUxuRCxDQUFaOztBQU9DO0FBQ0QsT0FBSUcsY0FBY0YsT0FBT0csSUFBUCxDQUFhLEtBQUt2QixhQUFsQixFQUNmRSxNQURlLENBQ1AsVUFBRXNCLFFBQUY7QUFBQSxXQUFnQixPQUFPLE1BQUt4QixhQUFMLENBQW9Cd0IsUUFBcEIsRUFBK0JDLE9BQXRDLEtBQWtELFFBQWxFO0FBQUEsSUFETyxFQUVmUixNQUZlLENBRVAsVUFBRVMsTUFBRixFQUFVRixRQUFWLEVBQXdCO0FBQ2hDLFFBQUlHLGlCQUFpQixNQUFLM0IsYUFBTCxDQUFtQnlCLE9BQW5CLENBQTRCRCxRQUE1QixFQUF1Q0MsT0FBNUQ7O0FBRUQsUUFBSTtBQUNIQyxZQUFRRixRQUFSLElBQXFCSSxRQUFTRCxjQUFULENBQXJCO0FBQ0EsV0FBS0UsR0FBTCxDQUFTQyxLQUFULENBQWlCLDBCQUF5Qk4sUUFBUyxrQkFBaUJHLGNBQWUsR0FBbkY7QUFDQSxLQUhELENBR0UsT0FBUUksR0FBUixFQUFjO0FBQ2YsV0FBS0YsR0FBTCxDQUFTRyxJQUFULENBQWdCLG1DQUFrQ1IsUUFBUyxrQkFBaUJHLGNBQWUsR0FBM0Y7QUFDQSxXQUFLRSxHQUFMLENBQVNDLEtBQVQsQ0FBZ0JDLEdBQWhCO0FBQ0E7O0FBRUYsV0FBT0wsTUFBUDtBQUNBLElBZGlCLEVBY2YsRUFkZSxDQUFsQjs7QUFnQkFOLFVBQU9DLE1BQVAsQ0FBY1YsS0FBZCxFQUFxQlcsV0FBckI7QUFDQTVCLGVBQVl1QyxPQUFaLEdBQXNCLHVCQUFnQnZDLFdBQWhCLEVBQTZCMEIsT0FBT0MsTUFBUCxDQUFlLEVBQWYsRUFBbUIsS0FBS3JCLGFBQXhCLEVBQXVDLEVBQUVXLFlBQUYsRUFBdkMsQ0FBN0IsQ0FBdEI7QUFDQSxVQUFPLElBQVA7QUFDQSxHQTFDRDs7QUFBQSxXQUF3QnVCLGdCQUF4QjtBQUFBO0FBQUE7O0FBQUEsU0FBd0JBLGdCQUF4QjtBQUFBO0FBSGMsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGV4aXN0cyB9IGZyb20gJy4uLy4uLy4uL2xpYnJhcnkvdXRpbGl0aWVzL2ZzJztcblxuaW1wb3J0IHJlcXVpcmVBbGwgZnJvbSAncmVxdWlyZS1hbGwnO1xuaW1wb3J0IGNvbnNvbGVGYWN0b3J5IGZyb20gJy4vY29uc29sZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0J2FmdGVyJzogWyAnaG9va3M6bG9nOnN0YXJ0OmFmdGVyJyBdLFxuXG5cdCdzdGFydCc6IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0Q29uc29sZUhvb2sgKCBhcHBsaWNhdGlvbiApIHtcblx0XHRsZXQgdGFza1BhdGhzID0gYXBwbGljYXRpb24ucnVudGltZS5jd2RzXG5cdFx0XHQubWFwKCAoIGxvYWRQYXRoICkgPT4gcmVzb2x2ZSggbG9hZFBhdGgsIHRoaXMuY29uZmlndXJhdGlvbi5wYXRoICkgKVxuXHRcdFx0LmZpbHRlciggKCBpdGVtLCBpbmRleCwgbGlzdCApID0+IHtcblx0XHRcdFx0cmV0dXJuIGxpc3QubGFzdEluZGV4T2YoIGl0ZW0gKSAhPT0gaW5kZXggfHwgbGlzdC5pbmRleE9mKCBpdGVtICkgPT09IGluZGV4O1xuXHRcdFx0fSk7XG5cblx0XHRsZXQgZXhpc3Rpbmd0YXNrUGF0aHMgPSBbXTtcblxuXHRcdGZvciAoIGxldCB0YXNrUGF0aCBvZiB0YXNrUGF0aHMgKSB7XG5cdFx0XHRpZiAoIGF3YWl0IGV4aXN0cyggdGFza1BhdGggKSApIHtcblx0XHRcdFx0ZXhpc3Rpbmd0YXNrUGF0aHMucHVzaCggdGFza1BhdGggKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgdGFza3MgPSBleGlzdGluZ3Rhc2tQYXRocy5tYXAoICggdGFza3NQYXRoICkgPT4gcmVxdWlyZUFsbCh7XG5cdFx0XHRkaXJuYW1lOiB0YXNrc1BhdGgsXG5cdFx0XHRmaWx0ZXI6IC9eKFteLl0uKilcXC5qcyhvbik/JC8sXG5cdFx0XHRyZXNvbHZlOiBtb2QgPT4gbW9kLmRlZmF1bHQgfHwgbW9kXG5cdFx0fSkpXG5cdFx0XHQucmVkdWNlKCAoIHJlc3VsdHMsIHRhc2sgKSA9PiBPYmplY3QuYXNzaWduKCByZXN1bHRzLCB0YXNrICksIHt9ICk7XG5cblx0XHRcdC8vIGxvYWQgbW9kdWxlIHRhc2tzXG5cdFx0bGV0IG1vZHVsZVRhc2tzID0gT2JqZWN0LmtleXMoIHRoaXMuY29uZmlndXJhdGlvbiApXG5cdFx0XHRcdC5maWx0ZXIoICggdGFza05hbWUgKSA9PiB0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uWyB0YXNrTmFtZSBdLmVuYWJsZWQgPT09ICdzdHJpbmcnIClcblx0XHRcdFx0LnJlZHVjZSggKCByZXN1bHQsIHRhc2tOYW1lICkgPT4ge1xuXHRcdFx0XHRcdGxldCB0YXNrTW9kdWxlTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkWyB0YXNrTmFtZSBdLmVuYWJsZWQ7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHRbIHRhc2tOYW1lIF0gPSByZXF1aXJlKCB0YXNrTW9kdWxlTmFtZSApO1xuXHRcdFx0XHRcdHRoaXMubG9nLmRlYnVnKCBgUmVxdWlyZWQgbW9kdWxlIHJvdXRlICcke3Rhc2tOYW1lfScgZnJvbSBtb2R1bGUgJyR7dGFza01vZHVsZU5hbWV9J2AgKTtcblx0XHRcdFx0fSBjYXRjaCAoIGVyciApIHtcblx0XHRcdFx0XHR0aGlzLmxvZy53YXJuKCBgQ291bGQgbm90IHJlcXVpcmUgbW9kdWxlIHJvdXRlICcke3Rhc2tOYW1lfScgZnJvbSBtb2R1bGUgJyR7dGFza01vZHVsZU5hbWV9J2AgKTtcblx0XHRcdFx0XHR0aGlzLmxvZy5kZWJ1ZyggZXJyICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LCB7fSApO1xuXG5cdFx0T2JqZWN0LmFzc2lnbih0YXNrcywgbW9kdWxlVGFza3MpO1xuXHRcdGFwcGxpY2F0aW9uLmNvbnNvbGUgPSBjb25zb2xlRmFjdG9yeSggYXBwbGljYXRpb24sIE9iamVjdC5hc3NpZ24oIHt9LCB0aGlzLmNvbmZpZ3VyYXRpb24sIHsgdGFza3MgfSApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG4iXX0=