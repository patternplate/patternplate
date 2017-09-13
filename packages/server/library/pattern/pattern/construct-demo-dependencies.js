'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _lodash = require('lodash');

const _constructDependencies = require('./construct-dependencies');

const _constructDependencies2 = _interopRequireDefault(_constructDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = constructDemoDependencies;


function constructDemoDependencies() {
  const patterns = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  const pool = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  return Object.entries(patterns).reduce((result, entry) => {
    const _entry = _slicedToArray(entry, 2);

    const name = _entry[0];
    const id = _entry[1];

    const dependency = (0, _lodash.find)(pool, { id });
    if (!dependency) {
      return result;
    }
    dependency.dependencies = (0, _constructDependencies2.default)(dependency.manifest.patterns, pool);
    result[name] = dependency;
    return result;
  }, {});
}
module.exports = exports.default;