'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

let readManifest = (() => {
	var _ref = _asyncToGenerator(function* (pattern) {
		if (pattern.config.parents.length === 0) {
			var _ref2 = yield (0, _getPatternManifest2.default)(pattern.id, pattern.base);

			var _ref3 = _slicedToArray(_ref2, 2);

			const error = _ref3[0];
			const manifest = _ref3[1];


			if (error) {
				throw error;
			}

			pattern.manifest = manifest;

			if ('automount' in pattern.options) {
				(0, _lodash.merge)(pattern.manifest, {
					options: {
						'react-to-markup': {
							opts: {
								automount: pattern.options.automount
							}
						}
					}
				});
			}

			if (pattern.isEnvironment && !pattern.manifest.patterns) {
				let list = yield (0, _readDirectory2.default)(pattern.base);
				const range = pattern.manifest.range || '*';

				list = list.filter(function (item) {
					return _path2.default.basename(item) === 'pattern.json';
				}).filter(function (item) {
					return !item.includes('@environment');
				}).map(function (item) {
					return _path2.default.relative(pattern.base, _path2.default.dirname(item));
				}).filter(function (item) {
					return item !== pattern.id;
				});

				if (pattern.manifest.include) {
					const include = Array.prototype.concat.call([], pattern.manifest.include, ['']);
					list = list.filter(function (item) {
						return (0, _minimatch2.default)(item, `{${include.join(',')}}`);
					});
				}

				if (pattern.manifest.exclude) {
					const exclude = Array.prototype.concat.call([], pattern.manifest.exclude, ['']);
					list = list.filter(function (item) {
						return !(0, _minimatch2.default)(item, `{${exclude.join(',')}}`);
					});
				}

				pattern.manifest.patterns = list.reduce(function (results, item) {
					return Object.assign(results, { [item]: `${item}@${range}` });
				}, {});
			}

			pattern.manifest.patterns.Pattern = pattern.id; // should be set for demos only?

			const manifestsStart = new Date();

			pattern.log.silly(`Fetching manifests for ${pattern.id}`);

			var _ref4 = yield (0, _getPatternManifests2.default)('.', pattern.base, { cache: pattern.cache });

			var _ref5 = _slicedToArray(_ref4, 2);

			const errors = _ref5[0];
			const pool = _ref5[1];


			if (Array.isArray(errors) && errors.length > 0) {
				throw new Error(errors.map(function (e) {
					return e.message;
				}).join('\n'));
			}

			const manifests = (0, _getPatternManifestData2.default)(pattern.base, _extends({}, pattern.manifest.patterns, pattern.manifest.demoPatterns || {}), pool);
			const manifestDuration = _chalk2.default.grey(`[${new Date() - manifestsStart}ms]`);
			pattern.log.silly(`Fetched manifests for ${pattern.id} ${manifestDuration}`);

			const dependencies = (0, _lodash.uniqBy)((0, _lodash.flattenDeep)(manifests), 'id');

			const dependencyPatterns = dependencies.map(function (manifest) {
				const id = manifest.id;

				const config = _extends({}, pattern.config, {
					parents: [].concat(_toConsumableArray(pattern.config.parents), [pattern.id])
				});
				const dep = new _.Pattern(id, pattern.base, config, pattern.transforms, _extends({}, pattern.filters, {
					baseNames: ['index'] // dependencies are index-only
				}), pattern.cache);
				dep.manifest = manifest;
				return dep;
			});

			const dependenciesToRead = (0, _getDependenciesToRead2.default)(_extends({}, pattern.manifest.patterns, pattern.manifest.demoPatterns), dependencyPatterns);

			pattern.log.silly(`Determined dependency chain for ${pattern.id}`);

			dependenciesToRead.forEach(function (item) {
				const name = (0, _lodash.invert)(pattern.manifest.patterns)[item];
				pattern.log.silly(`↳  ${_chalk2.default.bold(name)} → ${item}`);
			});

			const readDependency = (() => {
				var _ref6 = _asyncToGenerator(function* (id) {
					return (0, _lodash.find)(dependencyPatterns, { id: id }).read();
				});

				return function readDependency(_x2) {
					return _ref6.apply(this, arguments);
				};
			})();

			const readDependencies = yield Promise.all(dependenciesToRead.map((0, _throat2.default)(1, readDependency)));

			pattern.dependencies = (0, _constructDependencies2.default)(pattern.manifest.patterns, readDependencies);
			pattern.demoDependencies = (0, _constructDemoDependencies2.default)(pattern.manifest.demoPatterns || {}, readDependencies);
		}
	});

	return function readManifest(_x) {
		return _ref.apply(this, arguments);
	};
})();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _lodash = require('lodash');

var _minimatch = require('minimatch');

var _minimatch2 = _interopRequireDefault(_minimatch);

var _throat = require('throat');

var _throat2 = _interopRequireDefault(_throat);

var _constructDemoDependencies = require('./construct-demo-dependencies');

var _constructDemoDependencies2 = _interopRequireDefault(_constructDemoDependencies);

var _constructDependencies = require('./construct-dependencies');

var _constructDependencies2 = _interopRequireDefault(_constructDependencies);

var _getDependenciesToRead = require('./get-dependencies-to-read');

var _getDependenciesToRead2 = _interopRequireDefault(_getDependenciesToRead);

var _getPatternManifests = require('../../utilities/get-pattern-manifests');

var _getPatternManifests2 = _interopRequireDefault(_getPatternManifests);

var _getPatternManifest = require('../../utilities/get-pattern-manifest');

var _getPatternManifest2 = _interopRequireDefault(_getPatternManifest);

var _getPatternManifestData = require('./get-pattern-manifest-data');

var _getPatternManifestData2 = _interopRequireDefault(_getPatternManifestData);

var _ = require('./');

var _readDirectory = require('../../filesystem/read-directory');

var _readDirectory2 = _interopRequireDefault(_readDirectory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = readManifest;
module.exports = exports['default'];