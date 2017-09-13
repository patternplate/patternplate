'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reactRedux = require('react-redux');

const _reselect = require('reselect');

const _behaviours = require('../behaviours');

const _message = require('../components/message');

const _message2 = _interopRequireDefault(_message);

const _demo = require('../selectors/demo');

const demo = _interopRequireWildcard(_demo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState)((0, _behaviours.skippable)(_message2.default));


const selectMessage = (0, _reselect.createSelector)((state) => {
  return state.messages;
}, demo.selectSrc, (messages, src) => {
  return messages[src];
});

const selectActive = (0, _reselect.createSelector)(selectMessage, (message) => {
  return typeof message === 'string';
});

function mapState(state) {
  return {
    active: selectActive(state),
    message: selectMessage(state)
  };
}