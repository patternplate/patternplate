'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIdByPathname;

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _urlQuery = require('./url-query');

const _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIdByPathname(pathname) {
  const base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  const parsed = _urlQuery2.default.parse(pathname);
  return _path2.default.relative(base, parsed.pathname);
}