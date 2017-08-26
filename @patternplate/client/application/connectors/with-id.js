'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _item = require('../selectors/item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(withId);


function withId(state) {
	var item = (0, _item2.default)(state);
	return {
		id: item ? item.id : null
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb25uZWN0b3JzL3dpdGgtaWQuanMiXSwibmFtZXMiOlsid2l0aElkIiwic3RhdGUiLCJpdGVtIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7a0JBRWUseUJBQVFBLE1BQVIsQzs7O0FBRWYsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDdEIsS0FBTUMsT0FBTyxvQkFBV0QsS0FBWCxDQUFiO0FBQ0EsUUFBTztBQUNORSxNQUFJRCxPQUFPQSxLQUFLQyxFQUFaLEdBQWlCO0FBRGYsRUFBUDtBQUdBIiwiZmlsZSI6IndpdGgtaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBzZWxlY3RJdGVtIGZyb20gJy4uL3NlbGVjdG9ycy9pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCh3aXRoSWQpO1xuXG5mdW5jdGlvbiB3aXRoSWQoc3RhdGUpIHtcblx0Y29uc3QgaXRlbSA9IHNlbGVjdEl0ZW0oc3RhdGUpO1xuXHRyZXR1cm4ge1xuXHRcdGlkOiBpdGVtID8gaXRlbS5pZCA6IG51bGxcblx0fTtcbn1cbiJdfQ==