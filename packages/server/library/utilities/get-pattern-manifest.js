'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

let getPatternManifest = (() => {
	var _ref = _asyncToGenerator(function* (id, base) {
		const file = _path2.default.join(base, id.split('/').join(_path2.default.sep), 'pattern.json');

		var _ref2 = yield (0, _loadJson2.default)(file);

		var _ref3 = _slicedToArray(_ref2, 2);

		const err = _ref3[0];
		const data = _ref3[1];

		return [err, (0, _lodash.merge)({}, DEFAULT_MANIFEST, data, { id: id })];
	});

	return function getPatternManifest(_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _loadJson = require('./load-json');

var _loadJson2 = _interopRequireDefault(_loadJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const DEFAULT_MANIFEST = {
	displayName: '',
	version: '1.0.0',
	build: true,
	display: true,
	flag: 'alpha',
	options: {},
	patterns: {}
};

exports.default = getPatternManifest;
module.exports = exports['default'];