'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _composeReducers2.default)((0, _handleDependentActions2.default)({
	'@@router/LOCATION_CHANGE': function routerLOCATION_CHANGE(state, _ref, _ref2) {
		var payload = _ref.payload;
		var schema = _ref2.schema;

		var id = (0, _getIdByPathname2.default)(payload.pathname, (0, _base.getBase)(payload.pathname));
		if (!id || !schema) {
			return state;
		}

		return _extends({}, find(schema.meta, id), { errored: state.errored, files: state.files, loading: state.loading, reloadTime: state.reloadTime });
	}
}, { dependencies: ['schema'] }), (0, _promiseThunkAction.handlePromiseThunkAction)(actions.loadSchema, {
	success: function success(state, _ref3, _ref4) {
		var payload = _ref3.payload;
		var id = _ref4.id;

		if (!id) {
			return state;
		}

		return _extends({}, find(payload.meta, id), { errored: state.errored, files: state.files, loading: state.loading, reloadTime: state.reloadTime });
	}
}, { dependencies: ['id'] }), (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, actions.loadPatternDemo, function (state, _ref5) {
	var payload = _ref5.payload;

	var loading = Boolean(payload);
	return _extends({}, state, { loading: loading, reloadTime: payload.reloadTime });
}), _defineProperty(_handleActions, actions.patternDemoError, function (state) {
	return _extends({}, state, { errored: true, loading: false });
}), _defineProperty(_handleActions, actions.patternDemoLoaded, function (state) {
	return _extends({}, state, { errored: false, loading: false });
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