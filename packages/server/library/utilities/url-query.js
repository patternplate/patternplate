'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

exports.format = format;
exports.parse = parse;

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _url = require('url');

const _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

function has(token) {
  return item => item.includes(token);
}

function div(token) {
  return item => item.split(token).slice(0, 2);
}

function not(fn) {
  return function () {
    return !fn.apply(undefined, arguments);
  };
}

function format() {
  const parsed = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  const query = Object.entries(parsed.query || {}).reduce((result, entry) => [].concat(_toConsumableArray(result), [entry.join('--')]), []);

  const extension = _path2.default.extname(parsed.pathname || '');

  const before = extension ? _path2.default.dirname(parsed.pathname) : parsed.pathname;
  const after = extension ? _path2.default.basename(parsed.pathname) : '';
  return [before, query, after].filter(Boolean).join('/');
}

function parse() {
  const urlPath = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  const parsed = _url2.default.parse(urlPath);
  const raw = parsed.pathname || '';

  const pathname = raw.split('/').filter(not(has('--'))).join('/');

  const query = raw.split('/').filter(has('--')).map(div('--')).reduce((registry, entry) => {
    const _entry = _slicedToArray(entry, 2);

    const key = _entry[0];
    const value = _entry[1];

    registry[key] = value;
    return registry;
  }, {});

  return {
    pathname,
    query
  };
}

exports.default = { parse, format };