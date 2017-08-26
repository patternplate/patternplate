'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

let boilerplate = (() => {
	var _ref = _asyncToGenerator(function* () {
		let options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		/*eslint-disable no-process-env */

		let augmented = Object.assign({}, {
			'cwd': process.cwd(),
			'base': options.base || (0, _path.resolve)(__dirname, '../'),
			'env': process.env.NODE_ENV || 'development',
			'name': options.name || 'boilerplate-server'
		}, options, { 'api': options });

		return yield (0, _boot2.default)(augmented);
	});

	return function boilerplate() {
		return _ref.apply(this, arguments);
	};
})();

var _path = require('path');

var _boot = require('./boot');

var _boot2 = _interopRequireDefault(_boot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = boilerplate;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9saWJyYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJhdWdtZW50ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9jZXNzIiwiY3dkIiwiYmFzZSIsIl9fZGlybmFtZSIsImVudiIsIk5PREVfRU5WIiwibmFtZSIsImJvaWxlcnBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OzhCQUlBLGFBQTRDO0FBQUEsTUFBZkEsT0FBZSx5REFBTCxFQUFLOztBQUMzQzs7QUFFQSxNQUFJQyxZQUFZQyxPQUFPQyxNQUFQLENBQWUsRUFBZixFQUFtQjtBQUNqQyxVQUFPQyxRQUFRQyxHQUFSLEVBRDBCO0FBRWpDLFdBQVFMLFFBQVFNLElBQVIsSUFBZ0IsbUJBQVNDLFNBQVQsRUFBb0IsS0FBcEIsQ0FGUztBQUdqQyxVQUFPSCxRQUFRSSxHQUFSLENBQVlDLFFBQVosSUFBd0IsYUFIRTtBQUlqQyxXQUFRVCxRQUFRVSxJQUFSLElBQWdCO0FBSlMsR0FBbkIsRUFLWlYsT0FMWSxFQUtILEVBQUUsT0FBT0EsT0FBVCxFQUxHLENBQWhCOztBQU9BLFNBQU8sTUFBTSxvQkFBTUMsU0FBTixDQUFiO0FBQ0EsRTs7aUJBWGNVLFc7Ozs7O0FBSmY7O0FBRUE7Ozs7Ozs7O2tCQWVlQSxXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgYm9vdCBmcm9tICcuL2Jvb3QnO1xuXG5hc3luYyBmdW5jdGlvbiBib2lsZXJwbGF0ZSAoIG9wdGlvbnMgPSB7fSApIHtcblx0Lyplc2xpbnQtZGlzYWJsZSBuby1wcm9jZXNzLWVudiAqL1xuXG5cdGxldCBhdWdtZW50ZWQgPSBPYmplY3QuYXNzaWduKCB7fSwge1xuXHRcdFx0J2N3ZCc6IHByb2Nlc3MuY3dkKCksXG5cdFx0XHQnYmFzZSc6IG9wdGlvbnMuYmFzZSB8fCByZXNvbHZlKCBfX2Rpcm5hbWUsICcuLi8nICksXG5cdFx0XHQnZW52JzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50Jyxcblx0XHRcdCduYW1lJzogb3B0aW9ucy5uYW1lIHx8ICdib2lsZXJwbGF0ZS1zZXJ2ZXInXG5cdFx0fSwgb3B0aW9ucywgeyAnYXBpJzogb3B0aW9ucyB9ICk7XG5cblx0cmV0dXJuIGF3YWl0IGJvb3QoIGF1Z21lbnRlZCApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBib2lsZXJwbGF0ZTtcbiJdfQ==