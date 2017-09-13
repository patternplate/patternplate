'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getHookTree;

var _getHookDependencies = require('./get-hook-dependencies');

var _getHookDependencies2 = _interopRequireDefault(_getHookDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getHookTree(registered) {
  return registered.reduce((registry, hook) => {
    const amend = {
      [hook.name]: (0, _getHookDependencies2.default)(hook.name, registered)
    };
    return _extends({}, registry, amend);
  }, {});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2dldC1ob29rLXRyZWUuanMiXSwibmFtZXMiOlsiZ2V0SG9va1RyZWUiLCJyZWdpc3RlcmVkIiwicmVkdWNlIiwicmVnaXN0cnkiLCJob29rIiwiYW1lbmQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFFd0JBLFc7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxXQUFULENBQXFCQyxVQUFyQixFQUFpQztBQUM5QyxTQUFPQSxXQUFXQyxNQUFYLENBQWtCLENBQUNDLFFBQUQsRUFBV0MsSUFBWCxLQUFvQjtBQUMzQyxVQUFNQyxRQUFRO0FBQ1osT0FBQ0QsS0FBS0UsSUFBTixHQUFhLG1DQUFvQkYsS0FBS0UsSUFBekIsRUFBK0JMLFVBQS9CO0FBREQsS0FBZDtBQUdBLHdCQUNLRSxRQURMLEVBRUtFLEtBRkw7QUFJRCxHQVJNLEVBUUosRUFSSSxDQUFQO0FBU0QiLCJmaWxlIjoiZ2V0LWhvb2stdHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRIb29rRGVwZW5kZW5jaWVzIGZyb20gJy4vZ2V0LWhvb2stZGVwZW5kZW5jaWVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SG9va1RyZWUocmVnaXN0ZXJlZCkge1xuICByZXR1cm4gcmVnaXN0ZXJlZC5yZWR1Y2UoKHJlZ2lzdHJ5LCBob29rKSA9PiB7XG4gICAgY29uc3QgYW1lbmQgPSB7XG4gICAgICBbaG9vay5uYW1lXTogZ2V0SG9va0RlcGVuZGVuY2llcyhob29rLm5hbWUsIHJlZ2lzdGVyZWQpXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVnaXN0cnksXG4gICAgICAuLi5hbWVuZFxuICAgIH07XG4gIH0sIHt9KTtcbn1cbiJdfQ==