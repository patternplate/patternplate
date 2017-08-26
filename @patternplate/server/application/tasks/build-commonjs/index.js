'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let exportAsCommonjs = (() => {
	var _ref = _asyncToGenerator(function* (application, settings) {
		(0, _assert2.default)(typeof settings.patterns === 'object', `build-commonjs needs a valid patterns configuration. ${where} build-commonjs.patterns`);
		(0, _assert2.default)(typeof settings.patterns.formats === 'object', `build-commonjs needs a valid patterns.formats configuration. ${where} build-commonjs.patterns.formats`);
		(0, _assert2.default)(typeof settings.transforms === 'object', `build-commonjs needs a valid transforms configuration. ${where} build-commonjs.transforms`);

		let spinner = (0, _ora2.default)().start();
		const debug = (0, _util.debuglog)('commonjs');
		debug('calling commonjs with');
		debug(settings);

		const cwd = application.runtime.patterncwd || application.runtime.cwd;

		const patternRoot = (0, _path.resolve)(cwd, 'patterns');
		const commonjsRoot = (0, _path.resolve)(cwd, settings.out || (0, _path.join)('build', 'build-commonjs'));
		const manifestPath = (0, _path.resolve)(commonjsRoot, 'package.json');
		const filters = _extends({}, settings.filters || {}, { baseNames: ['index'] });

		const warnings = [];
		const warn = application.log.warn;
		application.log.warn = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			if (args.some(function (arg) {
				return arg.includes('Deprecation');
			})) {
				warnings.push(args);
				return;
			}
			warn.apply(undefined, args);
		};

		// Override pattern config
		settings.patterns.formats = (0, _pattern.normalizeFormats)(settings.patterns.formats);
		application.configuration.patterns = settings.patterns;

		// Reinitialize transforms
		application.configuration.transforms = settings.transforms || {};
		application.transforms = (yield (0, _transforms.loadTransforms)(settings.transforms || {}))(application);

		// start reading pattern mtimes, ignore dependencies
		const mtimesStart = new Date();
		application.log.debug(_decorations.wait`Obtaining pattern modification times`);

		const readingPatternMtimes = (0, _getPatternMtimes2.default)('./patterns', {
			resolveDependencies: false,
			filters: filters
		});

		// start reading artifact mtimes
		const artifactMtimesStart = new Date();
		const readingArtifactMtimes = (0, _getArtifactMtimes2.default)(commonjsRoot, application.configuration.patterns, application.configuration.transforms);

		// wait for all mtimes to trickle in
		const patternMtimes = yield readingPatternMtimes;
		application.log.debug(_decorations.ok`Read pattern modification times ${mtimesStart}`);

		// wait for all artifact mtimes
		const artifactMtimes = yield readingArtifactMtimes;
		application.log.debug(_decorations.ok`Read artifact modification times ${artifactMtimesStart}`);

		// check if package.json is in distribution
		const hasManifest = yield (0, _pathExists2.default)((0, _path.resolve)(commonjsRoot, 'package.json'));

		const previousPkgString = hasManifest ? (yield readFile(manifestPath)).toString('utf-8') : null;

		const pkgConfig = settings.pkg || {};
		const previousPkg = hasManifest ? parseJSON(previousPkgString) : fallbackManifest;
		const previousPkgConfig = previousPkg.ppcommonjs || {};
		const previousDependencies = previousPkg.ppDependencies || {};
		const previousDevdependencies = previousPkg.ppDevdependencies || {};

		const pkgConfigChanged = !(0, _lodash.isEqual)(previousPkgConfig, pkgConfig) || !(0, _lodash.isEqual)(previousDependencies, pkg.dependencies || {}) || !(0, _lodash.isEqual)(previousDevdependencies, pkg.devDependencies || {});

		// obtain patterns we have to build
		application.log.debug(_decorations.wait`Calculating pattern collection to build`);

		let buildCount = 1;
		const patternFilter = pkgConfigChanged ? function (i) {
			return i;
		} : (0, _getPatternsToBuild2.default)(artifactMtimes, application.configuration.patterns);

		const patternsToBuild = patternMtimes.filter(patternFilter).sort(function (a, b) {
			return b.mtime.getTime() - a.mtime.getTime();
		});

		const padMaxBuild = (0, _fp.padEnd)(patternsToBuild.map(function (pattern) {
			return pattern.id.length;
		}).reduce(function (a, b) {
			return a > b ? a : b;
		}, 0) + 1);

		if (pkgConfigChanged) {
			application.log.debug(_decorations.ok`Manifest or pkg config change, building all ${patternMtimes.length} patterns`);
		}

		const pruneDetectionStart = new Date();
		application.log.debug(_decorations.wait`Searching for artifacts to prune`);

		let pruneCount = 1;
		const artifactsToPrune = (0, _getArtifactsToPrune2.default)(commonjsRoot, patternMtimes, artifactMtimes, {
			resolve: pathFormatString,
			formats: settings.patterns.formats,
			transforms: settings.transforms
		});
		const padMaxPrune = (0, _fp.padEnd)(artifactsToPrune.map(function (artifact) {
			return artifact.length;
		}).reduce(function (a, b) {
			return a > b ? a : b;
		}, 0) + 1);

		application.log.debug(_decorations.ok`Detected ${artifactsToPrune.length} artifacts to prune ${pruneDetectionStart}`);

		const pruneStart = new Date();
		application.log.debug(_decorations.wait`Pruning ${artifactsToPrune.length} artifacts`);

		const pruning = Promise.all(artifactsToPrune.map((0, _throat2.default)(1, (() => {
			var _ref2 = _asyncToGenerator(function* (path) {
				if (settings['dry-run']) {
					return Promise.resolve();
				}
				spinner.text = `prune ${padMaxPrune(path)} ${pruneCount}/${artifactsToPrune.length}`;
				yield (0, _removeFile2.default)((0, _path.dirname)(path));
				pruneCount += 1;
			});

			return function (_x3) {
				return _ref2.apply(this, arguments);
			};
		})())));

		const pruned = yield pruning;
		application.log.debug(_decorations.ready`Pruned ${pruned.length} artifact files ${pruneStart}`);

		spinner.text = `${pruned.length}/${artifactsToPrune.length} pruned`;
		spinner.succeed();
		spinner.stop();

		spinner = (0, _ora2.default)().start();

		// build patterns in parallel
		const buildStart = new Date();
		const building = Promise.all(patternsToBuild.map((0, _throat2.default)(1, (() => {
			var _ref3 = _asyncToGenerator(function* (pattern) {
				const filterStart = new Date();
				application.log.debug(_decorations.wait`Checking for files of ${pattern.id} to exclude from transform.`);
				let changedFiles = [];

				// enhance filters config to build only files that are modified
				const artifact = (0, _lodash.find)(artifactMtimes, { id: pattern.id });

				if (artifact) {
					// build up mtime registry for pattern files
					const filesMtimes = pattern.files.reduce(function (results, file, index) {
						return _extends({}, results, { [file]: pattern.mtimes[index] });
					}, {});

					// build up registry for artifact files
					const artifactFilesMtimes = artifact.files.reduce(function (results, file, index) {
						const path = (0, _path.relative)(commonjsRoot, file);
						return _extends({}, results, { [path]: artifact.mtimes[index] });
					}, {});

					// find pattern files with newer mtime than
					// - their artifact
					// - their folder
					// - their pattern.json
					changedFiles = pattern.files.filter(function (file) {
						const formatKey = (0, _path.extname)(file).slice(1);
						const format = application.configuration.patterns.formats[formatKey];
						if (!format) {
							return false;
						}
						const transformNames = format.transforms || [];
						const lastTransformName = transformNames[transformNames.length - 1];
						const lastTransform = application.configuration.transforms[lastTransformName] || {};
						const targetExtension = lastTransform.outFormat || formatKey;
						const targetFile = (0, _patternplateTransformsCore.resolvePathFormatString)(pathFormatString, pattern.id, format.name.toLowerCase(), targetExtension);

						const targetFileMtime = artifactFilesMtimes[targetFile] || 0;
						const fileMtime = filesMtimes[file];
						const dirMtime = filesMtimes[(0, _path.dirname)(file)];
						const metaMtime = filesMtimes[(0, _path.join)((0, _path.dirname)(file), 'pattern.json')];

						return fileMtime > targetFileMtime || dirMtime > targetFileMtime || metaMtime > targetFileMtime;
					}).filter(Boolean);
				}

				if (artifact) {
					filters.in3 = changedFiles.map(function (file) {
						return (0, _path.extname)(file).slice(1);
					});
					const formats = _chalk2.default.grey(`[${filters.inFormats.join(', ')}]`);
					application.log.debug(_decorations.ok`Building ${filters.inFormats.length} files for ${pattern.id} ${formats} ${filterStart}`);
				} else {
					application.log.debug(_decorations.ok`Building all files for ${pattern.id} ${filterStart}`);
				}

				if (settings['dry-run']) {
					return Promise.resolve({});
				}

				const transformStart = new Date();
				application.log.debug(_decorations.wait`Transforming pattern ${pattern.id}`);

				spinner.text = `build ${padMaxBuild(pattern.id)} ${buildCount}/${patternsToBuild.length}`;
				buildCount += 1;

				// obtain transformed pattern by id
				const patternList = yield (0, _getPatterns2.default)({
					id: pattern.id,
					base: patternRoot,
					config: application.configuration,
					factory: application.pattern.factory,
					transforms: application.transforms,
					log: application.log,
					filters: filters
				}, application.cache);

				application.log.debug(_decorations.ok`Transformed pattern ${pattern.id} ${transformStart}`);

				const writeStart = new Date();
				application.log.debug(_decorations.ok`Writing artifacts of ${pattern.id}`);

				// Write results to disk
				const writingArtifacts = Promise.all(patternList.map((() => {
					var _ref4 = _asyncToGenerator(function* (patternItem) {
						const writingPatternItems = Promise.all(Object.entries(patternItem.results).map((() => {
							var _ref5 = _asyncToGenerator(function* (resultsEntry) {
								var _resultsEntry = _slicedToArray(resultsEntry, 2);

								const resultName = _resultsEntry[0];
								const result = _resultsEntry[1];

								const relativePath = (0, _patternplateTransformsCore.resolvePathFormatString)(pathFormatString, patternItem.id, resultName.toLowerCase(), result.out);
								const resultPath = (0, _path.join)(commonjsRoot, relativePath);
								return (0, _writeSafe2.default)(resultPath, result.buffer);
							});

							return function (_x6) {
								return _ref5.apply(this, arguments);
							};
						})()));

						return yield writingPatternItems;
					});

					return function (_x5) {
						return _ref4.apply(this, arguments);
					};
				})()));

				const written = yield writingArtifacts;
				application.log.debug(_decorations.ok`Wrote ${written.length} artifacts for ${pattern.id} ${writeStart}`);
				return patternList;
			});

			return function (_x4) {
				return _ref3.apply(this, arguments);
			};
		})())));

		const built = yield building;
		application.log.debug(_decorations.ready`Built ${built.length} from ${patternsToBuild.length} planned and ${patternMtimes.length} artifacts overall ${buildStart}`);

		spinner.text = `${built.length}/${patternsToBuild.length} built`;
		spinner.succeed();

		if (settings['dry-run']) {
			yield building;
			spinner.text = `Dry-run executed successfully ${buildStart}`;
			spinner.succeed();
			return;
		}

		if (application.resources) {
			const resources = application.resources.filter(function (r) {
				return Boolean(r.pattern);
			}).filter(function (r) {
				return Boolean(r.file);
			});

			yield Promise.all(resources.map((() => {
				var _ref6 = _asyncToGenerator(function* (resource) {
					const format = resource.file.format;
					const formatConfig = application.configuration.patterns.formats[format];
					const resourcePath = (0, _patternplateTransformsCore.resolvePathFormatString)(pathFormatString, resource.pattern, formatConfig.name, resource.type);
					const artifactPath = (0, _path.join)(commonjsRoot, resourcePath);
					return (0, _writeSafe2.default)(artifactPath, (yield resource.content));
				});

				return function (_x7) {
					return _ref6.apply(this, arguments);
				};
			})()));
		}

		const copyStart = new Date();
		application.log.debug(_decorations.wait`Copying static files`);
		yield (0, _copyStatic2.default)(cwd, commonjsRoot);
		application.log.debug(_decorations.ready`Copied static files. ${copyStart}`);
		spinner.text = `static files copied`;
		spinner.succeed();

		// Extract dependency information
		const dependencyLists = (0, _lodash.flatten)(built).reduce(function (registry, patternItem) {
			var _patternItem$meta = patternItem.meta;
			const dependencies = _patternItem$meta.dependencies;
			const devDependencies = _patternItem$meta.devDependencies;

			return {
				dependencies: [].concat(_toConsumableArray(registry.dependencies), _toConsumableArray(dependencies || [])),
				devDependencies: [].concat(_toConsumableArray(registry.devDependencies), _toConsumableArray(devDependencies || []))
			};
		}, {
			dependencies: [],
			devDependencies: []
		});

		const deps = pkg.dependencies || {};
		const devDeps = pkg.devDependencies || {};

		const dependencies = dependencyLists.dependencies.reduce(function (results, dependencyName) {
			return _extends({}, results, {
				[dependencyName]: deps[dependencyName] || devDeps[dependencyName] || '*' });
		}, previousPkg.dependencies);

		const devDependencies = dependencyLists.devDependencies.reduce(function (results, dependencyName) {
			return _extends({}, results, {
				[dependencyName]: deps[dependencyName] || devDeps[dependencyName] || '*' });
		}, previousPkg.devDependencies);

		const prunedDependencies = (0, _lodash.omit)(dependencies, [].concat(_toConsumableArray(settings.ignoredDependencies || []), [_nodeCoreModuleNames2.default]));
		const prunedDevDependencies = (0, _lodash.omit)(devDependencies, [].concat(_toConsumableArray(settings.ignoredDevDependencies || []), [_nodeCoreModuleNames2.default], _toConsumableArray(Object.keys(dependencies))));

		const updatedPackageString = (0, _getPackageString2.default)(prunedDependencies, previousPkg, {
			devDependencies: prunedDevDependencies, ppcommonjs: pkgConfig,
			ppDependencies: pkg.dependencies, ppDevdependencies: pkg.devDependencies
		}, (0, _lodash.omit)(pkg, ['dependencies', 'devDependencies', 'scripts', 'config', 'main']), settings.pkg);

		if (updatedPackageString !== previousPkgString) {
			const pkgStart = new Date();
			application.log.debug(_decorations.wait`Writing package.json`);

			yield (0, _writeSafe2.default)(manifestPath, updatedPackageString);
			application.log.debug(_decorations.ready`Wrote package.json ${pkgStart}`);
		}

		const messages = (0, _lodash.uniq)(warnings).map(function (warning) {
			return warning.join(' ');
		});

		messages.forEach(function (message) {
			console.log((0, _boxen2.default)(message, { borderColor: 'yellow', padding: 1 }));
		});
	});

	return function exportAsCommonjs(_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _util = require('util');

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

var _path = require('path');

var _fs = require('fs');

var _boxen = require('boxen');

var _boxen2 = _interopRequireDefault(_boxen);

var _lodash = require('lodash');

var _fp = require('lodash/fp');

var _throat = require('throat');

var _throat2 = _interopRequireDefault(_throat);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _nodeCoreModuleNames = require('node-core-module-names');

var _nodeCoreModuleNames2 = _interopRequireDefault(_nodeCoreModuleNames);

var _patternplateTransformsCore = require('patternplate-transforms-core');

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _decorations = require('../../../library/log/decorations');

var _transforms = require('../../../library/transforms');

var _pattern = require('../../../library/pattern');

var _copyStatic = require('../common/copy-static');

var _copyStatic2 = _interopRequireDefault(_copyStatic);

var _getArtifactMtimes = require('../../../library/utilities/get-artifact-mtimes');

var _getArtifactMtimes2 = _interopRequireDefault(_getArtifactMtimes);

var _getArtifactsToPrune = require('../../../library/utilities/get-artifacts-to-prune');

var _getArtifactsToPrune2 = _interopRequireDefault(_getArtifactsToPrune);

var _getPackageString = require('./get-package-string');

var _getPackageString2 = _interopRequireDefault(_getPackageString);

var _getPatternMtimes = require('../../../library/utilities/get-pattern-mtimes');

var _getPatternMtimes2 = _interopRequireDefault(_getPatternMtimes);

var _getPatterns = require('../../../library/utilities/get-patterns');

var _getPatterns2 = _interopRequireDefault(_getPatterns);

var _getPatternsToBuild = require('../../../library/utilities/get-patterns-to-build');

var _getPatternsToBuild2 = _interopRequireDefault(_getPatternsToBuild);

var _removeFile = require('../../../library/filesystem/remove-file');

var _removeFile2 = _interopRequireDefault(_removeFile);

var _writeSafe = require('../../../library/filesystem/write-safe');

var _writeSafe2 = _interopRequireDefault(_writeSafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const pkg = require((0, _path.resolve)(process.cwd(), 'package.json'));
const readFile = (0, _denodeify2.default)(_fs.readFile);
const pathFormatString = '%(outputName)s/%(patternId)s/index.%(extension)s';

const where = `Configure it at configuration/patternplate-server/tasks.js.`;

const fallbackManifest = {
	dependencies: {},
	devDependencies: {},
	ppcommonjs: {},
	ppDependencies: {},
	ppDevdependencies: {}
};

exports.default = exportAsCommonjs;


function parseJSON(jsonString) {
	try {
		return JSON.parse(jsonString);
	} catch (error) {
		return fallbackManifest;
	}
}
module.exports = exports['default'];