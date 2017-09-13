'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PatternCache = undefined;

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _lruCache = require('lru-cache');

const _lruCache2 = _interopRequireDefault(_lruCache);

const _multimatch = require('multimatch');

const _multimatch2 = _interopRequireDefault(_multimatch);

const _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const namespace = new WeakMap();

function select(instance, keyPath) {
  const context = namespace.get(instance) || {};
  return (0, _lodash.get)(context, keyPath);
}

class PatternCache {

  constructor() {
    const options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    const settings = _extends({}, PatternCache.defaults, options.options);
    this.config = settings;
    const cache = (0, _lruCache2.default)(settings);
    namespace.set(this, { settings, cache });
  }

  set(key, value) {
    const cache = select(this, 'cache');

    if (!cache) {
      return null;
    }

    return cache.set(key, value);
  }

  delete() {
    const prefix = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    const raw = arguments[1];

    const cache = select(this, 'cache');

    if (!cache) {
      return null;
    }

    const pattern = raw.replace(prefix, '');

    const unprefixed = this.keys().filter(key => key.startsWith(prefix)).map(key => key.replace(prefix, ''));

    const matching = (0, _multimatch2.default)(unprefixed, [pattern]);

    matching.forEach(key => cache.del(`${prefix}${key}`));
    return matching;
  }

  get(key) {
    const cache = select(this, 'cache');

    if (!cache) {
      return null;
    }

    if (!cache.peek(key)) {
      return null;
    }

    return cache.get(key);
  }

  keys() {
    const cache = select(this, 'cache');
    return cache ? cache.keys() : [];
  }

  peek(key) {
    const cache = select(this, 'cache');
    return cache ? cache.peek(key) : false;
  }

  get length() {
    const cache = select(this, 'cache');
    return cache ? cache.length : 0;
  }

  get itemCount() {
    const cache = select(this, 'cache');
    return cache ? cache.itemCount : 0;
  }
}

PatternCache.defaults = {
  max: 50000
};
function patternCacheFactory() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(PatternCache, [null].concat(args)))();
}

exports.default = patternCacheFactory;
exports.PatternCache = PatternCache;