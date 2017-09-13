'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('isomorphic-fetch');

const _lodash = require('lodash');

exports.default = fetch;


const defaultHeaders = {
  headers: { accept: 'application/json' },
  credentials: 'include'
};

function fetch(uri, userHeaders) {
  const headers = userHeaders === false ? {} : (0, _lodash.merge)({}, userHeaders, defaultHeaders);

  return global.fetch(uri, headers);
}