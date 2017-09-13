'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const getPatternManifests = (() => {
  const _ref = _asyncToGenerator(function* (id, base) {
    const options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    const patternPath = id.split('/').join(_path2.default.sep);
    const paths = yield (0, _readTree2.default)(_path2.default.resolve(base, patternPath), options.cache);

    const patternIDs = paths.filter((item) => {
      return _path2.default.basename(item) === 'pattern.json';
    }).filter((item) => {
      return !item.includes('@environments');
    }).map((item) => {
      return _path2.default.dirname(item);
    }).map((item) => {
      return _path2.default.relative(base, item);
    }).map((item) => {
      return item.split(_path2.default.sep).join('/');
    });

    const fetchManifest = function fetchManifest(pid) {
      return (0, _getPatternManifest2.default)(pid, base);
    };
    const jobs = patternIDs.map(fetchManifest);
    const readings = yield Promise.all(jobs);

    const _partition = (0, _lodash.partition)(readings, (_ref2) => {
      const _ref3 = _slicedToArray(_ref2, 1);

      const err = _ref3[0];
      return err !== null;
    });

    const _partition2 = _slicedToArray(_partition, 2);

    const errs = _partition2[0];
    const manifests = _partition2[1];

    return [errs.map((err) => {
      return err[0];
    }), manifests.map((m) => {
      return m[1];
    })];
  });

  return function getPatternManifests(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

const _getPatternManifest = require('./get-pattern-manifest');

var _getPatternManifest2 = _interopRequireDefault(_getPatternManifest);

const _readTree = require('../filesystem/read-tree');

var _readTree2 = _interopRequireDefault(_readTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getPatternManifests;
module.exports = exports.default;