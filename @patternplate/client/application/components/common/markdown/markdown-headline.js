'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tposition: absolute;\n\tright: 100%;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tfont-size: 0;\n\tline-height: 0;\n\tpadding-right: 10px;\n\tcolor: ', ';\n\tdisplay: none;\n\t&:hover {\n\t\tdisplay: block;\n\t}\n'], ['\n\tposition: absolute;\n\tright: 100%;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tfont-size: 0;\n\tline-height: 0;\n\tpadding-right: 10px;\n\tcolor: ', ';\n\tdisplay: none;\n\t&:hover {\n\t\tdisplay: block;\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tfill: ', ';\n\t&:hover {\n\t\tfill: ', ';\n\t}\n'], ['\n\tfill: ', ';\n\t&:hover {\n\t\tfill: ', ';\n\t}\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tcolor: ', ';\n\tfont-size: ', 'px;\n\tmargin: 60px 0 16px 0;\n\tfont-weight: 300;\n\tline-height: 1.25;\n\t&:hover ', ' {\n\t\tdisplay: block;\n\t}\n\t&:first-child {\n\t\tmargin-top: 0;\n\t}\n'], ['\n\tposition: relative;\n\tcolor: ', ';\n\tfont-size: ', 'px;\n\tmargin: 60px 0 16px 0;\n\tfont-weight: 300;\n\tline-height: 1.25;\n\t&:hover ', ' {\n\t\tdisplay: block;\n\t}\n\t&:first-child {\n\t\tmargin-top: 0;\n\t}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _link = require('../link');

var _link2 = _interopRequireDefault(_link);

var _text = require('../../text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZES = {
	h1: 36,
	h2: 27,
	h3: 23,
	h4: 18,
	h5: 18,
	h6: 18
};

var StyledLink = (0, _styledComponents2.default)(_link2.default)(_templateObject, function (props) {
	return props.theme.color;
});

var ThemedIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject2, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.active;
});

exports.default = (0, _styledComponents2.default)(MarkdownHeadline)(_templateObject3, function (props) {
	return props.theme.color;
}, function (props) {
	return SIZES[props.is];
}, StyledLink);


function MarkdownHeadline(props) {
	var children = Array.isArray(props.children) ? props.children.join('') : props.children;
	var id = encodeURIComponent((children || '').split(' ').join('-').toLowerCase());

	return _react2.default.createElement(
		_text2.default,
		{ is: props.is, className: props.className, id: id },
		props.children,
		props.linkable && _react2.default.createElement(
			MarkdownHeadlineLink,
			{ name: children, id: id },
			_react2.default.createElement(_icon2.default, { size: 's', symbol: 'anchor' })
		)
	);
}

MarkdownHeadline.propTypes = {
	is: _react.PropTypes.string,
	children: _react.PropTypes.any.isRequired,
	className: _react.PropTypes.string
};

function MarkdownHeadlineLink(props) {
	return _react2.default.createElement(
		StyledLink,
		{ title: 'Link to "' + props.name + '"', hash: props.id },
		_react2.default.createElement(ThemedIcon, { symbol: 'anchor', size: 's' }),
		'Link to id'
	);
}

MarkdownHeadlineLink.propTypes = {
	id: _react.PropTypes.string.isRequired,
	name: _react.PropTypes.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1oZWFkbGluZS5qcyJdLCJuYW1lcyI6WyJTSVpFUyIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsIlN0eWxlZExpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3IiLCJUaGVtZWRJY29uIiwiYWN0aXZlIiwiTWFya2Rvd25IZWFkbGluZSIsImlzIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwiaWQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiY2xhc3NOYW1lIiwibGlua2FibGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJpc1JlcXVpcmVkIiwiTWFya2Rvd25IZWFkbGluZUxpbmsiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVE7QUFDYkMsS0FBSSxFQURTO0FBRWJDLEtBQUksRUFGUztBQUdiQyxLQUFJLEVBSFM7QUFJYkMsS0FBSSxFQUpTO0FBS2JDLEtBQUksRUFMUztBQU1iQyxLQUFJO0FBTlMsQ0FBZDs7QUFTQSxJQUFNQyxhQUFhLCtDQUFiLGtCQVFJO0FBQUEsUUFBU0MsTUFBTUMsS0FBTixDQUFZQyxLQUFyQjtBQUFBLENBUkosQ0FBTjs7QUFlQSxJQUFNQyxhQUFhLCtDQUFiLG1CQUNHO0FBQUEsUUFBU0gsTUFBTUMsS0FBTixDQUFZQyxLQUFyQjtBQUFBLENBREgsRUFHSTtBQUFBLFFBQVNGLE1BQU1DLEtBQU4sQ0FBWUcsTUFBckI7QUFBQSxDQUhKLENBQU47O2tCQU9lLGdDQUFPQyxnQkFBUCxDLG1CQUVMO0FBQUEsUUFBU0wsTUFBTUMsS0FBTixDQUFZQyxLQUFyQjtBQUFBLEMsRUFDSTtBQUFBLFFBQVNWLE1BQU1RLE1BQU1NLEVBQVosQ0FBVDtBQUFBLEMsRUFJSFAsVTs7O0FBUVgsU0FBU00sZ0JBQVQsQ0FBMEJMLEtBQTFCLEVBQWlDO0FBQ2hDLEtBQU1PLFdBQVdDLE1BQU1DLE9BQU4sQ0FBY1QsTUFBTU8sUUFBcEIsSUFBZ0NQLE1BQU1PLFFBQU4sQ0FBZUcsSUFBZixDQUFvQixFQUFwQixDQUFoQyxHQUEwRFYsTUFBTU8sUUFBakY7QUFDQSxLQUFNSSxLQUFLQyxtQkFBbUIsQ0FBQ0wsWUFBWSxFQUFiLEVBQWlCTSxLQUFqQixDQUF1QixHQUF2QixFQUE0QkgsSUFBNUIsQ0FBaUMsR0FBakMsRUFBc0NJLFdBQXRDLEVBQW5CLENBQVg7O0FBRUEsUUFDQztBQUFBO0FBQUEsSUFBTSxJQUFJZCxNQUFNTSxFQUFoQixFQUFvQixXQUFXTixNQUFNZSxTQUFyQyxFQUFnRCxJQUFJSixFQUFwRDtBQUNFWCxRQUFNTyxRQURSO0FBRUVQLFFBQU1nQixRQUFOLElBQ0E7QUFBQyx1QkFBRDtBQUFBLEtBQXNCLE1BQU1ULFFBQTVCLEVBQXNDLElBQUlJLEVBQTFDO0FBQ0MsbURBQU0sTUFBSyxHQUFYLEVBQWUsUUFBTyxRQUF0QjtBQUREO0FBSEYsRUFERDtBQVVBOztBQUVETixpQkFBaUJZLFNBQWpCLEdBQTZCO0FBQzVCWCxLQUFJLGlCQUFFWSxNQURzQjtBQUU1QlgsV0FBVSxpQkFBRVksR0FBRixDQUFNQyxVQUZZO0FBRzVCTCxZQUFXLGlCQUFFRztBQUhlLENBQTdCOztBQU1BLFNBQVNHLG9CQUFULENBQThCckIsS0FBOUIsRUFBcUM7QUFDcEMsUUFDQztBQUFDLFlBQUQ7QUFBQSxJQUFZLHFCQUFtQkEsTUFBTXNCLElBQXpCLE1BQVosRUFBOEMsTUFBTXRCLE1BQU1XLEVBQTFEO0FBQ0MsZ0NBQUMsVUFBRCxJQUFZLFFBQU8sUUFBbkIsRUFBNEIsTUFBSyxHQUFqQyxHQUREO0FBQUE7QUFBQSxFQUREO0FBTUE7O0FBRURVLHFCQUFxQkosU0FBckIsR0FBaUM7QUFDaENOLEtBQUksaUJBQUVPLE1BQUYsQ0FBU0UsVUFEbUI7QUFFaENFLE9BQU0saUJBQUVKLE1BQUYsQ0FBU0U7QUFGaUIsQ0FBakMiLCJmaWxlIjoibWFya2Rvd24taGVhZGxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vbGluayc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi8uLi90ZXh0JztcblxuY29uc3QgU0laRVMgPSB7XG5cdGgxOiAzNixcblx0aDI6IDI3LFxuXHRoMzogMjMsXG5cdGg0OiAxOCxcblx0aDU6IDE4LFxuXHRoNjogMThcbn07XG5cbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDEwMCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdGZvbnQtc2l6ZTogMDtcblx0bGluZS1oZWlnaHQ6IDA7XG5cdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0ZGlzcGxheTogbm9uZTtcblx0Jjpob3ZlciB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cbmA7XG5cbmNvbnN0IFRoZW1lZEljb24gPSBzdHlsZWQoSWNvbilgXG5cdGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHQmOmhvdmVyIHtcblx0XHRmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZX07XG5cdH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChNYXJrZG93bkhlYWRsaW5lKWBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5cdGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBTSVpFU1twcm9wcy5pc119cHg7XG5cdG1hcmdpbjogNjBweCAwIDE2cHggMDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0bGluZS1oZWlnaHQ6IDEuMjU7XG5cdCY6aG92ZXIgJHtTdHlsZWRMaW5rfSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0fVxuYDtcblxuZnVuY3Rpb24gTWFya2Rvd25IZWFkbGluZShwcm9wcykge1xuXHRjb25zdCBjaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkocHJvcHMuY2hpbGRyZW4pID8gcHJvcHMuY2hpbGRyZW4uam9pbignJykgOiBwcm9wcy5jaGlsZHJlbjtcblx0Y29uc3QgaWQgPSBlbmNvZGVVUklDb21wb25lbnQoKGNoaWxkcmVuIHx8ICcnKS5zcGxpdCgnICcpLmpvaW4oJy0nKS50b0xvd2VyQ2FzZSgpKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxUZXh0IGlzPXtwcm9wcy5pc30gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IGlkPXtpZH0+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHR7cHJvcHMubGlua2FibGUgJiZcblx0XHRcdFx0PE1hcmtkb3duSGVhZGxpbmVMaW5rIG5hbWU9e2NoaWxkcmVufSBpZD17aWR9PlxuXHRcdFx0XHRcdDxJY29uIHNpemU9XCJzXCIgc3ltYm9sPVwiYW5jaG9yXCIvPlxuXHRcdFx0XHQ8L01hcmtkb3duSGVhZGxpbmVMaW5rPlxuXHRcdFx0fVxuXHRcdDwvVGV4dD5cblx0KTtcbn1cblxuTWFya2Rvd25IZWFkbGluZS5wcm9wVHlwZXMgPSB7XG5cdGlzOiB0LnN0cmluZyxcblx0Y2hpbGRyZW46IHQuYW55LmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogdC5zdHJpbmdcbn07XG5cbmZ1bmN0aW9uIE1hcmtkb3duSGVhZGxpbmVMaW5rKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZExpbmsgdGl0bGU9e2BMaW5rIHRvIFwiJHtwcm9wcy5uYW1lfVwiYH0gaGFzaD17cHJvcHMuaWR9PlxuXHRcdFx0PFRoZW1lZEljb24gc3ltYm9sPVwiYW5jaG9yXCIgc2l6ZT1cInNcIi8+XG5cdFx0XHRMaW5rIHRvIGlkXG5cdFx0PC9TdHlsZWRMaW5rPlxuXHQpO1xufVxuXG5NYXJrZG93bkhlYWRsaW5lTGluay5wcm9wVHlwZXMgPSB7XG5cdGlkOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRuYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuIl19