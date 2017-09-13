'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fail = fail;
exports.warn = warn;
exports.deprecation = deprecation;
exports.wait = wait;
exports.ok = ok;
exports.ready = ready;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _duration = require('duration');

var _duration2 = _interopRequireDefault(_duration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatDuration(start) {
	let end = arguments.length <= 1 || arguments[1] === undefined ? new Date() : arguments[1];

	return new _duration2.default(start, end).toString(1);
}

function getDurationStamp(start) {
	const duration = formatDuration(start);
	return _chalk2.default.grey(`${_chalk2.default.grey('[' + duration + ']')}`);
}

function getMessage(strings, values) {
	return strings.reduce((result, string, index) => {
		const value = typeof values[index] !== 'undefined' ? values[index] : '';
		const formatted = value instanceof Date && index === values.length - 1 ? getDurationStamp(value) : value;
		return `${result}${string}${formatted}`;
	}, '');
}

function fail(strings) {
	const sign = `${_chalk2.default.red('✖')}`;

	for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		values[_key - 1] = arguments[_key];
	}

	return `${sign}    ${getMessage(strings, values)}`;
}

function warn(strings) {
	const sign = `${_chalk2.default.yellow('⚠')}`;

	for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		values[_key2 - 1] = arguments[_key2];
	}

	return `${sign}    ${getMessage(strings, values)}`;
}

function deprecation(strings) {
	const sign = `${_chalk2.default.yellow('⚠  Deprecation')}`;

	for (var _len3 = arguments.length, values = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
		values[_key3 - 1] = arguments[_key3];
	}

	return `${sign}    ${getMessage(strings, values)}`;
}

function wait(strings) {
	const sign = `${_chalk2.default.grey('⧗')}`;

	for (var _len4 = arguments.length, values = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
		values[_key4 - 1] = arguments[_key4];
	}

	return `${sign}    ${getMessage(strings, values)}`;
}

function ok(strings) {
	const sign = `${_chalk2.default.grey('✔')}`;

	for (var _len5 = arguments.length, values = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
		values[_key5 - 1] = arguments[_key5];
	}

	return `${sign}    ${getMessage(strings, values)}`;
}

function ready(strings) {
	const sign = `${_chalk2.default.green('✔')}`;

	for (var _len6 = arguments.length, values = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
		values[_key6 - 1] = arguments[_key6];
	}

	return `${sign}    ${getMessage(strings, values)}`;
}