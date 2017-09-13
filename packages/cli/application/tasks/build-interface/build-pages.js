'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _fp = require('lodash/fp');

const _lodash = require('lodash');

const _zenObservable = require('zen-observable');

const _zenObservable2 = _interopRequireDefault(_zenObservable);

const _build = require('./build');

const _build2 = _interopRequireDefault(_build);

const _clientRequire = require('./client-require');

const _clientRequire2 = _interopRequireDefault(_clientRequire);

const _writeEach = require('./write-each');

const _writeEach2 = _interopRequireDefault(_writeEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

// Const renderPage = clientRequire('render-page');

exports.default = buildPages;


function buildPages(ids, target, context) {
  return new _zenObservable2.default(observer => {
    const app = context.app;
    const rewriter = context.rewriter;

    const idPad = (0, _fp.padEnd)((0, _fp.max)(ids.map(id => id.id.length)));
    const renderFilters = { flags: context.flags };

    const pages = ids.reduce((pages, page) => {
      page.relative.forEach((_, index) => {
        const relative = page.relative.slice(0, index + 1);
        const id = relative.join('/');
        pages[id] = { id, name: `${id}/index.html`, relative: [] };
      });

      pages[page.id] = page;
      return pages;
    }, {});

    (0, _build2.default)((0, _lodash.values)(pages), {
      read: function read(id, ids, count) {
        return _asyncToGenerator(function* () {
          observer.next(`${context.verbose ? 'Page files: ' : ''}${idPad(id.id)} ${count}/${ids.length}`);
          return renderPage(app, `/pattern/${id.id}`, renderFilters);
        })();
      },
      write: function write(page, id) {
        return _asyncToGenerator(function* () {
          const pagePath = _path2.default.resolve.apply(_path2.default, [target].concat(_toConsumableArray(id.relative), [id.name]));
          return (0, _writeEach2.default)(page, [pagePath], rewriter);
        })();
      },
      done: function done() {
        observer.next(`${context.verbose ? 'Page files: ' : ''}${ids.length}/${ids.length}`);
        observer.complete();
      }
    }).catch(err => observer.error(err));
  });
}
module.exports = exports.default;