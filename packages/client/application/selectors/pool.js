'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reselect = require('reselect');

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _docs = require('../selectors/docs');

var _navigation = require('../selectors/navigation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reselect.createSelector)(_docs.flat, _navigation.flat, function (docs, nav) {
	return _seamlessImmutable2.default.from(docs).concat(nav);
});