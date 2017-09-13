'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const _sander = require('sander');

const _throat = require('throat');

const _throat2 = _interopRequireDefault(_throat);

const _util = require('util');

const _readTree = require('../filesystem/read-tree');

const _readTree2 = _interopRequireDefault(_readTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  const _ref = _asyncToGenerator(function* (search, patterns, transforms) {
    const outFormats = Object.values(transforms).map((t) => {
      return t.outFormat;
    }).reduce((o, t) => {
      return [].concat(_toConsumableArray(o), [t]);
    }, []);

    const debug = (0, _util.debuglog)('artifact-mtimes');
    const distributionDirectory = (0, _path.resolve)(process.cwd(), search);

    const types = Object.keys(patterns.formats).map((extension) => {
      return patterns.formats[extension].name.toLowerCase();
    });

    const typedFiles = yield Promise.all([].concat(_toConsumableArray(new Set(types))).map((() => {
      const _ref2 = _asyncToGenerator(function* (type) {
        const files = yield (0, _readTree2.default)((0, _path.resolve)(search, type));
        return files.filter((path) => {
          return (0, _path.extname)(path);
        }).filter((path) => {
          return outFormats.includes((0, _path.extname)(path).slice(1));
        });
      });

      return function (_x4) {
        return _ref2.apply(this, arguments);
      };
    })()));

    const artifactPaths = typedFiles.reduce((flattened, files) => {
      return [].concat(_toConsumableArray(flattened), _toConsumableArray(files));
    }, []);

    const artifactMtimes = yield Promise.all(artifactPaths.map((0, _throat2.default)(1, (() => {
      const _ref3 = _asyncToGenerator(function* (path) {
        const relativeArtifactPath = (0, _path.relative)(distributionDirectory, path);
        const artifactId = (0, _path.dirname)(relativeArtifactPath.split(_path.sep).join('/'));
        const patternId = artifactId.split('/').slice(1).join('/');
        const stats = yield (0, _sander.stat)(path);

        return {
          id: artifactId,
          path,
          patternId,
          mtime: stats.mtime
        };
      });

      return function (_x5) {
        return _ref3.apply(this, arguments);
      };
    })())));

    const artifactRegistry = artifactMtimes.reduce((registry, artifact) => {
      const item = registry[artifact.patternId] || {
        id: artifact.patternId,
        artifacts: [],
        files: [],
        mtimes: [],
        types: []
      };

      item.artifacts.push(artifact.id);
      item.files.push(artifact.path);
      item.mtimes.push(artifact.mtime);
      item.types.push(artifact.id.split('/')[0]);
      registry[artifact.patternId] = item;
      return registry;
    }, {});

    return Object.values(artifactRegistry).map((item) => {
      const times = item.mtimes.map((time) => {
        return {
          stamp: time.getTime(),
          date: time
        };
      }).sort((a, b) => {
        return a.stamp - b.stamp;
      });

      item.mtime = times[0].date;
      debug('mtime for artifact %s is %s', item.id, item.mtime);
      return item;
    });
  });

  function getArtifactMtimes(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return getArtifactMtimes;
})();

module.exports = exports.default;