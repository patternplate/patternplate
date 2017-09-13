'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

let getPatternIds = (() => {
	var _ref = _asyncToGenerator(function* () {
		const navigation = yield getNavigation.apply(undefined, arguments);
		return (0, _getNavigationUrls2.default)(navigation);
	});

	return function getPatternIds() {
		return _ref.apply(this, arguments);
	};
})();

var _getNavigationUrls = require('./get-navigation-urls');

var _getNavigationUrls2 = _interopRequireDefault(_getNavigationUrls);

var _serverRequire = require('./server-require');

var _serverRequire2 = _interopRequireDefault(_serverRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const getNavigation = serverRequire('get-navigation');
exports.default = getPatternIds;
module.exports = exports['default'];