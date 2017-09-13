'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPatternsToBuild;

const _path = require('path');

const _util = require('util');

const _lodash = require('lodash');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

function getPatternsToBuild(artifacts, patterns) {
  const debug = (0, _util.debuglog)('commonjs');

  return pattern => {
    // Find matching pattern artifact
    const artifact = (0, _lodash.find)(artifacts, { id: pattern.id });

    // If no pattern artifact is found, build it
    if (!artifact) {
      debug('rebuild %s, no artifacts found', pattern.id);
      return true;
    }

    // Build if pattern mtime > artifact mtime
    if (pattern.mtime.getTime() > artifact.mtime.getTime()) {
      debug('rebuild %s, pattern mtime %s is newer than artifacts %s by %s', pattern.id, pattern.mtime, artifact.mtime, new Date(pattern.mtime - artifact.mtime));
      return true;
    }

    // Get the applicable types in this pattern
    const types = [].concat(_toConsumableArray(new Set(pattern.files.map(path => (0, _path.parse)(path)).filter(parsed => parsed.name === 'index').map(parsed => parsed.ext.slice(1)).filter(Boolean).map(extension => patterns.formats[extension]).filter(Boolean).map(format => format.name.toLowerCase()))));

    // Build if pattern has types that are not in artifacts
    if ((0, _lodash.difference)(types, artifact.types).length) {
      debug('rebuild %s, pattern types %s mismatch artifact types %s', pattern.id, types, artifact.types);
      return true;
    }

    return false;
  };
}
module.exports = exports.default;