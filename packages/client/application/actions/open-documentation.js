'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _ = require('./');

exports.default = openDocumentation;
const type = exports.type = 'OPEN_DOCUMENTATION';

function openDocumentation() {
  return function (dispatch, getState) {
    const state = getState();
    const pathname = state.base;
    dispatch((0, _.patchLocation)({ pathname }));
  };
}

openDocumentation.key = '';
openDocumentation.property = '';
openDocumentation.type = type;