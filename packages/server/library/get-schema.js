'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _findAndReadPackageJson = require('find-and-read-package-json');

var _findAndReadPackageJson2 = _interopRequireDefault(_findAndReadPackageJson);

var _getDocs = require('./get-docs');

var _getEnvironments = require('./utilities/get-environments');

var _getEnvironments2 = _interopRequireDefault(_getEnvironments);

var _getPatternTree = require('./utilities/get-pattern-tree');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const DEFAULT_SUB = {
	configuration: {
		pkg: {},
		server: {},
		routes: {},
		router: {
			url: null
		},
		runtime: {}
	}
};

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (application) {
		let client = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_SUB : arguments[1];
		let server = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_SUB : arguments[2];
		var _application$configur = application.configuration.pkg;
		const appName = _application$configur.name;
		const appVersion = _application$configur.version;
		var _server$configuration = server.configuration;
		const environment = _server$configuration.environment;
		var _server$configuration2 = _server$configuration.pkg;
		const serverName = _server$configuration2.name;
		const serverVersion = _server$configuration2.version;
		var _server$configuration3 = _server$configuration.server;
		const host = _server$configuration3.host;
		const port = _server$configuration3.port;
		var _server$runtime = server.runtime;
		const patterncwd = _server$runtime.patterncwd;
		const cwd = _server$runtime.cwd;
		var _client$configuration = client.configuration.pkg;
		const clientName = _client$configuration.name;
		const clientVersion = _client$configuration.version;


		const base = _path2.default.resolve(patterncwd || cwd, 'patterns');
		const pkg = yield (0, _findAndReadPackageJson2.default)(patterncwd || cwd);

		return Object.assign({}, {
			appName: appName,
			appVersion: appVersion,
			clientName: clientName,
			clientVersion: clientVersion,
			docs: yield (0, _getDocs.getDocsTree)(base),
			environment: environment,
			envs: yield (0, _getEnvironments2.default)(base),
			host: host,
			meta: yield (0, _getPatternTree.getPatternTree)(base),
			name: pkg.name,
			port: port,
			serverName: serverName,
			serverVersion: serverVersion,
			version: pkg.version
		});
	});

	function getSchema(_x) {
		return _ref.apply(this, arguments);
	}

	return getSchema;
})();

module.exports = exports['default'];