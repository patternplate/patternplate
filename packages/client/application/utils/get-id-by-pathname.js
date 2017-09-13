'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getIdByPathname;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _urlQuery = require('./url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIdByPathname(pathname) {
	var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

	var parsed = _urlQuery2.default.parse(pathname);
	return _path2.default.relative(base, parsed.pathname);
}