'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
			var _ref2 = _slicedToArray(_ref, 2),
			    name = _ref2[0],
			    value = _ref2[1];

			return _react2.default.createElement('input', { type: 'hidden', key: name, name: name, value: value });
		})
	);
}

function mapProps(state, own) {
	var query = state.routing.locationBeforeTransitions.query;

	var q = _extends({}, query, own.query || {});
	var items = (0, _lodash.entries)(q).filter(function (_ref3) {
		var _ref4 = _slicedToArray(_ref3, 2),
		    value = _ref4[1];

		return value !== null;
	});
	return { items: items };
}