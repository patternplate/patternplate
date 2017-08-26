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
				throw new Error('Missing taskName parameter.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9jb25zb2xlL2NvbnNvbGUuanMiXSwibmFtZXMiOlsibmFtZVNwYWNlIiwiV2Vha01hcCIsIlRhc2tDb25zb2xlIiwiY29uc3RydWN0b3IiLCJhcHBsaWNhdGlvbiIsIm9wdGlvbnMiLCJ0YXNrcyIsInNldCIsInJ1biIsInRhc2tOYW1lIiwiZ2V0IiwiRXJyb3IiLCJ0YXNrTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsInRhc2tUZXJtIiwibGVuZ3RoIiwibWVzc2FnZSIsImluZGV4IiwibG9nIiwiaW5mbyIsInRhc2siLCJ0YXNrQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb24iLCJlcnIiLCJjb25zb2xlRmFjdG9yeSIsImFyZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLElBQUlDLE9BQUosRUFBbEI7O0FBRUEsTUFBTUMsV0FBTixDQUFrQjtBQUNqQkMsYUFBWUMsV0FBWixFQUF5QkMsT0FBekIsRUFBa0M7QUFBQSxRQUMxQkMsS0FEMEIsR0FDakJELE9BRGlCLENBQzFCQyxLQUQwQjs7QUFFakNOLFlBQVVPLEdBQVYsQ0FBYyxJQUFkLEVBQW9CLEVBQUNILHdCQUFELEVBQWNDLGdCQUFkLEVBQXVCQyxZQUF2QixFQUFwQjtBQUNBOztBQUVLRSxJQUFOLENBQVVDLFFBQVYsRUFBb0JKLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7QUFBQSx3QkFDQ0wsVUFBVVUsR0FBVixPQUREOztBQUFBLFNBQ3JCTixXQURxQixrQkFDckJBLFdBRHFCO0FBQUEsU0FDUkUsS0FEUSxrQkFDUkEsS0FEUTs7O0FBRzVCLE9BQUksT0FBT0csUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNqQyxVQUFNLElBQUlFLEtBQUosQ0FBVSw2QkFBVixDQUFOO0FBQ0E7O0FBRUQsT0FBSSxDQUFDTCxNQUFNRyxRQUFOLENBQUwsRUFBc0I7QUFDckIsVUFBTUcsWUFBWUMsT0FBT0MsSUFBUCxDQUFZUixLQUFaLEVBQW1CUyxJQUFuQixDQUF3QixJQUF4QixDQUFsQjtBQUNBLFVBQU1DLFdBQVdKLFVBQVVLLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsTUFBdkIsR0FBZ0MsT0FBakQ7QUFDQSxVQUFNQyxVQUFVTixVQUFVSyxNQUFWLEdBQ2QsU0FBUVIsUUFBUyxpQ0FBZ0NPLFFBQVMsS0FBSUosU0FBVSxFQUQxRCxHQUVkLG9CQUZGOztBQUlBLFVBQU0sSUFBSUQsS0FBSixDQUFVTyxPQUFWLENBQU47QUFDQTs7QUFFRCxPQUFJWixNQUFNRyxRQUFOLEtBQW1CLE9BQU9ILE1BQU1HLFFBQU4sRUFBZ0JVLEtBQXZCLEtBQWlDLFVBQXhELEVBQW9FO0FBQ25FLFVBQU0sSUFBSVIsS0FBSixDQUFXLFNBQVFGLFFBQVMsNkJBQTVCLENBQU47QUFDQTs7QUFFREwsZUFBWWdCLEdBQVosQ0FBZ0JDLElBQWhCLENBQXNCLHNCQUFxQlosUUFBUyxNQUFwRDs7QUFFQSxTQUFNYSxPQUFPaEIsTUFBTUcsUUFBTixFQUFnQlUsS0FBN0I7QUFDQSxTQUFNSSxpQ0FBd0JuQixZQUFZb0IsYUFBWixDQUEwQmxCLEtBQTFCLENBQWdDRyxRQUFoQyxDQUF4QixFQUFzRUosT0FBdEUsQ0FBTjs7QUFFQSxPQUFJLENBQUNrQixpQkFBTCxFQUF3QjtBQUN2Qm5CLGdCQUFZZ0IsR0FBWixDQUFnQkMsSUFBaEIsQ0FBc0Isc0JBQXFCWixRQUFTLDRCQUFwRDtBQUNBOztBQUVELE9BQUk7QUFDSCxVQUFNYSxLQUFLbEIsV0FBTCxFQUFrQm1CLGlCQUFsQixDQUFOO0FBQ0FuQixnQkFBWWdCLEdBQVosQ0FBZ0JDLElBQWhCLENBQXNCLGFBQVlaLFFBQVMseUJBQTNDO0FBQ0EsSUFIRCxDQUdFLE9BQU9nQixHQUFQLEVBQVk7QUFDYixVQUFNQSxHQUFOO0FBQ0E7QUFuQzJCO0FBb0M1QjtBQTFDZ0I7O0FBNkNsQixTQUFTQyxjQUFULEdBQWlDO0FBQUEsbUNBQU5DLElBQU07QUFBTkEsTUFBTTtBQUFBOztBQUNoQywyQ0FBV3pCLFdBQVgsZ0JBQTBCeUIsSUFBMUI7QUFDQTs7a0JBRWNELGMiLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hbWVTcGFjZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmNsYXNzIFRhc2tDb25zb2xlIHtcblx0Y29uc3RydWN0b3IoYXBwbGljYXRpb24sIG9wdGlvbnMpIHtcblx0XHRjb25zdCB7dGFza3N9ID0gb3B0aW9ucztcblx0XHRuYW1lU3BhY2Uuc2V0KHRoaXMsIHthcHBsaWNhdGlvbiwgb3B0aW9ucywgdGFza3N9KTtcblx0fVxuXG5cdGFzeW5jIHJ1bih0YXNrTmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IHthcHBsaWNhdGlvbiwgdGFza3N9ID0gbmFtZVNwYWNlLmdldCh0aGlzKTtcblxuXHRcdGlmICh0eXBlb2YgdGFza05hbWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdGFza05hbWUgcGFyYW1ldGVyLicpO1xuXHRcdH1cblxuXHRcdGlmICghdGFza3NbdGFza05hbWVdKSB7XG5cdFx0XHRjb25zdCB0YXNrTmFtZXMgPSBPYmplY3Qua2V5cyh0YXNrcykuam9pbignLCAnKTtcblx0XHRcdGNvbnN0IHRhc2tUZXJtID0gdGFza05hbWVzLmxlbmd0aCA+IDEgPyAndGFzaycgOiAndGFza3MnO1xuXHRcdFx0Y29uc3QgbWVzc2FnZSA9IHRhc2tOYW1lcy5sZW5ndGggP1xuXHRcdFx0XHRgVGFzayBcIiR7dGFza05hbWV9XCIgaXMgbm90IGF2YWlsYWJsZS4gQXZhaWxhYmxlICR7dGFza1Rlcm19OiAke3Rhc2tOYW1lc31gIDpcblx0XHRcdFx0YE5vIHRhc2tzIGF2YWlsYWJsZWA7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0XHR9XG5cblx0XHRpZiAodGFza3NbdGFza05hbWVdICYmIHR5cGVvZiB0YXNrc1t0YXNrTmFtZV0uaW5kZXggIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGFzayBcIiR7dGFza05hbWV9XCIgaXMgYXZhaWxhYmxlIGJ1dCBpbnZhbGlkLmApO1xuXHRcdH1cblxuXHRcdGFwcGxpY2F0aW9uLmxvZy5pbmZvKGBTdGFydGluZyB0YXNrTmFtZSBcIiR7dGFza05hbWV9XCIuLi5gKTtcblxuXHRcdGNvbnN0IHRhc2sgPSB0YXNrc1t0YXNrTmFtZV0uaW5kZXg7XG5cdFx0Y29uc3QgdGFza0NvbmZpZ3VyYXRpb24gPSB7Li4uYXBwbGljYXRpb24uY29uZmlndXJhdGlvbi50YXNrc1t0YXNrTmFtZV0sIC4uLm9wdGlvbnN9O1xuXG5cdFx0aWYgKCF0YXNrQ29uZmlndXJhdGlvbikge1xuXHRcdFx0YXBwbGljYXRpb24ubG9nLmluZm8oYFN0YXJ0aW5nIHRhc2tOYW1lIFwiJHt0YXNrTmFtZX1cIiB3aXRob3V0IGNvbmZpZ3VyYXRpb24uLi5gKTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgdGFzayhhcHBsaWNhdGlvbiwgdGFza0NvbmZpZ3VyYXRpb24pO1xuXHRcdFx0YXBwbGljYXRpb24ubG9nLmluZm8oYHRhc2tOYW1lIFwiJHt0YXNrTmFtZX1cIiBleGVjdXRlZCBzdWNjZXNzZnVsbHlgKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gY29uc29sZUZhY3RvcnkoLi4uYXJncykge1xuXHRyZXR1cm4gbmV3IFRhc2tDb25zb2xlKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25zb2xlRmFjdG9yeTtcbiJdfQ==