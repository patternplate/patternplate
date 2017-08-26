'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getPatternRetriever;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _getPatterns = require('./get-patterns');

var _getPatterns2 = _interopRequireDefault(_getPatterns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPatternRetriever(application) {
	_assert2.default.ok((0, _lodash.isObject)(application), 'application should be an object');

	const cfg = application.configuration;
	const factory = application.pattern.factory;
	const transforms = application.transforms;
	const log = application.log;

	_assert2.default.ok((0, _lodash.isObject)(cfg), 'application.configuration should be an object');
	_assert2.default.ok((0, _lodash.isFunction)(factory), 'application.pattern.factory should be a function');
	_assert2.default.ok((0, _lodash.isObject)(application.transforms), 'application.transforms should be an object');

	const cwd = application.runtime.patterncwd || application.runtime.cwd;
	const base = _path2.default.resolve(cwd, cfg.patterns.path);

	return function (id) {
		let filters = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
		let environment = arguments[2];
		let cmds = arguments.length <= 3 || arguments[3] === undefined ? ['read', 'transform'] : arguments[3];
		let options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

		_assert2.default.ok((0, _lodash.isString)(id), 'id should be a string');
		_assert2.default.ok((0, _lodash.isObject)(filters), 'filters should be an object');
		_assert2.default.ok((0, _lodash.isString)(environment), 'environment should be a string');
		_assert2.default.ok((0, _lodash.isArray)(cmds), 'cmds should be an array');

		const config = (0, _lodash.merge)({}, cfg, { options: options });

		return (0, _getPatterns2.default)({
			id: id, base: base, config: config, factory: factory, transforms: transforms, log: log, filters: filters, environment: environment
		}, application.cache, cmds);
	};
}
module.exports = exports['default'];