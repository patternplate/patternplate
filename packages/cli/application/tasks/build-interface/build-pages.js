'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fp = require('lodash/fp');

var _lodash = require('lodash');

var _zenObservable = require('zen-observable');

var _zenObservable2 = _interopRequireDefault(_zenObservable);

var _build = require('./build');

var _build2 = _interopRequireDefault(_build);

var _clientRequire = require('./client-require');

var _clientRequire2 = _interopRequireDefault(_clientRequire);

var _writeEach = require('./write-each');

var _writeEach2 = _interopRequireDefault(_writeEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const renderPage = clientRequire('render-page');

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
				pages[id] = { id: id, name: `${id}/index.html`, relative: [] };
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
module.exports = exports['default'];