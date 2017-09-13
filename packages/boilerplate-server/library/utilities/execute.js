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
    // Instance.log.info(`[application] ${options.entry} executed sucessfully.`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9leGVjdXRlLmpzIl0sIm5hbWVzIjpbImFyZ3MiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwiZW50cnkiLCJyYXciLCJfIiwib3B0aW9ucyIsImNvbW1hbmQiLCJqb2luIiwiaGFuZGxlU3VjY2VzcyIsImluc3RhbmNlIiwibG9nIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJ0cmFjZSIsInNldFRpbWVvdXQiLCJwcm9jZWR1cmUiLCJjb25maWd1cmF0aW9uIiwidGhlbiIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBLE1BQU1BLE9BQU8sd0JBQVNDLFFBQVFDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFULENBQWI7QUFDQSxNQUFNQyxRQUFRSCxRQUFRQyxJQUFSLENBQWEsQ0FBYixDQUFkO0FBQ0EsTUFBTUcsTUFBTUwsS0FBS00sQ0FBakI7O0FBRUEsTUFBTUMsdUJBQ0RQLElBREM7QUFFSlEsV0FBU0gsSUFBSUYsS0FBSixDQUFVLENBQVYsRUFBYU0sSUFBYixDQUFrQixHQUFsQixDQUZMO0FBR0pMLFNBQU8sb0JBQVNBLEtBQVQsRUFBZ0IsbUJBQVFBLEtBQVIsQ0FBaEI7QUFISCxFQUFOOztBQU1BOzs7OztBQUtBLFNBQVNNLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDO0FBQy9CLE1BQUlBLFlBQVlBLFNBQVNDLEdBQXpCLEVBQThCO0FBQzVCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7QUFLQSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQkMsVUFBUUgsR0FBUixDQUFhLEdBQUVMLFFBQVFILEtBQU0sVUFBN0I7QUFDQVcsVUFBUUMsS0FBUixDQUFjRixLQUFkOztBQUVBRyxhQUFXLE1BQU07QUFDZixVQUFNSCxLQUFOO0FBQ0QsR0FGRDtBQUdEOztBQUVEOzs7Ozs7OztrQkFPZSxVQUFDSSxTQUFEO0FBQUEsTUFBWUMsYUFBWix5REFBNEIsRUFBNUI7QUFBQSxTQUNiRCxVQUFVLG1CQUFNLEVBQU4sRUFBVVgsT0FBVixFQUFtQlksYUFBbkIsQ0FBVixFQUNHQyxJQURILENBQ1FWLGFBRFIsRUFFR1csS0FGSCxDQUVTUixXQUZULENBRGE7QUFBQSxDIiwiZmlsZSI6ImV4ZWN1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jhc2VuYW1lLCBleHRuYW1lfSBmcm9tICdwYXRoJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnO1xuXG4vLyBBc3NlbWJsZSBhdWdtZW50ZWQgbWluaW1pc3Qgb3B0aW9uc1xuY29uc3QgYXJncyA9IG1pbmltaXN0KHByb2Nlc3MuYXJndi5zbGljZSgxKSk7XG5jb25zdCBlbnRyeSA9IHByb2Nlc3MuYXJndlsxXTtcbmNvbnN0IHJhdyA9IGFyZ3MuXztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgLi4uYXJncyxcbiAgY29tbWFuZDogcmF3LnNsaWNlKDEpLmpvaW4oJyAnKSxcbiAgZW50cnk6IGJhc2VuYW1lKGVudHJ5LCBleHRuYW1lKGVudHJ5KSlcbn07XG5cbi8qKlxuICogSGFuZGxlcyBzdWNjZXNzIG9mIHRvcCBsZXZlbCBQcm9taXNlIHJlc29sdmVycyBhbmQgbG9ncyBtZXNzYWdlIGlmIGFueVxuICogQHBhcmFtICB7b2JqZWN0fSBbaW5zdGFuY2VdIEluc3RhbmNlIHRvIHBlcmZvcm0gc3VjY2VzcyBsb2cgZnJvbVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU3VjY2VzcyhpbnN0YW5jZSkge1xuICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UubG9nKSB7XG4gICAgLy8gSW5zdGFuY2UubG9nLmluZm8oYFthcHBsaWNhdGlvbl0gJHtvcHRpb25zLmVudHJ5fSBleGVjdXRlZCBzdWNlc3NmdWxseS5gKTtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZXMgYW5kIGVzY2FsYXRlcyB0b3AgbGV2ZWwgUHJvbWlzZSBlcnJvcnMgY2F1c2luZyB0aGUgcHJvY2VzcyB0byBjcmFzaCBpZiB1bmNhdGNoZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciAtIEVycm9yIG9iamVjdCB0byBwcmludCBhbmQgZXNjYWxldGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG4gIGNvbnNvbGUubG9nKGAke29wdGlvbnMuZW50cnl9IGZhaWxlZC5gKTtcbiAgY29uc29sZS50cmFjZShlcnJvcik7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0pO1xufVxuXG4vKipcbiAqIEV4ZWN1dGVzIGEgcHJvbWlzZSBiYXNlZCBwcm9jZWR1cmUsIHBhc3NlcyBwcm9jZXNzIG9wdGlvbnMgdG8gaXQgYW5kIGhhbmRsZXMgZXhjZXB0aW9uc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvY2VkdXJlIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSwgbXVzdCByZXR1cm4gUHJvbWlzZVxuICogQHBhcmFtIHtvYmplY2V0fSBjb25maWd1cmF0aW9uIC0gT2JqZWN0IHRvIGRlZXAgbWVyZ2Ugd2l0aCBjbGkgYXJncyBvYmplY3RzXG4gKiBAcmV0dXJuIHtQcm9taXNlfSByZXN1bHQgLSBQcm9taXNlIHdyYXBwaW5nIHRoZSByZXN1bHQgb2YgdGhlIHByb2NlZHVyZVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHByb2NlZHVyZSwgY29uZmlndXJhdGlvbiA9IHt9KSA9PlxuICBwcm9jZWR1cmUobWVyZ2Uoe30sIG9wdGlvbnMsIGNvbmZpZ3VyYXRpb24pKVxuICAgIC50aGVuKGhhbmRsZVN1Y2Nlc3MpXG4gICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiJdfQ==