'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const loadTransform = (() => {
  const _ref = _asyncToGenerator(function* (name) {
    const id = yield (0, _resolvePackage2.default)(`patternplate-transform-${name}`, {
      basedir: process.cwd()
    });
    return {
      name,
      id,
      export: require(id)
    };
  });

  return function loadTransform(_x) {
    return _ref.apply(this, arguments);
  };
})();

const _resolvePackage = require('./resolve-package');

var _resolvePackage2 = _interopRequireDefault(_resolvePackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = loadTransform;
module.exports = exports.default;