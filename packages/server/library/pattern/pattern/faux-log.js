"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  error: function error() {
    let _console;

    (_console = console).error.apply(_console, arguments);
  },
  warn: function warn() {
    let _console2;

    (_console2 = console).warn.apply(_console2, arguments);
  },
  info: function info() {
    let _console3;

    (_console3 = console).log.apply(_console3, arguments);
  },
  debug: function debug() {
    let _console4;

    (_console4 = console).log.apply(_console4, arguments);
  },
  silly: function silly() {
    let _console5;

    (_console5 = console).log.apply(_console5, arguments);
  }
};
module.exports = exports.default;