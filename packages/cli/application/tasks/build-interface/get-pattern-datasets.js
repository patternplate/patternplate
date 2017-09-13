'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _throat = require('throat');

const _throat2 = _interopRequireDefault(_throat);

const _resolve = require('resolve');

const _fp = require('lodash/fp');

const _lodash = require('lodash');

const _zenObservable = require('zen-observable');

const _zenObservable2 = _interopRequireDefault(_zenObservable);

const _getPatternIds = require('./get-pattern-ids');

const _getPatternIds2 = _interopRequireDefault(_getPatternIds);

const _isPattern = require('./is-pattern');

const _isPattern2 = _interopRequireDefault(_isPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = patternMetaData;


const getPatternMetaData = require((0, _resolve.sync)('@patternplate/server/library/get-pattern-meta-data'));

function patternMetaData(app, client, server) {
  return new _zenObservable2.default(observer => {
    let count = 1;

    (0, _getPatternIds2.default)(app, client, server).then(patterns => patterns.filter(_isPattern2.default)).then(patterns => {
      const idPad = (0, _fp.padEnd)((0, _fp.max)(patterns.map(p => p.id.length)));

      const jobs = patterns.map((0, _throat2.default)(1, (() => {
        const _ref = _asyncToGenerator(function* (pattern) {
          observer.next({
            message: `${idPad(pattern.id)} ${count}/${patterns.length}`
          });
          const data = yield getPatternMetaData(server, pattern.id, 'index');

          (0, _lodash.merge)(data, pattern, {
            variants: {},
            environmentNames: data.environments.map((env) => {
              return env.name;
            })
          });

          count += 1;
          observer.next({ data });
          return data;
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      })()));

      return Promise.all(jobs).then(() => {
        observer.next({ message: `${patterns.length}/${patterns.length}` });
        observer.complete();
      });
    });
  });
}
module.exports = exports.default;