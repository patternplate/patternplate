'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _lodash = require('lodash');

const _getPatternRetriever = require('./utilities/get-pattern-retriever');

const _getPatternRetriever2 = _interopRequireDefault(_getPatternRetriever);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  const _ref = _asyncToGenerator(function* (application, id, filters, out, environment) {
    filters.environments = [environment].filter(Boolean);

    const _ref2 = yield (0, _getPatternRetriever2.default)(application)(id, filters, environment, ['read', 'transform']);

    const _ref3 = _slicedToArray(_ref2, 1);

    const pattern = _ref3[0];


    if (!pattern) {
      return null;
    }

    // Find a file with matching out format
    const file = (0, _lodash.find)(Object.values(pattern.results), { out }) || {};
    return file.buffer;
  });

  return function (_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
})();

module.exports = exports.default;