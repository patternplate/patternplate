'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _getHookTree = require('./get-hook-tree');

var _getHookTree2 = _interopRequireDefault(_getHookTree);

var _load = require('./load');

var _load2 = _interopRequireDefault(_load);

var _runHookTree = require('./run-hook-tree');

var _runHookTree2 = _interopRequireDefault(_runHookTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (application) {
    // Load the system hooks
    const hooks = yield (0, _load2.default)(application, (0, _path.resolve)(application.runtime.base, 'application', 'hooks'));

    // Allow access to all the hooks
    application.hooks = hooks;

    // Register them
    const registered = yield Promise.all(hooks.map((() => {
      var _ref2 = _asyncToGenerator(function* (hook) {
        return hook.register(application);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    })()));

    // Get interpendence tree
    const tree = (0, _getHookTree2.default)(registered);

    // Run the tree, wait for all dependencies
    const jobs = (0, _runHookTree2.default)(tree, registered, application, {});
    yield Promise.all(jobs);

    return application;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uIiwiaG9va3MiLCJydW50aW1lIiwiYmFzZSIsInJlZ2lzdGVyZWQiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaG9vayIsInJlZ2lzdGVyIiwidHJlZSIsImpvYnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OytCQUVlLFdBQWVBLFdBQWYsRUFBNEI7QUFDekM7QUFDQSxVQUFNQyxRQUFRLE1BQU0sb0JBQ2xCRCxXQURrQixFQUVsQixtQkFBUUEsWUFBWUUsT0FBWixDQUFvQkMsSUFBNUIsRUFBa0MsYUFBbEMsRUFBaUQsT0FBakQsQ0FGa0IsQ0FBcEI7O0FBS0E7QUFDQUgsZ0JBQVlDLEtBQVosR0FBb0JBLEtBQXBCOztBQUVBO0FBQ0EsVUFBTUcsYUFBYSxNQUFNQyxRQUFRQyxHQUFSLENBQ3ZCTCxNQUFNTSxHQUFOO0FBQUEsb0NBQVUsV0FBTUMsSUFBTjtBQUFBLGVBQWNBLEtBQUtDLFFBQUwsQ0FBY1QsV0FBZCxDQUFkO0FBQUEsT0FBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUR1QixDQUF6Qjs7QUFJQTtBQUNBLFVBQU1VLE9BQU8sMkJBQVlOLFVBQVosQ0FBYjs7QUFFQTtBQUNBLFVBQU1PLE9BQU8sMkJBQVlELElBQVosRUFBa0JOLFVBQWxCLEVBQThCSixXQUE5QixFQUEyQyxFQUEzQyxDQUFiO0FBQ0EsVUFBTUssUUFBUUMsR0FBUixDQUFZSyxJQUFaLENBQU47O0FBRUEsV0FBT1gsV0FBUDtBQUNELEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgZ2V0SG9va1RyZWUgZnJvbSAnLi9nZXQtaG9vay10cmVlJztcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZCc7XG5pbXBvcnQgcnVuSG9va1RyZWUgZnJvbSAnLi9ydW4taG9vay10cmVlJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oYXBwbGljYXRpb24pIHtcbiAgLy8gTG9hZCB0aGUgc3lzdGVtIGhvb2tzXG4gIGNvbnN0IGhvb2tzID0gYXdhaXQgbG9hZChcbiAgICBhcHBsaWNhdGlvbixcbiAgICByZXNvbHZlKGFwcGxpY2F0aW9uLnJ1bnRpbWUuYmFzZSwgJ2FwcGxpY2F0aW9uJywgJ2hvb2tzJylcbiAgKTtcblxuICAvLyBBbGxvdyBhY2Nlc3MgdG8gYWxsIHRoZSBob29rc1xuICBhcHBsaWNhdGlvbi5ob29rcyA9IGhvb2tzO1xuXG4gIC8vIFJlZ2lzdGVyIHRoZW1cbiAgY29uc3QgcmVnaXN0ZXJlZCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGhvb2tzLm1hcChhc3luYyBob29rID0+IGhvb2sucmVnaXN0ZXIoYXBwbGljYXRpb24pKVxuICApO1xuXG4gIC8vIEdldCBpbnRlcnBlbmRlbmNlIHRyZWVcbiAgY29uc3QgdHJlZSA9IGdldEhvb2tUcmVlKHJlZ2lzdGVyZWQpO1xuXG4gIC8vIFJ1biB0aGUgdHJlZSwgd2FpdCBmb3IgYWxsIGRlcGVuZGVuY2llc1xuICBjb25zdCBqb2JzID0gcnVuSG9va1RyZWUodHJlZSwgcmVnaXN0ZXJlZCwgYXBwbGljYXRpb24sIHt9KTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoam9icyk7XG5cbiAgcmV0dXJuIGFwcGxpY2F0aW9uO1xufVxuIl19