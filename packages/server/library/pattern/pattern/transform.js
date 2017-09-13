'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const transform = (() => {
  const _ref = _asyncToGenerator(function* (pattern) {
    const formats = pattern.config.patterns.formats;

    const config = {
      patterns: pattern.config.patterns,
      transformConfigs: pattern.config.transforms,
      log: pattern.log
    };

    const transform = (0, _getTransform2.default)(pattern.transforms, config);

    // Get the transform job, execute in parallel
    const jobs = Object.values(pattern.files).map(transform);

    // Get an array with the results of each transform step
    const filesResults = yield Promise.all(jobs);

    // Pick the last item each
    const transformResults = filesResults.map(_lodash.last);

    // Save into files map
    const files = transformResults.reduce((results, transformResult) => {
      results[transformResult.name] = transformResult;
      return results;
    }, {});

    Object.entries(files).forEach((entry) => {
      const _entry = _slicedToArray(entry, 2);

      const name = _entry[0];
      const file = _entry[1];

      const ref = pattern.files[name];
      if (ref) {
        ref.buffer = file.buffer;
        ref.dependencies = file.dependencies;
        ref.meta = file.meta;
        return;
      }
      pattern.files[name] = file;
    });

    // Join demo and index files of the same format
    // if there is a demo, it occupies the results[format.name] key
    const sanitizedResults = (0, _lodash.uniq)(transformResults.reduce((results, result) => {
      const demo = transformResults.find((transformResult) => {
        return transformResult.basename === 'demo' && transformResult.format === result.format;
      });

      if (demo) {
        results.push(demo);
      } else {
        results.push(result);
      }

      return results;
    }, []));

    // Reduce to format.name => result map
    pattern.results = sanitizedResults.reduce((results, transformResult) => {
      const format = formats[transformResult.format];
      const isDemo = transformResult.baseName === 'demo';

      results[format.name] = {
        name: transformResult.name,
        concern: transformResult.basename,
        source: (0, _toString2.default)(transformResult.source),
        buffer: (0, _toString2.default)(transformResult.buffer),
        in: transformResult.in,
        out: transformResult.out,
        demoBuffer: isDemo ? (0, _toString2.default)(transformResult.demoBuffer) : null,
        demoSource: isDemo ? (0, _toString2.default)(transformResults.demoSource) : null
      };

      return results;
    }, {});

    pattern.meta = Object.entries(pattern.files).reduce((results, entry) => {
      const _entry2 = _slicedToArray(entry, 2);

      const file = _entry2[1];

      const meta = file.meta || {};

      const _meta$resources = meta.resources;
      const resources = _meta$resources === undefined ? [] : _meta$resources;
      const _meta$dependencies = meta.dependencies;
      const dependencies = _meta$dependencies === undefined ? [] : _meta$dependencies;
      const _meta$devDependencies = meta.devDependencies;
      const devDependencies = _meta$devDependencies === undefined ? [] : _meta$devDependencies;
      const _meta$scriptDependenc = meta.scriptDependencies;
      const scriptDependencies = _meta$scriptDependenc === undefined ? [] : _meta$scriptDependenc;


      return _extends({}, results, {
        dependencies: [].concat(_toConsumableArray(results.dependencies || []), _toConsumableArray(dependencies)),
        devDependencies: [].concat(_toConsumableArray(results.devDependencies || []), _toConsumableArray(devDependencies)),
        scriptDependencies: [].concat(_toConsumableArray(results.scriptDependencies || []), _toConsumableArray(scriptDependencies)),
        resources: [].concat(_toConsumableArray(results.resources || []), _toConsumableArray(resources))
      });
    }, {});
  });

  return function transform(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _lodash = require('lodash');

const _getTransform = require('./get-transform');

var _getTransform2 = _interopRequireDefault(_getTransform);

const _toString = require('./to-string');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = transform;
module.exports = exports.default;