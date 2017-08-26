'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Select;


function Select(props) {
	var className = (0, _classnames2.default)('select', props.className);

	return _react2.default.createElement(
		'label',
		{ className: className },
		_react2.default.createElement(
			'select',
			{
				className: 'select__native',
				onChange: props.onChange,
				value: props.value.value
			},
			props.options.map(function (_ref) {
				var value = _ref.value,
				    name = _ref.name;

				return _react2.default.createElement(
					'option',
					{ key: value, value: value },
					name
				);
			})
		),
		_react2.default.createElement(
			'span',
			{ className: 'select__label' },
			props.label
		),
		_react2.default.createElement(
			'div',
			{ className: 'select__body' },
			_react2.default.createElement(
				'span',
				{ className: 'select__value' },
				props.value.name
			),
			_react2.default.createElement(_icon2.default, {
				base: props.base,
				className: 'select__icon',
				symbol: 'arrow-right'
			})
		)
	);
}

Select.propTypes = {
	base: _react.PropTypes.string.isRequired,
	className: _react.PropTypes.string,
	value: _react.PropTypes.shape({
		value: _react.PropTypes.string.isRequired,
		name: _react.PropTypes.string.isRequired
	}),
	options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		value: _react.PropTypes.string.isRequired,
		name: _react.PropTypes.string.isRequired
	})),
	onChange: _react.PropTypes.func.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9zZWxlY3QuanMiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInZhbHVlIiwib3B0aW9ucyIsIm1hcCIsIm5hbWUiLCJsYWJlbCIsImJhc2UiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJhcnJheU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7a0JBRWVBLE07OztBQUVmLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3RCLEtBQU1DLFlBQVksMEJBQUssUUFBTCxFQUFlRCxNQUFNQyxTQUFyQixDQUFsQjs7QUFFQSxRQUNDO0FBQUE7QUFBQSxJQUFPLFdBQVdBLFNBQWxCO0FBQ0M7QUFBQTtBQUFBO0FBQ0MsZUFBVSxnQkFEWDtBQUVDLGNBQVVELE1BQU1FLFFBRmpCO0FBR0MsV0FBT0YsTUFBTUcsS0FBTixDQUFZQTtBQUhwQjtBQU1FSCxTQUFNSSxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsZ0JBQW1CO0FBQUEsUUFBakJGLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLFFBQVZHLElBQVUsUUFBVkEsSUFBVTs7QUFDcEMsV0FBTztBQUFBO0FBQUEsT0FBUSxLQUFLSCxLQUFiLEVBQW9CLE9BQU9BLEtBQTNCO0FBQW1DRztBQUFuQyxLQUFQO0FBQ0EsSUFGRDtBQU5GLEdBREQ7QUFZQztBQUFBO0FBQUEsS0FBTSxXQUFVLGVBQWhCO0FBQ0VOLFNBQU1PO0FBRFIsR0FaRDtBQWVDO0FBQUE7QUFBQSxLQUFLLFdBQVUsY0FBZjtBQUNDO0FBQUE7QUFBQSxNQUFNLFdBQVUsZUFBaEI7QUFDRVAsVUFBTUcsS0FBTixDQUFZRztBQURkLElBREQ7QUFJQztBQUNDLFVBQU1OLE1BQU1RLElBRGI7QUFFQyxlQUFVLGNBRlg7QUFHQyxZQUFPO0FBSFI7QUFKRDtBQWZELEVBREQ7QUE0QkE7O0FBRURULE9BQU9VLFNBQVAsR0FBbUI7QUFDbEJELE9BQU0saUJBQUVFLE1BQUYsQ0FBU0MsVUFERztBQUVsQlYsWUFBVyxpQkFBRVMsTUFGSztBQUdsQlAsUUFBTyxpQkFBRVMsS0FBRixDQUFRO0FBQ2RULFNBQU8saUJBQUVPLE1BQUYsQ0FBU0MsVUFERjtBQUVkTCxRQUFNLGlCQUFFSSxNQUFGLENBQVNDO0FBRkQsRUFBUixDQUhXO0FBT2xCUCxVQUFTLGlCQUFFUyxPQUFGLENBQVUsaUJBQUVELEtBQUYsQ0FBUTtBQUMxQlQsU0FBTyxpQkFBRU8sTUFBRixDQUFTQyxVQURVO0FBRTFCTCxRQUFNLGlCQUFFSSxNQUFGLENBQVNDO0FBRlcsRUFBUixDQUFWLENBUFM7QUFXbEJULFdBQVUsaUJBQUVZLElBQUYsQ0FBT0g7QUFYQyxDQUFuQiIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGpvaW4gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcblxuZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XG5cdGNvbnN0IGNsYXNzTmFtZSA9IGpvaW4oJ3NlbGVjdCcsIHByb3BzLmNsYXNzTmFtZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRjbGFzc05hbWU9XCJzZWxlY3RfX25hdGl2ZVwiXG5cdFx0XHRcdG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cblx0XHRcdFx0dmFsdWU9e3Byb3BzLnZhbHVlLnZhbHVlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm9wcy5vcHRpb25zLm1hcCgoe3ZhbHVlLCBuYW1lfSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxvcHRpb24ga2V5PXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfT57bmFtZX08L29wdGlvbj47XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RfX2xhYmVsXCI+XG5cdFx0XHRcdHtwcm9wcy5sYWJlbH1cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0X19ib2R5XCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdF9fdmFsdWVcIj5cblx0XHRcdFx0XHR7cHJvcHMudmFsdWUubmFtZX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8SWNvblxuXHRcdFx0XHRcdGJhc2U9e3Byb3BzLmJhc2V9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0X19pY29uXCJcblx0XHRcdFx0XHRzeW1ib2w9XCJhcnJvdy1yaWdodFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbGFiZWw+XG5cdCk7XG59XG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7XG5cdGJhc2U6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogdC5zdHJpbmcsXG5cdHZhbHVlOiB0LnNoYXBlKHtcblx0XHR2YWx1ZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRuYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkXG5cdH0pLFxuXHRvcHRpb25zOiB0LmFycmF5T2YodC5zaGFwZSh7XG5cdFx0dmFsdWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0bmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZFxuXHR9KSksXG5cdG9uQ2hhbmdlOiB0LmZ1bmMuaXNSZXF1aXJlZFxufTtcbiJdfQ==