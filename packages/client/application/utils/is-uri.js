'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isURI;

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isURI(input) {
	var _url$parse = _url2.default.parse(input),
	    host = _url$parse.host,
	    hostname = _url$parse.hostname;

	return [host, hostname].every(Boolean);
}