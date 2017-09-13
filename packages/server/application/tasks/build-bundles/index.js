'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('util');

var _boxen = require('boxen');

var _boxen2 = _interopRequireDefault(_boxen);

var _lodash = require('lodash');

var _fp = require('lodash/fp');

var _minimatch = require('minimatch');

var _minimatch2 = _interopRequireDefault(_minimatch);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _throat = require('throat');

var _throat2 = _interopRequireDefault(_throat);

var _transforms = require('../../../library/transforms');

var _pattern = require('../../../library/pattern');

var _copyStatic = require('../common/copy-static');

var _copyStatic2 = _interopRequireDefault(_copyStatic);

var _getEnvironments = require('../../../library/utilities/get-environments');

var _getEnvironments2 = _interopRequireDefault(_getEnvironments);

var _getPatternMtimes = require('../../../library/utilities/get-pattern-mtimes');

var _getPatternMtimes2 = _interopRequireDefault(_getPatternMtimes);

var _getPatterns = require('../../../library/utilities/get-patterns');

var _getPatterns2 = _interopRequireDefault(_getPatterns);

var _writeSafe = require('../../../library/filesystem/write-safe');

var _writeSafe2 = _interopRequireDefault(_writeSafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const where = `Configure it at configuration/patternplate-server/tasks.js.`;

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (application, settings) {
		if (!settings) {
			throw new Error('build-bundles is not configured in .tasks');
		}

		(0, _assert2.default)(typeof settings.patterns === 'object', `build-commonjs needs a valid patterns configuration. ${where} build-bundles.patterns`);
		(0, _assert2.default)(typeof settings.patterns.formats === 'object', `build-commonjs needs a valid patterns.formats configuration. ${where} build-bundles.patterns.formats`);
		(0, _assert2.default)(typeof settings.transforms === 'object', `build-commonjs needs a valid transforms configuration. ${where} build-bundles.transforms`);

		const filterEnvironments = settings.env ? function (env) {
			return settings.env.includes(env.name);
		} : function () {
			return true;
		};

		const debug = (0, _util.debuglog)('bundles');
		const spinner = (0, _ora2.default)().start();

		debug('calling bundles with');
		debug(settings);

		const cwd = process.cwd();
		const base = _path2.default.resolve(cwd, 'patterns');
		const buildBase = _path2.default.resolve(cwd, 'build', `build-bundles`);

		const cache = application.cache;
		const log = application.log;
		const transforms = application.transforms;
		const factory = application.pattern.factory;

		// Override pattern config

		settings.patterns.formats = (0, _pattern.normalizeFormats)(settings.patterns.formats);
		application.configuration.patterns = settings.patterns;

		// Reinitialize transforms
		application.configuration.transforms = settings.transforms || {};
		application.transforms = (yield (0, _transforms.loadTransforms)(settings.transforms || {}))(application);

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

		// Get environments
		const loadedEnvironments = yield (0, _getEnvironments2.default)(base, { cache: cache, log: log });

		// Environments have to apply on all patterns
		const environments = loadedEnvironments.filter(filterEnvironments).map(function (environment) {
			environment.applyTo = '**/*';
			return environment;
		});

		// Get available patterns
		const availablePatterns = yield (0, _getPatternMtimes2.default)(base, {
			resolveDependencies: true
		});

		let envCount = 1;
		const envs = environments.filter(function (environment) {
			return environment.include && environment.include.length;
		});

		spinner.stop();

		const envMaxLength = envs.map(function (e) {
			return e.name.length;
		}).reduce(function (a, b) {
			return a > b ? a : b;
		}, 0);
		const envMaxPad = (0, _fp.padEnd)(envMaxLength + 1);
		const envCountPad = (0, _fp.padStart)(String(envs.length).length);

		// For each environment with an include key, build a bundle for each enabled format
		yield Promise.all(envs.map((0, _throat2.default)(1, (() => {
			var _ref2 = _asyncToGenerator(function* (environment) {
				const envConfig = environment.environment;
				const include = environment.include;
				const exclude = environment.exclude;
				const formats = environment.formats;

				const includePatterns = include || [];
				const excludePatterns = exclude || ['@'];
				const envSpinner = (0, _ora2.default)().start();
				const envr = `${envMaxPad(environment.name)} [env: ${envCountPad(envCount)}/${envs.length}]`;

				// Get patterns matching the include config
				const includedPatterns = availablePatterns.filter(function (available) {
					const id = available.id;

					return includePatterns.some(function (pattern) {
						return (0, _minimatch2.default)(id, pattern);
					}) && !excludePatterns.concat('@environments/**/*').some(function (pattern) {
						return (0, _minimatch2.default)(id, pattern);
					});
				});

				if (!includedPatterns.length) {
					application.log.warn(`No patterns to read for environment ${environment.name}. Check the .includes key of the environment configuration.`);
				}

				// Merge environment config into transform config
				const config = (0, _lodash.merge)({}, {
					patterns: settings.patterns,
					transforms: settings.transforms
				}, envConfig, {
					environments: [environment.name]
				});

				const filters = (0, _lodash.merge)({}, settings.filters, {
					inFormats: formats,
					environments: [environment.name]
				});

				let read = 0;
				const readPad = (0, _fp.padStart)(String(includedPatterns.length).length);

				// build all patterns matching the include config
				const readPatterns = yield Promise.all(includedPatterns.map((0, _throat2.default)(1, (() => {
					var _ref3 = _asyncToGenerator(function* (pattern) {
						const id = pattern.id;

						envSpinner.text = `${envr}: read [patterns: ${readPad(read)}/${includedPatterns.length}] ${pattern.id}`;

						var _ref4 = yield (0, _getPatterns2.default)({
							id: id,
							base: base,
							config: config,
							factory: factory,
							transforms: transforms,
							log: log,
							filters: filters,
							environment: environment
						}, cache, ['read']);

						var _ref5 = _slicedToArray(_ref4, 1);

						const result = _ref5[0];


						read += 1;
						return result;
					});

					return function (_x4) {
						return _ref3.apply(this, arguments);
					};
				})())));

				// construct a virtual pattern
				const bundlePattern = yield factory(environment.name, base, config, transforms, filters, cache);

				envSpinner.text = `${envr}: read ✔`;

				// add the built patterns as dependencies
				const env = { name: environment.name, version: environment.version };
				envSpinner.text = `${envr}: read ✔ | transform`;
				bundlePattern.inject(env, readPatterns);

				// build the bundle
				const builtBundle = yield bundlePattern.transform();
				envSpinner.text = `${envr}: read ✔ | transform ✔`;

				let writeCount = 0;
				const artifacts = Object.entries(builtBundle.results);
				// write the bundle
				const writing = artifacts.map((0, _throat2.default)(1, (() => {
					var _ref6 = _asyncToGenerator(function* (entry) {
						var _entry = _slicedToArray(entry, 2);

						const resultName = _entry[0];
						const result = _entry[1];

						const resultPath = _path2.default.resolve(buildBase, resultName.toLowerCase(), `${environment.name}.${result.out}`);
						envSpinner.text = `${envr}: read ✔ | transform ✔ | write [files: ${writeCount}/${artifacts.length}]`;
						const written = yield (0, _writeSafe2.default)(resultPath, result.buffer);
						writeCount += 1;
						return written;
					});

					return function (_x5) {
						return _ref6.apply(this, arguments);
					};
				})()));

				yield Promise.all(writing);
				envSpinner.text = `${envr}: read ✔ | transform ✔ | write ✔`;
				envSpinner.succeed();
				envSpinner.stop();
				envCount += 1;
			});

			return function (_x3) {
				return _ref2.apply(this, arguments);
			};
		})())));

		const copySpinner = (0, _ora2.default)().start();
		copySpinner.text = `copying static files`;
		yield (0, _copyStatic2.default)(cwd, buildBase);
		copySpinner.text = `copied static files`;
		copySpinner.succeed();
		copySpinner.stop();

		const messages = (0, _lodash.uniq)(warnings).map(function (warning) {
			return warning.join(' ');
		});

		messages.forEach(function (message) {
			console.log((0, _boxen2.default)(message, { borderColor: 'yellow', padding: 1 }));
		});
	});

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

module.exports = exports['default'];