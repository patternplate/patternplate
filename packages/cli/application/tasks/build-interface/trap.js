'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _boxen = require('boxen');

const _boxen2 = _interopRequireDefault(_boxen);

const _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = trap;


function trap(application) {
  const warnings = [];
  const warn = application.log.warn;
  const err = console.error;

  application.log.warn = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.some(arg => arg.includes('Deprecation'))) {
      warnings.push(args);
      return;
    }
    warn.apply(undefined, args);
  };
  console.error = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    warnings.push(args);
  };

  return function (cb) {
    console.error = err;
    application.log.warn = warn;

    const messages = (0, _lodash.uniq)(warnings).map(warning => warning.join(' ')).map(message => (0, _boxen2.default)(message, { borderColor: 'yellow', padding: 1 }));

    cb(messages);
  };
}
module.exports = exports.default;