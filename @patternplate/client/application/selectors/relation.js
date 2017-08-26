'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createRelationSelector;

var _reselect = require('reselect');

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _find = require('../utils/find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRelationSelector(key, selectItem) {
	return (0, _reselect.createSelector)(_navigation2.default, selectItem, function (patterns, item) {
		if (!item) {
			return [];
		}
		return (item[key] || []).map(function (id) {
			return (0, _find2.default)(patterns, 'pattern/' + id, { type: 'pattern' });
		}).filter(Boolean);
	});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zZWxlY3RvcnMvcmVsYXRpb24uanMiXSwibmFtZXMiOlsiY3JlYXRlUmVsYXRpb25TZWxlY3RvciIsImtleSIsInNlbGVjdEl0ZW0iLCJwYXR0ZXJucyIsIml0ZW0iLCJtYXAiLCJpZCIsInR5cGUiLCJmaWx0ZXIiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFJd0JBLHNCOztBQUp4Qjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxzQkFBVCxDQUFnQ0MsR0FBaEMsRUFBcUNDLFVBQXJDLEVBQWlEO0FBQy9ELFFBQU8sb0RBRU5BLFVBRk0sRUFHTixVQUFDQyxRQUFELEVBQVdDLElBQVgsRUFBb0I7QUFDbkIsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVixVQUFPLEVBQVA7QUFDQTtBQUNELFNBQU8sQ0FBQ0EsS0FBS0gsR0FBTCxLQUFhLEVBQWQsRUFDTEksR0FESyxDQUNEO0FBQUEsVUFBTSxvQkFBS0YsUUFBTCxlQUEwQkcsRUFBMUIsRUFBZ0MsRUFBQ0MsTUFBTSxTQUFQLEVBQWhDLENBQU47QUFBQSxHQURDLEVBRUxDLE1BRkssQ0FFRUMsT0FGRixDQUFQO0FBR0EsRUFWSyxDQUFQO0FBWUEiLCJmaWxlIjoicmVsYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgc2VsZWN0UGF0dGVybnMgZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCBmaW5kIGZyb20gJy4uL3V0aWxzL2ZpbmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWxhdGlvblNlbGVjdG9yKGtleSwgc2VsZWN0SXRlbSkge1xuXHRyZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG5cdFx0c2VsZWN0UGF0dGVybnMsXG5cdFx0c2VsZWN0SXRlbSxcblx0XHQocGF0dGVybnMsIGl0ZW0pID0+IHtcblx0XHRcdGlmICghaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKGl0ZW1ba2V5XSB8fCBbXSlcblx0XHRcdFx0Lm1hcChpZCA9PiBmaW5kKHBhdHRlcm5zLCBgcGF0dGVybi8ke2lkfWAsIHt0eXBlOiAncGF0dGVybid9KSlcblx0XHRcdFx0LmZpbHRlcihCb29sZWFuKTtcblx0XHR9XG5cdCk7XG59XG4iXX0=