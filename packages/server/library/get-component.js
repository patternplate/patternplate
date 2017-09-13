'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

let getComponent = (() => {
	var _ref = _asyncToGenerator(function* (app, id) {
		let env = arguments.length <= 2 || arguments[2] === undefined ? 'index' : arguments[2];

		const mount = app.configuration.patterns.mount || {};
		_assert2.default.ok(Array.isArray(mount.transforms), 'mount.transforms has to be an array');
		_assert2.default.ok(typeof mount.name === 'string', 'mount.format has to be a string');
		_assert2.default.ok(typeof mount.name === 'string', 'mount.name has to be a string');

		const cwd = app.runtime.patterncwd || app.runtime.cwd;
		const base = _path2.default.resolve(cwd, './patterns');

		const transforms = app.configuration.transforms;

		const first = mount.transforms[0];
		const last = mount.transforms[mount.transforms.length - 1];

		const inFormat = transforms[first].inFormat;
		const outFormat = transforms[last].outFormat;


		_assert2.default.ok(typeof inFormat === 'string', `transforms.${first}.inFormat has to be a string`);
		_assert2.default.ok(typeof outFormat === 'string', `transforms.${last}.outFormat has to be a string`);

		const filters = {
			environments: [env],
			outFormats: [outFormat],
			inFormats: [inFormat]
		};

		const config = (0, _lodash.merge)({}, app.configuration, {
			patterns: {
				formats: {
					[mount.format]: {
						name: mount.name,
						transforms: mount.transforms
					}
				}
			}
		});

		var _ref2 = yield (0, _getPatterns2.default)({
			id: id,
			base: base,
			config: config,
			factory: app.pattern.factory,
			filters: filters,
			transforms: app.transforms,
			log: app.log
		}, app.cache);

		var _ref3 = _slicedToArray(_ref2, 1);

		var _ref3$ = _ref3[0];
		const pattern = _ref3$ === undefined ? {} : _ref3$;
		var _pattern$results = pattern.results;
		const results = _pattern$results === undefined ? {} : _pattern$results;


		return results[mount.name] ? results[mount.name] : null;
	});

	return function getComponent(_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _getPatterns = require('./utilities/get-patterns');

var _getPatterns2 = _interopRequireDefault(_getPatterns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getComponent;
module.exports = exports['default'];