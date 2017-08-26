'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = require('lodash');

var _reduxActions = require('redux-actions');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = {
	height: 0,
	width: 0
};

exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, _actions.windowResize, onWindowResize), defaultValue);


function onWindowResize(state, _ref) {
	var payload = _ref.payload;

	var next = { width: payload.width, height: payload.height };
	if (!(0, _lodash.isEqual)(next, state)) {
		return next;
	}
	return state;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy93aW5kb3cuanMiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbldpbmRvd1Jlc2l6ZSIsInN0YXRlIiwicGF5bG9hZCIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWU7QUFDcEJDLFNBQVEsQ0FEWTtBQUVwQkMsUUFBTztBQUZhLENBQXJCOztrQkFLZSwwRkFDRUMsY0FERixHQUVaSCxZQUZZLEM7OztBQUlmLFNBQVNHLGNBQVQsQ0FBd0JDLEtBQXhCLFFBQTBDO0FBQUEsS0FBVkMsT0FBVSxRQUFWQSxPQUFVOztBQUN6QyxLQUFNQyxPQUFPLEVBQUNKLE9BQU9HLFFBQVFILEtBQWhCLEVBQXVCRCxRQUFRSSxRQUFRSixNQUF2QyxFQUFiO0FBQ0EsS0FBSSxDQUFDLHFCQUFRSyxJQUFSLEVBQWNGLEtBQWQsQ0FBTCxFQUEyQjtBQUMxQixTQUFPRSxJQUFQO0FBQ0E7QUFDRCxRQUFPRixLQUFQO0FBQ0EiLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0VxdWFsfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCB7d2luZG93UmVzaXplfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY29uc3QgZGVmYXVsdFZhbHVlID0ge1xuXHRoZWlnaHQ6IDAsXG5cdHdpZHRoOiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcblx0W3dpbmRvd1Jlc2l6ZV06IG9uV2luZG93UmVzaXplXG59LCBkZWZhdWx0VmFsdWUpO1xuXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShzdGF0ZSwge3BheWxvYWR9KSB7XG5cdGNvbnN0IG5leHQgPSB7d2lkdGg6IHBheWxvYWQud2lkdGgsIGhlaWdodDogcGF5bG9hZC5oZWlnaHR9O1xuXHRpZiAoIWlzRXF1YWwobmV4dCwgc3RhdGUpKSB7XG5cdFx0cmV0dXJuIG5leHQ7XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufVxuIl19