'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const getPattern = (() => {
  const _ref = _asyncToGenerator(function* (application, id, environment, cmds) {
    const retrieve = yield (0, _getPatternRetriever2.default)(application);
    const results = yield retrieve(id, { environments: [environment] }, environment, cmds);
    return results;
  });

  return function getPattern(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
})();

const _getPatternRetriever = require('./utilities/get-pattern-retriever');

var _getPatternRetriever2 = _interopRequireDefault(_getPatternRetriever);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; } // Import {merge} from 'lodash';

// import flatPick from './utilities/flat-pick';


exports.default = (() => {
  const _ref2 = _asyncToGenerator(function* (application, id, environment) {
    const cmds = arguments.length <= 3 || arguments[3] === undefined ? ['read'] : arguments[3];

    const _ref3 = yield getPattern(application, id, environment, cmds);

    const _ref4 = _slicedToArray(_ref3, 1);

    const pattern = _ref4[0];

    return pattern;
  });

  return function (_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
})();

module.exports = exports.default;