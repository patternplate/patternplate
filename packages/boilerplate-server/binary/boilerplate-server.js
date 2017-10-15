#!/usr/bin/env node
'use strict';

let main = (() => {
  var _ref = _asyncToGenerator(function* () {
    let options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    const application = yield (0, _library2.default)(options);
    return yield application.start();
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
})();

require('babel-polyfill');

var _library = require('../library');

var _library2 = _interopRequireDefault(_library);

var _execute = require('../library/utilities/execute');

var _execute2 = _interopRequireDefault(_execute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _execute2.default)(main, { mode: 'server' });

// Catch unhandled rejections globally
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
  throw reason;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9iaW5hcnkvYm9pbGVycGxhdGUtc2VydmVyLmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJhcHBsaWNhdGlvbiIsInN0YXJ0IiwibWFpbiIsIm1vZGUiLCJwcm9jZXNzIiwib24iLCJyZWFzb24iLCJwcm9taXNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7OytCQUtBLGFBQWtDO0FBQUEsUUFBZEEsT0FBYyx5REFBSixFQUFJOztBQUNoQyxVQUFNQyxjQUFjLE1BQU0sdUJBQVlELE9BQVosQ0FBMUI7QUFDQSxXQUFPLE1BQU1DLFlBQVlDLEtBQVosRUFBYjtBQUNELEc7O2tCQUhjQyxJOzs7OztBQUpmOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBT0EsdUJBQVFBLElBQVIsRUFBYyxFQUFDQyxNQUFNLFFBQVAsRUFBZDs7QUFFQTtBQUNBQyxRQUFRQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsQ0FBQ0MsTUFBRCxFQUFTQyxPQUFULEtBQXFCO0FBQ3BEQyxVQUFRQyxHQUFSLENBQVksa0NBQVosRUFBZ0RGLE9BQWhELEVBQXlELFdBQXpELEVBQXNFRCxNQUF0RTtBQUNBLFFBQU1BLE1BQU47QUFDRCxDQUhEIiwiZmlsZSI6ImJvaWxlcnBsYXRlLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgYm9pbGVycGxhdGUgZnJvbSAnLi4vbGlicmFyeSc7XG5pbXBvcnQgZXhlY3V0ZSBmcm9tICcuLi9saWJyYXJ5L3V0aWxpdGllcy9leGVjdXRlJztcblxuYXN5bmMgZnVuY3Rpb24gbWFpbihvcHRpb25zID0ge30pIHtcbiAgY29uc3QgYXBwbGljYXRpb24gPSBhd2FpdCBib2lsZXJwbGF0ZShvcHRpb25zKTtcbiAgcmV0dXJuIGF3YWl0IGFwcGxpY2F0aW9uLnN0YXJ0KCk7XG59XG5cbmV4ZWN1dGUobWFpbiwge21vZGU6ICdzZXJ2ZXInfSk7XG5cbi8vIENhdGNoIHVuaGFuZGxlZCByZWplY3Rpb25zIGdsb2JhbGx5XG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uLCBwcm9taXNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVbmhhbmRsZWQgUmVqZWN0aW9uIGF0OiBQcm9taXNlICcsIHByb21pc2UsICcgcmVhc29uOiAnLCByZWFzb24pO1xuICB0aHJvdyByZWFzb247XG59KTtcbiJdfQ==