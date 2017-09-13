'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loadTransforms = undefined;

let transforms = (() => {
	var _ref = _asyncToGenerator(function* (application) {
		const initTransforms = yield (0, _loadTransforms2.default)(application.configuration.transforms);
		return initTransforms(application);
	});

	return function transforms(_x) {
		return _ref.apply(this, arguments);
	};
})();

var _loadTransforms = require('./load-transforms');

var _loadTransforms2 = _interopRequireDefault(_loadTransforms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = transforms;
exports.loadTransforms = _loadTransforms2.default;