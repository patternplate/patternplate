'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let applyTransform = (() => {
	var _ref2 = _asyncToGenerator(function* (fn, file, config) {
		try {
			const copy = _extends({}, file, { in: config.in, out: config.out });
			copy.in = config.inFormat;
			copy.out = config.outFormat;
			return yield fn(copy, null, config);
		} catch (error) {
			throw augmentTransformError(error, file, config.name);
		}
	});

	return function applyTransform(_x3, _x4, _x5) {
		return _ref2.apply(this, arguments);
	};
})();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = applyTransforms;


function applyTransforms(file, transformNames, options) {
	const transformConfigs = options.transformConfigs;
	const transformFunctions = options.transformFunctions;


	return transformNames.reduce((() => {
		var _ref = _asyncToGenerator(function* (queue, name) {
			const config = _extends({}, transformConfigs[name], { name: name });

			if (!(name in transformFunctions)) {
				const available = Object.keys(transformFunctions).join(', ');
				const instructions = `Be sure to install "patternplate-transform-${name}" and configure it in ${process.cwd()}configuration/patternplate-server/transforms.js`;
				const message = `Transform "${name}" is not configured. Configured transforms: ${available}.\n${instructions}`;
				throw new Error(message);
			}

			const fn = transformFunctions[name];

			const results = yield queue;
			const file = results[results.length - 1];
			const result = yield applyTransform(fn, file, config);

			if (!result) {
				const message = `Transform ${name} did not return a file object for ${file.pattern.id}:${file.path}`;
				throw new Error(message);
			}

			results.push(result);
			return results;
		});

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	})(), Promise.resolve([file]));
}

function augmentTransformError(error, file, transformName) {
	error.pattern = error.pattern || file.pattern.id;
	error.file = error.file || error.fileName || file.path;
	error.fileName = error.file;
	error.transform = error.transform || transformName;

	error.message = [`${error.pattern}:${_path2.default.basename(error.file)} [${error.transform}]`, error.message].join('\n');

	return error;
}
module.exports = exports['default'];