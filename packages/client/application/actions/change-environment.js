'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = changeEnvironment;
var type = exports.type = 'CHANGE_ENVIRONMENT';

function changeEnvironment(environment) {
  return function (dispatch) {
    dispatch((0, _.patchLocation)({
      query: { environment: environment }
    }));
  };
}

changeEnvironment.type = type;