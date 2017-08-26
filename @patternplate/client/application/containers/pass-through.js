'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps)(PassThrough);


function PassThrough(props) {
	return _react2.default.createElement(
		'div',
		null,
		props.items.map(function (_ref) {
			var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
			    name = _ref2[0],
			    value = _ref2[1];

			return _react2.default.createElement('input', { type: 'hidden', key: name, name: name, value: value });
		})
	);
}

function mapProps(state, own) {
	var query = state.routing.locationBeforeTransitions.query;

	var q = (0, _extends3.default)({}, query, own.query || {});
	var items = (0, _lodash.entries)(q).filter(function (_ref3) {
		var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
		    value = _ref4[1];

		return value !== null;
	});
	return { items: items };
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3Bhc3MtdGhyb3VnaC5qcyJdLCJuYW1lcyI6WyJtYXBQcm9wcyIsIlBhc3NUaHJvdWdoIiwicHJvcHMiLCJpdGVtcyIsIm1hcCIsIm5hbWUiLCJ2YWx1ZSIsInN0YXRlIiwib3duIiwicXVlcnkiLCJyb3V0aW5nIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsInEiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZSx5QkFBUUEsUUFBUixFQUFrQkMsV0FBbEIsQzs7O0FBRWYsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDM0IsUUFDQztBQUFBO0FBQUE7QUFDRUEsUUFBTUMsS0FBTixDQUFZQyxHQUFaLENBQWdCO0FBQUE7QUFBQSxPQUFFQyxJQUFGO0FBQUEsT0FBUUMsS0FBUjs7QUFBQSxVQUFtQix5Q0FBTyxNQUFLLFFBQVosRUFBcUIsS0FBS0QsSUFBMUIsRUFBZ0MsTUFBTUEsSUFBdEMsRUFBNEMsT0FBT0MsS0FBbkQsR0FBbkI7QUFBQSxHQUFoQjtBQURGLEVBREQ7QUFLQTs7QUFFRCxTQUFTTixRQUFULENBQWtCTyxLQUFsQixFQUF5QkMsR0FBekIsRUFBOEI7QUFBQSxLQUN0QkMsS0FEc0IsR0FDYkYsTUFBTUcsT0FBTixDQUFjQyx5QkFERCxDQUN0QkYsS0FEc0I7O0FBRTdCLEtBQU1HLCtCQUFRSCxLQUFSLEVBQW1CRCxJQUFJQyxLQUFKLElBQWEsRUFBaEMsQ0FBTjtBQUNBLEtBQU1OLFFBQVEscUJBQVFTLENBQVIsRUFBV0MsTUFBWCxDQUFrQjtBQUFBO0FBQUEsTUFBSVAsS0FBSjs7QUFBQSxTQUFlQSxVQUFVLElBQXpCO0FBQUEsRUFBbEIsQ0FBZDtBQUNBLFFBQU8sRUFBQ0gsWUFBRCxFQUFQO0FBQ0EiLCJmaWxlIjoicGFzcy10aHJvdWdoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtlbnRyaWVzfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShQYXNzVGhyb3VnaCk7XG5cbmZ1bmN0aW9uIFBhc3NUaHJvdWdoKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtwcm9wcy5pdGVtcy5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIga2V5PXtuYW1lfSBuYW1lPXtuYW1lfSB2YWx1ZT17dmFsdWV9Lz4pfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBtYXBQcm9wcyhzdGF0ZSwgb3duKSB7XG5cdGNvbnN0IHtxdWVyeX0gPSBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnM7XG5cdGNvbnN0IHEgPSB7Li4ucXVlcnksIC4uLihvd24ucXVlcnkgfHwge30pfTtcblx0Y29uc3QgaXRlbXMgPSBlbnRyaWVzKHEpLmZpbHRlcigoWywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gbnVsbCk7XG5cdHJldHVybiB7aXRlbXN9O1xufVxuIl19