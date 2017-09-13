'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

let loadTransforms = (() => {
	var _ref = _asyncToGenerator(function* () {
		let config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		const transformNames = (0, _selectTransformNames2.default)(config);
		const jobs = transformNames.map(function (name) {
			return (0, _loadTransform2.default)(name);
		});
		const loaded = yield Promise.all(jobs);
		return function (app) {
			return loaded.reduce(function (transforms, transform) {
				transforms[transform.name] = transform.export(app);
				return transforms;
			}, {});
		};
	});

	return function loadTransforms() {
		return _ref.apply(this, arguments);
	};
})();

var _loadTransform = require('./load-transform');

var _loadTransform2 = _interopRequireDefault(_loadTransform);

var _selectTransformNames = require('./select-transform-names');

var _selectTransformNames2 = _interopRequireDefault(_selectTransformNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = loadTransforms;
module.exports = exports['default'];