'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Pattern = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable max-len*/


var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fauxCache = require('./faux-cache');

var _fauxCache2 = _interopRequireDefault(_fauxCache);

var _fauxLog = require('./faux-log');

var _fauxLog2 = _interopRequireDefault(_fauxLog);

var _inject = require('./inject');

var _inject2 = _interopRequireDefault(_inject);

var _read = require('./read');

var _read2 = _interopRequireDefault(_read);

var _readManifest = require('./read-manifest');

var _readManifest2 = _interopRequireDefault(_readManifest);

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const defaultFilters = { environments: [], inFormats: [], outFormats: [] };

class Pattern {
	constructor(patternPath, base) {
		let config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
		let transforms = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
		let filters = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];
		let cache = arguments.length <= 5 || arguments[5] === undefined ? null : arguments[5];

		const id = patternPath.split(_path2.default.sep).join('/');
		this.options = config.options || {};
		this.base = base;
		this.cache = cache || _fauxCache2.default;
		this.config = _extends({ parents: [] }, config);
		this.dependencies = {};
		this.demoDependencies = {};
		this.environments = { index: { manifest: { name: 'index' } } };
		this.files = {};
		this.filters = _extends({}, defaultFilters, filters);
		this.id = id;
		this.isEnvironment = id.includes('@environment');
		this.log = config.log || _fauxLog2.default;
		this.manifest = {};
		this.path = _path2.default.resolve(base, id);
		this.results = {};
		this.transforms = transforms;
	}

	inject(manifest, patterns) {
		(0, _inject2.default)(this, manifest, patterns);
		return this;
	}

	read() {
		var _this = this;

		let path = arguments.length <= 0 || arguments[0] === undefined ? this.path : arguments[0];
		return _asyncToGenerator(function* () {
			yield (0, _read2.default)(_this, path);
			return _this;
		})();
	}

	readManifest() {
		var _this2 = this;

		let path = arguments.length <= 0 || arguments[0] === undefined ? this.path : arguments[0];
		return _asyncToGenerator(function* () {
			yield (0, _readManifest2.default)(_this2, path);
			return _this2;
		})();
	}

	transform() {
		var _this3 = this;

		return _asyncToGenerator(function* () {
			yield (0, _transform2.default)(_this3);
			return _this3;
		})();
	}
}

exports.Pattern = Pattern;

exports.default = (() => {
	var _ref = _asyncToGenerator(function* () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return yield new (Function.prototype.bind.apply(Pattern, [null].concat(args)))();
	});

	function patternFactory() {
		return _ref.apply(this, arguments);
	}

	return patternFactory;
})();