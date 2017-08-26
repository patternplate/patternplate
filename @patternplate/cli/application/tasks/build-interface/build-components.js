'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fp = require('lodash/fp');

var _zenObservable = require('zen-observable');

var _zenObservable2 = _interopRequireDefault(_zenObservable);

var _build = require('./build');

var _build2 = _interopRequireDefault(_build);

var _getComponentSets = require('./get-component-sets');

var _getComponentSets2 = _interopRequireDefault(_getComponentSets);

var _getTargets = require('./get-targets');

var _getTargets2 = _interopRequireDefault(_getTargets);

var _writeEach = require('./write-each');

var _writeEach2 = _interopRequireDefault(_writeEach);

var _serverRequire = require('./server-require');

var _serverRequire2 = _interopRequireDefault(_serverRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const getComponent = serverRequire('get-component');

exports.default = buildComponents;


function buildComponents(datasets, target, context) {
	return new _zenObservable2.default(observer => {
		const app = context.app;
		const automount = context.automount;
		const rewriter = context.rewriter;

		const sets = (0, _getComponentSets2.default)(datasets, automount);
		const idPad = (0, _fp.padEnd)((0, _fp.max)(sets.map(set => set.id.length)));

		// Build component patterns
		(0, _build2.default)(sets, {
			read: function read(set, sets, count) {
				return _asyncToGenerator(function* () {
					observer.next(`${context.verbose ? 'Automount components: ' : ''}${idPad(set.id)} ${count}/${sets.length}`);
					return ((yield getComponent(app, set.id, set.env)) || {}).buffer;
				})();
			},
			write: function write(source, set, sets, count) {
				return _asyncToGenerator(function* () {
					const base = _path2.default.resolve.apply(_path2.default, [target].concat(_toConsumableArray(set.relative), [set.baseName]));
					const baseName = 'component.js';
					if (source) {
						return (0, _writeEach2.default)(source, (0, _getTargets2.default)(base, baseName, set), rewriter);
					}
				})();
			},
			done: function done() {
				observer.next(`${context.verbose ? 'Automount components: ' : ''}${sets.length}/${sets.length}`);
				observer.complete();
			}
		}).catch(err => observer.error(err));
	});
}
module.exports = exports['default'];