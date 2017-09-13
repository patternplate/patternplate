'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = flatPick;

var _lodash = require('lodash');

function flatPick(hash, recurse) {
	let fields = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	let depth = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];

	return Object.entries(hash[recurse] || {}).reduce((flatPicked, entry) => {
		var _entry = _slicedToArray(entry, 2);

		const entryName = _entry[0];
		const entryValue = _entry[1];

		const amend = (0, _lodash.pick)(entryValue, fields);

		if (depth > 1 && recurse in entryValue) {
			amend[recurse] = flatPick(entry, recurse, fields, depth - 1);
		}

		return _extends({}, flatPicked, {
			[entryName]: _extends({}, amend)
		});
	}, {});
}
module.exports = exports['default'];