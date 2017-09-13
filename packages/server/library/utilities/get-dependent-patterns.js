'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _getPatternManifests = require('./get-pattern-manifests');

var _getPatternManifests2 = _interopRequireDefault(_getPatternManifests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (id, base, options) {
		var _ref2 = yield (0, _getPatternManifests2.default)('.', base, options);

		var _ref3 = _slicedToArray(_ref2, 2);

		const errors = _ref3[0];
		const manifests = _ref3[1];

		const dependents = manifests.reduce(function (results, manifest) {
			const isDependency = Object.values(manifest.patterns || {}).indexOf(id) > -1;
			if (isDependency) {
				manifest.manifest = JSON.parse(JSON.stringify(manifest));
				results[manifest.id] = manifest;
			}
			return results;
		}, {});

		return [errors, dependents];
	});

	function getDependentPatterns(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	}

	return getDependentPatterns;
})();

module.exports = exports['default'];