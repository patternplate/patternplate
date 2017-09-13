'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _lodash = require('lodash');

const _constructFileDependencies = require('./construct-file-dependencies');

const _constructFileDependencies2 = _interopRequireDefault(_constructFileDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = inject;


function inject(pattern, manifest, patterns) {
  // Construct manifest
  pattern.manifest = patterns.reduce((registry, pattern) => {
    const id = pattern.id;

    return (0, _lodash.merge)(registry, {
      patterns: {
        [id.split('/').join('-')]: id
      }
    });
  }, manifest);

  // Construct pattern dependencies
  pattern.dependencies = Object.entries(pattern.manifest.patterns).reduce((dependencies, patternEntry) => {
    const _patternEntry = _slicedToArray(patternEntry, 2);

    const localName = _patternEntry[0];
    const id = _patternEntry[1];

    return (0, _lodash.merge)(dependencies, {
      [localName]: (0, _lodash.find)(patterns, { id })
    });
  }, {});

  const formats = (0, _lodash.uniq)(Object.values(pattern.config.patterns.formats), 'name');

  // Construct files from dependencies
  pattern.files = formats.reduce((files, formatConfig) => {
    const format = pattern.config.transforms[formatConfig.transforms[0]].inFormat;

    if (pattern.filters.inFormats.indexOf(format) === -1) {
      return files;
    }

    const baseName = 'index';
    const ext = `.${format}`;
    const name = `${baseName}${ext}`;
    const dependencies = (0, _constructFileDependencies2.default)(pattern.dependencies, [name]);
    const manifestPath = _path2.default.resolve(pattern.base, '@environments', manifest.name, name);
    const importStatement = formatConfig.importStatement;


    if (typeof importStatement !== 'function') {
      throw new TypeError(`Missing config key "importStatement" for format ${format}`);
    }

    // Import everything mentioned in the virtual manifest file
    const required = Object.keys(pattern.manifest.patterns)
    // If it is in the file dependencies
    .filter(localName => localName in dependencies);

    const source = required.map(localName => importStatement(localName)).join('\n');

    const buffer = source;

    return (0, _lodash.merge)(files, {
      [name]: {
        buffer,
        source,
        name,
        basename: baseName,
        dependencies,
        ext,
        format,
        fs: {},
        path: manifestPath,
        pattern,
        meta: {
          dependencies: [],
          devDependencies: []
        }
      }
    }, (a, b) => {
      if (Buffer.isBuffer(b)) {
        return b;
      }
    });
  }, {});
}
module.exports = exports.default;