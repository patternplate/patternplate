'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promiseThunkAction = require('../actions/promise-thunk-action');

var _actions = require('../actions');

exports.default = (0, _promiseThunkAction.handlePromiseThunkAction)(_actions.loadSchema, {
	start: function start() {
		return true;
	},
	success: function success() {
		return false;
	},
	error: function error() {
		return false;
	}
}, {
	defaultValue: false
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9mZXRjaGluZy5qcyJdLCJuYW1lcyI6WyJzdGFydCIsInN1Y2Nlc3MiLCJlcnJvciIsImRlZmF1bHRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O2tCQUVlLHVFQUFxQztBQUNuREEsTUFEbUQsbUJBQzNDO0FBQ1AsU0FBTyxJQUFQO0FBQ0EsRUFIa0Q7QUFJbkRDLFFBSm1ELHFCQUl6QztBQUNULFNBQU8sS0FBUDtBQUNBLEVBTmtEO0FBT25EQyxNQVBtRCxtQkFPM0M7QUFDUCxTQUFPLEtBQVA7QUFDQTtBQVRrRCxDQUFyQyxFQVVaO0FBQ0ZDLGVBQWM7QUFEWixDQVZZLEMiLCJmaWxlIjoiZmV0Y2hpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hhbmRsZVByb21pc2VUaHVua0FjdGlvbn0gZnJvbSAnLi4vYWN0aW9ucy9wcm9taXNlLXRodW5rLWFjdGlvbic7XG5pbXBvcnQge2xvYWRTY2hlbWF9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVQcm9taXNlVGh1bmtBY3Rpb24obG9hZFNjaGVtYSwge1xuXHRzdGFydCgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0c3VjY2VzcygpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGVycm9yKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufSwge1xuXHRkZWZhdWx0VmFsdWU6IGZhbHNlXG59KTtcbiJdfQ==