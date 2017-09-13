'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _lodash = require('lodash');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

exports.default = getDemoDependenciesToRead;


function getDemoDependenciesToRead() {
  const patterns = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  const pool = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  return Object.values(patterns).reduce((result, id) => {
    const dependency = (0, _lodash.find)(pool, { id });
    if (!dependency) {
      return result;
    }
    const sub = getDemoDependenciesToRead(dependency.manifest.demoPatterns, pool);
    const add = [].concat(_toConsumableArray(sub), [id]).filter(item => result.indexOf(item) === -1);
    return [].concat(_toConsumableArray(result), _toConsumableArray(add));
  }, []);
}
module.exports = exports.default;