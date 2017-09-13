'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

let _handleActions;

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _reduxActions = require('redux-actions');

const _actions = require('../actions');

const actions = _interopRequireWildcard(_actions);

const _base = require('./base');

const _getIdByPathname = require('../utils/get-id-by-pathname');

const _getIdByPathname2 = _interopRequireDefault(_getIdByPathname);

const _handleDependentActions = require('../actions/handle-dependent-actions');

const _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

const _promiseThunkAction = require('../actions/promise-thunk-action');

const _composeReducers = require('../utils/compose-reducers');

const _composeReducers2 = _interopRequireDefault(_composeReducers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _composeReducers2.default)((0, _handleDependentActions2.default)({
	'@@router/LOCATION_CHANGE': function routerLOCATION_CHANGE(state, _ref, _ref2) {
		const payload = _ref.payload;
		const schema = _ref2.schema;

		const id = (0, _getIdByPathname2.default)(payload.pathname, (0, _base.getBase)(payload.pathname));
		if (!id || !schema) {
			return state;
		}

		return _extends({}, find(schema.meta, id), { errored: state.errored, files: state.files, loading: state.loading, reloadTime: state.reloadTime });
	}
}, { dependencies: ['schema'] }), (0, _promiseThunkAction.handlePromiseThunkAction)(actions.loadSchema, {
	success: function success(state, _ref3, _ref4) {
		const payload = _ref3.payload;
		const id = _ref4.id;

		if (!id) {
			return state;
		}

		return _extends({}, find(payload.meta, id), { errored: state.errored, files: state.files, loading: state.loading, reloadTime: state.reloadTime });
	}
}, { dependencies: ['id'] }), (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, actions.loadPatternDemo, (state, _ref5) => {
	const payload = _ref5.payload;

	const loading = Boolean(payload);
	return _extends({}, state, { loading, reloadTime: payload.reloadTime });
}), _defineProperty(_handleActions, actions.patternDemoError, (state) => {
	return _extends({}, state, { errored: true, loading: false });
}), _defineProperty(_handleActions, actions.patternDemoLoaded, (state) => {
	return _extends({}, state, { errored: false, loading: false });
}), _handleActions)));


function find(tree, id) {
	const depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	if (!tree || !id) {
		return;
	}

	const frags = id.split('/').filter(Boolean);
	const sub = frags.slice(0, depth).map(strip);
	const match = tree.children.find((child) => {
		return child.path.every((s, i) => {
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