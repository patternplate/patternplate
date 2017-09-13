'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reactRedux = require('react-redux');

const _behaviours = require('../behaviours');

const _docPane = require('../components/doc-pane');

const _docPane2 = _interopRequireDefault(_docPane);

const _item = require('../selectors/item');

const item = _interopRequireWildcard(_item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps)((0, _behaviours.skippable)((0, _behaviours.mountable)(_docPane2.default)));


function mapProps(state) {
  return {
    active: Boolean(item.selectContents(state)),
    env: item.selectEnv(state),
    doc: item.selectContents(state)
  };
}