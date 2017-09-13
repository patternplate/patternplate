'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = loadHooks;

var _path = require('path');

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function loadHooks(application, path) {
  let modules = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  const rawAppHooks = (0, _requireAll2.default)({
    dirname: path,
    filter: /^([^.].*)\.js(on)?$/,
    resolve: mod => mod.default || mod
  });
  const enabledHooks = selectEnabledHooks(application);

  const appHooks = Object.entries(rawAppHooks).map(entry => {
    var _entry = _slicedToArray(entry, 2);

    const name = _entry[0];
    const hook = _entry[1];

    const mod = hook.index || hook;
    const requirePath = (0, _path.resolve)(path, name);
    return _extends({}, mod, { name: name, requirePath: requirePath });
  }).map(hook => Object.assign(hook, { requirePath: (0, _path.resolve)(path, hook.name) }));

  const moduleHooks = modules ? Object.values(enabledHooks).filter(moduleName => typeof moduleName === 'string').map(moduleName => {
    const requirePath = require.resolve(moduleName);
    const mod = require(moduleName);
    mod.requirePath = requirePath;
    return mod;
  }) : [];

  return [].concat(_toConsumableArray(appHooks), _toConsumableArray(moduleHooks)).filter(Boolean).map(hook => (0, _default2.default)(application, hook.name, hook));
}

function selectEnabledHooks(application) {
  const config = application.configuration || {};
  const hooks = config.hooks || {};
  const enabled = hooks.enabled || {};
  return enabled;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2xvYWQuanMiXSwibmFtZXMiOlsibG9hZEhvb2tzIiwiYXBwbGljYXRpb24iLCJwYXRoIiwibW9kdWxlcyIsInJhd0FwcEhvb2tzIiwiZGlybmFtZSIsImZpbHRlciIsInJlc29sdmUiLCJtb2QiLCJkZWZhdWx0IiwiZW5hYmxlZEhvb2tzIiwic2VsZWN0RW5hYmxlZEhvb2tzIiwiYXBwSG9va3MiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJuYW1lIiwiaG9vayIsImluZGV4IiwicmVxdWlyZVBhdGgiLCJhc3NpZ24iLCJtb2R1bGVIb29rcyIsInZhbHVlcyIsIm1vZHVsZU5hbWUiLCJyZXF1aXJlIiwiQm9vbGVhbiIsImNvbmZpZyIsImNvbmZpZ3VyYXRpb24iLCJob29rcyIsImVuYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBS3dCQSxTOztBQUx4Qjs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLFdBQW5CLEVBQWdDQyxJQUFoQyxFQUF1RDtBQUFBLE1BQWpCQyxPQUFpQix5REFBUCxLQUFPOztBQUNwRSxRQUFNQyxjQUFjLDBCQUFXO0FBQzdCQyxhQUFTSCxJQURvQjtBQUU3QkksWUFBUSxxQkFGcUI7QUFHN0JDLGFBQVNDLE9BQU9BLElBQUlDLE9BQUosSUFBZUQ7QUFIRixHQUFYLENBQXBCO0FBS0EsUUFBTUUsZUFBZUMsbUJBQW1CVixXQUFuQixDQUFyQjs7QUFFQSxRQUFNVyxXQUFXQyxPQUFPQyxPQUFQLENBQWVWLFdBQWYsRUFDZFcsR0FEYyxDQUNWQyxTQUFTO0FBQUEsZ0NBQ1NBLEtBRFQ7O0FBQUEsVUFDTEMsSUFESztBQUFBLFVBQ0NDLElBREQ7O0FBRVosVUFBTVYsTUFBTVUsS0FBS0MsS0FBTCxJQUFjRCxJQUExQjtBQUNBLFVBQU1FLGNBQWMsbUJBQVFsQixJQUFSLEVBQWNlLElBQWQsQ0FBcEI7QUFDQSx3QkFBV1QsR0FBWCxJQUFnQlMsVUFBaEIsRUFBc0JHLHdCQUF0QjtBQUNELEdBTmMsRUFPZEwsR0FQYyxDQU9WRyxRQUFRTCxPQUFPUSxNQUFQLENBQWNILElBQWQsRUFBb0IsRUFBQ0UsYUFBYSxtQkFBUWxCLElBQVIsRUFBY2dCLEtBQUtELElBQW5CLENBQWQsRUFBcEIsQ0FQRSxDQUFqQjs7QUFTQSxRQUFNSyxjQUFjbkIsVUFDaEJVLE9BQU9VLE1BQVAsQ0FBY2IsWUFBZCxFQUNHSixNQURILENBQ1VrQixjQUFjLE9BQU9BLFVBQVAsS0FBc0IsUUFEOUMsRUFFR1QsR0FGSCxDQUVPUyxjQUFjO0FBQ2pCLFVBQU1KLGNBQWNLLFFBQVFsQixPQUFSLENBQWdCaUIsVUFBaEIsQ0FBcEI7QUFDQSxVQUFNaEIsTUFBTWlCLFFBQVFELFVBQVIsQ0FBWjtBQUNBaEIsUUFBSVksV0FBSixHQUFrQkEsV0FBbEI7QUFDQSxXQUFPWixHQUFQO0FBQ0QsR0FQSCxDQURnQixHQVNoQixFQVRKOztBQVdBLFNBQU8sNkJBQUlJLFFBQUosc0JBQWlCVSxXQUFqQixHQUNKaEIsTUFESSxDQUNHb0IsT0FESCxFQUVKWCxHQUZJLENBRUFHLFFBQVEsdUJBQVlqQixXQUFaLEVBQXlCaUIsS0FBS0QsSUFBOUIsRUFBb0NDLElBQXBDLENBRlIsQ0FBUDtBQUdEOztBQUVELFNBQVNQLGtCQUFULENBQTRCVixXQUE1QixFQUF5QztBQUN2QyxRQUFNMEIsU0FBUzFCLFlBQVkyQixhQUFaLElBQTZCLEVBQTVDO0FBQ0EsUUFBTUMsUUFBUUYsT0FBT0UsS0FBUCxJQUFnQixFQUE5QjtBQUNBLFFBQU1DLFVBQVVELE1BQU1DLE9BQU4sSUFBaUIsRUFBakM7QUFDQSxTQUFPQSxPQUFQO0FBQ0QiLCJmaWxlIjoibG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCByZXF1aXJlQWxsIGZyb20gJ3JlcXVpcmUtYWxsJztcbmltcG9ydCBob29rRmFjdG9yeSBmcm9tICcuL2RlZmF1bHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9va3MoYXBwbGljYXRpb24sIHBhdGgsIG1vZHVsZXMgPSBmYWxzZSkge1xuICBjb25zdCByYXdBcHBIb29rcyA9IHJlcXVpcmVBbGwoe1xuICAgIGRpcm5hbWU6IHBhdGgsXG4gICAgZmlsdGVyOiAvXihbXi5dLiopXFwuanMob24pPyQvLFxuICAgIHJlc29sdmU6IG1vZCA9PiBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgfSk7XG4gIGNvbnN0IGVuYWJsZWRIb29rcyA9IHNlbGVjdEVuYWJsZWRIb29rcyhhcHBsaWNhdGlvbik7XG5cbiAgY29uc3QgYXBwSG9va3MgPSBPYmplY3QuZW50cmllcyhyYXdBcHBIb29rcylcbiAgICAubWFwKGVudHJ5ID0+IHtcbiAgICAgIGNvbnN0IFtuYW1lLCBob29rXSA9IGVudHJ5O1xuICAgICAgY29uc3QgbW9kID0gaG9vay5pbmRleCB8fCBob29rO1xuICAgICAgY29uc3QgcmVxdWlyZVBhdGggPSByZXNvbHZlKHBhdGgsIG5hbWUpO1xuICAgICAgcmV0dXJuIHsuLi5tb2QsIG5hbWUsIHJlcXVpcmVQYXRofTtcbiAgICB9KVxuICAgIC5tYXAoaG9vayA9PiBPYmplY3QuYXNzaWduKGhvb2ssIHtyZXF1aXJlUGF0aDogcmVzb2x2ZShwYXRoLCBob29rLm5hbWUpfSkpO1xuXG4gIGNvbnN0IG1vZHVsZUhvb2tzID0gbW9kdWxlc1xuICAgID8gT2JqZWN0LnZhbHVlcyhlbmFibGVkSG9va3MpXG4gICAgICAgIC5maWx0ZXIobW9kdWxlTmFtZSA9PiB0eXBlb2YgbW9kdWxlTmFtZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIC5tYXAobW9kdWxlTmFtZSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZVBhdGggPSByZXF1aXJlLnJlc29sdmUobW9kdWxlTmFtZSk7XG4gICAgICAgICAgY29uc3QgbW9kID0gcmVxdWlyZShtb2R1bGVOYW1lKTtcbiAgICAgICAgICBtb2QucmVxdWlyZVBhdGggPSByZXF1aXJlUGF0aDtcbiAgICAgICAgICByZXR1cm4gbW9kO1xuICAgICAgICB9KVxuICAgIDogW107XG5cbiAgcmV0dXJuIFsuLi5hcHBIb29rcywgLi4ubW9kdWxlSG9va3NdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5tYXAoaG9vayA9PiBob29rRmFjdG9yeShhcHBsaWNhdGlvbiwgaG9vay5uYW1lLCBob29rKSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEVuYWJsZWRIb29rcyhhcHBsaWNhdGlvbikge1xuICBjb25zdCBjb25maWcgPSBhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uIHx8IHt9O1xuICBjb25zdCBob29rcyA9IGNvbmZpZy5ob29rcyB8fCB7fTtcbiAgY29uc3QgZW5hYmxlZCA9IGhvb2tzLmVuYWJsZWQgfHwge307XG4gIHJldHVybiBlbmFibGVkO1xufVxuIl19