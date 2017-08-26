'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

function unwrap(fn, path) {
	return function (e) {
		return fn((0, _lodash.get)(e, path));
	};
}

exports.default = unwrap;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy91bndyYXAuanMiXSwibmFtZXMiOlsidW53cmFwIiwiZm4iLCJwYXRoIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ3pCLFFBQU87QUFBQSxTQUFLRCxHQUFHLGlCQUFJRSxDQUFKLEVBQU9ELElBQVAsQ0FBSCxDQUFMO0FBQUEsRUFBUDtBQUNBOztrQkFFY0YsTSIsImZpbGUiOiJ1bndyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldH0gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gdW53cmFwKGZuLCBwYXRoKSB7XG5cdHJldHVybiBlID0+IGZuKGdldChlLCBwYXRoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVud3JhcDtcbiJdfQ==