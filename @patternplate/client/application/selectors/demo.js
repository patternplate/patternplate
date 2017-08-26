'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.selectSrc = undefined;

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _reselect = require('reselect');

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectEnv = (0, _reselect.createSelector)(function (state) {
	return state.environment;
}, function (state) {
	return state.schema.envs;
}, function (env, envs) {
	return Array.isArray(envs) ? envs.find(function (e) {
		return e.name === env;
	}) : { name: 'index' };
});

var selectSrc = exports.selectSrc = (0, _reselect.createSelector)(_item2.default, function (state) {
	return state.base;
}, selectEnv, function (state) {
	return state.pattern;
}, function (state) {
	return state.mountEnabled;
}, function (item, base, env, pattern, mount) {
	if (!item) {
		return null;
	}

	var pathname = _urlQuery2.default.format({
		pathname: base + 'demo/' + item.id + '/index.html',
		query: {
			environment: env.name
		}
	});

	var query = _queryString2.default.stringify({
		reloadTime: pattern.reloadTime,
		mount: mount
	});

	return pathname + '?' + query;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zZWxlY3RvcnMvZGVtby5qcyJdLCJuYW1lcyI6WyJzZWxlY3RFbnYiLCJzdGF0ZSIsImVudmlyb25tZW50Iiwic2NoZW1hIiwiZW52cyIsImVudiIsIkFycmF5IiwiaXNBcnJheSIsImZpbmQiLCJlIiwibmFtZSIsInNlbGVjdFNyYyIsImJhc2UiLCJwYXR0ZXJuIiwibW91bnRFbmFibGVkIiwiaXRlbSIsIm1vdW50IiwicGF0aG5hbWUiLCJmb3JtYXQiLCJpZCIsInF1ZXJ5Iiwic3RyaW5naWZ5IiwicmVsb2FkVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSw4QkFDakI7QUFBQSxRQUFTQyxNQUFNQyxXQUFmO0FBQUEsQ0FEaUIsRUFFakI7QUFBQSxRQUFTRCxNQUFNRSxNQUFOLENBQWFDLElBQXRCO0FBQUEsQ0FGaUIsRUFHakIsVUFBQ0MsR0FBRCxFQUFNRCxJQUFOO0FBQUEsUUFBZUUsTUFBTUMsT0FBTixDQUFjSCxJQUFkLElBQXNCQSxLQUFLSSxJQUFMLENBQVU7QUFBQSxTQUFLQyxFQUFFQyxJQUFGLEtBQVdMLEdBQWhCO0FBQUEsRUFBVixDQUF0QixHQUF1RCxFQUFDSyxNQUFNLE9BQVAsRUFBdEU7QUFBQSxDQUhpQixDQUFsQjs7QUFNTyxJQUFNQyxnQ0FBWSw4Q0FFeEI7QUFBQSxRQUFTVixNQUFNVyxJQUFmO0FBQUEsQ0FGd0IsRUFHeEJaLFNBSHdCLEVBSXhCO0FBQUEsUUFBU0MsTUFBTVksT0FBZjtBQUFBLENBSndCLEVBS3hCO0FBQUEsUUFBU1osTUFBTWEsWUFBZjtBQUFBLENBTHdCLEVBTXhCLFVBQUNDLElBQUQsRUFBT0gsSUFBUCxFQUFhUCxHQUFiLEVBQWtCUSxPQUFsQixFQUEyQkcsS0FBM0IsRUFBcUM7QUFDcEMsS0FBSSxDQUFDRCxJQUFMLEVBQVc7QUFDVixTQUFPLElBQVA7QUFDQTs7QUFFRCxLQUFNRSxXQUFXLG1CQUFTQyxNQUFULENBQWdCO0FBQ2hDRCxZQUFhTCxJQUFiLGFBQXlCRyxLQUFLSSxFQUE5QixnQkFEZ0M7QUFFaENDLFNBQU87QUFDTmxCLGdCQUFhRyxJQUFJSztBQURYO0FBRnlCLEVBQWhCLENBQWpCOztBQU9BLEtBQU1VLFFBQVEsc0JBQVlDLFNBQVosQ0FBc0I7QUFDbkNDLGNBQVlULFFBQVFTLFVBRGU7QUFFbkNOO0FBRm1DLEVBQXRCLENBQWQ7O0FBS0EsUUFBVUMsUUFBVixTQUFzQkcsS0FBdEI7QUFDQSxDQXhCdUIsQ0FBbEIiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4uL3V0aWxzL3VybC1xdWVyeSc7XG5pbXBvcnQgc2VsZWN0SXRlbSBmcm9tICcuL2l0ZW0nO1xuXG5jb25zdCBzZWxlY3RFbnYgPSBjcmVhdGVTZWxlY3Rvcihcblx0c3RhdGUgPT4gc3RhdGUuZW52aXJvbm1lbnQsXG5cdHN0YXRlID0+IHN0YXRlLnNjaGVtYS5lbnZzLFxuXHQoZW52LCBlbnZzKSA9PiBBcnJheS5pc0FycmF5KGVudnMpID8gZW52cy5maW5kKGUgPT4gZS5uYW1lID09PSBlbnYpIDoge25hbWU6ICdpbmRleCd9XG4pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0U3JjID0gY3JlYXRlU2VsZWN0b3IoXG5cdHNlbGVjdEl0ZW0sXG5cdHN0YXRlID0+IHN0YXRlLmJhc2UsXG5cdHNlbGVjdEVudixcblx0c3RhdGUgPT4gc3RhdGUucGF0dGVybixcblx0c3RhdGUgPT4gc3RhdGUubW91bnRFbmFibGVkLFxuXHQoaXRlbSwgYmFzZSwgZW52LCBwYXR0ZXJuLCBtb3VudCkgPT4ge1xuXHRcdGlmICghaXRlbSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGF0aG5hbWUgPSB1cmxRdWVyeS5mb3JtYXQoe1xuXHRcdFx0cGF0aG5hbWU6IGAke2Jhc2V9ZGVtby8ke2l0ZW0uaWR9L2luZGV4Lmh0bWxgLFxuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0ZW52aXJvbm1lbnQ6IGVudi5uYW1lXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb25zdCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG5cdFx0XHRyZWxvYWRUaW1lOiBwYXR0ZXJuLnJlbG9hZFRpbWUsXG5cdFx0XHRtb3VudFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGAke3BhdGhuYW1lfT8ke3F1ZXJ5fWA7XG5cdH1cbik7XG4iXX0=