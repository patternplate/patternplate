'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('isomorphic-fetch');

var _lodash = require('lodash');

exports.default = fetch;


var defaultHeaders = {
	headers: { accept: 'application/json' },
	credentials: 'include'
};

function fetch(uri, userHeaders) {
	var headers = userHeaders === false ? {} : (0, _lodash.merge)({}, userHeaders, defaultHeaders);

	return global.fetch(uri, headers);
}