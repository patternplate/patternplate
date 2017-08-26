'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _frontMatter = require('front-matter');

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _item = require('../selectors/item');

var item = _interopRequireWildcard(_item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withActiveForDoc = (0, _reselect.createSelector)(item.selectContents, function (contents) {
	return {
		active: (0, _frontMatter2.default)(contents).body.length > 0
	};
});

exports.default = (0, _reactRedux.connect)(withActiveForDoc);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb25uZWN0b3JzL3dpdGgtYWN0aXZlLWZvci1kb2MuanMiXSwibmFtZXMiOlsiaXRlbSIsIndpdGhBY3RpdmVGb3JEb2MiLCJzZWxlY3RDb250ZW50cyIsImFjdGl2ZSIsImNvbnRlbnRzIiwiYm9keSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsSTs7Ozs7O0FBRVosSUFBTUMsbUJBQW1CLDhCQUN4QkQsS0FBS0UsY0FEbUIsRUFFeEIsb0JBQVk7QUFDWCxRQUFPO0FBQ05DLFVBQVEsMkJBQVlDLFFBQVosRUFBc0JDLElBQXRCLENBQTJCQyxNQUEzQixHQUFvQztBQUR0QyxFQUFQO0FBR0EsQ0FOdUIsQ0FBekI7O2tCQVNlLHlCQUFRTCxnQkFBUixDIiwiZmlsZSI6IndpdGgtYWN0aXZlLWZvci1kb2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbnRtYXR0ZXIgZnJvbSAnZnJvbnQtbWF0dGVyJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0ICogYXMgaXRlbSBmcm9tICcuLi9zZWxlY3RvcnMvaXRlbSc7XG5cbmNvbnN0IHdpdGhBY3RpdmVGb3JEb2MgPSBjcmVhdGVTZWxlY3Rvcihcblx0aXRlbS5zZWxlY3RDb250ZW50cyxcblx0Y29udGVudHMgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmU6IGZyb250bWF0dGVyKGNvbnRlbnRzKS5ib2R5Lmxlbmd0aCA+IDBcblx0XHR9O1xuXHR9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHdpdGhBY3RpdmVGb3JEb2MpO1xuIl19