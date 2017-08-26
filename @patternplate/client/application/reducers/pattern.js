'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _handleActions;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reduxActions = require('redux-actions');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _base = require('./base');

var _getIdByPathname = require('../utils/get-id-by-pathname');

var _getIdByPathname2 = _interopRequireDefault(_getIdByPathname);

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

var _promiseThunkAction = require('../actions/promise-thunk-action');

var _composeReducers = require('../utils/compose-reducers');

var _composeReducers2 = _interopRequireDefault(_composeReducers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _composeReducers2.default)((0, _handleDependentActions2.default)({
	'@@router/LOCATION_CHANGE': function routerLOCATION_CHANGE(state, _ref, _ref2) {
		var payload = _ref.payload;
		var schema = _ref2.schema;

		var id = (0, _getIdByPathname2.default)(payload.pathname, (0, _base.getBase)(payload.pathname));
		if (!id || !schema) {
			return state;
		}

		return (0, _extends3.default)({}, find(schema.meta, id), { errored: state.errored, files: state.files, loading: state.loading, reloadTime: state.reloadTime });
	}
}, { dependencies: ['schema'] }), (0, _promiseThunkAction.handlePromiseThunkAction)(actions.loadSchema, {
	success: function success(state, _ref3, _ref4) {
		var payload = _ref3.payload;
		var id = _ref4.id;

		if (!id) {
			return state;
		}

		return (0, _extends3.default)({}, find(payload.meta, id), { errored: state.errored, files: state.files, loading: state.loading, reloadTime: state.reloadTime });
	}
}, { dependencies: ['id'] }), (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, actions.loadPatternDemo, function (state, _ref5) {
	var payload = _ref5.payload;

	var loading = Boolean(payload);
	return (0, _extends3.default)({}, state, { loading: loading, reloadTime: payload.reloadTime });
}), (0, _defineProperty3.default)(_handleActions, actions.patternDemoError, function (state) {
	return (0, _extends3.default)({}, state, { errored: true, loading: false });
}), (0, _defineProperty3.default)(_handleActions, actions.patternDemoLoaded, function (state) {
	return (0, _extends3.default)({}, state, { errored: false, loading: false });
}), _handleActions)));


function find(tree, id) {
	var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	if (!tree || !id) {
		return;
	}

	var frags = id.split('/').filter(Boolean);
	var sub = frags.slice(0, depth).map(strip);
	var match = tree.children.find(function (child) {
		return child.path.every(function (s, i) {
			return sub[i] === strip(s);
		});
	});

	if (match && depth < frags.length) {
		return find(match, id, depth + 1);
	}

	return match;
}

function strip(b) {
	return _path2.default.basename(b, _path2.default.extname(b));
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9wYXR0ZXJuLmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJzdGF0ZSIsInBheWxvYWQiLCJzY2hlbWEiLCJpZCIsInBhdGhuYW1lIiwiZmluZCIsIm1ldGEiLCJlcnJvcmVkIiwiZmlsZXMiLCJsb2FkaW5nIiwicmVsb2FkVGltZSIsImRlcGVuZGVuY2llcyIsImxvYWRTY2hlbWEiLCJzdWNjZXNzIiwibG9hZFBhdHRlcm5EZW1vIiwiQm9vbGVhbiIsInBhdHRlcm5EZW1vRXJyb3IiLCJwYXR0ZXJuRGVtb0xvYWRlZCIsInRyZWUiLCJkZXB0aCIsImZyYWdzIiwic3BsaXQiLCJmaWx0ZXIiLCJzdWIiLCJzbGljZSIsIm1hcCIsInN0cmlwIiwibWF0Y2giLCJjaGlsZHJlbiIsImNoaWxkIiwicGF0aCIsImV2ZXJ5IiwicyIsImkiLCJsZW5ndGgiLCJiIiwiYmFzZW5hbWUiLCJleHRuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsTzs7QUFFWjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O2tCQUVlLCtCQUNkLHNDQUF1QjtBQUN0Qiw2QkFBNEIsK0JBQUNDLEtBQUQsZUFBZ0M7QUFBQSxNQUF2QkMsT0FBdUIsUUFBdkJBLE9BQXVCO0FBQUEsTUFBWkMsTUFBWSxTQUFaQSxNQUFZOztBQUMzRCxNQUFNQyxLQUFLLCtCQUFnQkYsUUFBUUcsUUFBeEIsRUFBa0MsbUJBQVFILFFBQVFHLFFBQWhCLENBQWxDLENBQVg7QUFDQSxNQUFJLENBQUNELEVBQUQsSUFBTyxDQUFDRCxNQUFaLEVBQW9CO0FBQ25CLFVBQU9GLEtBQVA7QUFDQTs7QUFFRCxvQ0FBV0ssS0FBS0gsT0FBT0ksSUFBWixFQUFrQkgsRUFBbEIsQ0FBWCxJQUFrQ0ksU0FBU1AsTUFBTU8sT0FBakQsRUFBMERDLE9BQU9SLE1BQU1RLEtBQXZFLEVBQThFQyxTQUFTVCxNQUFNUyxPQUE3RixFQUFzR0MsWUFBWVYsTUFBTVUsVUFBeEg7QUFDQTtBQVJxQixDQUF2QixFQVNHLEVBQUNDLGNBQWMsQ0FBQyxRQUFELENBQWYsRUFUSCxDQURjLEVBV2Qsa0RBQXlCWixRQUFRYSxVQUFqQyxFQUE2QztBQUM1Q0MsUUFENEMsbUJBQ3BDYixLQURvQyxnQkFDWjtBQUFBLE1BQWhCQyxPQUFnQixTQUFoQkEsT0FBZ0I7QUFBQSxNQUFMRSxFQUFLLFNBQUxBLEVBQUs7O0FBQy9CLE1BQUksQ0FBQ0EsRUFBTCxFQUFTO0FBQ1IsVUFBT0gsS0FBUDtBQUNBOztBQUVELG9DQUFXSyxLQUFLSixRQUFRSyxJQUFiLEVBQW1CSCxFQUFuQixDQUFYLElBQW1DSSxTQUFTUCxNQUFNTyxPQUFsRCxFQUEyREMsT0FBT1IsTUFBTVEsS0FBeEUsRUFBK0VDLFNBQVNULE1BQU1TLE9BQTlGLEVBQXVHQyxZQUFZVixNQUFNVSxVQUF6SDtBQUNBO0FBUDJDLENBQTdDLEVBUUcsRUFBQ0MsY0FBYyxDQUFDLElBQUQsQ0FBZixFQVJILENBWGMsRUFvQmQscUdBQ0VaLFFBQVFlLGVBRFYsRUFDNEIsVUFBQ2QsS0FBRCxTQUFzQjtBQUFBLEtBQWJDLE9BQWEsU0FBYkEsT0FBYTs7QUFDaEQsS0FBTVEsVUFBVU0sUUFBUWQsT0FBUixDQUFoQjtBQUNBLG1DQUFXRCxLQUFYLElBQWtCUyxnQkFBbEIsRUFBMkJDLFlBQVlULFFBQVFTLFVBQS9DO0FBQ0EsQ0FKRixpREFLRVgsUUFBUWlCLGdCQUxWLEVBSzZCLGlCQUFTO0FBQ3BDLG1DQUFXaEIsS0FBWCxJQUFrQk8sU0FBUyxJQUEzQixFQUFpQ0UsU0FBUyxLQUExQztBQUNBLENBUEYsaURBUUVWLFFBQVFrQixpQkFSVixFQVE4QixpQkFBUztBQUNyQyxtQ0FBV2pCLEtBQVgsSUFBa0JPLFNBQVMsS0FBM0IsRUFBa0NFLFNBQVMsS0FBM0M7QUFDQSxDQVZGLG1CQXBCYyxDOzs7QUFrQ2YsU0FBU0osSUFBVCxDQUFjYSxJQUFkLEVBQW9CZixFQUFwQixFQUFtQztBQUFBLEtBQVhnQixLQUFXLHVFQUFILENBQUc7O0FBQ2xDLEtBQUksQ0FBQ0QsSUFBRCxJQUFTLENBQUNmLEVBQWQsRUFBa0I7QUFDakI7QUFDQTs7QUFFRCxLQUFNaUIsUUFBUWpCLEdBQUdrQixLQUFILENBQVMsR0FBVCxFQUFjQyxNQUFkLENBQXFCUCxPQUFyQixDQUFkO0FBQ0EsS0FBTVEsTUFBTUgsTUFBTUksS0FBTixDQUFZLENBQVosRUFBZUwsS0FBZixFQUFzQk0sR0FBdEIsQ0FBMEJDLEtBQTFCLENBQVo7QUFDQSxLQUFNQyxRQUFRVCxLQUFLVSxRQUFMLENBQWN2QixJQUFkLENBQW1CO0FBQUEsU0FBU3dCLE1BQU1DLElBQU4sQ0FBV0MsS0FBWCxDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxVQUFVVixJQUFJVSxDQUFKLE1BQVdQLE1BQU1NLENBQU4sQ0FBckI7QUFBQSxHQUFqQixDQUFUO0FBQUEsRUFBbkIsQ0FBZDs7QUFFQSxLQUFJTCxTQUFTUixRQUFRQyxNQUFNYyxNQUEzQixFQUFtQztBQUNsQyxTQUFPN0IsS0FBS3NCLEtBQUwsRUFBWXhCLEVBQVosRUFBZ0JnQixRQUFRLENBQXhCLENBQVA7QUFDQTs7QUFFRCxRQUFPUSxLQUFQO0FBQ0E7O0FBRUQsU0FBU0QsS0FBVCxDQUFlUyxDQUFmLEVBQWtCO0FBQ2pCLFFBQU8sZUFBS0MsUUFBTCxDQUFjRCxDQUFkLEVBQWlCLGVBQUtFLE9BQUwsQ0FBYUYsQ0FBYixDQUFqQixDQUFQO0FBQ0EiLCJmaWxlIjoicGF0dGVybi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmltcG9ydCB7Z2V0QmFzZX0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCBnZXRJZEJ5UGF0aG5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0LWlkLWJ5LXBhdGhuYW1lJztcbmltcG9ydCBoYW5kbGVEZXBlbmRlbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaGFuZGxlLWRlcGVuZGVudC1hY3Rpb25zJztcbmltcG9ydCB7aGFuZGxlUHJvbWlzZVRodW5rQWN0aW9ufSBmcm9tICcuLi9hY3Rpb25zL3Byb21pc2UtdGh1bmstYWN0aW9uJztcbmltcG9ydCBjb21wb3NlUmVkdWNlcnMgZnJvbSAnLi4vdXRpbHMvY29tcG9zZS1yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2VSZWR1Y2Vycyhcblx0aGFuZGxlRGVwZW5kZW50QWN0aW9ucyh7XG5cdFx0J0BAcm91dGVyL0xPQ0FUSU9OX0NIQU5HRSc6IChzdGF0ZSwge3BheWxvYWR9LCB7c2NoZW1hfSkgPT4ge1xuXHRcdFx0Y29uc3QgaWQgPSBnZXRJZEJ5UGF0aG5hbWUocGF5bG9hZC5wYXRobmFtZSwgZ2V0QmFzZShwYXlsb2FkLnBhdGhuYW1lKSk7XG5cdFx0XHRpZiAoIWlkIHx8ICFzY2hlbWEpIHtcblx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gey4uLmZpbmQoc2NoZW1hLm1ldGEsIGlkKSwgZXJyb3JlZDogc3RhdGUuZXJyb3JlZCwgZmlsZXM6IHN0YXRlLmZpbGVzLCBsb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLCByZWxvYWRUaW1lOiBzdGF0ZS5yZWxvYWRUaW1lfTtcblx0XHR9XG5cdH0sIHtkZXBlbmRlbmNpZXM6IFsnc2NoZW1hJ119KSxcblx0aGFuZGxlUHJvbWlzZVRodW5rQWN0aW9uKGFjdGlvbnMubG9hZFNjaGVtYSwge1xuXHRcdHN1Y2Nlc3Moc3RhdGUsIHtwYXlsb2FkfSwge2lkfSkge1xuXHRcdFx0aWYgKCFpZCkge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7Li4uZmluZChwYXlsb2FkLm1ldGEsIGlkKSwgZXJyb3JlZDogc3RhdGUuZXJyb3JlZCwgZmlsZXM6IHN0YXRlLmZpbGVzLCBsb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLCByZWxvYWRUaW1lOiBzdGF0ZS5yZWxvYWRUaW1lfTtcblx0XHR9XG5cdH0sIHtkZXBlbmRlbmNpZXM6IFsnaWQnXX0pLFxuXHRoYW5kbGVBY3Rpb25zKHtcblx0XHRbYWN0aW9ucy5sb2FkUGF0dGVybkRlbW9dOiAoc3RhdGUsIHtwYXlsb2FkfSkgPT4ge1xuXHRcdFx0Y29uc3QgbG9hZGluZyA9IEJvb2xlYW4ocGF5bG9hZCk7XG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nLCByZWxvYWRUaW1lOiBwYXlsb2FkLnJlbG9hZFRpbWV9O1xuXHRcdH0sXG5cdFx0W2FjdGlvbnMucGF0dGVybkRlbW9FcnJvcl06IHN0YXRlID0+IHtcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIGVycm9yZWQ6IHRydWUsIGxvYWRpbmc6IGZhbHNlfTtcblx0XHR9LFxuXHRcdFthY3Rpb25zLnBhdHRlcm5EZW1vTG9hZGVkXTogc3RhdGUgPT4ge1xuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgZXJyb3JlZDogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfTtcblx0XHR9XG5cdH0pXG4pO1xuXG5mdW5jdGlvbiBmaW5kKHRyZWUsIGlkLCBkZXB0aCA9IDEpIHtcblx0aWYgKCF0cmVlIHx8ICFpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZyYWdzID0gaWQuc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cdGNvbnN0IHN1YiA9IGZyYWdzLnNsaWNlKDAsIGRlcHRoKS5tYXAoc3RyaXApO1xuXHRjb25zdCBtYXRjaCA9IHRyZWUuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZC5wYXRoLmV2ZXJ5KChzLCBpKSA9PiBzdWJbaV0gPT09IHN0cmlwKHMpKSk7XG5cblx0aWYgKG1hdGNoICYmIGRlcHRoIDwgZnJhZ3MubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIGZpbmQobWF0Y2gsIGlkLCBkZXB0aCArIDEpO1xuXHR9XG5cblx0cmV0dXJuIG1hdGNoO1xufVxuXG5mdW5jdGlvbiBzdHJpcChiKSB7XG5cdHJldHVybiBwYXRoLmJhc2VuYW1lKGIsIHBhdGguZXh0bmFtZShiKSk7XG59XG4iXX0=