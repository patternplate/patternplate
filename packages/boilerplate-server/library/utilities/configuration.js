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
		filter: filter
	});

	rawConfiguration.environments = rawConfiguration.environments || {};
	const envConfiguration = rawConfiguration.environments[env] || {};

	return (0, _lodash.merge)({}, rawConfiguration, envConfiguration, { environment: env });
}

exports.default = loadConfiguration;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbImxvYWRDb25maWd1cmF0aW9uIiwiZGlybmFtZSIsImZpbHRlciIsImVudiIsInJhd0NvbmZpZ3VyYXRpb24iLCJlbnZpcm9ubWVudHMiLCJlbnZDb25maWd1cmF0aW9uIiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsT0FBM0IsRUFBcUY7QUFBQSxLQUFqREMsTUFBaUQseURBQXhDLGlCQUF3QztBQUFBLEtBQXJCQyxHQUFxQix5REFBZixhQUFlOztBQUNwRixPQUFNQyxtQkFBbUIsMEJBQVc7QUFDbkNILGtCQURtQztBQUVuQ0M7QUFGbUMsRUFBWCxDQUF6Qjs7QUFLQUUsa0JBQWlCQyxZQUFqQixHQUFnQ0QsaUJBQWlCQyxZQUFqQixJQUFpQyxFQUFqRTtBQUNBLE9BQU1DLG1CQUFtQkYsaUJBQWlCQyxZQUFqQixDQUE4QkYsR0FBOUIsS0FBc0MsRUFBL0Q7O0FBRUEsUUFBTyxtQkFDTixFQURNLEVBRU5DLGdCQUZNLEVBR05FLGdCQUhNLEVBSU4sRUFBQ0MsYUFBYUosR0FBZCxFQUpNLENBQVA7QUFNQTs7a0JBRWNILGlCIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHJlcXVpcmVBbGwgZnJvbSAncmVxdWlyZS1hbGwnO1xuXG5mdW5jdGlvbiBsb2FkQ29uZmlndXJhdGlvbihkaXJuYW1lLCBmaWx0ZXIgPSAvKC4qKS4oanN8anNvbikkLywgZW52ID0gJ2RldmVsb3BtZW50Jykge1xuXHRjb25zdCByYXdDb25maWd1cmF0aW9uID0gcmVxdWlyZUFsbCh7XG5cdFx0ZGlybmFtZSxcblx0XHRmaWx0ZXJcblx0fSk7XG5cblx0cmF3Q29uZmlndXJhdGlvbi5lbnZpcm9ubWVudHMgPSByYXdDb25maWd1cmF0aW9uLmVudmlyb25tZW50cyB8fCB7fTtcblx0Y29uc3QgZW52Q29uZmlndXJhdGlvbiA9IHJhd0NvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnRzW2Vudl0gfHwge307XG5cblx0cmV0dXJuIG1lcmdlKFxuXHRcdHt9LFxuXHRcdHJhd0NvbmZpZ3VyYXRpb24sXG5cdFx0ZW52Q29uZmlndXJhdGlvbixcblx0XHR7ZW52aXJvbm1lbnQ6IGVudn1cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbmZpZ3VyYXRpb247XG4iXX0=