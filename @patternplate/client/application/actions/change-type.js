'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _lodash = require('lodash');

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = changeType;
var type = exports.type = 'CHANGE_TYPE';

function changeType(input) {
	_assert2.default.equal(typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input), 'string', 'input for changeType action must be of type string');

	return function (dispatch, getState) {
		var location = getState().routing.locationBeforeTransitions;
		var parsed = _urlQuery2.default.parse(location.query.source || '');
		var type = (0, _lodash.includes)(['source', 'transformed'], input) ? input : 'source';
		var query = { type: type };
		var source = _urlQuery2.default.format((0, _lodash.merge)({}, parsed, { query: query }));
		dispatch((0, _.patchLocation)({ query: { source: source } }));
	};
}

changeType.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2NoYW5nZS10eXBlLmpzIl0sIm5hbWVzIjpbImNoYW5nZVR5cGUiLCJ0eXBlIiwiaW5wdXQiLCJlcXVhbCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2NhdGlvbiIsInJvdXRpbmciLCJsb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIiwicGFyc2VkIiwicGFyc2UiLCJxdWVyeSIsInNvdXJjZSIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7a0JBRWVBLFU7QUFDUixJQUFNQyxzQkFBTyxhQUFiOztBQUVQLFNBQVNELFVBQVQsQ0FBb0JFLEtBQXBCLEVBQTJCO0FBQzFCLGtCQUFPQyxLQUFQLFFBQW9CRCxLQUFwQix1REFBb0JBLEtBQXBCLEdBQTJCLFFBQTNCLEVBQXFDLG9EQUFyQzs7QUFFQSxRQUFPLFVBQUNFLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUM5QixNQUFNQyxXQUFXRCxXQUFXRSxPQUFYLENBQW1CQyx5QkFBcEM7QUFDQSxNQUFNQyxTQUFTLG1CQUFTQyxLQUFULENBQWVKLFNBQVNLLEtBQVQsQ0FBZUMsTUFBZixJQUF5QixFQUF4QyxDQUFmO0FBQ0EsTUFBTVgsT0FBTyxzQkFBUyxDQUFDLFFBQUQsRUFBVyxhQUFYLENBQVQsRUFBb0NDLEtBQXBDLElBQTZDQSxLQUE3QyxHQUFxRCxRQUFsRTtBQUNBLE1BQU1TLFFBQVEsRUFBQ1YsVUFBRCxFQUFkO0FBQ0EsTUFBTVcsU0FBUyxtQkFBU0MsTUFBVCxDQUFnQixtQkFBTSxFQUFOLEVBQVVKLE1BQVYsRUFBa0IsRUFBQ0UsWUFBRCxFQUFsQixDQUFoQixDQUFmO0FBQ0FQLFdBQVMscUJBQWMsRUFBQ08sT0FBTyxFQUFDQyxjQUFELEVBQVIsRUFBZCxDQUFUO0FBQ0EsRUFQRDtBQVFBOztBQUVEWixXQUFXQyxJQUFYLEdBQWtCQSxJQUFsQiIsImZpbGUiOiJjaGFuZ2UtdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCB7aW5jbHVkZXMsIG1lcmdlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4uL3V0aWxzL3VybC1xdWVyeSc7XG5pbXBvcnQge3BhdGNoTG9jYXRpb259IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlVHlwZTtcbmV4cG9ydCBjb25zdCB0eXBlID0gJ0NIQU5HRV9UWVBFJztcblxuZnVuY3Rpb24gY2hhbmdlVHlwZShpbnB1dCkge1xuXHRhc3NlcnQuZXF1YWwodHlwZW9mIGlucHV0LCAnc3RyaW5nJywgJ2lucHV0IGZvciBjaGFuZ2VUeXBlIGFjdGlvbiBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nJyk7XG5cblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblx0XHRjb25zdCBsb2NhdGlvbiA9IGdldFN0YXRlKCkucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zO1xuXHRcdGNvbnN0IHBhcnNlZCA9IHVybFF1ZXJ5LnBhcnNlKGxvY2F0aW9uLnF1ZXJ5LnNvdXJjZSB8fCAnJyk7XG5cdFx0Y29uc3QgdHlwZSA9IGluY2x1ZGVzKFsnc291cmNlJywgJ3RyYW5zZm9ybWVkJ10sIGlucHV0KSA/IGlucHV0IDogJ3NvdXJjZSc7XG5cdFx0Y29uc3QgcXVlcnkgPSB7dHlwZX07XG5cdFx0Y29uc3Qgc291cmNlID0gdXJsUXVlcnkuZm9ybWF0KG1lcmdlKHt9LCBwYXJzZWQsIHtxdWVyeX0pKTtcblx0XHRkaXNwYXRjaChwYXRjaExvY2F0aW9uKHtxdWVyeToge3NvdXJjZX19KSk7XG5cdH07XG59XG5cbmNoYW5nZVR5cGUudHlwZSA9IHR5cGU7XG4iXX0=