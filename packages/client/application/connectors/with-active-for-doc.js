'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _frontMatter = require('front-matter');

const _frontMatter2 = _interopRequireDefault(_frontMatter);

const _reactRedux = require('react-redux');

const _reselect = require('reselect');

const _item = require('../selectors/item');

const item = _interopRequireWildcard(_item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const withActiveForDoc = (0, _reselect.createSelector)(item.selectContents, (contents) => {
  return {
    active: (0, _frontMatter2.default)(contents).body.length > 0
  };
});

exports.default = (0, _reactRedux.connect)(withActiveForDoc);