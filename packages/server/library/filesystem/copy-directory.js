'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _readTree = require('./read-tree');

var _readTree2 = _interopRequireDefault(_readTree);

var _copySafe = require('./copy-safe');

var _copySafe2 = _interopRequireDefault(_copySafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (source, target) {
		const files = yield (0, _readTree2.default)(source);

		return Promise.all(files.filter(_path.extname).map((() => {
			var _ref2 = _asyncToGenerator(function* (file) {
				const targetFile = (0, _path.resolve)(target, (0, _path.relative)(source, file));
				return (0, _copySafe2.default)(file, targetFile);
			});

			return function (_x3) {
				return _ref2.apply(this, arguments);
			};
		})()));
	});

	function copyDirectory(_x, _x2) {
		return _ref.apply(this, arguments);
	}

	return copyDirectory;
})();

module.exports = exports['default'];