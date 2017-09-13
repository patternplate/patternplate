'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _lodash = require('lodash');

exports.default = normalizeFormats;


function normalizeFormats() {
  const formats = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return Object.entries(formats).reduce((formats, entry) => {
    const _entry = _slicedToArray(entry, 2);

    const extname = _entry[0];
    const format = _entry[1];

    const defaults = {
      name: extname,
      build: false,
      importStatement: i => `import ${i}`,
      transforms: []
    };
    formats[extname] = (0, _lodash.merge)(defaults, {
      build: format.build,
      name: format.name,
      importStatement: format.importStatement,
      transforms: format.transforms
    });
    return formats;
  }, {});
}
module.exports = exports.default;