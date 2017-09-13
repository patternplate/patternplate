'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const middlewares = {
  path: ['application/middlewares', 'appliation/patternplate/middlewares'],
  enabled: {
    basicauth: {
      enabled: false,
      credentials: {
        name: process.env.PATTERNPLATE_BASIC_AUTH_LOGIN || process.env.BOILERPLATE_SERVER_BASIC_AUTH_LOGIN || process.env.NODE_BASIC_AUTH_LOGIN || 'patternplate',
        pass: process.env.PATTERNPLATE_BASIC_AUTH_PASS || process.env.BOILERPLATE_SERVER_BASIC_AUTH_PASS || process.env.NODE_BASIC_AUTH_PASS || 'patternplate'
      },
      exclude: '/health'
    }
  }
};

exports.default = middlewares;
module.exports = exports.default;