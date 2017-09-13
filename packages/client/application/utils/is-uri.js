'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURI;

const _url = require('url');

const _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isURI(input) {
  let _url$parse = _url2.default.parse(input),
      host = _url$parse.host,
      hostname = _url$parse.hostname;

  return [host, hostname].every(Boolean);
}