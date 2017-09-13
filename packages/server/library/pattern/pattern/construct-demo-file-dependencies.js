'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _constructFileDependencies = require('./construct-file-dependencies');

const _constructFileDependencies2 = _interopRequireDefault(_constructFileDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = constructDemoFileDependencies;


function matchFileName(fileNames, search) {
  if (search.length > 1) {
    return fileNames.find(fileName => search.includes(fileName));
  }

  const _search = _slicedToArray(search, 1);

  const exact = _search[0];

  return fileNames.find(fileName => fileName === exact);
}

function constructDemoFileDependencies(dependencies, search) {
  return Object.entries(dependencies).reduce((results, entry) => {
    const _entry = _slicedToArray(entry, 2);

    const dependencyName = _entry[0];
    const dependencyPattern = _entry[1];
    const files = dependencyPattern.files;


    if (!files) {
      return results;
    }

    const fileNames = Object.keys(files);
    const matchedFileName = matchFileName(fileNames, search);
    const dependencyFile = dependencyPattern.files[matchedFileName];

    if (!dependencyFile) {
      return results;
    }

    if (dependencyFile.path) {
      dependencyFile.dependencies = (0, _constructFileDependencies2.default)(dependencyPattern.dependencies, search);

      results[dependencyName] = dependencyFile;
    }
    return results;
  }, {});
}
module.exports = exports.default;