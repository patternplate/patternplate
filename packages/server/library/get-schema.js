'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _findAndReadPackageJson = require('find-and-read-package-json');

const _findAndReadPackageJson2 = _interopRequireDefault(_findAndReadPackageJson);

const _getDocs = require('./get-docs');

const _getEnvironments = require('./utilities/get-environments');

const _getEnvironments2 = _interopRequireDefault(_getEnvironments);

const _getPatternTree = require('./utilities/get-pattern-tree');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

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
  const _ref = _asyncToGenerator(function* (application) {
    const client = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_SUB : arguments[1];
    const server = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_SUB : arguments[2];
    const _application$configur = application.configuration.pkg;
    const appName = _application$configur.name;
    const appVersion = _application$configur.version;
    const _server$configuration = server.configuration;
    const environment = _server$configuration.environment;
    const _server$configuration2 = _server$configuration.pkg;
    const serverName = _server$configuration2.name;
    const serverVersion = _server$configuration2.version;
    const _server$configuration3 = _server$configuration.server;
    const host = _server$configuration3.host;
    const port = _server$configuration3.port;
    const _server$runtime = server.runtime;
    const patterncwd = _server$runtime.patterncwd;
    const cwd = _server$runtime.cwd;
    const _client$configuration = client.configuration.pkg;
    const clientName = _client$configuration.name;
    const clientVersion = _client$configuration.version;


    const base = _path2.default.resolve(patterncwd || cwd, 'patterns');
    const pkg = yield (0, _findAndReadPackageJson2.default)(patterncwd || cwd);

    return Object.assign({}, {
      appName,
      appVersion,
      clientName,
      clientVersion,
      docs: yield (0, _getDocs.getDocsTree)(base),
      environment,
      envs: yield (0, _getEnvironments2.default)(base),
      host,
      meta: yield (0, _getPatternTree.getPatternTree)(base),
      name: pkg.name,
      port,
      serverName,
      serverVersion,
      version: pkg.version
    });
  });

  function getSchema(_x) {
    return _ref.apply(this, arguments);
  }

  return getSchema;
})();

module.exports = exports.default;