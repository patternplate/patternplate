"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Lightbox;


function Lightbox(props) {
	return _react2.default.createElement(
		"div",
		{ className: "lightbox" },
		props.backdrop && _react2.default.createElement("div", { className: "lightbox__backdrop" }),
		_react2.default.createElement(
			"div",
			{ className: "lightbox__container" },
			_react2.default.createElement(
				"div",
				{ className: "lightbox__title" },
				_react2.default.createElement(
					"h3",
					{ className: "h h3" },
					props.title
				)
			),
			_react2.default.createElement(
				"div",
				{ className: "lightbox__children" },
				props.children
			),
			_react2.default.createElement(
				"div",
				{ className: "lightbox__button-row" },
				props.buttons
			)
		)
	);
}

Lightbox.propTypes = {
	title: _react.PropTypes.string.isRequired,
	backdrop: _react.PropTypes.bool.isRequired,
	children: _react.PropTypes.any,
	buttons: _react.PropTypes.arrayOf(_react.PropTypes.element)
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xpZ2h0Ym94L2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpZ2h0Ym94IiwicHJvcHMiLCJiYWNrZHJvcCIsInRpdGxlIiwiY2hpbGRyZW4iLCJidXR0b25zIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhbnkiLCJhcnJheU9mIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZUEsUTs7O0FBRWYsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDeEIsUUFDQztBQUFBO0FBQUEsSUFBSyxXQUFVLFVBQWY7QUFFRUEsUUFBTUMsUUFBTixJQUFrQix1Q0FBSyxXQUFVLG9CQUFmLEdBRnBCO0FBSUM7QUFBQTtBQUFBLEtBQUssV0FBVSxxQkFBZjtBQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsT0FBSSxXQUFVLE1BQWQ7QUFDRUQsV0FBTUU7QUFEUjtBQURELElBREQ7QUFNQztBQUFBO0FBQUEsTUFBSyxXQUFVLG9CQUFmO0FBQ0VGLFVBQU1HO0FBRFIsSUFORDtBQVNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsc0JBQWY7QUFDRUgsVUFBTUk7QUFEUjtBQVREO0FBSkQsRUFERDtBQW9CQTs7QUFFREwsU0FBU00sU0FBVCxHQUFxQjtBQUNwQkgsUUFBTyxpQkFBRUksTUFBRixDQUFTQyxVQURJO0FBRXBCTixXQUFVLGlCQUFFTyxJQUFGLENBQU9ELFVBRkc7QUFHcEJKLFdBQVUsaUJBQUVNLEdBSFE7QUFJcEJMLFVBQVMsaUJBQUVNLE9BQUYsQ0FBVSxpQkFBRUMsT0FBWjtBQUpXLENBQXJCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgTGlnaHRib3g7XG5cbmZ1bmN0aW9uIExpZ2h0Ym94KHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJsaWdodGJveFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRwcm9wcy5iYWNrZHJvcCAmJiA8ZGl2IGNsYXNzTmFtZT1cImxpZ2h0Ym94X19iYWNrZHJvcFwiLz5cblx0XHRcdH1cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlnaHRib3hfX2NvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpZ2h0Ym94X190aXRsZVwiPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJoIGgzXCI+XG5cdFx0XHRcdFx0XHR7cHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlnaHRib3hfX2NoaWxkcmVuXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaWdodGJveF9fYnV0dG9uLXJvd1wiPlxuXHRcdFx0XHRcdHtwcm9wcy5idXR0b25zfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5MaWdodGJveC5wcm9wVHlwZXMgPSB7XG5cdHRpdGxlOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRiYWNrZHJvcDogdC5ib29sLmlzUmVxdWlyZWQsXG5cdGNoaWxkcmVuOiB0LmFueSxcblx0YnV0dG9uczogdC5hcnJheU9mKHQuZWxlbWVudClcbn07XG4iXX0=