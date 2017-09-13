'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BEATS = [];

exports.default = (0, _handleDependentActions2.default)({
	LISTEN_HEARTBEAT: function LISTEN_HEARTBEAT() {
		return handle.apply(undefined, arguments);
	},
	FETCHING: function FETCHING() {
		return handle.apply(undefined, arguments);
	},
	ERROR_HEARTBEAT: function ERROR_HEARTBEAT() {
		BEATS = [];
		return 'error';
	}
}, {
	defaultValue: '',
	dependencies: ['fetching']
});


function handle() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'loading';
	var action = arguments[1];
	var _ref = arguments[2];
	var fetching = _ref.fetching;

	if (fetching) {
		return 'loading';
	}

	var count = beat(action.payload);

	if (count === 0) {
		return '';
	}

	if (count === 3) {
		return 'loaded';
	}

	return 'loading';
}

function beat(add) {
	BEATS = [BEATS[BEATS.length - 2], BEATS[BEATS.length - 1], add].filter(Boolean);
	return BEATS.length;
}