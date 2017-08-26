'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _lodash = require('lodash');

exports.default = normalizeFormats;


function normalizeFormats() {
	let formats = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	return Object.entries(formats).reduce((formats, entry) => {
		var _entry = _slicedToArray(entry, 2);

		const extname = _entry[0];
		const format = _entry[1];

		const defaults = {
			name: extname,
			build: false,
			importStatement: i => `import ${i}`,
			transforms: []
		};
		formats[extname] = (0, _lodash.merge)(defaults, {
			build: format.build,
			name: format.name,
			importStatement: format.importStatement,
			transforms: format.transforms
		});
		return formats;
	}, {});
}
module.exports = exports['default'];