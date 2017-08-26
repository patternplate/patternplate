'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 0;\n\tline-height: 0;\n'], ['\n\tfont-size: 0;\n\tline-height: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ToggleButton;


function ToggleButton(props) {
	var title = props.title || props.shortcut.description(props) + ' ' + props.shortcut.toString();

	if (props.active === false) {
		return _react2.default.createElement(
			StandIn,
			{ className: props.className, title: title },
			props.children
		);
	}

	return _react2.default.createElement(
		_link2.default,
		{
			className: props.className,
			title: title,
			query: (0, _defineProperty3.default)({}, props.shortcut.key, !props.enabled)
		},
		props.children
	);
}

var StandIn = _styledComponents2.default.div(_templateObject);

ToggleButton.propTypes = {
	className: _react.PropTypes.string,
	children: _react.PropTypes.string,
	enabled: _react.PropTypes.bool.isRequired,
	shortcut: _react.PropTypes.shape({
		description: _react.PropTypes.func.isRequired,
		toString: _react.PropTypes.func.isRequired,
		action: _react.PropTypes.shape({
			key: _react.PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi90b2dnbGUtYnV0dG9uLmpzIl0sIm5hbWVzIjpbIlRvZ2dsZUJ1dHRvbiIsInByb3BzIiwidGl0bGUiLCJzaG9ydGN1dCIsImRlc2NyaXB0aW9uIiwidG9TdHJpbmciLCJhY3RpdmUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImtleSIsImVuYWJsZWQiLCJTdGFuZEluIiwiZGl2IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzaGFwZSIsImZ1bmMiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZUEsWTs7O0FBRWYsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDNUIsS0FBTUMsUUFBUUQsTUFBTUMsS0FBTixJQUFrQkQsTUFBTUUsUUFBTixDQUFlQyxXQUFmLENBQTJCSCxLQUEzQixDQUFsQixTQUF1REEsTUFBTUUsUUFBTixDQUFlRSxRQUFmLEVBQXJFOztBQUVBLEtBQUlKLE1BQU1LLE1BQU4sS0FBaUIsS0FBckIsRUFBNEI7QUFDM0IsU0FDQztBQUFDLFVBQUQ7QUFBQSxLQUFTLFdBQVdMLE1BQU1NLFNBQTFCLEVBQXFDLE9BQU9MLEtBQTVDO0FBQ0VELFNBQU1PO0FBRFIsR0FERDtBQUtBOztBQUVELFFBQ0M7QUFBQTtBQUFBO0FBQ0MsY0FBV1AsTUFBTU0sU0FEbEI7QUFFQyxVQUFPTCxLQUZSO0FBR0MsNENBQVNELE1BQU1FLFFBQU4sQ0FBZU0sR0FBeEIsRUFBOEIsQ0FBQ1IsTUFBTVMsT0FBckM7QUFIRDtBQUtFVCxRQUFNTztBQUxSLEVBREQ7QUFTQTs7QUFFRCxJQUFNRyxVQUFVLDJCQUFPQyxHQUFqQixpQkFBTjs7QUFLQVosYUFBYWEsU0FBYixHQUF5QjtBQUN4Qk4sWUFBVyxpQkFBRU8sTUFEVztBQUV4Qk4sV0FBVSxpQkFBRU0sTUFGWTtBQUd4QkosVUFBUyxpQkFBRUssSUFBRixDQUFPQyxVQUhRO0FBSXhCYixXQUFVLGlCQUFFYyxLQUFGLENBQVE7QUFDakJiLGVBQWEsaUJBQUVjLElBQUYsQ0FBT0YsVUFESDtBQUVqQlgsWUFBVSxpQkFBRWEsSUFBRixDQUFPRixVQUZBO0FBR2pCRyxVQUFRLGlCQUFFRixLQUFGLENBQVE7QUFDZlIsUUFBSyxpQkFBRUssTUFBRixDQUFTRTtBQURDLEdBQVIsRUFFTEE7QUFMYyxFQUFSLEVBTVBBO0FBVnFCLENBQXpCIiwiZmlsZSI6InRvZ2dsZS1idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVCdXR0b247XG5cbmZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbihwcm9wcykge1xuXHRjb25zdCB0aXRsZSA9IHByb3BzLnRpdGxlIHx8IGAke3Byb3BzLnNob3J0Y3V0LmRlc2NyaXB0aW9uKHByb3BzKX0gJHtwcm9wcy5zaG9ydGN1dC50b1N0cmluZygpfWA7XG5cblx0aWYgKHByb3BzLmFjdGl2ZSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFN0YW5kSW4gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvU3RhbmRJbj5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TGlua1xuXHRcdFx0Y2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG5cdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRxdWVyeT17e1twcm9wcy5zaG9ydGN1dC5rZXldOiAhcHJvcHMuZW5hYmxlZH19XG5cdFx0XHQ+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PC9MaW5rPlxuXHQpO1xufVxuXG5jb25zdCBTdGFuZEluID0gc3R5bGVkLmRpdmBcblx0Zm9udC1zaXplOiAwO1xuXHRsaW5lLWhlaWdodDogMDtcbmA7XG5cblRvZ2dsZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogdC5zdHJpbmcsXG5cdGNoaWxkcmVuOiB0LnN0cmluZyxcblx0ZW5hYmxlZDogdC5ib29sLmlzUmVxdWlyZWQsXG5cdHNob3J0Y3V0OiB0LnNoYXBlKHtcblx0XHRkZXNjcmlwdGlvbjogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdFx0dG9TdHJpbmc6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdGFjdGlvbjogdC5zaGFwZSh7XG5cdFx0XHRrZXk6IHQuc3RyaW5nLmlzUmVxdWlyZWRcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH0pLmlzUmVxdWlyZWRcbn07XG4iXX0=