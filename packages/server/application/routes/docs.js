'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const getDoc = (() => {
  const _ref2 = _asyncToGenerator(function* (id) {
    if (!id) {
      return null;
    }

    const file = resolve(id);

    if (!(yield (0, _pathExists2.default)(file))) {
      return null;
    }

    return (0, _vfile2.default)({
      path: _path2.default.posix.relative('./patterns', resolve(id)),
      contents: (0, _escapeHtml2.default)((yield sander.readFile(file)))
    });
  });

  return function getDoc(_x) {
    return _ref2.apply(this, arguments);
  };
})();

exports.default = docsRouteFactory;

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

const _escapeHtml = require('escape-html');

var _escapeHtml2 = _interopRequireDefault(_escapeHtml);

const _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

const _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

const _vfile = require('vfile');

var _vfile2 = _interopRequireDefault(_vfile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const resolve = _path2.default.resolve.bind(null, 'patterns', '@docs');

function docsRouteFactory() {
  return (() => {
    const _ref = _asyncToGenerator(function* () {
      const doc = yield getDoc(this.params.id);
      this.type = 'json';

      if (doc === null) {
        return this.throw(404);
      }

      this.body = {
        path: doc.path,
        contents: doc.contents
      };
    });

    function docsRoute() {
      return _ref.apply(this, arguments);
    }

    return docsRoute;
  })();
}

module.exports = exports.default;