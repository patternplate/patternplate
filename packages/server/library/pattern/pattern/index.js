'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pattern = undefined;

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable max-len */


const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _fauxCache = require('./faux-cache');

const _fauxCache2 = _interopRequireDefault(_fauxCache);

const _fauxLog = require('./faux-log');

const _fauxLog2 = _interopRequireDefault(_fauxLog);

const _inject = require('./inject');

const _inject2 = _interopRequireDefault(_inject);

const _read = require('./read');

const _read2 = _interopRequireDefault(_read);

const _readManifest = require('./read-manifest');

const _readManifest2 = _interopRequireDefault(_readManifest);

const _transform = require('./transform');

const _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const defaultFilters = { environments: [], inFormats: [], outFormats: [] };

class Pattern {
  constructor(patternPath, base) {
    const config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    const transforms = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    const filters = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];
    const cache = arguments.length <= 5 || arguments[5] === undefined ? null : arguments[5];

    const id = patternPath.split(_path2.default.sep).join('/');
    this.options = config.options || {};
    this.base = base;
    this.cache = cache || _fauxCache2.default;
    this.config = _extends({ parents: [] }, config);
    this.dependencies = {};
    this.demoDependencies = {};
    this.environments = { index: { manifest: { name: 'index' } } };
    this.files = {};
    this.filters = _extends({}, defaultFilters, filters);
    this.id = id;
    this.isEnvironment = id.includes('@environment');
    this.log = config.log || _fauxLog2.default;
    this.manifest = {};
    this.path = _path2.default.resolve(base, id);
    this.results = {};
    this.transforms = transforms;
  }

  inject(manifest, patterns) {
    (0, _inject2.default)(this, manifest, patterns);
    return this;
  }

  read() {
    const _this = this;

    const path = arguments.length <= 0 || arguments[0] === undefined ? this.path : arguments[0];
    return _asyncToGenerator(function* () {
      yield (0, _read2.default)(_this, path);
      return _this;
    })();
  }

  readManifest() {
    const _this2 = this;

    const path = arguments.length <= 0 || arguments[0] === undefined ? this.path : arguments[0];
    return _asyncToGenerator(function* () {
      yield (0, _readManifest2.default)(_this2, path);
      return _this2;
    })();
  }

  transform() {
    const _this3 = this;

    return _asyncToGenerator(function* () {
      yield (0, _transform2.default)(_this3);
      return _this3;
    })();
  }
}

exports.Pattern = Pattern;

exports.default = (() => {
  const _ref = _asyncToGenerator(function* () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return yield new (Function.prototype.bind.apply(Pattern, [null].concat(args)))();
  });

  function patternFactory() {
    return _ref.apply(this, arguments);
  }

  return patternFactory;
})();