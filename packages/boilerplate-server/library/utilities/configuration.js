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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbImxvYWRDb25maWd1cmF0aW9uIiwiZGlybmFtZSIsImZpbHRlciIsImVudiIsInJhd0NvbmZpZ3VyYXRpb24iLCJyZXNvbHZlIiwibW9kIiwiZGVmYXVsdCIsImVudmlyb25tZW50cyIsImVudkNvbmZpZ3VyYXRpb24iLCJlbnZpcm9ubWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGlCQUFULENBQ0VDLE9BREYsRUFJRTtBQUFBLE1BRkFDLE1BRUEseURBRlMsaUJBRVQ7QUFBQSxNQURBQyxHQUNBLHlEQURNLGFBQ047O0FBQ0EsUUFBTUMsbUJBQW1CLDBCQUFXO0FBQ2xDSCxvQkFEa0M7QUFFbENDLGtCQUZrQztBQUdsQ0csYUFBU0MsT0FBT0EsSUFBSUMsT0FBSixJQUFlRDtBQUhHLEdBQVgsQ0FBekI7O0FBTUFGLG1CQUFpQkksWUFBakIsR0FBZ0NKLGlCQUFpQkksWUFBakIsSUFBaUMsRUFBakU7QUFDQSxRQUFNQyxtQkFBbUJMLGlCQUFpQkksWUFBakIsQ0FBOEJMLEdBQTlCLEtBQXNDLEVBQS9EOztBQUVBLFNBQU8sbUJBQU0sRUFBTixFQUFVQyxnQkFBVixFQUE0QkssZ0JBQTVCLEVBQThDLEVBQUNDLGFBQWFQLEdBQWQsRUFBOUMsQ0FBUDtBQUNEOztrQkFFY0gsaUIiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcmVxdWlyZUFsbCBmcm9tICdyZXF1aXJlLWFsbCc7XG5cbmZ1bmN0aW9uIGxvYWRDb25maWd1cmF0aW9uKFxuICBkaXJuYW1lLFxuICBmaWx0ZXIgPSAvKC4qKS4oanN8anNvbikkLyxcbiAgZW52ID0gJ2RldmVsb3BtZW50J1xuKSB7XG4gIGNvbnN0IHJhd0NvbmZpZ3VyYXRpb24gPSByZXF1aXJlQWxsKHtcbiAgICBkaXJuYW1lLFxuICAgIGZpbHRlcixcbiAgICByZXNvbHZlOiBtb2QgPT4gbW9kLmRlZmF1bHQgfHwgbW9kXG4gIH0pO1xuXG4gIHJhd0NvbmZpZ3VyYXRpb24uZW52aXJvbm1lbnRzID0gcmF3Q29uZmlndXJhdGlvbi5lbnZpcm9ubWVudHMgfHwge307XG4gIGNvbnN0IGVudkNvbmZpZ3VyYXRpb24gPSByYXdDb25maWd1cmF0aW9uLmVudmlyb25tZW50c1tlbnZdIHx8IHt9O1xuXG4gIHJldHVybiBtZXJnZSh7fSwgcmF3Q29uZmlndXJhdGlvbiwgZW52Q29uZmlndXJhdGlvbiwge2Vudmlyb25tZW50OiBlbnZ9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbmZpZ3VyYXRpb247XG4iXX0=