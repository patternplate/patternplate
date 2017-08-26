'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _handleActions;

var _reduxActions = require('redux-actions');

var _markBlock = require('../actions/mark-block');

var _markBlock2 = _interopRequireDefault(_markBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = null;

var markBlockHandler = function markBlockHandler(state, _ref) {
	var payload = _ref.payload;
	var active = payload.active,
	    id = payload.id;


	if (active) {
		return id;
	}

	return defaultValue;
};

var locationChangeHandler = function locationChangeHandler() {
	return defaultValue;
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, _markBlock2.default, markBlockHandler), (0, _defineProperty3.default)(_handleActions, '@@router/LOCATION_CHANGE', locationChangeHandler), _handleActions), defaultValue);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9hY3RpdmUtYmxvY2suanMiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlIiwibWFya0Jsb2NrSGFuZGxlciIsInN0YXRlIiwicGF5bG9hZCIsImFjdGl2ZSIsImlkIiwibG9jYXRpb25DaGFuZ2VIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxJQUFyQjs7QUFFQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELFFBQXNCO0FBQUEsS0FBYkMsT0FBYSxRQUFiQSxPQUFhO0FBQUEsS0FDdkNDLE1BRHVDLEdBQ3pCRCxPQUR5QixDQUN2Q0MsTUFEdUM7QUFBQSxLQUMvQkMsRUFEK0IsR0FDekJGLE9BRHlCLENBQy9CRSxFQUQrQjs7O0FBRzlDLEtBQUlELE1BQUosRUFBWTtBQUNYLFNBQU9DLEVBQVA7QUFDQTs7QUFFRCxRQUFPTCxZQUFQO0FBQ0EsQ0FSRDs7QUFVQSxJQUFNTSx3QkFBd0IsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ25DLFFBQU9OLFlBQVA7QUFDQSxDQUZEOztrQkFJZSwwSEFDREMsZ0JBREMsaURBRWQsMEJBRmMsRUFFY0sscUJBRmQsb0JBR1pOLFlBSFksQyIsImZpbGUiOiJhY3RpdmUtYmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hhbmRsZUFjdGlvbnN9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0IG1hcmtCbG9jayBmcm9tICcuLi9hY3Rpb25zL21hcmstYmxvY2snO1xuXG5jb25zdCBkZWZhdWx0VmFsdWUgPSBudWxsO1xuXG5jb25zdCBtYXJrQmxvY2tIYW5kbGVyID0gKHN0YXRlLCB7cGF5bG9hZH0pID0+IHtcblx0Y29uc3Qge2FjdGl2ZSwgaWR9ID0gcGF5bG9hZDtcblxuXHRpZiAoYWN0aXZlKSB7XG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcbn07XG5cbmNvbnN0IGxvY2F0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcblx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuXHRbbWFya0Jsb2NrXTogbWFya0Jsb2NrSGFuZGxlcixcblx0J0BAcm91dGVyL0xPQ0FUSU9OX0NIQU5HRSc6IGxvY2F0aW9uQ2hhbmdlSGFuZGxlclxufSwgZGVmYXVsdFZhbHVlKTtcbiJdfQ==