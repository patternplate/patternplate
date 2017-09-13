'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const loadJson = (() => {
  const _ref = _asyncToGenerator(function* (file) {
    const contents = String((yield sander.readFile(file)));
    try {
      return [null, (0, _parseJson2.default)(contents, file)];
    } catch (error) {
      const message = error.message;

      const _ref2 = /(\d+:\d+)/.exec(message) || [''];

      const _ref3 = _slicedToArray(_ref2, 1);

      const numbers = _ref3[0];

      const _numbers$split$map$fi = numbers.split(':').map((n) => {
        return Number(n);
      }).filter((n) => {
        return !isNaN(n);
      });

      const _numbers$split$map$fi2 = _slicedToArray(_numbers$split$map$fi, 2);

      const _numbers$split$map$fi3 = _numbers$split$map$fi2[0];
      const line = _numbers$split$map$fi3 === undefined ? 0 : _numbers$split$map$fi3;
      const _numbers$split$map$fi4 = _numbers$split$map$fi2[1];
      const column = _numbers$split$map$fi4 === undefined ? 0 : _numbers$split$map$fi4;


      const frame = (0, _babelCodeFrame2.default)(contents, line, column);

      const err = new Error(['', frame, message].join('\n'));
      err.filename = file;
      return [err];
    }
  });

  return function loadJson(_x) {
    return _ref.apply(this, arguments);
  };
})();

const _babelCodeFrame = require('babel-code-frame');

var _babelCodeFrame2 = _interopRequireDefault(_babelCodeFrame);

const _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

const _parseJson = require('parse-json');

var _parseJson2 = _interopRequireDefault(_parseJson);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = loadJson;
module.exports = exports.default;