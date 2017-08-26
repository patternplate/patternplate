'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _lodash = require('lodash');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Assemble augmented minimist options
const args = (0, _minimist2.default)(process.argv.slice(1));
const entry = process.argv[1];
const raw = args._;

const options = _extends({}, args, {
  command: raw.slice(1).join(' '),
  entry: (0, _path.basename)(entry, (0, _path.extname)(entry))
});

/**
 * Handles success of top level Promise resolvers and logs message if any
 * @param  {object} [instance] Instance to perform success log from
 * @private
 */
function handleSuccess(instance) {
  if (instance && instance.log) {
    // instance.log.info(`[application] ${options.entry} executed sucessfully.`);
  }
}

/**
 * Handles and escalates top level Promise errors causing the process to crash if uncatched
 * @param {object} error - Error object to print and escalete
 * @private
 */
function handleError(error) {
  console.log(`${options.entry} failed.`);
  console.trace(error);

  setTimeout(() => {
    throw error;
  });
}

/**
 * Executes a promise based procedure, passes process options to it and handles exceptions
 * @param {function} procedure - Function to execute, must return Promise
 * @param {objecet} configuration - Object to deep merge with cli args objects
 * @return {Promise} result - Promise wrapping the result of the procedure
 * @private
 */

exports.default = function (procedure) {
  let configuration = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return procedure((0, _lodash.merge)({}, options, configuration)).then(handleSuccess).catch(handleError);
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9leGVjdXRlLmpzIl0sIm5hbWVzIjpbImFyZ3MiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwiZW50cnkiLCJyYXciLCJfIiwib3B0aW9ucyIsImNvbW1hbmQiLCJqb2luIiwiaGFuZGxlU3VjY2VzcyIsImluc3RhbmNlIiwibG9nIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJ0cmFjZSIsInNldFRpbWVvdXQiLCJwcm9jZWR1cmUiLCJjb25maWd1cmF0aW9uIiwidGhlbiIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBLE1BQU1BLE9BQU8sd0JBQVNDLFFBQVFDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFULENBQWI7QUFDQSxNQUFNQyxRQUFRSCxRQUFRQyxJQUFSLENBQWEsQ0FBYixDQUFkO0FBQ0EsTUFBTUcsTUFBTUwsS0FBS00sQ0FBakI7O0FBRUEsTUFBTUMsdUJBQ0ZQLElBREU7QUFFTFEsV0FBU0gsSUFBSUYsS0FBSixDQUFVLENBQVYsRUFBYU0sSUFBYixDQUFrQixHQUFsQixDQUZKO0FBR0xMLFNBQU8sb0JBQVNBLEtBQVQsRUFBZ0IsbUJBQVFBLEtBQVIsQ0FBaEI7QUFIRixFQUFOOztBQU1BOzs7OztBQUtBLFNBQVNNLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDO0FBQ2hDLE1BQUlBLFlBQVlBLFNBQVNDLEdBQXpCLEVBQThCO0FBQzdCO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7QUFLQSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMzQkMsVUFBUUgsR0FBUixDQUFhLEdBQUVMLFFBQVFILEtBQU0sVUFBN0I7QUFDQVcsVUFBUUMsS0FBUixDQUFjRixLQUFkOztBQUVBRyxhQUFXLE1BQU07QUFDaEIsVUFBTUgsS0FBTjtBQUNBLEdBRkQ7QUFHQTs7QUFFRDs7Ozs7Ozs7a0JBT2UsVUFBQ0ksU0FBRDtBQUFBLE1BQVlDLGFBQVoseURBQTRCLEVBQTVCO0FBQUEsU0FDZEQsVUFBVSxtQkFBTSxFQUFOLEVBQVVYLE9BQVYsRUFBbUJZLGFBQW5CLENBQVYsRUFDRUMsSUFERixDQUNPVixhQURQLEVBRUVXLEtBRkYsQ0FFUVIsV0FGUixDQURjO0FBQUEsQyIsImZpbGUiOiJleGVjdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiYXNlbmFtZSwgZXh0bmFtZX0gZnJvbSAncGF0aCc7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1pbmltaXN0IGZyb20gJ21pbmltaXN0JztcblxuLy8gQXNzZW1ibGUgYXVnbWVudGVkIG1pbmltaXN0IG9wdGlvbnNcbmNvbnN0IGFyZ3MgPSBtaW5pbWlzdChwcm9jZXNzLmFyZ3Yuc2xpY2UoMSkpO1xuY29uc3QgZW50cnkgPSBwcm9jZXNzLmFyZ3ZbMV07XG5jb25zdCByYXcgPSBhcmdzLl87XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdC4uLmFyZ3MsXG5cdGNvbW1hbmQ6IHJhdy5zbGljZSgxKS5qb2luKCcgJyksXG5cdGVudHJ5OiBiYXNlbmFtZShlbnRyeSwgZXh0bmFtZShlbnRyeSkpXG59O1xuXG4vKipcbiAqIEhhbmRsZXMgc3VjY2VzcyBvZiB0b3AgbGV2ZWwgUHJvbWlzZSByZXNvbHZlcnMgYW5kIGxvZ3MgbWVzc2FnZSBpZiBhbnlcbiAqIEBwYXJhbSAge29iamVjdH0gW2luc3RhbmNlXSBJbnN0YW5jZSB0byBwZXJmb3JtIHN1Y2Nlc3MgbG9nIGZyb21cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVN1Y2Nlc3MoaW5zdGFuY2UpIHtcblx0aWYgKGluc3RhbmNlICYmIGluc3RhbmNlLmxvZykge1xuXHRcdC8vIGluc3RhbmNlLmxvZy5pbmZvKGBbYXBwbGljYXRpb25dICR7b3B0aW9ucy5lbnRyeX0gZXhlY3V0ZWQgc3VjZXNzZnVsbHkuYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBIYW5kbGVzIGFuZCBlc2NhbGF0ZXMgdG9wIGxldmVsIFByb21pc2UgZXJyb3JzIGNhdXNpbmcgdGhlIHByb2Nlc3MgdG8gY3Jhc2ggaWYgdW5jYXRjaGVkXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgLSBFcnJvciBvYmplY3QgdG8gcHJpbnQgYW5kIGVzY2FsZXRlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xuXHRjb25zb2xlLmxvZyhgJHtvcHRpb25zLmVudHJ5fSBmYWlsZWQuYCk7XG5cdGNvbnNvbGUudHJhY2UoZXJyb3IpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHRocm93IGVycm9yO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBFeGVjdXRlcyBhIHByb21pc2UgYmFzZWQgcHJvY2VkdXJlLCBwYXNzZXMgcHJvY2VzcyBvcHRpb25zIHRvIGl0IGFuZCBoYW5kbGVzIGV4Y2VwdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb2NlZHVyZSAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUsIG11c3QgcmV0dXJuIFByb21pc2VcbiAqIEBwYXJhbSB7b2JqZWNldH0gY29uZmlndXJhdGlvbiAtIE9iamVjdCB0byBkZWVwIG1lcmdlIHdpdGggY2xpIGFyZ3Mgb2JqZWN0c1xuICogQHJldHVybiB7UHJvbWlzZX0gcmVzdWx0IC0gUHJvbWlzZSB3cmFwcGluZyB0aGUgcmVzdWx0IG9mIHRoZSBwcm9jZWR1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChwcm9jZWR1cmUsIGNvbmZpZ3VyYXRpb24gPSB7fSkgPT5cblx0cHJvY2VkdXJlKG1lcmdlKHt9LCBvcHRpb25zLCBjb25maWd1cmF0aW9uKSlcblx0XHQudGhlbihoYW5kbGVTdWNjZXNzKVxuXHRcdC5jYXRjaChoYW5kbGVFcnJvcik7XG4iXX0=