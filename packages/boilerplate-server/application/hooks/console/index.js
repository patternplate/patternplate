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
				return (0, _requireAll2.default)(tasksPath);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9jb25zb2xlL2luZGV4LmpzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uIiwidGFza1BhdGhzIiwicnVudGltZSIsImN3ZHMiLCJtYXAiLCJsb2FkUGF0aCIsImNvbmZpZ3VyYXRpb24iLCJwYXRoIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwibGlzdCIsImxhc3RJbmRleE9mIiwiaW5kZXhPZiIsImV4aXN0aW5ndGFza1BhdGhzIiwidGFza1BhdGgiLCJwdXNoIiwidGFza3MiLCJ0YXNrc1BhdGgiLCJyZWR1Y2UiLCJyZXN1bHRzIiwidGFzayIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZVRhc2tzIiwia2V5cyIsInRhc2tOYW1lIiwiZW5hYmxlZCIsInJlc3VsdCIsInRhc2tNb2R1bGVOYW1lIiwicmVxdWlyZSIsImxvZyIsImRlYnVnIiwiZXJyIiwid2FybiIsImNvbnNvbGUiLCJzdGFydENvbnNvbGVIb29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztrQkFFZTtBQUNkLFVBQVMsQ0FBRSx1QkFBRixDQURLOztBQUdkO0FBQUEsK0JBQVMsV0FBa0NBLFdBQWxDLEVBQWdEO0FBQUE7O0FBQ3hELE9BQUlDLFlBQVlELFlBQVlFLE9BQVosQ0FBb0JDLElBQXBCLENBQ2RDLEdBRGMsQ0FDVCxVQUFFQyxRQUFGO0FBQUEsV0FBZ0IsbUJBQVNBLFFBQVQsRUFBbUIsTUFBS0MsYUFBTCxDQUFtQkMsSUFBdEMsQ0FBaEI7QUFBQSxJQURTLEVBRWRDLE1BRmMsQ0FFTixVQUFFQyxJQUFGLEVBQVFDLEtBQVIsRUFBZUMsSUFBZixFQUF5QjtBQUNqQyxXQUFPQSxLQUFLQyxXQUFMLENBQWtCSCxJQUFsQixNQUE2QkMsS0FBN0IsSUFBc0NDLEtBQUtFLE9BQUwsQ0FBY0osSUFBZCxNQUF5QkMsS0FBdEU7QUFDQSxJQUpjLENBQWhCOztBQU1BLE9BQUlJLG9CQUFvQixFQUF4Qjs7QUFFQSxRQUFNLElBQUlDLFFBQVYsSUFBc0JkLFNBQXRCLEVBQWtDO0FBQ2pDLFFBQUssTUFBTSxnQkFBUWMsUUFBUixDQUFYLEVBQWdDO0FBQy9CRCx1QkFBa0JFLElBQWxCLENBQXdCRCxRQUF4QjtBQUNBO0FBQ0Q7O0FBRUQsT0FBSUUsUUFBUUgsa0JBQWtCVixHQUFsQixDQUF1QixVQUFFYyxTQUFGO0FBQUEsV0FBaUIsMEJBQVlBLFNBQVosQ0FBakI7QUFBQSxJQUF2QixFQUNWQyxNQURVLENBQ0YsVUFBRUMsT0FBRixFQUFXQyxJQUFYO0FBQUEsV0FBcUJDLE9BQU9DLE1BQVAsQ0FBZUgsT0FBZixFQUF3QkMsSUFBeEIsQ0FBckI7QUFBQSxJQURFLEVBQ21ELEVBRG5ELENBQVo7O0FBR0M7QUFDRCxPQUFJRyxjQUFjRixPQUFPRyxJQUFQLENBQWEsS0FBS25CLGFBQWxCLEVBQ2ZFLE1BRGUsQ0FDUCxVQUFFa0IsUUFBRjtBQUFBLFdBQWdCLE9BQU8sTUFBS3BCLGFBQUwsQ0FBb0JvQixRQUFwQixFQUErQkMsT0FBdEMsS0FBa0QsUUFBbEU7QUFBQSxJQURPLEVBRWZSLE1BRmUsQ0FFUCxVQUFFUyxNQUFGLEVBQVVGLFFBQVYsRUFBd0I7QUFDaEMsUUFBSUcsaUJBQWlCLE1BQUt2QixhQUFMLENBQW1CcUIsT0FBbkIsQ0FBNEJELFFBQTVCLEVBQXVDQyxPQUE1RDs7QUFFRCxRQUFJO0FBQ0hDLFlBQVFGLFFBQVIsSUFBcUJJLFFBQVNELGNBQVQsQ0FBckI7QUFDQSxXQUFLRSxHQUFMLENBQVNDLEtBQVQsQ0FBaUIsMEJBQXlCTixRQUFTLGtCQUFpQkcsY0FBZSxHQUFuRjtBQUNBLEtBSEQsQ0FHRSxPQUFRSSxHQUFSLEVBQWM7QUFDZixXQUFLRixHQUFMLENBQVNHLElBQVQsQ0FBZ0IsbUNBQWtDUixRQUFTLGtCQUFpQkcsY0FBZSxHQUEzRjtBQUNBLFdBQUtFLEdBQUwsQ0FBU0MsS0FBVCxDQUFnQkMsR0FBaEI7QUFDQTs7QUFFRixXQUFPTCxNQUFQO0FBQ0EsSUFkaUIsRUFjZixFQWRlLENBQWxCOztBQWdCQU4sVUFBT0MsTUFBUCxDQUFjTixLQUFkLEVBQXFCTyxXQUFyQjtBQUNBeEIsZUFBWW1DLE9BQVosR0FBc0IsdUJBQWdCbkMsV0FBaEIsRUFBNkJzQixPQUFPQyxNQUFQLENBQWUsRUFBZixFQUFtQixLQUFLakIsYUFBeEIsRUFBdUMsRUFBRVcsWUFBRixFQUF2QyxDQUE3QixDQUF0QjtBQUNBLFVBQU8sSUFBUDtBQUNBLEdBdENEOztBQUFBLFdBQXdCbUIsZ0JBQXhCO0FBQUE7QUFBQTs7QUFBQSxTQUF3QkEsZ0JBQXhCO0FBQUE7QUFIYyxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZXhpc3RzIH0gZnJvbSAnLi4vLi4vLi4vbGlicmFyeS91dGlsaXRpZXMvZnMnO1xuXG5pbXBvcnQgcmVxdWlyZUFsbCBmcm9tICdyZXF1aXJlLWFsbCc7XG5pbXBvcnQgY29uc29sZUZhY3RvcnkgZnJvbSAnLi9jb25zb2xlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQnYWZ0ZXInOiBbICdob29rczpsb2c6c3RhcnQ6YWZ0ZXInIF0sXG5cblx0J3N0YXJ0JzogYXN5bmMgZnVuY3Rpb24gc3RhcnRDb25zb2xlSG9vayAoIGFwcGxpY2F0aW9uICkge1xuXHRcdGxldCB0YXNrUGF0aHMgPSBhcHBsaWNhdGlvbi5ydW50aW1lLmN3ZHNcblx0XHRcdC5tYXAoICggbG9hZFBhdGggKSA9PiByZXNvbHZlKCBsb2FkUGF0aCwgdGhpcy5jb25maWd1cmF0aW9uLnBhdGggKSApXG5cdFx0XHQuZmlsdGVyKCAoIGl0ZW0sIGluZGV4LCBsaXN0ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbGlzdC5sYXN0SW5kZXhPZiggaXRlbSApICE9PSBpbmRleCB8fCBsaXN0LmluZGV4T2YoIGl0ZW0gKSA9PT0gaW5kZXg7XG5cdFx0XHR9KTtcblxuXHRcdGxldCBleGlzdGluZ3Rhc2tQYXRocyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IHRhc2tQYXRoIG9mIHRhc2tQYXRocyApIHtcblx0XHRcdGlmICggYXdhaXQgZXhpc3RzKCB0YXNrUGF0aCApICkge1xuXHRcdFx0XHRleGlzdGluZ3Rhc2tQYXRocy5wdXNoKCB0YXNrUGF0aCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCB0YXNrcyA9IGV4aXN0aW5ndGFza1BhdGhzLm1hcCggKCB0YXNrc1BhdGggKSA9PiByZXF1aXJlQWxsKCB0YXNrc1BhdGggKSApXG5cdFx0XHQucmVkdWNlKCAoIHJlc3VsdHMsIHRhc2sgKSA9PiBPYmplY3QuYXNzaWduKCByZXN1bHRzLCB0YXNrICksIHt9ICk7XG5cblx0XHRcdC8vIGxvYWQgbW9kdWxlIHRhc2tzXG5cdFx0bGV0IG1vZHVsZVRhc2tzID0gT2JqZWN0LmtleXMoIHRoaXMuY29uZmlndXJhdGlvbiApXG5cdFx0XHRcdC5maWx0ZXIoICggdGFza05hbWUgKSA9PiB0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uWyB0YXNrTmFtZSBdLmVuYWJsZWQgPT09ICdzdHJpbmcnIClcblx0XHRcdFx0LnJlZHVjZSggKCByZXN1bHQsIHRhc2tOYW1lICkgPT4ge1xuXHRcdFx0XHRcdGxldCB0YXNrTW9kdWxlTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmFibGVkWyB0YXNrTmFtZSBdLmVuYWJsZWQ7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHRbIHRhc2tOYW1lIF0gPSByZXF1aXJlKCB0YXNrTW9kdWxlTmFtZSApO1xuXHRcdFx0XHRcdHRoaXMubG9nLmRlYnVnKCBgUmVxdWlyZWQgbW9kdWxlIHJvdXRlICcke3Rhc2tOYW1lfScgZnJvbSBtb2R1bGUgJyR7dGFza01vZHVsZU5hbWV9J2AgKTtcblx0XHRcdFx0fSBjYXRjaCAoIGVyciApIHtcblx0XHRcdFx0XHR0aGlzLmxvZy53YXJuKCBgQ291bGQgbm90IHJlcXVpcmUgbW9kdWxlIHJvdXRlICcke3Rhc2tOYW1lfScgZnJvbSBtb2R1bGUgJyR7dGFza01vZHVsZU5hbWV9J2AgKTtcblx0XHRcdFx0XHR0aGlzLmxvZy5kZWJ1ZyggZXJyICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LCB7fSApO1xuXG5cdFx0T2JqZWN0LmFzc2lnbih0YXNrcywgbW9kdWxlVGFza3MpO1xuXHRcdGFwcGxpY2F0aW9uLmNvbnNvbGUgPSBjb25zb2xlRmFjdG9yeSggYXBwbGljYXRpb24sIE9iamVjdC5hc3NpZ24oIHt9LCB0aGlzLmNvbmZpZ3VyYXRpb24sIHsgdGFza3MgfSApICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG4iXX0=