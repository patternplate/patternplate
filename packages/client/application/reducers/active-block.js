'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _handleActions;

const _reduxActions = require('redux-actions');

const _markBlock = require('../actions/mark-block');

const _markBlock2 = _interopRequireDefault(_markBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultValue = null;

const markBlockHandler = function markBlockHandler(state, _ref) {
  const payload = _ref.payload;
  let active = payload.active,
      id = payload.id;


  if (active) {
    return id;
  }

  return defaultValue;
};

const locationChangeHandler = function locationChangeHandler() {
  return defaultValue;
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _markBlock2.default, markBlockHandler), _defineProperty(_handleActions, '@@router/LOCATION_CHANGE', locationChangeHandler), _handleActions), defaultValue);