#!/usr/bin/env node
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var start = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(options) {
		var mode, settings, _settings$_, command, application;

		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						mode = 'console';
						settings = (0, _extends3.default)({}, options, { mode: mode });
						_settings$_ = (0, _slicedToArray3.default)(settings._, 2), command = _settings$_[1];
						_context.next = 5;
						return (0, _2.default)(settings);

					case 5:
						application = _context.sent;
						_context.next = 8;
						return application.run(command, settings);

					case 8:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function start(_x) {
		return _ref.apply(this, arguments);
	};
}();

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = (0, _minimist2.default)(process.argv.slice(1));

start(args).catch(function (err) {
	setTimeout(function () {
		throw err;
	});
});

// Catch unhandled rejections globally
process.on('unhandledRejection', function (reason, promise) {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9iaW5hcnkvcGF0dGVybnBsYXRlLWNsaWVudC1jb25zb2xlLmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJtb2RlIiwic2V0dGluZ3MiLCJfIiwiY29tbWFuZCIsImFwcGxpY2F0aW9uIiwicnVuIiwic3RhcnQiLCJhcmdzIiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsImNhdGNoIiwic2V0VGltZW91dCIsImVyciIsIm9uIiwicmVhc29uIiwicHJvbWlzZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUZBT0EsaUJBQXNCQSxPQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ09DLFVBRFAsR0FDYyxTQURkO0FBRU9DLGNBRlAsOEJBRXNCRixPQUZ0QixJQUUrQkMsVUFGL0I7QUFBQSxpREFHcUJDLFNBQVNDLENBSDlCLE1BR1VDLE9BSFY7QUFBQTtBQUFBLGFBSzJCLGdCQUFPRixRQUFQLENBTDNCOztBQUFBO0FBS09HLGlCQUxQO0FBQUE7QUFBQSxhQU1PQSxZQUFZQyxHQUFaLENBQWdCRixPQUFoQixFQUF5QkYsUUFBekIsQ0FOUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFOztpQkFBZUssSzs7Ozs7QUFMZjs7QUFDQTs7OztBQUVBOzs7Ozs7QUFXQSxJQUFNQyxPQUFPLHdCQUFTQyxRQUFRQyxJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBVCxDQUFiOztBQUVBSixNQUFNQyxJQUFOLEVBQ0VJLEtBREYsQ0FDUSxlQUFPO0FBQ2JDLFlBQVcsWUFBTTtBQUNoQixRQUFNQyxHQUFOO0FBQ0EsRUFGRDtBQUdBLENBTEY7O0FBT0E7QUFDQUwsUUFBUU0sRUFBUixDQUFXLG9CQUFYLEVBQWlDLFVBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFxQjtBQUNyREMsU0FBUUMsR0FBUixDQUFZLGtDQUFaLEVBQWdERixPQUFoRCxFQUF5RCxXQUF6RCxFQUFzRUQsTUFBdEU7QUFDQSxPQUFNQSxNQUFOO0FBQ0EsQ0FIRCIsImZpbGUiOiJwYXR0ZXJucGxhdGUtY2xpZW50LWNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnO1xuXG5pbXBvcnQgc2VydmVyIGZyb20gJy4uLyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0IChvcHRpb25zKSB7XG5cdGNvbnN0IG1vZGUgPSAnY29uc29sZSc7XG5cdGNvbnN0IHNldHRpbmdzID0gey4uLm9wdGlvbnMsIG1vZGV9O1xuXHRjb25zdCBbLCBjb21tYW5kXSA9IHNldHRpbmdzLl87XG5cblx0Y29uc3QgYXBwbGljYXRpb24gPSBhd2FpdCBzZXJ2ZXIoc2V0dGluZ3MpO1xuXHRhd2FpdCBhcHBsaWNhdGlvbi5ydW4oY29tbWFuZCwgc2V0dGluZ3MpO1xufVxuXG5jb25zdCBhcmdzID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDEpKTtcblxuc3RhcnQoYXJncylcblx0LmNhdGNoKGVyciA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fSk7XG5cdH0pO1xuXG4vLyBDYXRjaCB1bmhhbmRsZWQgcmVqZWN0aW9ucyBnbG9iYWxseVxucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgKHJlYXNvbiwgcHJvbWlzZSkgPT4ge1xuXHRjb25zb2xlLmxvZygnVW5oYW5kbGVkIFJlamVjdGlvbiBhdDogUHJvbWlzZSAnLCBwcm9taXNlLCAnIHJlYXNvbjogJywgcmVhc29uKTtcblx0dGhyb3cgcmVhc29uO1xufSk7XG4iXX0=