'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.flat = undefined;

var _lodash = require('lodash');

var _reselect = require('reselect');

var _tree = require('./tree');

var navigation = (0, _reselect.createSelector)(function (state) {
	return state.schema.meta;
}, function (state) {
	return state.config.hierarchy;
}, function (state) {
	return state.id;
}, function (state) {
	return state.hideEnabled;
}, function (tree, config, id, hide) {
	return (0, _tree.sanitize)((0, _lodash.merge)({}, tree), { hide: hide, config: config, id: id, prefix: 'pattern' });
});

exports.default = navigation;
var flat = exports.flat = (0, _reselect.createSelector)(navigation, _tree.flatten);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zZWxlY3RvcnMvbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJuYXZpZ2F0aW9uIiwic3RhdGUiLCJzY2hlbWEiLCJtZXRhIiwiY29uZmlnIiwiaGllcmFyY2h5IiwiaWQiLCJoaWRlRW5hYmxlZCIsInRyZWUiLCJoaWRlIiwicHJlZml4IiwiZmxhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGFBQWEsOEJBQ2xCO0FBQUEsUUFBU0MsTUFBTUMsTUFBTixDQUFhQyxJQUF0QjtBQUFBLENBRGtCLEVBRWxCO0FBQUEsUUFBU0YsTUFBTUcsTUFBTixDQUFhQyxTQUF0QjtBQUFBLENBRmtCLEVBR2xCO0FBQUEsUUFBU0osTUFBTUssRUFBZjtBQUFBLENBSGtCLEVBSWxCO0FBQUEsUUFBU0wsTUFBTU0sV0FBZjtBQUFBLENBSmtCLEVBS2xCLFVBQUNDLElBQUQsRUFBT0osTUFBUCxFQUFlRSxFQUFmLEVBQW1CRyxJQUFuQjtBQUFBLFFBQTRCLG9CQUFTLG1CQUFNLEVBQU4sRUFBVUQsSUFBVixDQUFULEVBQTBCLEVBQUNDLFVBQUQsRUFBT0wsY0FBUCxFQUFlRSxNQUFmLEVBQW1CSSxRQUFRLFNBQTNCLEVBQTFCLENBQTVCO0FBQUEsQ0FMa0IsQ0FBbkI7O2tCQVFlVixVO0FBQ1IsSUFBTVcsc0JBQU8sOEJBQWVYLFVBQWYsZ0JBQWIiLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge2ZsYXR0ZW4sIHNhbml0aXplfSBmcm9tICcuL3RyZWUnO1xuXG5jb25zdCBuYXZpZ2F0aW9uID0gY3JlYXRlU2VsZWN0b3IoXG5cdHN0YXRlID0+IHN0YXRlLnNjaGVtYS5tZXRhLFxuXHRzdGF0ZSA9PiBzdGF0ZS5jb25maWcuaGllcmFyY2h5LFxuXHRzdGF0ZSA9PiBzdGF0ZS5pZCxcblx0c3RhdGUgPT4gc3RhdGUuaGlkZUVuYWJsZWQsXG5cdCh0cmVlLCBjb25maWcsIGlkLCBoaWRlKSA9PiBzYW5pdGl6ZShtZXJnZSh7fSwgdHJlZSksIHtoaWRlLCBjb25maWcsIGlkLCBwcmVmaXg6ICdwYXR0ZXJuJ30pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uO1xuZXhwb3J0IGNvbnN0IGZsYXQgPSBjcmVhdGVTZWxlY3RvcihuYXZpZ2F0aW9uLCBmbGF0dGVuKTtcbiJdfQ==