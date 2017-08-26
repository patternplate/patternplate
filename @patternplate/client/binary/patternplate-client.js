#!/usr/bin/env node
'use strict';

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return (0, _2.default)(options);
}

var args = (0, _minimist2.default)(process.argv.slice(1));

main(args).catch(function (err) {
	setTimeout(function () {
		throw err;
	});
});

// Catch unhandled rejections globally
process.on('unhandledRejection', function (reason, promise) {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9iaW5hcnkvcGF0dGVybnBsYXRlLWNsaWVudC5qcyJdLCJuYW1lcyI6WyJtYWluIiwib3B0aW9ucyIsImFyZ3MiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwiY2F0Y2giLCJzZXRUaW1lb3V0IiwiZXJyIiwib24iLCJyZWFzb24iLCJwcm9taXNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxTQUFTQSxJQUFULEdBQTRCO0FBQUEsS0FBZEMsT0FBYyx1RUFBSixFQUFJOztBQUMzQixRQUFPLGdCQUFjQSxPQUFkLENBQVA7QUFDQTs7QUFFRCxJQUFNQyxPQUFPLHdCQUFTQyxRQUFRQyxJQUFSLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBVCxDQUFiOztBQUVBTCxLQUFLRSxJQUFMLEVBQ0VJLEtBREYsQ0FDUSxlQUFPO0FBQ2JDLFlBQVcsWUFBTTtBQUNoQixRQUFNQyxHQUFOO0FBQ0EsRUFGRDtBQUdBLENBTEY7O0FBT0E7QUFDQUwsUUFBUU0sRUFBUixDQUFXLG9CQUFYLEVBQWlDLFVBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFxQjtBQUNyREMsU0FBUUMsR0FBUixDQUFZLGtDQUFaLEVBQWdERixPQUFoRCxFQUF5RCxXQUF6RCxFQUFzRUQsTUFBdEU7QUFDQSxPQUFNQSxNQUFOO0FBQ0EsQ0FIRCIsImZpbGUiOiJwYXR0ZXJucGxhdGUtY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IG1pbmltaXN0IGZyb20gJ21pbmltaXN0JztcblxuaW1wb3J0IHBhdHRlcm5DbGllbnQgZnJvbSAnLi4vJztcblxuZnVuY3Rpb24gbWFpbihvcHRpb25zID0ge30pIHtcblx0cmV0dXJuIHBhdHRlcm5DbGllbnQob3B0aW9ucyk7XG59XG5cbmNvbnN0IGFyZ3MgPSBtaW5pbWlzdChwcm9jZXNzLmFyZ3Yuc2xpY2UoMSkpO1xuXG5tYWluKGFyZ3MpXG5cdC5jYXRjaChlcnIgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhyb3cgZXJyO1xuXHRcdH0pO1xuXHR9KTtcblxuLy8gQ2F0Y2ggdW5oYW5kbGVkIHJlamVjdGlvbnMgZ2xvYmFsbHlcbnByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChyZWFzb24sIHByb21pc2UpID0+IHtcblx0Y29uc29sZS5sb2coJ1VuaGFuZGxlZCBSZWplY3Rpb24gYXQ6IFByb21pc2UgJywgcHJvbWlzZSwgJyByZWFzb246ICcsIHJlYXNvbik7XG5cdHRocm93IHJlYXNvbjtcbn0pO1xuIl19