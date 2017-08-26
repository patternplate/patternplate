'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

let writeEach = (() => {
	var _ref = _asyncToGenerator(function* (input, targets) {
		let rewriter = arguments.length <= 2 || arguments[2] === undefined ? ident : arguments[2];

		const content = (0, _isStream2.default)(input) ? yield (0, _streamToString2.default)(input) : input;
		const jobs = targets.map((() => {
			var _ref2 = _asyncToGenerator(function* (target) {
				return sander.writeFile(target, rewriter(content, target));
			});

			return function (_x4) {
				return _ref2.apply(this, arguments);
			};
		})());
		return Promise.all(jobs);
	});

	return function writeEach(_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

var _isStream = require('is-stream');

var _isStream2 = _interopRequireDefault(_isStream);

var _streamToString = require('stream-to-string');

var _streamToString2 = _interopRequireDefault(_streamToString);

var _sander = require('sander');

var sander = _interopRequireWildcard(_sander);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = writeEach;

const ident = i => i;

module.exports = exports['default'];