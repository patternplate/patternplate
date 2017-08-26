'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

let getDoc = (() => {
	var _ref2 = _asyncToGenerator(function* (id) {
		if (!id) {
			return null;
		}

		const file = resolve(id);

		if (!(yield (0, _pathExists2.default)(file))) {
			return null;
		}

		return (0, _vfile2.default)({
			path: _path2.default.posix.relative('./patterns', resolve(id)),
			contents: (0, _escapeHtml2.default)((yield sander.readFile(file)))
		});
	});

	return function getDoc(_x) {
		return _ref2.apply(this, arguments);
	};
})();

exports.default = docsRouteFactory;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _escapeHtml = require('escape-html');

var _escapeHtml2 = _interopRequireDefault(_escapeHtml);

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

var _vfile = require('vfile');

var _vfile2 = _interopRequireDefault(_vfile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const resolve = _path2.default.resolve.bind(null, 'patterns', '@docs');

function docsRouteFactory() {
	return (() => {
		var _ref = _asyncToGenerator(function* () {
			const doc = yield getDoc(this.params.id);
			this.type = 'json';

			if (doc === null) {
				return this.throw(404);
			}

			this.body = {
				path: doc.path,
				contents: doc.contents
			};
		});

		function docsRoute() {
			return _ref.apply(this, arguments);
		}

		return docsRoute;
	})();
}

module.exports = exports['default'];