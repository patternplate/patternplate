'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function getWrapper(expression) {
	if (!expression) {
		return function faithfulWrapper(input) {
			return input;
		};
	}

	if (expression === '!IE') {
		return function noIEWrapper(input) {
			return `<!--[if !IE]> -->\n${input}\n<!-- <![endif]-->`;
		};
	}

	return function IEWrapper(input) {
		return `<!--[if ${expression}]>\n${input}\n<![endif]-->`;
	};
};

exports.default = getWrapper;
module.exports = exports['default'];