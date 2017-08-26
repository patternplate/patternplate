'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

exports.default = (0, _reduxActions.createAction)('WINDOW_RESIZE', function (_ref) {
  var width = _ref.width,
      height = _ref.height;
  return { width: width, height: height };
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3dpbmRvdy1yZXNpemUuanMiXSwibmFtZXMiOlsid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFDZSxnQ0FBYSxlQUFiLEVBQThCO0FBQUEsTUFBRUEsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBU0MsTUFBVCxRQUFTQSxNQUFUO0FBQUEsU0FBc0IsRUFBQ0QsWUFBRCxFQUFRQyxjQUFSLEVBQXRCO0FBQUEsQ0FBOUIsQyIsImZpbGUiOiJ3aW5kb3ctcmVzaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWN0aW9uKCdXSU5ET1dfUkVTSVpFJywgKHt3aWR0aCwgaGVpZ2h0fSkgPT4gKHt3aWR0aCwgaGVpZ2h0fSkpO1xuIl19