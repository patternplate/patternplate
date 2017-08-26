'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggle = require('./toggle');

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _toggle2.default)(actions.toggleOpacity, { defaultValue: false });
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9vcGFjaXR5LmpzIl0sIm5hbWVzIjpbImFjdGlvbnMiLCJ0b2dnbGVPcGFjaXR5IiwiZGVmYXVsdFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7SUFBWUEsTzs7QUFDWjs7Ozs7Ozs7a0JBRWUsc0JBQU9BLFFBQVFDLGFBQWYsRUFBOEIsRUFBQ0MsY0FBYyxLQUFmLEVBQTlCLEMiLCJmaWxlIjoib3BhY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgdG9nZ2xlIGZyb20gJy4vdG9nZ2xlJztcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlKGFjdGlvbnMudG9nZ2xlT3BhY2l0eSwge2RlZmF1bHRWYWx1ZTogZmFsc2V9KTtcbiJdfQ==