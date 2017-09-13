'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.format = format;
exports.parse = parse;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function has(token) {
	return function (item) {
		return (0, _lodash.includes)(item, token);
	};
}

function div(token) {
	return function (item) {
		return item.split(token).slice(0, 2);
	};
}

function not(fn) {
	return function () {
		return !fn.apply(undefined, arguments);
	};
}

function shove(input) {
	var index = input.length - 1;
	if (input[index] === '/') {
		return input.slice(0, index);
	}
	return input;
}

function format() {
	var parsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var query = Object.entries(parsed.query || {}).reduce(function (result, entry) {
		return [].concat(_toConsumableArray(result), [entry.join('--')]);
	}, []);

	var extension = _path2.default.extname(parsed.pathname || '');

	var before = extension ? _path2.default.dirname(parsed.pathname) : shove(parsed.pathname);
	var after = extension ? _path2.default.basename(parsed.pathname) : '';

	return [before].concat(_toConsumableArray(query), [after]).filter(Boolean).join('/');
}

function parse() {
	var urlPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var parsed = _url2.default.parse(urlPath);
	var raw = parsed.pathname || '';

	var pathname = raw.split('/').filter(not(has('--'))).join('/');

	var query = raw.split('/').filter(has('--')).map(div('--')).reduce(function (registry, entry) {
		var _entry = _slicedToArray(entry, 2),
		    key = _entry[0],
		    value = _entry[1];

		registry[key] = value;
		return registry;
	}, {});

	return {
		pathname: pathname,
		query: query
	};
}

exports.default = { parse: parse, format: format };