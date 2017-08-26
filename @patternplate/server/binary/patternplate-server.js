#!/usr/bin/env node

'use strict';

let main = (() => {
	var _ref = _asyncToGenerator(function* () {
		let options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		let application;

		try {
			application = yield (0, _2.default)(options);
		} catch (err) {
			console.trace(err);
			throw new Error(err);
		}

		try {
			yield application.start();
		} catch (err) {
			application.log.error(err);
			throw new Error(err);
		}
	});

	return function main() {
		return _ref.apply(this, arguments);
	};
})();

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const args = (0, _minimist2.default)(process.argv.slice(1));

main(args).catch(err => {
	setTimeout(() => {
		throw err;
	});
});

// Catch unhandled rejections globally
process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});