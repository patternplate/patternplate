'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _behaviours = require('../behaviours');

var _message = require('../components/message');

var _message2 = _interopRequireDefault(_message);

var _demo = require('../selectors/demo');

var demo = _interopRequireWildcard(_demo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState)((0, _behaviours.skippable)(_message2.default));


var selectMessage = (0, _reselect.createSelector)(function (state) {
	return state.messages;
}, demo.selectSrc, function (messages, src) {
	return messages[src];
});

var selectActive = (0, _reselect.createSelector)(selectMessage, function (message) {
	return typeof message === 'string';
});

function mapState(state) {
	return {
		active: selectActive(state),
		message: selectMessage(state)
	};
}