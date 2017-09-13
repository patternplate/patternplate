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