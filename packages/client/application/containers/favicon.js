'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reactRedux = require('react-redux');

const _favicon = require('../components/favicon');

const _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState)(_favicon2.default);


function mapState(state) {
  return {
    error: state.demo.error,
    source: state.config.favicon
  };
}