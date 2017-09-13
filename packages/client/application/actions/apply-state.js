'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyState;
var type = exports.type = '@@APPLY_STATE';

function applyState(payload) {
  return {
    type: type,
    payload: payload
  };
}