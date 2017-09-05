'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadConfiguration(dirname) {
	let filter = arguments.length <= 1 || arguments[1] === undefined ? /(.*).(js|json)$/ : arguments[1];
	let env = arguments.length <= 2 || arguments[2] === undefined ? 'development' : arguments[2];

	const rawConfiguration = (0, _requireAll2.default)({
		dirname: dirname,
		filter: filter,
		resolve: mod => mod.default || mod
	});

	rawConfiguration.environments = rawConfiguration.environments || {};
	const envConfiguration = rawConfiguration.environments[env] || {};

	return (0, _lodash.merge)({}, rawConfiguration, envConfiguration, { environment: env });
}

exports.default = loadConfiguration;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbImxvYWRDb25maWd1cmF0aW9uIiwiZGlybmFtZSIsImZpbHRlciIsImVudiIsInJhd0NvbmZpZ3VyYXRpb24iLCJyZXNvbHZlIiwibW9kIiwiZGVmYXVsdCIsImVudmlyb25tZW50cyIsImVudkNvbmZpZ3VyYXRpb24iLCJlbnZpcm9ubWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxPQUEzQixFQUFxRjtBQUFBLEtBQWpEQyxNQUFpRCx5REFBeEMsaUJBQXdDO0FBQUEsS0FBckJDLEdBQXFCLHlEQUFmLGFBQWU7O0FBQ3BGLE9BQU1DLG1CQUFtQiwwQkFBVztBQUNuQ0gsa0JBRG1DO0FBRW5DQyxnQkFGbUM7QUFHbkNHLFdBQVNDLE9BQU9BLElBQUlDLE9BQUosSUFBZUQ7QUFISSxFQUFYLENBQXpCOztBQU1BRixrQkFBaUJJLFlBQWpCLEdBQWdDSixpQkFBaUJJLFlBQWpCLElBQWlDLEVBQWpFO0FBQ0EsT0FBTUMsbUJBQW1CTCxpQkFBaUJJLFlBQWpCLENBQThCTCxHQUE5QixLQUFzQyxFQUEvRDs7QUFFQSxRQUFPLG1CQUNOLEVBRE0sRUFFTkMsZ0JBRk0sRUFHTkssZ0JBSE0sRUFJTixFQUFDQyxhQUFhUCxHQUFkLEVBSk0sQ0FBUDtBQU1BOztrQkFFY0gsaUIiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcmVxdWlyZUFsbCBmcm9tICdyZXF1aXJlLWFsbCc7XG5cbmZ1bmN0aW9uIGxvYWRDb25maWd1cmF0aW9uKGRpcm5hbWUsIGZpbHRlciA9IC8oLiopLihqc3xqc29uKSQvLCBlbnYgPSAnZGV2ZWxvcG1lbnQnKSB7XG5cdGNvbnN0IHJhd0NvbmZpZ3VyYXRpb24gPSByZXF1aXJlQWxsKHtcblx0XHRkaXJuYW1lLFxuXHRcdGZpbHRlcixcblx0XHRyZXNvbHZlOiBtb2QgPT4gbW9kLmRlZmF1bHQgfHwgbW9kXG5cdH0pO1xuXG5cdHJhd0NvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnRzID0gcmF3Q29uZmlndXJhdGlvbi5lbnZpcm9ubWVudHMgfHwge307XG5cdGNvbnN0IGVudkNvbmZpZ3VyYXRpb24gPSByYXdDb25maWd1cmF0aW9uLmVudmlyb25tZW50c1tlbnZdIHx8IHt9O1xuXG5cdHJldHVybiBtZXJnZShcblx0XHR7fSxcblx0XHRyYXdDb25maWd1cmF0aW9uLFxuXHRcdGVudkNvbmZpZ3VyYXRpb24sXG5cdFx0e2Vudmlyb25tZW50OiBlbnZ9XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb25maWd1cmF0aW9uO1xuIl19