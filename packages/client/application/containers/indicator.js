'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _redux = require('redux');

const _reactRedux = require('react-redux');

const _actions = require('../actions');

const actions = _interopRequireWildcard(_actions);

const _indicator = require('../components/indicator');

const _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function mapProps(state) {
  return {
    status: state.connection,
    shortcut: state.shortcuts.reload
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    onClick: actions.reload
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_indicator2.default);