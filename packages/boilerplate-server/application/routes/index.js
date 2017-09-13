'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = indexRouteFactory;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function indexRouteFactory() {
  return (() => {
    var _ref = _asyncToGenerator(function* () {
      this.body = 'You are up and running! Place a custom index route in ./application/routes.';
    });

    function indexRoute() {
      return _ref.apply(this, arguments);
    }

    return indexRoute;
  })();
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXhSb3V0ZUZhY3RvcnkiLCJib2R5IiwiaW5kZXhSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxpQjs7OztBQUFULFNBQVNBLGlCQUFULEdBQTZCO0FBQzFDO0FBQUEsaUNBQU8sYUFBNEI7QUFDakMsV0FBS0MsSUFBTCxHQUNFLDZFQURGO0FBRUQsS0FIRDs7QUFBQSxhQUFzQkMsVUFBdEI7QUFBQTtBQUFBOztBQUFBLFdBQXNCQSxVQUF0QjtBQUFBO0FBSUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleFJvdXRlRmFjdG9yeSgpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIGluZGV4Um91dGUoKSB7XG4gICAgdGhpcy5ib2R5ID1cbiAgICAgICdZb3UgYXJlIHVwIGFuZCBydW5uaW5nISBQbGFjZSBhIGN1c3RvbSBpbmRleCByb3V0ZSBpbiAuL2FwcGxpY2F0aW9uL3JvdXRlcy4nO1xuICB9O1xufVxuIl19