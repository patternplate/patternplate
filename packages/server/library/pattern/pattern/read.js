'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const read = (() => {
  const _ref = _asyncToGenerator(function* (pattern, subPath) {
    const read = (0, _readFile2.default)({ cache: pattern.cache });

    const readStart = new Date();
    pattern.log.silly(`Reading files for ${pattern.id}`);

    const fileList = yield (0, _readDirectory2.default)(subPath);
    const fileListDuration = _chalk2.default.grey(`[${new Date() - readStart}ms]`);
    pattern.log.silly(`Listed ${fileList.length} files for ${pattern.id} ${fileListDuration}`);

    // Use filter, use all formats if none given
    const inFormats = pattern.filters.inFormats.length > 0 ? pattern.filters.inFormats : (0, _lodash.uniq)(Object.keys(pattern.config.patterns.formats));

    const filterOutFormats = pattern.filters.outFormats.length ? function (outFormat) {
      return pattern.filters.outFormats.includes(outFormat);
    } : function () {
      return true;
    };

    // Determine available requested out formats
    const outFormats = inFormats.reduce((result, format) => {
      const formatConfig = pattern.config.patterns.formats[format] || {
        transforms: []
      };
      const transformNames = formatConfig.transforms;


      if (!transformNames.length) {
        result.push(format);
        return result;
      }

      const transformOutFormats = transformNames.map((transformName) => {
        return [transformName, pattern.config.transforms[transformName] || {}];
      }).map((entry) => {
        return entry[1].outFormat || entry[0];
      });

      const formatName = transformOutFormats[transformOutFormats.length - 1];

      if (!result.includes(formatName)) {
        result.push(formatName);
      }

      return result;
    }, []).filter(filterOutFormats);

    // Determine in formats for available out formats
    const inOutFormats = outFormats.reduce((result, format) => {
      const transforms = Object.entries(pattern.config.transforms).map((entry) => {
        const _entry = _slicedToArray(entry, 2);

        const name = _entry[0];
        const config = _entry[1];

        return config.outFormat === format ? name : null;
      }).filter(Boolean);

      const formatNames = Object.entries(pattern.config.patterns.formats).map((entry) => {
        const _entry2 = _slicedToArray(entry, 2);

        const name = _entry2[0];
        const config = _entry2[1];

        return transforms.indexOf(config.transforms[config.transforms.length - 1]) > -1 ? name : null;
      }).filter(Boolean);

      return [].concat(_toConsumableArray(result), _toConsumableArray(formatNames));
    }, []);

    const filteredFormats = pattern.filters.outFormats.length > 0 ? inOutFormats : inFormats;

    pattern.log.silly(`${pattern.id} has ${filteredFormats.length} formats available: ${_chalk2.default.grey(filteredFormats)}`);

    // Determine which basenames to read
    const baseNames = pattern.filters.baseNames && pattern.filters.baseNames.length > 0 ? pattern.filters.baseNames : ['index', 'demo'];

    // Get the relevant pattern files
    const files = fileList.filter((file) => {
      const fileExtension = _path2.default.extname(file);
      const fileRumpName = _path2.default.basename(file, fileExtension);
      return fileExtension && baseNames.indexOf(fileRumpName) > -1;
    });

    // Determine the formats available for request
    const out = files.map((file) => {
      const inFileFormat = _path2.default.extname(file).slice(1);
      const formatConfig = pattern.config.patterns.formats[inFileFormat] || {};
      const name = formatConfig.name || '';
      const transformNames = formatConfig.transforms || [];
      const lastTransform = pattern.config.transforms[transformNames[transformNames.length - 1]] || {};

      return {
        name,
        type: name.toLowerCase(),
        extension: lastTransform.outFormat || inFileFormat
      };
    });

    // Provide meta data about formats
    pattern.outFormats = out;
    pattern.inFormats = inFormats;

    const filterFiles = filteredFormats.length ? function (file) {
      return filteredFormats.includes(_path2.default.extname(file).slice(1));
    } : function () {
      return true;
    };

    // Get the files matching our current filter
    const matchingFiles = files.filter(filterFiles).map((file) => {
      return _path2.default.resolve(pattern.base, pattern.id, file);
    });

    const matchingFilesList = _chalk2.default.grey(`[${matchingFiles.map((file) => {
      return _path2.default.basename(file);
    })}]`);
    pattern.log.silly(`Using ${matchingFiles.length} of ${files.length} files for ${pattern.id}: ${matchingFilesList}`);

    const manifestStart = new Date();
    yield pattern.readManifest(subPath);

    // Read manifest information
    const manifestReadDuration = _chalk2.default.grey(`[${new Date() - manifestStart}ms]`);
    pattern.log.silly(`Read manifest for ${pattern.id} ${manifestReadDuration}`);

    // Read in relevant file information
    const fileData = yield Promise.all(matchingFiles.map((0, _throat2.default)(5, (() => {
      const _ref2 = _asyncToGenerator(function* (file) {
        const fileFs = yield (0, _sander.stat)(file);
        fileFs.node = fileFs; // Backwards compatibility

        const fileExt = _path2.default.extname(file);
        const fileBaseName = _path2.default.basename(file);
        const fileRumpName = _path2.default.basename(file, fileExt);
        const fileFormat = fileExt.slice(1);

        // Check if the format/transform config requires us to fetch the buffer
        const formatConfig = pattern.config.patterns.formats[fileFormat] || {};
        const transformNames = formatConfig.transforms || [];
        const transforms = transformNames.map((name) => {
          return pattern.config.transforms[name] || {};
        });
        const resolveDependencies = transforms.some((transform) => {
          return transform.resolveDependencies !== false;
        });
        const isRoot = pattern.config.parents.length === 0;

        const fileContents = isRoot || resolveDependencies ? yield read(file) : Buffer.from('', 'utf-8');

        if (isRoot === false && resolveDependencies) {
          pattern.log.silly(`Reading ${pattern.id} as dependeny of ${pattern.config.parents[pattern.config.parents.length - 1]}`);
        }

        const dependencies = (0, _constructFileDependencies2.default)(pattern.dependencies, [`index${fileExt}`]);

        if (fileRumpName === 'demo') {
          const demoDependencies = (0, _constructDemoFileDependencies2.default)(pattern.demoDependencies, [`index${fileExt}`]);
          const overridden = Object.keys(demoDependencies).filter((key) => {
            return key in dependencies;
          });

          if (overridden.length > 0) {
            throw new Error(`Found .demoPattern entries duplicating .pattern entries in ${pattern.id}'s manifest': ${overridden.join(', ')}. Remove them from .demoPatterns.`);
          }

          (0, _lodash.merge)(dependencies, demoDependencies);
        }

        // Collect data in format expected by transforms
        return {
          basename: fileRumpName,
          buffer: fileContents,
          dependencies,
          ext: fileExt,
          format: fileFormat,
          fs: fileFs,
          name: fileBaseName,
          path: file,
          pattern,
          source: fileContents,
          meta: {
            dependencies: [],
            devDependencies: []
          }
        };
      });

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    })())));

    // Convert to consumable format
    pattern.files = fileData.reduce((results, data) => {
      return _extends({}, results, { [data.name]: data });
    }, {});

    // Expose which file to use for rendering
    const basenames = matchingFiles.map((matchingFile) => {
      return rump(matchingFile);
    });
    pattern.use = basenames.includes('demo') ? ['demo'] : ['index'];

    // Read last-modified
    const readDuration = _chalk2.default.grey(`[${new Date() - readStart}ms]`);
    pattern.log.silly(`Read files for ${pattern.id}. ${readDuration}`);
    return pattern;
  });

  return function read(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

const _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _lodash = require('lodash');

var _sander = require('sander');

const _throat = require('throat');

var _throat2 = _interopRequireDefault(_throat);

const _constructDemoFileDependencies = require('./construct-demo-file-dependencies');

var _constructDemoFileDependencies2 = _interopRequireDefault(_constructDemoFileDependencies);

const _constructFileDependencies = require('./construct-file-dependencies');

var _constructFileDependencies2 = _interopRequireDefault(_constructFileDependencies);

const _readFile = require('../../filesystem/read-file');

var _readFile2 = _interopRequireDefault(_readFile);

const _readDirectory = require('../../filesystem/read-directory');

var _readDirectory2 = _interopRequireDefault(_readDirectory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = read;


function rump(filePath) {
  return _path2.default.basename(filePath, _path2.default.extname(filePath));
}
module.exports = exports.default;