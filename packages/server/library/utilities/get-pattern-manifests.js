'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

let getPatternManifests = (() => {
	var _ref = _asyncToGenerator(function* (id, base) {
		let options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

		const patternPath = id.split('/').join(_path2.default.sep);
		const paths = yield (0, _readTree2.default)(_path2.default.resolve(base, patternPath), options.cache);

		const patternIDs = paths.filter(function (item) {
			return _path2.default.basename(item) === 'pattern.json';
		}).filter(function (item) {
			return !item.includes('@environments');
		}).map(function (item) {
			return _path2.default.dirname(item);
		}).map(function (item) {
			return _path2.default.relative(base, item);
		}).map(function (item) {
			return item.split(_path2.default.sep).join('/');
		});

		const fetchManifest = function fetchManifest(pid) {
			return (0, _getPatternManifest2.default)(pid, base);
		};
		const jobs = patternIDs.map(fetchManifest);
		const readings = yield Promise.all(jobs);

		var _partition = (0, _lodash.partition)(readings, function (_ref2) {
			var _ref3 = _slicedToArray(_ref2, 1);

			let err = _ref3[0];
			return err !== null;
		});

		var _partition2 = _slicedToArray(_partition, 2);

		const errs = _partition2[0];
		const manifests = _partition2[1];

		return [errs.map(function (err) {
			return err[0];
		}), manifests.map(function (m) {
			return m[1];
		})];
	});

	return function getPatternManifests(_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _getPatternManifest = require('./get-pattern-manifest');

var _getPatternManifest2 = _interopRequireDefault(_getPatternManifest);

var _readTree = require('../filesystem/read-tree');

var _readTree2 = _interopRequireDefault(_readTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getPatternManifests;
module.exports = exports['default'];