'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = copyFile;

var _fs = require('fs');

function copyFile(source, target) {
	return new Promise((resolver, reject) => {
		const reading = (0, _fs.createReadStream)(source);
		const writing = (0, _fs.createWriteStream)(target);
		reading.on('error', reject);
		writing.on('error', reject);
		writing.on('finish', resolver);
		reading.pipe(writing);
	});
}
module.exports = exports['default'];