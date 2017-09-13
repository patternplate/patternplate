'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _fp = require('lodash/fp');

const _zenObservable = require('zen-observable');

const _zenObservable2 = _interopRequireDefault(_zenObservable);

const _build = require('./build');

const _build2 = _interopRequireDefault(_build);

const _getTargets = require('./get-targets');

const _getTargets2 = _interopRequireDefault(_getTargets);

const _getSourceSets = require('./get-source-sets');

const _getSourceSets2 = _interopRequireDefault(_getSourceSets);

const _writeEach = require('./write-each');

const _writeEach2 = _interopRequireDefault(_writeEach);

const _serverRequire = require('./server-require');

const _serverRequire2 = _interopRequireDefault(_serverRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

// Const getPatternSource = serverRequire('get-pattern-source');
// const urlQuery = serverRequire('utilities/url-query');

exports.default = buildSources;


function buildSources(datasets, target, context) {
  return new _zenObservable2.default(observer => {
    const app = context.app;
    const rewriter = context.rewriter;

    const sourceSets = (0, _getSourceSets2.default)(datasets);
    const getSource = getPatternSource(app);

    const idPad = (0, _fp.padEnd)((0, _fp.max)(sourceSets.map(e => e.type.length + e.file.id.length + 1)));

    (0, _build2.default)(sourceSets, {
      read: function read(set, sets, count) {
        return _asyncToGenerator(function* () {
          observer.next(`${context.verbose ? 'Sources: ' : ''}${idPad(`${set.type}:${set.file.id}`)} ${count}/${sets.length}`);
          return getSource(set.file.id, set.type, set.env);
        })();
      },
      write: function write(source, set) {
        return _asyncToGenerator(function* () {
          const typePath = urlQuery.format({
            pathname: '',
            query: { type: set.type }
          });
          const baseName = _path2.default.basename(set.file.id);
          const dirName = _path2.default.dirname(set.file.id);
          const base = _path2.default.resolve(target, dirName, typePath);
          return (0, _writeEach2.default)(source.body, (0, _getTargets2.default)(base, baseName, set), rewriter);
        })();
      },
      done: function done() {
        observer.next(`${context.verbose ? 'Sources: ' : ''}${sourceSets.length}/${sourceSets.length}`);
        observer.complete();
      }
    }).catch(err => observer.error(err));
  });
}
module.exports = exports.default;