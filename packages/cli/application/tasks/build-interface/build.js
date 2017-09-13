'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const build = (() => {
  const _ref = _asyncToGenerator(function* () {
    const items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    const options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    let count = 1;
    const c = options.concurrency || 1;

    const ident = (() => {
      const _ref2 = _asyncToGenerator(function* (i) {
        return i;
      });

      return function ident(_x3) {
        return _ref2.apply(this, arguments);
      };
    })();
    const read = options.read || ident;
    const write = options.write || ident;
    const done = options.done || ident;

    const jobs = items.map((0, _throat2.default)(c, (() => {
      const _ref3 = _asyncToGenerator(function* (item) {
        const fetched = yield read(item, items, count);
        const result = yield write(fetched, item, items, count);
        count++;
        return result;
      });

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    })()));

    const results = yield Promise.all(jobs);
    return done(items, results, count);
  });

  return function build() {
    return _ref.apply(this, arguments);
  };
})();

const _throat = require('throat');

var _throat2 = _interopRequireDefault(_throat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = build;
module.exports = exports.default;