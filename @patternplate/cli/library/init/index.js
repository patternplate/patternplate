'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Initialize a default patternplate project
 * This will
 * -  Create a patterns folder
 * -  Create a patterns/readme.md with Getting started instructions
 * -  Create configuration/patternplate-{client,server} folders
 * -  Create some exemplary configuration
 * -  Add a npm start command, falling back to npm run patternplate if taken
 * -  Print instructions on how to start the patternplate instance
 *
 * @params workingDirectory to initialize the patternplate project in
 * @params options
 * @params options.manifestPath=package.json string
 * @params options.manifest={} object
 * @params options.patternPath=patterns string
 */
let init = (() => {
	var _ref = _asyncToGenerator(function* () {
		let directory = arguments.length <= 0 || arguments[0] === undefined ? '.' : arguments[0];
		let options = arguments[1];

		const spinner = (0, _ora2.default)().start();
		const settings = (0, _lodash.merge)({}, defaults, options);
		const cwd = _path2.default.resolve(process.cwd(), directory);
		const resolve = function resolve() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _path2.default.resolve.apply(_path2.default, [cwd].concat(args));
		};

		const manifestPath = resolve(settings.manifestPath);
		const name = _path2.default.basename(cwd);

		// Add a name based on directory if manifest does not exists
		// Allow overriding of manifest fields in any case
		const manifest = (yield (0, _pathExists2.default)(manifestPath)) ? settings.manifest : (0, _lodash.merge)({}, settings.manifest, { name: name });

		// Read / create manifest data
		const data = yield (0, _getManifestData2.default)(manifestPath, _extends({}, manifest, {
			name: settings.name || name
		}));

		const readmeTarget = resolve(settings.patternPath, 'readme.md');

		spinner.text = ` Initializing project ${data.name} at ${cwd}`;

		// copy init/template to $CWD
		// replace ${} expressions in the process
		yield sander.copydir(templatePath).to(cwd);

		// Create/extend existing manifest
		yield sander.writeFile(manifestPath, JSON.stringify(data, null, '  '));

		// Use name in this precedence
		// explicit --name
		// name based on dirname
		// name found in data
		const readmeData = yield (0, _getReadmeData2.default)({
			name: settings.name || name || data.name
		});

		// Write pattern readme
		yield sander.writeFile(readmeTarget, readmeData);

		// Be nice and instructional
		spinner.text = ` Initialized project ${data.name} at ${cwd}`;
		spinner.succeed();

		const instructions = [process.cwd() !== cwd && `cd ${directory}`, 'npm install', data.scripts.start === 'patternplate' ? 'npm start -- --open' : './node_modules/.bin/patternplate start --open'].filter(Boolean);

		const sep = _defaultShell2.default.includes('fish') ? '; and ' : ' && ';
		console.log(`🚀  Start and open patternplate:`);
		console.log(`\n   ${instructions.join(sep)}`);
	});

	return function init() {
		return _ref.apply(this, arguments);
	};
})();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _defaultShell = require('default-shell');

var _defaultShell2 = _interopRequireDefault(_defaultShell);

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _lodash = require('lodash');

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

var _getManifestData = require('./get-manifest-data');

var _getManifestData2 = _interopRequireDefault(_getManifestData);

var _getReadmeData = require('./get-readme-data');

var _getReadmeData2 = _interopRequireDefault(_getReadmeData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const templatePath = _path2.default.resolve(__dirname, '..', '..', 'init-template');

const defaults = {
	manifestPath: 'package.json',
	manifest: {},
	patternPath: 'patterns'
};exports.default = init;
module.exports = exports['default'];