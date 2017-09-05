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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2xvYWQuanMiXSwibmFtZXMiOlsibG9hZEhvb2tzIiwiYXBwbGljYXRpb24iLCJwYXRoIiwibW9kdWxlcyIsInJhd0FwcEhvb2tzIiwiZGlybmFtZSIsImZpbHRlciIsInJlc29sdmUiLCJtb2QiLCJkZWZhdWx0IiwiZW5hYmxlZEhvb2tzIiwic2VsZWN0RW5hYmxlZEhvb2tzIiwiYXBwSG9va3MiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJuYW1lIiwiaG9vayIsImluZGV4IiwicmVxdWlyZVBhdGgiLCJhc3NpZ24iLCJtb2R1bGVIb29rcyIsInZhbHVlcyIsIm1vZHVsZU5hbWUiLCJyZXF1aXJlIiwiQm9vbGVhbiIsImNvbmZpZyIsImNvbmZpZ3VyYXRpb24iLCJob29rcyIsImVuYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBS3dCQSxTOztBQUx4Qjs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLFdBQW5CLEVBQWdDQyxJQUFoQyxFQUF1RDtBQUFBLEtBQWpCQyxPQUFpQix5REFBUCxLQUFPOztBQUNyRSxPQUFNQyxjQUFjLDBCQUFXO0FBQzlCQyxXQUFTSCxJQURxQjtBQUU5QkksVUFBUSxxQkFGc0I7QUFHOUJDLFdBQVNDLE9BQU9BLElBQUlDLE9BQUosSUFBZUQ7QUFIRCxFQUFYLENBQXBCO0FBS0EsT0FBTUUsZUFBZUMsbUJBQW1CVixXQUFuQixDQUFyQjs7QUFFQSxPQUFNVyxXQUFXQyxPQUFPQyxPQUFQLENBQWVWLFdBQWYsRUFDZlcsR0FEZSxDQUNYQyxTQUFTO0FBQUEsOEJBQ1FBLEtBRFI7O0FBQUEsUUFDTkMsSUFETTtBQUFBLFFBQ0FDLElBREE7O0FBRWIsUUFBTVYsTUFBTVUsS0FBS0MsS0FBTCxJQUFjRCxJQUExQjtBQUNBLFFBQU1FLGNBQWMsbUJBQVFsQixJQUFSLEVBQWNlLElBQWQsQ0FBcEI7QUFDQSxzQkFBV1QsR0FBWCxJQUFnQlMsVUFBaEIsRUFBc0JHLHdCQUF0QjtBQUNBLEVBTmUsRUFPZkwsR0FQZSxDQU9YRyxRQUFRTCxPQUFPUSxNQUFQLENBQWNILElBQWQsRUFBb0IsRUFBQ0UsYUFBYSxtQkFBUWxCLElBQVIsRUFBY2dCLEtBQUtELElBQW5CLENBQWQsRUFBcEIsQ0FQRyxDQUFqQjs7QUFTQSxPQUFNSyxjQUFjbkIsVUFDbkJVLE9BQU9VLE1BQVAsQ0FBY2IsWUFBZCxFQUNFSixNQURGLENBQ1NrQixjQUFjLE9BQU9BLFVBQVAsS0FBc0IsUUFEN0MsRUFFRVQsR0FGRixDQUVNUyxjQUFjO0FBQ2xCLFFBQU1KLGNBQWNLLFFBQVFsQixPQUFSLENBQWdCaUIsVUFBaEIsQ0FBcEI7QUFDQSxRQUFNaEIsTUFBTWlCLFFBQVFELFVBQVIsQ0FBWjtBQUNBaEIsTUFBSVksV0FBSixHQUFrQkEsV0FBbEI7QUFDQSxTQUFPWixHQUFQO0FBQ0EsRUFQRixDQURtQixHQVNuQixFQVREOztBQVdBLFFBQU8sNkJBQUlJLFFBQUosc0JBQWlCVSxXQUFqQixHQUNMaEIsTUFESyxDQUNFb0IsT0FERixFQUNXWCxHQURYLENBQ2VHLFFBQVEsdUJBQVlqQixXQUFaLEVBQXlCaUIsS0FBS0QsSUFBOUIsRUFBb0NDLElBQXBDLENBRHZCLENBQVA7QUFFQTs7QUFFRCxTQUFTUCxrQkFBVCxDQUE0QlYsV0FBNUIsRUFBeUM7QUFDeEMsT0FBTTBCLFNBQVMxQixZQUFZMkIsYUFBWixJQUE2QixFQUE1QztBQUNBLE9BQU1DLFFBQVFGLE9BQU9FLEtBQVAsSUFBZ0IsRUFBOUI7QUFDQSxPQUFNQyxVQUFVRCxNQUFNQyxPQUFOLElBQWlCLEVBQWpDO0FBQ0EsUUFBT0EsT0FBUDtBQUNBIiwiZmlsZSI6ImxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgcmVxdWlyZUFsbCBmcm9tICdyZXF1aXJlLWFsbCc7XG5pbXBvcnQgaG9va0ZhY3RvcnkgZnJvbSAnLi9kZWZhdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvb2tzKGFwcGxpY2F0aW9uLCBwYXRoLCBtb2R1bGVzID0gZmFsc2UpIHtcblx0Y29uc3QgcmF3QXBwSG9va3MgPSByZXF1aXJlQWxsKHtcblx0XHRkaXJuYW1lOiBwYXRoLFxuXHRcdGZpbHRlcjogL14oW14uXS4qKVxcLmpzKG9uKT8kLyxcblx0XHRyZXNvbHZlOiBtb2QgPT4gbW9kLmRlZmF1bHQgfHwgbW9kXG5cdH0pO1xuXHRjb25zdCBlbmFibGVkSG9va3MgPSBzZWxlY3RFbmFibGVkSG9va3MoYXBwbGljYXRpb24pO1xuXG5cdGNvbnN0IGFwcEhvb2tzID0gT2JqZWN0LmVudHJpZXMocmF3QXBwSG9va3MpXG5cdFx0Lm1hcChlbnRyeSA9PiB7XG5cdFx0XHRjb25zdCBbbmFtZSwgaG9va10gPSBlbnRyeTtcblx0XHRcdGNvbnN0IG1vZCA9IGhvb2suaW5kZXggfHwgaG9vaztcblx0XHRcdGNvbnN0IHJlcXVpcmVQYXRoID0gcmVzb2x2ZShwYXRoLCBuYW1lKTtcblx0XHRcdHJldHVybiB7Li4ubW9kLCBuYW1lLCByZXF1aXJlUGF0aH07XG5cdFx0fSlcblx0XHQubWFwKGhvb2sgPT4gT2JqZWN0LmFzc2lnbihob29rLCB7cmVxdWlyZVBhdGg6IHJlc29sdmUocGF0aCwgaG9vay5uYW1lKX0pKTtcblxuXHRjb25zdCBtb2R1bGVIb29rcyA9IG1vZHVsZXMgP1xuXHRcdE9iamVjdC52YWx1ZXMoZW5hYmxlZEhvb2tzKVxuXHRcdFx0LmZpbHRlcihtb2R1bGVOYW1lID0+IHR5cGVvZiBtb2R1bGVOYW1lID09PSAnc3RyaW5nJylcblx0XHRcdC5tYXAobW9kdWxlTmFtZSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlcXVpcmVQYXRoID0gcmVxdWlyZS5yZXNvbHZlKG1vZHVsZU5hbWUpO1xuXHRcdFx0XHRjb25zdCBtb2QgPSByZXF1aXJlKG1vZHVsZU5hbWUpO1xuXHRcdFx0XHRtb2QucmVxdWlyZVBhdGggPSByZXF1aXJlUGF0aDtcblx0XHRcdFx0cmV0dXJuIG1vZDtcblx0XHRcdH0pIDpcblx0XHRbXTtcblxuXHRyZXR1cm4gWy4uLmFwcEhvb2tzLCAuLi5tb2R1bGVIb29rc11cblx0XHQuZmlsdGVyKEJvb2xlYW4pLm1hcChob29rID0+IGhvb2tGYWN0b3J5KGFwcGxpY2F0aW9uLCBob29rLm5hbWUsIGhvb2spKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0RW5hYmxlZEhvb2tzKGFwcGxpY2F0aW9uKSB7XG5cdGNvbnN0IGNvbmZpZyA9IGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24gfHwge307XG5cdGNvbnN0IGhvb2tzID0gY29uZmlnLmhvb2tzIHx8IHt9O1xuXHRjb25zdCBlbmFibGVkID0gaG9va3MuZW5hYmxlZCB8fCB7fTtcblx0cmV0dXJuIGVuYWJsZWQ7XG59XG4iXX0=