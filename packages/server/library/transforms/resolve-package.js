'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _resolve = require('resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = resolvePackage;

function resolvePackage(name) {
	let opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	return new Promise((resolve, reject) => {
		(0, _resolve2.default)(name, opts, (error, result) => {
			if (error) {
				return reject(error);
			}
			resolve(result);
		});
	});
}
module.exports = exports['default'];