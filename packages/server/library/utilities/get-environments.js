'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ENVIRONMENT = undefined;

const getEnvironments = (() => {
  const _ref = _asyncToGenerator(function* (base) {
    const resolve = _path2.default.resolve.bind(null, base, '@environments');
    const cwd = resolve('.');
    const read = function read(f) {
      return (0, _loadJsonFile2.default)(resolve(f));
    };
    const files = yield (0, _globby2.default)(`**/pattern.json`, { cwd });

    const envs = yield Promise.all(files.map((() => {
      const _ref2 = _asyncToGenerator(function* (file) {
        const data = yield read(file);
        return (0, _lodash.merge)({}, TEMPLATE_ENVIRONMENT, data);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    })()));

    if (!envs.some((e) => {
      return e.name === 'index';
    })) {
      envs.push(DEFAULT_ENVIRONMENT);
    }

    return envs;
  });

  return function getEnvironments(_x) {
    return _ref.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

const _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

const _loadJsonFile = require('load-json-file');

var _loadJsonFile2 = _interopRequireDefault(_loadJsonFile);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getEnvironments;


const TEMPLATE_ENVIRONMENT = {
  name: 'index',
  display: true,
  displayName: 'Default',
  version: '0.1.0',
  applyTo: ['**/*'],
  include: ['**/*'],
  excludes: [],
  priority: 0,
  environment: {}
};

const DEFAULT_ENVIRONMENT = exports.DEFAULT_ENVIRONMENT = {
  name: 'index',
  display: true,
  displayName: 'Default',
  version: '0.1.0',
  applyTo: ['**/*'],
  include: ['**/*'],
  excludes: [],
  priority: 0,
  environment: {}
};