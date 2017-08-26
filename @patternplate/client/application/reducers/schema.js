'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = require('../actions');

var _promiseThunkAction = require('../actions/promise-thunk-action');

exports.default = (0, _promiseThunkAction.handlePromiseThunkAction)(_actions.loadSchema, {
	success: function success(state, action) {
		return action.payload;
	}
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9zY2hlbWEuanMiXSwibmFtZXMiOlsic3VjY2VzcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O2tCQUVlLHVFQUFxQztBQUNuREEsUUFEbUQsbUJBQzNDQyxLQUQyQyxFQUNwQ0MsTUFEb0MsRUFDNUI7QUFDdEIsU0FBT0EsT0FBT0MsT0FBZDtBQUNBO0FBSGtELENBQXJDLEMiLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2FkU2NoZW1hfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7aGFuZGxlUHJvbWlzZVRodW5rQWN0aW9ufSBmcm9tICcuLi9hY3Rpb25zL3Byb21pc2UtdGh1bmstYWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlUHJvbWlzZVRodW5rQWN0aW9uKGxvYWRTY2hlbWEsIHtcblx0c3VjY2VzcyhzdGF0ZSwgYWN0aW9uKSB7XG5cdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuXHR9XG59KTtcbiJdfQ==