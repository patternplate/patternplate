'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const buildStatic = (() => {
  const _ref = _asyncToGenerator(function* (pkg, target) {
    const assetSourcePath = packageResolve(pkg, 'assets');
    const assetTargetPath = _path2.default.resolve(target);
    const clientStaticSourcePath = packageResolve(pkg, 'static');
    const clientStaticTargetPath = _path2.default.resolve(target, 'static');
    const staticSourcePath = _path2.default.resolve(cwd, 'static');
    const staticTargetPath = _path2.default.resolve(target, 'api', 'static');

    yield sander.copydir(assetSourcePath).to(assetTargetPath);
    yield sander.copydir(clientStaticSourcePath).to(clientStaticTargetPath);

    if (yield (0, _pathExists2.default)(staticSourcePath)) {
      yield sander.copydir(staticSourcePath).to(staticTargetPath);
    }
  });

  return function buildStatic(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

const _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

const _findRoot = require('find-root');

const _findRoot2 = _interopRequireDefault(_findRoot);

const _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

const _resolve = require('resolve');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const cwd = process.cwd();
const resolve = id => (0, _resolve.sync)(id, { basedir: cwd });
const packageResolve = (id, directory) => _path2.default.resolve((0, _findRoot2.default)(resolve(id)), directory);

exports.default = buildStatic;
module.exports = exports.default;