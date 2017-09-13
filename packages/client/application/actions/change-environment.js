'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _ = require('./');

exports.default = changeEnvironment;
const type = exports.type = 'CHANGE_ENVIRONMENT';

function changeEnvironment(environment) {
  return function (dispatch) {
    dispatch((0, _.patchLocation)({
      query: { environment }
    }));
  };
}

changeEnvironment.type = type;