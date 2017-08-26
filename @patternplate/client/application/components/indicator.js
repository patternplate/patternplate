'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\theight: 7.5px;\n\twidth: 7.5px;\n\tmargin-right: 5px;\n\tborder-radius: 50%;\n\tbackground: ', ';\n\ttransition: background .4s ease-in-out, opacity .5s ease-in;\n\topacity: ', ';\n\tcursor: ', ';\n\t', '\n'], ['\n\tposition: relative;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\theight: 7.5px;\n\twidth: 7.5px;\n\tmargin-right: 5px;\n\tborder-radius: 50%;\n\tbackground: ', ';\n\ttransition: background .4s ease-in-out, opacity .5s ease-in;\n\topacity: ', ';\n\tcursor: ', ';\n\t', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n\tposition: relative;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n\tposition: relative;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: absolute;\n\tright: 20px;\n\tcolor: ', ';\n\t', '\n'], ['\n\tposition: absolute;\n\tright: 20px;\n\tcolor: ', ';\n\t', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\t\t\t@keyframes out {\n\t\t\t\tto {\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t'], ['\n\t\t\t@keyframes out {\n\t\t\t\tto {\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\t\t\t@keyframes pulse {\n\t\t\t\tfrom {\n\t\t\t\t\topacity: .6;\n\t\t\t\t\ttransform: translate(-50%, -50%) scale(1);\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\ttransform: translate(-50%, -50%) scale(.75);\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\topacity: .6;\n\t\t\t\t\ttransform: translate(-50%, -50%) scale(1);\n\t\t\t\t}\n\t\t\t}\n\t\t'], ['\n\t\t\t@keyframes pulse {\n\t\t\t\tfrom {\n\t\t\t\t\topacity: .6;\n\t\t\t\t\ttransform: translate(-50%, -50%) scale(1);\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\ttransform: translate(-50%, -50%) scale(.75);\n\t\t\t\t}\n\t\t\t\tto {\n\t\t\t\t\topacity: .6;\n\t\t\t\t\ttransform: translate(-50%, -50%) scale(1);\n\t\t\t\t}\n\t\t\t}\n\t\t']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Indicator;


function Indicator(props) {
	return _react2.default.createElement(
		StyledIndicator,
		{
			onClick: props.onClick,
			title: isValid(props.status) ? 'Force sync ' + props.shortcut.toString() : ''
		},
		_react2.default.createElement(
			StyledLabel,
			{ size: 's', status: props.status },
			getLabel(props)
		),
		_react2.default.createElement(StyledDot, { status: props.status })
	);
}

Indicator.propTypes = {
	onClick: _react.PropTypes.func,
	status: _react.PropTypes.oneOf(['', 'error', 'loading', 'loaded']).isRequired,
	shortcut: _react.PropTypes.object.isRequired
};

var StyledDot = _styledComponents2.default.div(_templateObject, function (props) {
	return props.status === 'error' ? 'rgb(205, 63, 69)' : props.theme.active;
}, function (props) {
	return props.status ? 1 : 0;
}, function (props) {
	return props.status ? 'pointer' : '';
}, function (props) {
	return getGlow(props);
});

var StyledIndicator = _styledComponents2.default.div(_templateObject2);

var StyledLabel = (0, _styledComponents2.default)(_text2.default)(_templateObject3, function (props) {
	return props.theme.color;
}, function (props) {
	return getOut(props);
});

function getGlow(props) {
	return '\n\t\t&::before {\n\t\t\tcontent: \'\';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\theight: 12px;\n\t\t\twidth: 12px;\n\t\t\tfilter: blur(3px);\n\t\t\tbackground: inherit;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\topacity: .6;\n\t\t\t' + getPulse(props) + ';\n\t\t}\n\t';
}

function getOut(props) {
	if (props.status !== 'loaded') {
		return;
	}

	/* eslint-disable no-unused-expressions */
	(0, _styledComponents.injectGlobal)(_templateObject4);
	/* eslint-enable */

	return '\n\t\t\tanimation: out 1s .15s;\n\t\t\tanimation-fill-mode: forwards;\n\t\t';
}

function getLabel(props) {
	switch (props.status) {
		case 'error':
			return 'offline';
		case 'loaded':
			return 'synced';
		case 'loading':
			return 'syncing';
		default:
			return '';
	}
}

function getPulse(props) {
	if (props.status !== 'loading') {
		return;
	}

	/* eslint-disable no-unused-expressions */
	(0, _styledComponents.injectGlobal)(_templateObject5);
	/* eslint-enable */

	return '\n\t\t\tanimation: pulse 1s infinite;\n\t\t';
}

function isValid(status) {
	return ['loading', 'loaded'].includes(status);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2luZGljYXRvci5qcyJdLCJuYW1lcyI6WyJJbmRpY2F0b3IiLCJwcm9wcyIsIm9uQ2xpY2siLCJpc1ZhbGlkIiwic3RhdHVzIiwic2hvcnRjdXQiLCJ0b1N0cmluZyIsImdldExhYmVsIiwicHJvcFR5cGVzIiwiZnVuYyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsIlN0eWxlZERvdCIsImRpdiIsInRoZW1lIiwiYWN0aXZlIiwiZ2V0R2xvdyIsIlN0eWxlZEluZGljYXRvciIsIlN0eWxlZExhYmVsIiwiY29sb3IiLCJnZXRPdXQiLCJnZXRQdWxzZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWVBLFM7OztBQUVmLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3pCLFFBQ0M7QUFBQyxpQkFBRDtBQUFBO0FBQ0MsWUFBU0EsTUFBTUMsT0FEaEI7QUFFQyxVQUFPQyxRQUFRRixNQUFNRyxNQUFkLG9CQUFzQ0gsTUFBTUksUUFBTixDQUFlQyxRQUFmLEVBQXRDLEdBQW9FO0FBRjVFO0FBSUM7QUFBQyxjQUFEO0FBQUEsS0FBYSxNQUFLLEdBQWxCLEVBQXNCLFFBQVFMLE1BQU1HLE1BQXBDO0FBQTZDRyxZQUFTTixLQUFUO0FBQTdDLEdBSkQ7QUFLQyxnQ0FBQyxTQUFELElBQVcsUUFBUUEsTUFBTUcsTUFBekI7QUFMRCxFQUREO0FBU0E7O0FBRURKLFVBQVVRLFNBQVYsR0FBc0I7QUFDckJOLFVBQVMsaUJBQU1PLElBRE07QUFFckJMLFNBQVEsaUJBQU1NLEtBQU4sQ0FBWSxDQUFDLEVBQUQsRUFBSyxPQUFMLEVBQWMsU0FBZCxFQUF5QixRQUF6QixDQUFaLEVBQWdEQyxVQUZuQztBQUdyQk4sV0FBVSxpQkFBTU8sTUFBTixDQUFhRDtBQUhGLENBQXRCOztBQU1BLElBQU1FLFlBQVksMkJBQU9DLEdBQW5CLGtCQVFTO0FBQUEsUUFBU2IsTUFBTUcsTUFBTixLQUFpQixPQUFqQixHQUEyQixrQkFBM0IsR0FBZ0RILE1BQU1jLEtBQU4sQ0FBWUMsTUFBckU7QUFBQSxDQVJULEVBVU07QUFBQSxRQUFTZixNQUFNRyxNQUFOLEdBQWUsQ0FBZixHQUFtQixDQUE1QjtBQUFBLENBVk4sRUFXSztBQUFBLFFBQVNILE1BQU1HLE1BQU4sR0FBZSxTQUFmLEdBQTJCLEVBQXBDO0FBQUEsQ0FYTCxFQVlIO0FBQUEsUUFBU2EsUUFBUWhCLEtBQVIsQ0FBVDtBQUFBLENBWkcsQ0FBTjs7QUFlQSxJQUFNaUIsa0JBQWtCLDJCQUFPSixHQUF6QixrQkFBTjs7QUFPQSxJQUFNSyxjQUFjLCtDQUFkLG1CQUdJO0FBQUEsUUFBU2xCLE1BQU1jLEtBQU4sQ0FBWUssS0FBckI7QUFBQSxDQUhKLEVBSUg7QUFBQSxRQUFTQyxPQUFPcEIsS0FBUCxDQUFUO0FBQUEsQ0FKRyxDQUFOOztBQU9BLFNBQVNnQixPQUFULENBQWlCaEIsS0FBakIsRUFBd0I7QUFDdkIsc1JBWUlxQixTQUFTckIsS0FBVCxDQVpKO0FBZUE7O0FBRUQsU0FBU29CLE1BQVQsQ0FBZ0JwQixLQUFoQixFQUF1QjtBQUN0QixLQUFJQSxNQUFNRyxNQUFOLEtBQWlCLFFBQXJCLEVBQStCO0FBQzlCO0FBQ0E7O0FBRUQ7QUFDQTtBQU9BOztBQUVBO0FBSUE7O0FBRUQsU0FBU0csUUFBVCxDQUFrQk4sS0FBbEIsRUFBeUI7QUFDeEIsU0FBUUEsTUFBTUcsTUFBZDtBQUNDLE9BQUssT0FBTDtBQUNDLFVBQU8sU0FBUDtBQUNELE9BQUssUUFBTDtBQUNDLFVBQU8sUUFBUDtBQUNELE9BQUssU0FBTDtBQUNDLFVBQU8sU0FBUDtBQUNEO0FBQ0MsVUFBTyxFQUFQO0FBUkY7QUFVQTs7QUFFRCxTQUFTa0IsUUFBVCxDQUFrQnJCLEtBQWxCLEVBQXlCO0FBQ3hCLEtBQUlBLE1BQU1HLE1BQU4sS0FBaUIsU0FBckIsRUFBZ0M7QUFDL0I7QUFDQTs7QUFFRDtBQUNBO0FBZ0JBOztBQUVBO0FBR0E7O0FBRUQsU0FBU0QsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDeEIsUUFBTyxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCbUIsUUFBdEIsQ0FBK0JuQixNQUEvQixDQUFQO0FBQ0EiLCJmaWxlIjoiaW5kaWNhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7aW5qZWN0R2xvYmFsfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRpY2F0b3I7XG5cbmZ1bmN0aW9uIEluZGljYXRvcihwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxTdHlsZWRJbmRpY2F0b3Jcblx0XHRcdG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG5cdFx0XHR0aXRsZT17aXNWYWxpZChwcm9wcy5zdGF0dXMpID8gYEZvcmNlIHN5bmMgJHtwcm9wcy5zaG9ydGN1dC50b1N0cmluZygpfWAgOiAnJ31cblx0XHRcdD5cblx0XHRcdDxTdHlsZWRMYWJlbCBzaXplPVwic1wiIHN0YXR1cz17cHJvcHMuc3RhdHVzfT57Z2V0TGFiZWwocHJvcHMpfTwvU3R5bGVkTGFiZWw+XG5cdFx0XHQ8U3R5bGVkRG90IHN0YXR1cz17cHJvcHMuc3RhdHVzfS8+XG5cdFx0PC9TdHlsZWRJbmRpY2F0b3I+XG5cdCk7XG59XG5cbkluZGljYXRvci5wcm9wVHlwZXMgPSB7XG5cdG9uQ2xpY2s6IHR5cGVzLmZ1bmMsXG5cdHN0YXR1czogdHlwZXMub25lT2YoWycnLCAnZXJyb3InLCAnbG9hZGluZycsICdsb2FkZWQnXSkuaXNSZXF1aXJlZCxcblx0c2hvcnRjdXQ6IHR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBTdHlsZWREb3QgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZsZXgtZ3JvdzogMDtcblx0ZmxleC1zaHJpbms6IDA7XG5cdGhlaWdodDogNy41cHg7XG5cdHdpZHRoOiA3LjVweDtcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5zdGF0dXMgPT09ICdlcnJvcicgPyAncmdiKDIwNSwgNjMsIDY5KScgOiBwcm9wcy50aGVtZS5hY3RpdmV9O1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC40cyBlYXNlLWluLW91dCwgb3BhY2l0eSAuNXMgZWFzZS1pbjtcblx0b3BhY2l0eTogJHtwcm9wcyA9PiBwcm9wcy5zdGF0dXMgPyAxIDogMH07XG5cdGN1cnNvcjogJHtwcm9wcyA9PiBwcm9wcy5zdGF0dXMgPyAncG9pbnRlcicgOiAnJ307XG5cdCR7cHJvcHMgPT4gZ2V0R2xvdyhwcm9wcyl9XG5gO1xuXG5jb25zdCBTdHlsZWRJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkKFRleHQpYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAyMHB4O1xuXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5cdCR7cHJvcHMgPT4gZ2V0T3V0KHByb3BzKX1cbmA7XG5cbmZ1bmN0aW9uIGdldEdsb3cocHJvcHMpIHtcblx0cmV0dXJuIGBcblx0XHQmOjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDUwJTtcblx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdGhlaWdodDogMTJweDtcblx0XHRcdHdpZHRoOiAxMnB4O1xuXHRcdFx0ZmlsdGVyOiBibHVyKDNweCk7XG5cdFx0XHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0XHRvcGFjaXR5OiAuNjtcblx0XHRcdCR7Z2V0UHVsc2UocHJvcHMpfTtcblx0XHR9XG5cdGA7XG59XG5cbmZ1bmN0aW9uIGdldE91dChwcm9wcykge1xuXHRpZiAocHJvcHMuc3RhdHVzICE9PSAnbG9hZGVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXHRpbmplY3RHbG9iYWxgXG5cdFx0XHRAa2V5ZnJhbWVzIG91dCB7XG5cdFx0XHRcdHRvIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0YDtcblx0LyogZXNsaW50LWVuYWJsZSAqL1xuXG5cdHJldHVybiBgXG5cdFx0XHRhbmltYXRpb246IG91dCAxcyAuMTVzO1xuXHRcdFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cdFx0YDtcbn1cblxuZnVuY3Rpb24gZ2V0TGFiZWwocHJvcHMpIHtcblx0c3dpdGNoIChwcm9wcy5zdGF0dXMpIHtcblx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRyZXR1cm4gJ29mZmxpbmUnO1xuXHRcdGNhc2UgJ2xvYWRlZCc6XG5cdFx0XHRyZXR1cm4gJ3N5bmNlZCc7XG5cdFx0Y2FzZSAnbG9hZGluZyc6XG5cdFx0XHRyZXR1cm4gJ3N5bmNpbmcnO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gJyc7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0UHVsc2UocHJvcHMpIHtcblx0aWYgKHByb3BzLnN0YXR1cyAhPT0gJ2xvYWRpbmcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cdGluamVjdEdsb2JhbGBcblx0XHRcdEBrZXlmcmFtZXMgcHVsc2Uge1xuXHRcdFx0XHRmcm9tIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAuNjtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQ1MCUge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoLjc1KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0byB7XG5cdFx0XHRcdFx0b3BhY2l0eTogLjY7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRgO1xuXHQvKiBlc2xpbnQtZW5hYmxlICovXG5cblx0cmV0dXJuIGBcblx0XHRcdGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XG5cdFx0YDtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChzdGF0dXMpIHtcblx0cmV0dXJuIFsnbG9hZGluZycsICdsb2FkZWQnXS5pbmNsdWRlcyhzdGF0dXMpO1xufVxuIl19