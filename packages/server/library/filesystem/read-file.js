'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _sander = require('sander');

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const defaults = {
  cache: null
};

function cacheIo(fn, cache) {
  return (() => {
    const _ref = _asyncToGenerator(function* (file) {
      const key = `fs:readfile:${file}`;
      const cached = cache.get(key);

      if (cached) {
        return cached;
      }

      const content = yield fn(file);
      cache.set(key, content);
      return content;
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })();
}

exports.default = options => {
  const settings = _extends({}, defaults, options);
  const cache = settings.cache;

  const cacheFn = cache ? fn => cacheIo(fn, cache) : fn => fn;

  return cacheFn(_sander.readFile);
};

module.exports = exports.default;