#!/usr/bin/env node
'use strict';

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return (0, _2.default)(options);
}

var args = (0, _minimist2.default)(process.argv.slice(1));

main(args).catch(function (err) {
	setTimeout(function () {
		throw err;
	});
});

// Catch unhandled rejections globally
process.on('unhandledRejection', function (reason, promise) {
	console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
	throw reason;
});