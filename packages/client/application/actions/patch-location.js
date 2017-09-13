'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _lodash = require('lodash');

const _reactRouterRedux = require('react-router-redux');

exports.default = patchLocation;
const type = exports.type = 'PATCH_LOCATION';

function patchLocation(payload) {
  return function (dispatch, getState) {
    const state = getState();
    const location = state.routing.locationBeforeTransitions;
    dispatch((0, _reactRouterRedux.push)((0, _lodash.merge)({}, location, payload)));
  };
}

patchLocation.type = type;