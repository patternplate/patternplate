'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serverRequire = require('./server-require');

var _serverRequire2 = _interopRequireDefault(_serverRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const urlQuery = serverRequire('utilities/url-query');

exports.default = getTargets;


function getTargets(base, baseName, set) {
	const short = _path2.default.resolve(base, baseName);
	const long = urlQuery.format({
		pathname: short,
		query: { environment: set.env }
	});
	return set.env === 'index' ? [short, long] : [long];
}
module.exports = exports['default'];