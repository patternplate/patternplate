'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _handleDependentActions = require('../actions/handle-dependent-actions');

const _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let BEATS = [];

exports.default = (0, _handleDependentActions2.default)({
  LISTEN_HEARTBEAT: function LISTEN_HEARTBEAT() {
    return handle.apply(undefined, arguments);
  },
  FETCHING: function FETCHING() {
    return handle.apply(undefined, arguments);
  },
  ERROR_HEARTBEAT: function ERROR_HEARTBEAT() {
    BEATS = [];
    return 'error';
  }
}, {
  defaultValue: '',
  dependencies: ['fetching']
});


function handle() {
  const state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'loading';
  const action = arguments[1];
  const _ref = arguments[2];
  const fetching = _ref.fetching;

  if (fetching) {
    return 'loading';
  }

  const count = beat(action.payload);

  if (count === 0) {
    return '';
  }

  if (count === 3) {
    return 'loaded';
  }

  return 'loading';
}

function beat(add) {
  BEATS = [BEATS[BEATS.length - 2], BEATS[BEATS.length - 1], add].filter(Boolean);
  return BEATS.length;
}