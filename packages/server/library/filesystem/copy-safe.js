'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _copyFile = require('./copy-file');

var _copyFile2 = _interopRequireDefault(_copyFile);

var _makeDirectory = require('./make-directory');

var _makeDirectory2 = _interopRequireDefault(_makeDirectory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (source, target) {
		yield (0, _makeDirectory2.default)((0, _path.dirname)(target));
		yield (0, _copyFile2.default)(source, target);
	});

	function copySafe(_x, _x2) {
		return _ref.apply(this, arguments);
	}

	return copySafe;
})();

module.exports = exports['default'];