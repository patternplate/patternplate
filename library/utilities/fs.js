'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _fs = require('fs');

var _bluebird = require('bluebird');

exports['default'] = {
	'exists': function asyncExists(path) {
		return new Promise(function resolveExists(resolve) {
			(0, _fs.exists)(path, resolve);
		});
	},
	'readFile': (0, _bluebird.promisify)(_fs.readFile),
	'writeFile': (0, _bluebird.promisify)(_fs.writeFile),
	'stat': (0, _bluebird.promisify)(_fs.stat)
};
module.exports = exports['default'];