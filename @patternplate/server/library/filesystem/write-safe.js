'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _util = require('util');

var _makeDirectory = require('./make-directory');

var _makeDirectory2 = _interopRequireDefault(_makeDirectory);

var _writeFile = require('./write-file');

var _writeFile2 = _interopRequireDefault(_writeFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (path, buffer) {
		const debug = (0, _util.debuglog)('write-safe');
		yield (0, _makeDirectory2.default)((0, _path.dirname)(path));
		debug('Writing %s', path);
		return (0, _writeFile2.default)(path, buffer);
	});

	function writeSafe(_x, _x2) {
		return _ref.apply(this, arguments);
	}

	return writeSafe;
})();

module.exports = exports['default'];