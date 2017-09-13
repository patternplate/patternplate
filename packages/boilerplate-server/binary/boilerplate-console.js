#!/usr/bin/env node
'use strict';

let main = (() => {
  var _ref = _asyncToGenerator(function* (options) {
    const application = yield (0, _library2.default)(options);
    return yield application.run(options.command, options);
  });

  return function main(_x) {
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

(0, _execute2.default)(main, { mode: 'console' });

// Catch unhandled rejections globally
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
  throw reason;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9iaW5hcnkvYm9pbGVycGxhdGUtY29uc29sZS5qcyJdLCJuYW1lcyI6WyJvcHRpb25zIiwiYXBwbGljYXRpb24iLCJydW4iLCJjb21tYW5kIiwibWFpbiIsIm1vZGUiLCJwcm9jZXNzIiwib24iLCJyZWFzb24iLCJwcm9taXNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7OytCQUtBLFdBQW9CQSxPQUFwQixFQUE2QjtBQUMzQixVQUFNQyxjQUFjLE1BQU0sdUJBQVlELE9BQVosQ0FBMUI7QUFDQSxXQUFPLE1BQU1DLFlBQVlDLEdBQVosQ0FBZ0JGLFFBQVFHLE9BQXhCLEVBQWlDSCxPQUFqQyxDQUFiO0FBQ0QsRzs7a0JBSGNJLEk7Ozs7O0FBSmY7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFPQSx1QkFBUUEsSUFBUixFQUFjLEVBQUNDLE1BQU0sU0FBUCxFQUFkOztBQUVBO0FBQ0FDLFFBQVFDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxDQUFDQyxNQUFELEVBQVNDLE9BQVQsS0FBcUI7QUFDcERDLFVBQVFDLEdBQVIsQ0FBWSxrQ0FBWixFQUFnREYsT0FBaEQsRUFBeUQsV0FBekQsRUFBc0VELE1BQXRFO0FBQ0EsUUFBTUEsTUFBTjtBQUNELENBSEQiLCJmaWxlIjoiYm9pbGVycGxhdGUtY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgYm9pbGVycGxhdGUgZnJvbSAnLi4vbGlicmFyeSc7XG5pbXBvcnQgZXhlY3V0ZSBmcm9tICcuLi9saWJyYXJ5L3V0aWxpdGllcy9leGVjdXRlJztcblxuYXN5bmMgZnVuY3Rpb24gbWFpbihvcHRpb25zKSB7XG4gIGNvbnN0IGFwcGxpY2F0aW9uID0gYXdhaXQgYm9pbGVycGxhdGUob3B0aW9ucyk7XG4gIHJldHVybiBhd2FpdCBhcHBsaWNhdGlvbi5ydW4ob3B0aW9ucy5jb21tYW5kLCBvcHRpb25zKTtcbn1cblxuZXhlY3V0ZShtYWluLCB7bW9kZTogJ2NvbnNvbGUnfSk7XG5cbi8vIENhdGNoIHVuaGFuZGxlZCByZWplY3Rpb25zIGdsb2JhbGx5XG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uLCBwcm9taXNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVbmhhbmRsZWQgUmVqZWN0aW9uIGF0OiBQcm9taXNlICcsIHByb21pc2UsICcgcmVhc29uOiAnLCByZWFzb24pO1xuICB0aHJvdyByZWFzb247XG59KTtcbiJdfQ==