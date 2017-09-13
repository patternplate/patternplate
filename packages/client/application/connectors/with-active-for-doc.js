'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _frontMatter = require('front-matter');

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _item = require('../selectors/item');

var item = _interopRequireWildcard(_item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withActiveForDoc = (0, _reselect.createSelector)(item.selectContents, function (contents) {
	return {
		active: (0, _frontMatter2.default)(contents).body.length > 0
	};
});

exports.default = (0, _reactRedux.connect)(withActiveForDoc);