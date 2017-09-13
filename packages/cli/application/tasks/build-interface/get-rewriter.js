'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const getRewriter = (() => {
  const _ref = _asyncToGenerator(function* (buildTargetPath) {
    const staticPath = _path2.default.resolve(process.cwd(), 'static');
    const statics = yield (0, _globby2.default)(`${staticPath}/**/*`, { nodir: true });

    const rewriteables = statics.map((s) => {
      const fragments = _path2.default.relative(process.cwd(), s).split(_path2.default.sep);
      return ['/api'].concat(_toConsumableArray(fragments)).join('/');
    });

    return function (content, targetPath) {
      const source = (content || '').toString('utf-8');
      return rewriteables.reduce((content, rewritable) => {
        if (!source.includes(rewritable)) {
          return source;
        }

        // Convert rewritable url to path (os-sensitive)
        const rewritablePath = rewritable.split('/').filter(Boolean).join(_path2.default.sep);

        const assetPath = _path2.default.resolve(buildTargetPath, rewritablePath);

        const relative = _path2.default.relative(_path2.default.dirname(targetPath), assetPath).split(_path2.default.sep).join('/');

        const matcher = new RegExp(rewritable, 'g');
        return source.replace(matcher, relative);
      }, source);
    };
  });

  return function getRewriter(_x) {
    return _ref.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

const _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getRewriter;
module.exports = exports.default;