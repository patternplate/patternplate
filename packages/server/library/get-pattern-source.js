'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _fs = require('fs');

const _fs2 = _interopRequireDefault(_fs);

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _getPatternRetriever = require('./utilities/get-pattern-retriever');

const _getPatternRetriever2 = _interopRequireDefault(_getPatternRetriever);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getPatternSource;


function getPatternSource(application) {
  const cwd = application.runtime.patterncwd;

  return (() => {
    const _ref = _asyncToGenerator(function* (pathname, type, environment, options) {
      if (type === 'source') {
        const sourcePath = _path2.default.resolve(cwd, 'patterns', pathname);
        return {
          type: _path2.default.extname(sourcePath),
          body: _fs2.default.createReadStream(sourcePath)
        };
      }

      const id = _path2.default.dirname(pathname);
      const inFormatName = _path2.default.extname(pathname).slice(1);
      const format = application.configuration.patterns.formats[inFormatName] || {};
      const transforms = format.transforms || [];
      const transformName = transforms[transforms.length - 1];
      const transform = application.configuration.transforms[transformName];

      const basename = _path2.default.basename(pathname);
      const concern = _path2.default.basename(pathname, _path2.default.extname(pathname));

      // Configured transfoms, but invalid
      if (transforms.length && !transformName) {
        const error = new Error(`Could not determine last transform for "${basename}" of "${id}"`);
        error.status = 404;
        throw error;
      }

      // Configured transforms for format, but no matching transform config
      if (transformName && !transform) {
        const error = new Error(`Transform "${transformName}" to be applied on "${basename}" of "${id}" is not configured`);
        error.status = 404;
        throw error;
      }

      // Fall back to in format
      const outFormatName = (transform || {}).outFormat || inFormatName;

      const filters = {
        baseNames: [concern],
        environments: [environment],
        outFormats: [outFormatName]
      };

      const retrieve = (0, _getPatternRetriever2.default)(application);

      const _ref2 = yield retrieve(id, filters, environment, ['read', 'transform'], options);

      const _ref3 = _slicedToArray(_ref2, 1);

      const pattern = _ref3[0];


      if (!pattern) {
        const error = new Error(`No pattern with id ${id} found`);
        error.status = 404;
        throw error;
      }

      if (!(basename in pattern.files)) {
        const files = Object.keys(pattern.files || {});
        const error = new Error(`pattern ${id} has no file ${basename}. Available files: ${files.join(', ')}`);
        error.status = 404;
        throw error;
      }

      const file = pattern.files[basename];
      return {
        type: file.out,
        body: file.buffer,
        meta: pattern.meta
      };
    });

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  })();
}
module.exports = exports.default;