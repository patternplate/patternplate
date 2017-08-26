'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _babelCore = require('babel-core');

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stash = {};

exports.default = applyTransform;


function applyTransform(file, opts) {
	const source = typeof file.buffer === 'string' ? file.buffer : file.buffer.toString('utf-8');

	const id = (0, _md2.default)(source);

	const buffer = stash[id] || (0, _babelCore.transform)(source, opts).code;
	stash[id] = buffer;

	return {
		buffer: buffer
	};
}
module.exports = exports['default'];