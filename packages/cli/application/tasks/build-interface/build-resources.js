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

exports.default = buildResources;


function buildResources(resources, target, context) {
  return new _zenObservable2.default(observer => {
    const idPad = (0, _fp.padEnd)((0, _fp.max)(resources.map(r => r.id.length)));

    (0, _build2.default)(resources, {
      read: function read(source, _, count) {
        return _asyncToGenerator(function* () {
          observer.next(`${context.verbose ? 'Resources: ' : ''}${idPad(source.id)} ${count}/${resources.length}`);
          return yield source.content;
        })();
      },
      write: function write(source, set) {
        return _asyncToGenerator(function* () {
          const baseName = _path2.default.basename(set.id);
          const dirName = _path2.default.dirname(set.id);
          const filePath = _path2.default.resolve(target, dirName, `${baseName}.${set.type}`);
          return (0, _writeEach2.default)(source, [filePath]);
        })();
      },
      done: function done() {
        observer.next(`${context.verbose ? 'Resources: ' : ''}${resources.length}/${resources.length}`);
        observer.complete();
      }
    }).catch(err => observer.error(err));
  });
}
module.exports = exports.default;