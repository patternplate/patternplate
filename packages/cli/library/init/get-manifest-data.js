'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const getManifestData = (() => {
  const _ref = _asyncToGenerator(function* (manifestPath, fallbackData) {
    if (yield (0, _pathExists2.default)(manifestPath)) {
      const previousData = JSON.parse((yield sander.readFile(manifestPath)));
      return (0, _lodash.merge)({}, previousData, fallbackData);
    }

    return (0, _lodash.merge)({}, defaultManifest, fallbackData);
  });

  return function getManifestData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

const _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _lodash = require('lodash');

const _package = require('../../package');

const _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const defaultManifest = {
  name: 'patternplate-project',
  description: 'a patternplate project',
  version: '1.0.0',
  license: 'MIT',
  repository: {
    type: 'git',
    url: 'https://github.com/sinnerschrader/patternplate.git'
  },
  scripts: {
    start: 'patternplate start',
    console: 'patternplate console'
  },
  devDependencies: {
    'babel-preset-es2015': '6.14.0',
    'babel-preset-react': '6.11.1',
    [_package2.default.name]: _package2.default.version,
    'patternplate-transform-browserify': '^1.1.0',
    'patternplate-transform-less': '~0.2.0',
    'patternplate-transform-react': '^1.1.2',
    'patternplate-transform-react-mount': '~0.1.2',
    'patternplate-transform-react-to-markup': '^1.0.1'
  }
};

exports.default = getManifestData;
module.exports = exports.default;