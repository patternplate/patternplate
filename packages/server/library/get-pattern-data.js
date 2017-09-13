'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

let getPattern = (() => {
	var _ref = _asyncToGenerator(function* (application, id, environment, cmds) {
		const retrieve = yield (0, _getPatternRetriever2.default)(application);
		const results = yield retrieve(id, { environments: [environment] }, environment, cmds);
		return results;
	});

	return function getPattern(_x, _x2, _x3, _x4) {
		return _ref.apply(this, arguments);
	};
})();

var _getPatternRetriever = require('./utilities/get-pattern-retriever');

var _getPatternRetriever2 = _interopRequireDefault(_getPatternRetriever);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // import {merge} from 'lodash';

// import flatPick from './utilities/flat-pick';


exports.default = (() => {
	var _ref2 = _asyncToGenerator(function* (application, id, environment) {
		let cmds = arguments.length <= 3 || arguments[3] === undefined ? ['read'] : arguments[3];

		var _ref3 = yield getPattern(application, id, environment, cmds);

		var _ref4 = _slicedToArray(_ref3, 1);

		const pattern = _ref4[0];

		return pattern;
	});

	return function (_x5, _x6, _x7) {
		return _ref2.apply(this, arguments);
	};
})();

module.exports = exports['default'];