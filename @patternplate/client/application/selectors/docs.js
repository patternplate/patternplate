'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.flat = undefined;

var _lodash = require('lodash');

var _reselect = require('reselect');

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _tree = require('./tree');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var docs = (0, _reselect.createSelector)(function (state) {
	return state.schema.docs;
}, function (state) {
	return state.id;
}, function (state) {
	return state.hideEnabled;
}, function (tree, id, hide) {
	var t = (0, _tree.sanitize)((0, _lodash.merge)({}, tree), { hide: hide, id: id, prefix: 'doc' });

	if (!t.children.some(function (i) {
		return i.id === 'root';
	})) {
		var doc = (0, _tree.enrich)({
			contents: tree.contents,
			href: '/',
			id: tree.id,
			manifest: tree.manifest,
			path: ['/'],
			type: 'doc'
		}, { id: id, config: {}, prefix: '/' });

		t.children.push(doc);
	}

	return _seamlessImmutable2.default.from(t);
});

exports.default = docs;
var flat = exports.flat = (0, _reselect.createSelector)(docs, _tree.flatten);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zZWxlY3RvcnMvZG9jcy5qcyJdLCJuYW1lcyI6WyJkb2NzIiwic3RhdGUiLCJzY2hlbWEiLCJpZCIsImhpZGVFbmFibGVkIiwidHJlZSIsImhpZGUiLCJ0IiwicHJlZml4IiwiY2hpbGRyZW4iLCJzb21lIiwiaSIsImRvYyIsImNvbnRlbnRzIiwiaHJlZiIsIm1hbmlmZXN0IiwicGF0aCIsInR5cGUiLCJjb25maWciLCJwdXNoIiwiZnJvbSIsImZsYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyw4QkFDWjtBQUFBLFFBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxDQURZLEVBRVo7QUFBQSxRQUFTQyxNQUFNRSxFQUFmO0FBQUEsQ0FGWSxFQUdaO0FBQUEsUUFBU0YsTUFBTUcsV0FBZjtBQUFBLENBSFksRUFJWixVQUFDQyxJQUFELEVBQU9GLEVBQVAsRUFBV0csSUFBWCxFQUFvQjtBQUNuQixLQUFNQyxJQUFJLG9CQUFTLG1CQUFNLEVBQU4sRUFBVUYsSUFBVixDQUFULEVBQTBCLEVBQUNDLFVBQUQsRUFBT0gsTUFBUCxFQUFXSyxRQUFRLEtBQW5CLEVBQTFCLENBQVY7O0FBRUEsS0FBSSxDQUFDRCxFQUFFRSxRQUFGLENBQVdDLElBQVgsQ0FBZ0I7QUFBQSxTQUFLQyxFQUFFUixFQUFGLEtBQVMsTUFBZDtBQUFBLEVBQWhCLENBQUwsRUFBNEM7QUFDM0MsTUFBTVMsTUFBTSxrQkFBTztBQUNsQkMsYUFBVVIsS0FBS1EsUUFERztBQUVsQkMsU0FBTSxHQUZZO0FBR2xCWCxPQUFJRSxLQUFLRixFQUhTO0FBSWxCWSxhQUFVVixLQUFLVSxRQUpHO0FBS2xCQyxTQUFNLENBQUMsR0FBRCxDQUxZO0FBTWxCQyxTQUFNO0FBTlksR0FBUCxFQU9ULEVBQUNkLE1BQUQsRUFBS2UsUUFBUSxFQUFiLEVBQWlCVixRQUFRLEdBQXpCLEVBUFMsQ0FBWjs7QUFTQUQsSUFBRUUsUUFBRixDQUFXVSxJQUFYLENBQWdCUCxHQUFoQjtBQUNBOztBQUVELFFBQU8sNEJBQVVRLElBQVYsQ0FBZWIsQ0FBZixDQUFQO0FBQ0EsQ0FyQlcsQ0FBYjs7a0JBd0JlUCxJO0FBQ1IsSUFBTXFCLHNCQUFPLDhCQUFlckIsSUFBZixnQkFBYiIsImZpbGUiOiJkb2NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttZXJnZX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBJbW11dGFibGUgZnJvbSAnc2VhbWxlc3MtaW1tdXRhYmxlJztcbmltcG9ydCB7ZW5yaWNoLCBmbGF0dGVuLCBzYW5pdGl6ZX0gZnJvbSAnLi90cmVlJztcblxuY29uc3QgZG9jcyA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRzdGF0ZSA9PiBzdGF0ZS5zY2hlbWEuZG9jcyxcblx0c3RhdGUgPT4gc3RhdGUuaWQsXG5cdHN0YXRlID0+IHN0YXRlLmhpZGVFbmFibGVkLFxuXHQodHJlZSwgaWQsIGhpZGUpID0+IHtcblx0XHRjb25zdCB0ID0gc2FuaXRpemUobWVyZ2Uoe30sIHRyZWUpLCB7aGlkZSwgaWQsIHByZWZpeDogJ2RvYyd9KTtcblxuXHRcdGlmICghdC5jaGlsZHJlbi5zb21lKGkgPT4gaS5pZCA9PT0gJ3Jvb3QnKSkge1xuXHRcdFx0Y29uc3QgZG9jID0gZW5yaWNoKHtcblx0XHRcdFx0Y29udGVudHM6IHRyZWUuY29udGVudHMsXG5cdFx0XHRcdGhyZWY6ICcvJyxcblx0XHRcdFx0aWQ6IHRyZWUuaWQsXG5cdFx0XHRcdG1hbmlmZXN0OiB0cmVlLm1hbmlmZXN0LFxuXHRcdFx0XHRwYXRoOiBbJy8nXSxcblx0XHRcdFx0dHlwZTogJ2RvYydcblx0XHRcdH0sIHtpZCwgY29uZmlnOiB7fSwgcHJlZml4OiAnLyd9KTtcblxuXHRcdFx0dC5jaGlsZHJlbi5wdXNoKGRvYyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEltbXV0YWJsZS5mcm9tKHQpO1xuXHR9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBkb2NzO1xuZXhwb3J0IGNvbnN0IGZsYXQgPSBjcmVhdGVTZWxlY3Rvcihkb2NzLCBmbGF0dGVuKTtcbiJdfQ==