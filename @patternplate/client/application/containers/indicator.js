'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _indicator = require('../components/indicator');

var _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapProps(state) {
	return {
		status: state.connection,
		shortcut: state.shortcuts.reload
	};
}

function mapDispatch(dispatch) {
	return (0, _redux.bindActionCreators)({
		onClick: actions.reload
	}, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_indicator2.default);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2luZGljYXRvci5qcyJdLCJuYW1lcyI6WyJhY3Rpb25zIiwibWFwUHJvcHMiLCJzdGF0ZSIsInN0YXR1cyIsImNvbm5lY3Rpb24iLCJzaG9ydGN1dCIsInNob3J0Y3V0cyIsInJlbG9hZCIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7SUFBWUEsTzs7QUFDWjs7Ozs7Ozs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN4QixRQUFPO0FBQ05DLFVBQVFELE1BQU1FLFVBRFI7QUFFTkMsWUFBVUgsTUFBTUksU0FBTixDQUFnQkM7QUFGcEIsRUFBUDtBQUlBOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzlCLFFBQU8sK0JBQW1CO0FBQ3pCQyxXQUFTVixRQUFRTztBQURRLEVBQW5CLEVBRUpFLFFBRkksQ0FBUDtBQUdBOztrQkFFYyx5QkFBUVIsUUFBUixFQUFrQk8sV0FBbEIsc0IiLCJmaWxlIjoiaW5kaWNhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBJbmRpY2F0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRpY2F0b3InO1xuXG5mdW5jdGlvbiBtYXBQcm9wcyhzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHN0YXR1czogc3RhdGUuY29ubmVjdGlvbixcblx0XHRzaG9ydGN1dDogc3RhdGUuc2hvcnRjdXRzLnJlbG9hZFxuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHtcblx0XHRvbkNsaWNrOiBhY3Rpb25zLnJlbG9hZFxuXHR9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwUHJvcHMsIG1hcERpc3BhdGNoKShJbmRpY2F0b3IpO1xuIl19