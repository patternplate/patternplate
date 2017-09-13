'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMatchingEnvironments;

const _util = require('util');

const _minimatch = require('minimatch');

const _minimatch2 = _interopRequireDefault(_minimatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const envDebug = (0, _util.debuglog)('environments');

function getMatchingEnvironments(patternID, environments) {
  return environments.filter(userEnvironment => {
    envDebug('using filters %s for environment %s to match against %s', userEnvironment.applyTo, userEnvironment.name, patternID);

    const positives = userEnvironment.applyTo.filter(glob => glob[0] !== '!');

    const negatives = userEnvironment.applyTo.filter(glob => glob[0] === '!').map(glob => glob.slice(1));

    const matchPositive = positives.filter(positive => (0, _minimatch2.default)(patternID, positive));

    const matchNegative = negatives.filter(negative => (0, _minimatch2.default)(patternID, negative));

    envDebug('matching %s against %s, %s', patternID, positives, negatives);

    if (matchPositive.length > 0) {
      envDebug('positive match for environment %s on %s: %s', userEnvironment.name, patternID, matchPositive);
    }

    if (matchNegative.length > 0) {
      envDebug('negative match for environment %s on %s: %s', userEnvironment.name, patternID, matchNegative);
    }

    return matchPositive.length > 0 && matchNegative.length === 0;
  })
  // Sort by priority
  .sort((a, b) => b.priority - a.priority);
}
module.exports = exports.default;