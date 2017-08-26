'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (hook, application) {
		yield hook.stage.bind(hook)('configure', application);
		yield hook.stage.bind(hook)('start', application);
	});

	function runHook(_x, _x2) {
		return _ref.apply(this, arguments);
	}

	return runHook;
})();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL3J1bi1ob29rLmpzIl0sIm5hbWVzIjpbImhvb2siLCJhcHBsaWNhdGlvbiIsInN0YWdlIiwiYmluZCIsInJ1bkhvb2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs4QkFBZSxXQUF1QkEsSUFBdkIsRUFBNkJDLFdBQTdCLEVBQTBDO0FBQ3hELFFBQU1ELEtBQUtFLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkgsSUFBaEIsRUFBc0IsV0FBdEIsRUFBbUNDLFdBQW5DLENBQU47QUFDQSxRQUFNRCxLQUFLRSxLQUFMLENBQVdDLElBQVgsQ0FBZ0JILElBQWhCLEVBQXNCLE9BQXRCLEVBQStCQyxXQUEvQixDQUFOO0FBQ0EsRTs7VUFINkJHLE87Ozs7UUFBQUEsTyIsImZpbGUiOiJydW4taG9vay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJ1bkhvb2soaG9vaywgYXBwbGljYXRpb24pIHtcblx0YXdhaXQgaG9vay5zdGFnZS5iaW5kKGhvb2spKCdjb25maWd1cmUnLCBhcHBsaWNhdGlvbik7XG5cdGF3YWl0IGhvb2suc3RhZ2UuYmluZChob29rKSgnc3RhcnQnLCBhcHBsaWNhdGlvbik7XG59XG4iXX0=