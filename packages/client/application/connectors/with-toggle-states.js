'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reactRedux = require('react-redux');

exports.default = (0, _reactRedux.connect)(withToggleStates);


function withToggleStates(state) {
  return {
    demoDependenciesEnabled: state.demoDependenciesEnabled,
    demoDependentsEnabled: state.demoDependentsEnabled,
    dependenciesEnabled: state.dependenciesEnabled,
    dependentsEnabled: state.dependentsEnabled,
    manifestEnabled: state.manifestEnabled
  };
}