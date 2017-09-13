'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reselect = require('reselect');

const _seamlessImmutable = require('seamless-immutable');

const _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

const _docs = require('../selectors/docs');

const _navigation = require('../selectors/navigation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reselect.createSelector)(_docs.flat, _navigation.flat, (docs, nav) => {
  return _seamlessImmutable2.default.from(docs).concat(nav);
});