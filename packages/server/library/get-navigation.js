'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _getPatternTree = require('./utilities/get-pattern-tree');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (application, client, server) {
		const patterns = server.configuration.patterns;
		var _server$runtime = server.runtime;
		const cwd = _server$runtime.cwd;
		const patterncwd = _server$runtime.patterncwd;

		const path = (0, _path.resolve)(patterncwd || cwd, patterns.path);
		return yield (0, _getPatternTree.getPatternTree)(path);
	});

	function getNavigation(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	}

	return getNavigation;
})();

module.exports = exports['default'];