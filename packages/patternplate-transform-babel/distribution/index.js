'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let babelTransform = (() => {
  var _ref = _asyncToGenerator(function* (file, _, configuration) {
    // eslint-disable-line require-yield
    const apply = function apply(file) {
      return (0, _applyTransform2.default)(file, configuration.opts);
    };

    file.buffer = apply(file).buffer;
    walk(file, apply);
    return file;
  });

  return function babelTransform(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

var _precinct = require('precinct');

var _precinct2 = _interopRequireDefault(_precinct);

var _fp = require('lodash/fp');

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _applyTransform = require('./apply-transform');

var _applyTransform2 = _interopRequireDefault(_applyTransform);

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const uniqByPath = (0, _fp.uniqBy)('path');
const stash = {};

exports.default = createBabelTransform;


function createBabelTransform() {
  return babelTransform;
}

function walk(file, apply) {
  const pool = uniqByPath((0, _flatten2.default)(file.dependencies));
  const source = typeof file.buffer === 'string' ? file.buffer : file.buffer.toString('utf-8');

  const id = (0, _md2.default)(source);
  stash[id] = stash[id] || (0, _precinct2.default)(source);

  stash[id].map(localName => (file.dependencies[localName] || {}).path).filter(Boolean).map(dependencyPath => pool.find(dep => dep.path === dependencyPath)).filter(Boolean).forEach(dependency => {
    dependency.buffer = apply(dependency).buffer;
    walk(dependency, apply);
  });
}
module.exports = exports['default'];