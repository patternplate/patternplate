'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _lodash = require('lodash');

var _findRoot = require('find-root');

var _findRoot2 = _interopRequireDefault(_findRoot);

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _configuration = require('../../../library/utilities/configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
	after: ['application:before'],

	defaults: {
		path: './configuration',
		filter: /(.*).(js|json)$/
	},

	configure: function configure(application) {
		var _this = this;

		return _asyncToGenerator(function* () {
			application.configuration = {};
			_this.configuration = (0, _lodash.merge)({}, _this.defaults, {
				path: (0, _path.resolve)(application.runtime.base, _this.defaults.path)
			});
			return _this;
		})();
	},
	start: function start(application) {
		var _this2 = this;

		return _asyncToGenerator(function* () {
			// Load boilerplate-server core configuration
			const core = (0, _configuration2.default)((0, _path.resolve)((0, _findRoot2.default)(__dirname), _this2.configuration.path), _this2.configuration.filter, application.runtime.env);

			// Load package.jsons
			const corePkgPath = (0, _path.resolve)(application.runtime.base, 'package.json');
			const pkgPath = (0, _path.resolve)(application.runtime.cwd, 'package.json');

			const corePkg = require(corePkgPath);
			const userPkg = require(pkgPath);
			const pkg = (0, _lodash.merge)({}, corePkg, userPkg);

			// Allow user to override core behaviour via cli and *rc files
			(0, _lodash.merge)(core, { pkg: pkg }, application.runtime.api);

			// Find all node modules on the way from here to the top
			let modulePaths = [(0, _path.dirname)(module.filename)];
			let moduleRoot = module;
			while (moduleRoot.parent) {
				moduleRoot = moduleRoot.parent;
				modulePaths.push((0, _path.dirname)(moduleRoot.filename));
			}

			modulePaths = [].concat(_toConsumableArray(new Set(modulePaths)));
			modulePaths = modulePaths.filter(function (modulePath) {
				return !modulePath.includes((0, _findRoot2.default)(__dirname));
			});

			const existingModulePaths = [];

			for (let modulePath of modulePaths) {
				// eslint-disable-line prefer-const
				let moduleRoot = modulePath;
				while ((yield (0, _pathExists2.default)((0, _path.resolve)(moduleRoot, 'package.json'))) === false) {
					// eslint-disable-line babel/no-await-in-loop
					moduleRoot = (0, _path.dirname)(moduleRoot);
				}
				existingModulePaths.push(moduleRoot);
			}

			// Set application runtime cwds
			application.runtime.cwds = [].concat(_toConsumableArray(new Set([application.runtime.cwd].concat(existingModulePaths, [process.cwd()]))));

			// Check which user config paths exist
			let existingConfigPaths = [];
			for (const configPath of core.paths.configuration) {
				for (const cwd of application.runtime.cwds) {
					for (const suffix of ['', userPkg.name]) {
						const userPath = (0, _path.resolve)(cwd, configPath, suffix);
						if (yield (0, _pathExists2.default)(userPath)) {
							// eslint-disable-line babel/no-await-in-loop
							existingConfigPaths.push(userPath);
						}
					}
				}
			}

			// Load most specific paths only
			// Check if paths have siblings that contain them completely, thus are sub directories / more specific configuration folders
			existingConfigPaths = existingConfigPaths.filter(function (configPath) {
				const match = existingConfigPaths.filter(function (subConfigPath) {
					return subConfigPath.includes(configPath) && subConfigPath !== configPath;
				});
				return match.length === 0;
			});

			// Load dem configs from filtered paths
			let user = {};
			for (const userPath of existingConfigPaths) {
				_this2.log.debug(`Loading configuration from '${userPath}'`);
				const userPathConfig = (0, _configuration2.default)(userPath, _this2.configuration.filter, application.runtime.env);
				user = (0, _lodash.merge)(user, userPathConfig);
			}

			(0, _lodash.merge)(application.configuration, core, user, application.runtime.api, function (a, b) {
				if (Array.isArray(b) && typeof a === 'string') {
					return b;
				}
			});

			if (application.name in user) {
				(0, _lodash.merge)(application.configuration, user[application.name]);
			}

			application.runtime.prefix = application.runtime.prefix || '/';
			application.runtime.mode = application.runtime.mode || 'server';
			return _this2;
		})();
	}
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9jb25maWd1cmUvaW5kZXguanMiXSwibmFtZXMiOlsiYWZ0ZXIiLCJkZWZhdWx0cyIsInBhdGgiLCJmaWx0ZXIiLCJjb25maWd1cmUiLCJhcHBsaWNhdGlvbiIsImNvbmZpZ3VyYXRpb24iLCJydW50aW1lIiwiYmFzZSIsInN0YXJ0IiwiY29yZSIsIl9fZGlybmFtZSIsImVudiIsImNvcmVQa2dQYXRoIiwicGtnUGF0aCIsImN3ZCIsImNvcmVQa2ciLCJyZXF1aXJlIiwidXNlclBrZyIsInBrZyIsImFwaSIsIm1vZHVsZVBhdGhzIiwibW9kdWxlIiwiZmlsZW5hbWUiLCJtb2R1bGVSb290IiwicGFyZW50IiwicHVzaCIsIlNldCIsIm1vZHVsZVBhdGgiLCJpbmNsdWRlcyIsImV4aXN0aW5nTW9kdWxlUGF0aHMiLCJjd2RzIiwicHJvY2VzcyIsImV4aXN0aW5nQ29uZmlnUGF0aHMiLCJjb25maWdQYXRoIiwicGF0aHMiLCJzdWZmaXgiLCJuYW1lIiwidXNlclBhdGgiLCJtYXRjaCIsInN1YkNvbmZpZ1BhdGgiLCJsZW5ndGgiLCJ1c2VyIiwibG9nIiwiZGVidWciLCJ1c2VyUGF0aENvbmZpZyIsImEiLCJiIiwiQXJyYXkiLCJpc0FycmF5IiwicHJlZml4IiwibW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBSUE7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O2tCQUVlO0FBQ2RBLFFBQU8sQ0FBQyxvQkFBRCxDQURPOztBQUdkQyxXQUFVO0FBQ1RDLFFBQU0saUJBREc7QUFFVEMsVUFBUTtBQUZDLEVBSEk7O0FBUVJDLFVBUlEscUJBUUVDLFdBUkYsRUFRZTtBQUFBOztBQUFBO0FBQzVCQSxlQUFZQyxhQUFaLEdBQTRCLEVBQTVCO0FBQ0EsU0FBS0EsYUFBTCxHQUFxQixtQkFDcEIsRUFEb0IsRUFFcEIsTUFBS0wsUUFGZSxFQUdwQjtBQUNDQyxVQUFNLG1CQUFRRyxZQUFZRSxP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ZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0ZGlybmFtZSxcblx0cmVzb2x2ZVxufSBmcm9tICdwYXRoJztcbmltcG9ydCB7XG5cdG1lcmdlXG59IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZmluZFJvb3QgZnJvbSAnZmluZC1yb290JztcbmltcG9ydCBleGlzdHMgZnJvbSAncGF0aC1leGlzdHMnO1xuXG5pbXBvcnQgbG9hZCBmcm9tICcuLi8uLi8uLi9saWJyYXJ5L3V0aWxpdGllcy9jb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRhZnRlcjogWydhcHBsaWNhdGlvbjpiZWZvcmUnXSxcblxuXHRkZWZhdWx0czoge1xuXHRcdHBhdGg6ICcuL2NvbmZpZ3VyYXRpb24nLFxuXHRcdGZpbHRlcjogLyguKikuKGpzfGpzb24pJC9cblx0fSxcblxuXHRhc3luYyBjb25maWd1cmUoYXBwbGljYXRpb24pIHtcblx0XHRhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uID0ge307XG5cdFx0dGhpcy5jb25maWd1cmF0aW9uID0gbWVyZ2UoXG5cdFx0XHR7fSxcblx0XHRcdHRoaXMuZGVmYXVsdHMsXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGg6IHJlc29sdmUoYXBwbGljYXRpb24ucnVudGltZS5iYXNlLCB0aGlzLmRlZmF1bHRzLnBhdGgpXG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRhc3luYyBzdGFydChhcHBsaWNhdGlvbikge1xuXHRcdC8vIExvYWQgYm9pbGVycGxhdGUtc2VydmVyIGNvcmUgY29uZmlndXJhdGlvblxuXHRcdGNvbnN0IGNvcmUgPSBsb2FkKFxuXHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0ZmluZFJvb3QoX19kaXJuYW1lKSxcblx0XHRcdFx0dGhpcy5jb25maWd1cmF0aW9uLnBhdGhcblx0XHRcdCksXG5cdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyLFxuXHRcdFx0YXBwbGljYXRpb24ucnVudGltZS5lbnZcblx0XHQpO1xuXG5cdFx0Ly8gTG9hZCBwYWNrYWdlLmpzb25zXG5cdFx0Y29uc3QgY29yZVBrZ1BhdGggPSByZXNvbHZlKGFwcGxpY2F0aW9uLnJ1bnRpbWUuYmFzZSwgJ3BhY2thZ2UuanNvbicpO1xuXHRcdGNvbnN0IHBrZ1BhdGggPSByZXNvbHZlKGFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkLCAncGFja2FnZS5qc29uJyk7XG5cblx0XHRjb25zdCBjb3JlUGtnID0gcmVxdWlyZShjb3JlUGtnUGF0aCk7XG5cdFx0Y29uc3QgdXNlclBrZyA9IHJlcXVpcmUocGtnUGF0aCk7XG5cdFx0Y29uc3QgcGtnID0gbWVyZ2Uoe30sIGNvcmVQa2csIHVzZXJQa2cpO1xuXG5cdFx0Ly8gQWxsb3cgdXNlciB0byBvdmVycmlkZSBjb3JlIGJlaGF2aW91ciB2aWEgY2xpIGFuZCAqcmMgZmlsZXNcblx0XHRtZXJnZShjb3JlLCB7cGtnfSwgYXBwbGljYXRpb24ucnVudGltZS5hcGkpO1xuXG5cdFx0Ly8gRmluZCBhbGwgbm9kZSBtb2R1bGVzIG9uIHRoZSB3YXkgZnJvbSBoZXJlIHRvIHRoZSB0b3Bcblx0XHRsZXQgbW9kdWxlUGF0aHMgPSBbZGlybmFtZShtb2R1bGUuZmlsZW5hbWUpXTtcblx0XHRsZXQgbW9kdWxlUm9vdCA9IG1vZHVsZTtcblx0XHR3aGlsZSAobW9kdWxlUm9vdC5wYXJlbnQpIHtcblx0XHRcdG1vZHVsZVJvb3QgPSBtb2R1bGVSb290LnBhcmVudDtcblx0XHRcdG1vZHVsZVBhdGhzLnB1c2goZGlybmFtZShtb2R1bGVSb290LmZpbGVuYW1lKSk7XG5cdFx0fVxuXG5cdFx0bW9kdWxlUGF0aHMgPSBbLi4ubmV3IFNldChtb2R1bGVQYXRocyldO1xuXHRcdG1vZHVsZVBhdGhzID0gbW9kdWxlUGF0aHMuZmlsdGVyKG1vZHVsZVBhdGggPT4gIW1vZHVsZVBhdGguaW5jbHVkZXMoZmluZFJvb3QoX19kaXJuYW1lKSkpO1xuXG5cdFx0Y29uc3QgZXhpc3RpbmdNb2R1bGVQYXRocyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgbW9kdWxlUGF0aCBvZiBtb2R1bGVQYXRocykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuXHRcdFx0bGV0IG1vZHVsZVJvb3QgPSBtb2R1bGVQYXRoO1xuXHRcdFx0d2hpbGUgKGF3YWl0IGV4aXN0cyhyZXNvbHZlKG1vZHVsZVJvb3QsICdwYWNrYWdlLmpzb24nKSkgPT09IGZhbHNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFiZWwvbm8tYXdhaXQtaW4tbG9vcFxuXHRcdFx0XHRtb2R1bGVSb290ID0gZGlybmFtZShtb2R1bGVSb290KTtcblx0XHRcdH1cblx0XHRcdGV4aXN0aW5nTW9kdWxlUGF0aHMucHVzaChtb2R1bGVSb290KTtcblx0XHR9XG5cblx0XHQvLyBTZXQgYXBwbGljYXRpb24gcnVudGltZSBjd2RzXG5cdFx0YXBwbGljYXRpb24ucnVudGltZS5jd2RzID0gW1xuXHRcdFx0Li4ubmV3IFNldChbXG5cdFx0XHRcdGFwcGxpY2F0aW9uLnJ1bnRpbWUuY3dkLFxuXHRcdFx0XHQuLi5leGlzdGluZ01vZHVsZVBhdGhzLFxuXHRcdFx0XHRwcm9jZXNzLmN3ZCgpXG5cdFx0XHRdKVxuXHRcdF07XG5cblx0XHQvLyBDaGVjayB3aGljaCB1c2VyIGNvbmZpZyBwYXRocyBleGlzdFxuXHRcdGxldCBleGlzdGluZ0NvbmZpZ1BhdGhzID0gW107XG5cdFx0Zm9yIChjb25zdCBjb25maWdQYXRoIG9mIGNvcmUucGF0aHMuY29uZmlndXJhdGlvbikge1xuXHRcdFx0Zm9yIChjb25zdCBjd2Qgb2YgYXBwbGljYXRpb24ucnVudGltZS5jd2RzKSB7XG5cdFx0XHRcdGZvciAoY29uc3Qgc3VmZml4IG9mIFsnJywgdXNlclBrZy5uYW1lXSkge1xuXHRcdFx0XHRcdGNvbnN0IHVzZXJQYXRoID0gcmVzb2x2ZShjd2QsIGNvbmZpZ1BhdGgsIHN1ZmZpeCk7XG5cdFx0XHRcdFx0aWYgKGF3YWl0IGV4aXN0cyh1c2VyUGF0aCkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYWJlbC9uby1hd2FpdC1pbi1sb29wXG5cdFx0XHRcdFx0XHRleGlzdGluZ0NvbmZpZ1BhdGhzLnB1c2godXNlclBhdGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIExvYWQgbW9zdCBzcGVjaWZpYyBwYXRocyBvbmx5XG5cdFx0Ly8gQ2hlY2sgaWYgcGF0aHMgaGF2ZSBzaWJsaW5ncyB0aGF0IGNvbnRhaW4gdGhlbSBjb21wbGV0ZWx5LCB0aHVzIGFyZSBzdWIgZGlyZWN0b3JpZXMgLyBtb3JlIHNwZWNpZmljIGNvbmZpZ3VyYXRpb24gZm9sZGVyc1xuXHRcdGV4aXN0aW5nQ29uZmlnUGF0aHMgPSBleGlzdGluZ0NvbmZpZ1BhdGhzLmZpbHRlcihjb25maWdQYXRoID0+IHtcblx0XHRcdGNvbnN0IG1hdGNoID0gZXhpc3RpbmdDb25maWdQYXRocy5maWx0ZXIoc3ViQ29uZmlnUGF0aCA9PlxuXHRcdFx0XHRzdWJDb25maWdQYXRoLmluY2x1ZGVzKGNvbmZpZ1BhdGgpICYmIHN1YkNvbmZpZ1BhdGggIT09IGNvbmZpZ1BhdGhcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbWF0Y2gubGVuZ3RoID09PSAwO1xuXHRcdH0pO1xuXG5cdFx0Ly8gTG9hZCBkZW0gY29uZmlncyBmcm9tIGZpbHRlcmVkIHBhdGhzXG5cdFx0bGV0IHVzZXIgPSB7fTtcblx0XHRmb3IgKGNvbnN0IHVzZXJQYXRoIG9mIGV4aXN0aW5nQ29uZmlnUGF0aHMpIHtcblx0XHRcdHRoaXMubG9nLmRlYnVnKGBMb2FkaW5nIGNvbmZpZ3VyYXRpb24gZnJvbSAnJHt1c2VyUGF0aH0nYCk7XG5cdFx0XHRjb25zdCB1c2VyUGF0aENvbmZpZyA9IGxvYWQodXNlclBhdGgsIHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIsIGFwcGxpY2F0aW9uLnJ1bnRpbWUuZW52KTtcblx0XHRcdHVzZXIgPSBtZXJnZSh1c2VyLCB1c2VyUGF0aENvbmZpZyk7XG5cdFx0fVxuXG5cdFx0bWVyZ2UoYXBwbGljYXRpb24uY29uZmlndXJhdGlvbiwgY29yZSwgdXNlciwgYXBwbGljYXRpb24ucnVudGltZS5hcGksIChhLCBiKSA9PiB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShiKSAmJiB0eXBlb2YgYSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cmV0dXJuIGI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoYXBwbGljYXRpb24ubmFtZSBpbiB1c2VyKSB7XG5cdFx0XHRtZXJnZShhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uLCB1c2VyW2FwcGxpY2F0aW9uLm5hbWVdKTtcblx0XHR9XG5cblx0XHRhcHBsaWNhdGlvbi5ydW50aW1lLnByZWZpeCA9IGFwcGxpY2F0aW9uLnJ1bnRpbWUucHJlZml4IHx8ICcvJztcblx0XHRhcHBsaWNhdGlvbi5ydW50aW1lLm1vZGUgPSBhcHBsaWNhdGlvbi5ydW50aW1lLm1vZGUgfHwgJ3NlcnZlcic7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG4iXX0=