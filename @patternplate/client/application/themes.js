'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = getThemes;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getThemes(passed) {
	var bgDark = 'rgba(39, 39, 39, 1)';
	var bgLight = 'rgba(255, 255, 255, 1)';

	var common = {
		active: passed || 'rgba(66, 165, 245, 1)',
		error: 'rgba(205, 63, 69, 1)', // errors, alpha, deprecated
		warning: 'rgba(255, 189, 46, 1)', // warnings, beta
		info: 'rgba(80, 179, 221, 1)', // rc
		success: 'rgba(74, 165, 74, 1)', // stable
		dark: 'rgba(15, 15, 15, 1)',
		light: 'rgba(220, 220, 220, 1)'
	};

	var dark = (0, _extends3.default)({}, common, {
		name: 'dark',
		background: bgDark,
		backgroundSecondary: 'rgba(21, 23, 24, 1)',
		backgroundTertiary: 'rgba(32, 37, 40, 1)',
		border: 'rgba(64, 64, 64, 1)',
		color: 'rgba(238, 238, 238, 1)',
		colorNegated: 'rgba(68, 68, 68, 1)',
		recess: 'rgba(153, 153, 153, 1)',
		tint: mix(common.dark, common.active, 0.075).toString()
	});

	var light = (0, _extends3.default)({}, common, {
		name: 'light',
		background: bgLight,
		backgroundSecondary: 'rgba(246, 248, 250, 1)',
		backgroundTertiary: 'rgba(246, 248, 250, 1)',
		border: 'rgba(228, 228, 228, 1)',
		color: 'rgba(68, 68, 68, 1)',
		colorNegated: 'rgba(238, 238, 238, 1)',
		recess: 'rgba(106, 115, 125, 1)',
		tint: mix(common.light, common.active, 0.075).toString()
	});

	return {
		dark: dark,
		light: light
	};
}

function mix(a, b, factor) {
	return (0, _color2.default)(a).mix((0, _color2.default)(b), factor);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHBsaWNhdGlvbi90aGVtZXMuanMiXSwibmFtZXMiOlsiZ2V0VGhlbWVzIiwicGFzc2VkIiwiYmdEYXJrIiwiYmdMaWdodCIsImNvbW1vbiIsImFjdGl2ZSIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJzdWNjZXNzIiwiZGFyayIsImxpZ2h0IiwibmFtZSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2Vjb25kYXJ5IiwiYmFja2dyb3VuZFRlcnRpYXJ5IiwiYm9yZGVyIiwiY29sb3IiLCJjb2xvck5lZ2F0ZWQiLCJyZWNlc3MiLCJ0aW50IiwibWl4IiwidG9TdHJpbmciLCJhIiwiYiIsImZhY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFFd0JBLFM7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN6QyxLQUFNQyxTQUFTLHFCQUFmO0FBQ0EsS0FBTUMsVUFBVSx3QkFBaEI7O0FBRUEsS0FBTUMsU0FBUztBQUNkQyxVQUFRSixVQUFVLHVCQURKO0FBRWRLLFNBQU8sc0JBRk8sRUFFaUI7QUFDL0JDLFdBQVMsdUJBSEssRUFHb0I7QUFDbENDLFFBQU0sdUJBSlEsRUFJaUI7QUFDL0JDLFdBQVMsc0JBTEssRUFLbUI7QUFDakNDLFFBQU0scUJBTlE7QUFPZEMsU0FBTztBQVBPLEVBQWY7O0FBVUEsS0FBTUQsa0NBQ0ZOLE1BREU7QUFFTFEsUUFBTSxNQUZEO0FBR0xDLGNBQVlYLE1BSFA7QUFJTFksdUJBQXFCLHFCQUpoQjtBQUtMQyxzQkFBb0IscUJBTGY7QUFNTEMsVUFBUSxxQkFOSDtBQU9MQyxTQUFPLHdCQVBGO0FBUUxDLGdCQUFjLHFCQVJUO0FBU0xDLFVBQVEsd0JBVEg7QUFVTEMsUUFBTUMsSUFBSWpCLE9BQU9NLElBQVgsRUFBaUJOLE9BQU9DLE1BQXhCLEVBQWdDLEtBQWhDLEVBQXVDaUIsUUFBdkM7QUFWRCxHQUFOOztBQWFBLEtBQU1YLG1DQUNGUCxNQURFO0FBRUxRLFFBQU0sT0FGRDtBQUdMQyxjQUFZVixPQUhQO0FBSUxXLHVCQUFxQix3QkFKaEI7QUFLTEMsc0JBQW9CLHdCQUxmO0FBTUxDLFVBQVEsd0JBTkg7QUFPTEMsU0FBTyxxQkFQRjtBQVFMQyxnQkFBYyx3QkFSVDtBQVNMQyxVQUFRLHdCQVRIO0FBVUxDLFFBQU1DLElBQUlqQixPQUFPTyxLQUFYLEVBQWtCUCxPQUFPQyxNQUF6QixFQUFpQyxLQUFqQyxFQUF3Q2lCLFFBQXhDO0FBVkQsR0FBTjs7QUFhQSxRQUFPO0FBQ05aLFlBRE07QUFFTkM7QUFGTSxFQUFQO0FBSUE7O0FBRUQsU0FBU1UsR0FBVCxDQUFhRSxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUIsUUFBTyxxQkFBTUYsQ0FBTixFQUNMRixHQURLLENBQ0QscUJBQU1HLENBQU4sQ0FEQyxFQUNTQyxNQURULENBQVA7QUFFQSIsImZpbGUiOiJ0aGVtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3IgZnJvbSAnY29sb3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZXMocGFzc2VkKSB7XG5cdGNvbnN0IGJnRGFyayA9ICdyZ2JhKDM5LCAzOSwgMzksIDEpJztcblx0Y29uc3QgYmdMaWdodCA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJztcblxuXHRjb25zdCBjb21tb24gPSB7XG5cdFx0YWN0aXZlOiBwYXNzZWQgfHwgJ3JnYmEoNjYsIDE2NSwgMjQ1LCAxKScsXG5cdFx0ZXJyb3I6ICdyZ2JhKDIwNSwgNjMsIDY5LCAxKScsIC8vIGVycm9ycywgYWxwaGEsIGRlcHJlY2F0ZWRcblx0XHR3YXJuaW5nOiAncmdiYSgyNTUsIDE4OSwgNDYsIDEpJywgLy8gd2FybmluZ3MsIGJldGFcblx0XHRpbmZvOiAncmdiYSg4MCwgMTc5LCAyMjEsIDEpJywgLy8gcmNcblx0XHRzdWNjZXNzOiAncmdiYSg3NCwgMTY1LCA3NCwgMSknLCAvLyBzdGFibGVcblx0XHRkYXJrOiAncmdiYSgxNSwgMTUsIDE1LCAxKScsXG5cdFx0bGlnaHQ6ICdyZ2JhKDIyMCwgMjIwLCAyMjAsIDEpJ1xuXHR9O1xuXG5cdGNvbnN0IGRhcmsgPSB7XG5cdFx0Li4uY29tbW9uLFxuXHRcdG5hbWU6ICdkYXJrJyxcblx0XHRiYWNrZ3JvdW5kOiBiZ0RhcmssXG5cdFx0YmFja2dyb3VuZFNlY29uZGFyeTogJ3JnYmEoMjEsIDIzLCAyNCwgMSknLFxuXHRcdGJhY2tncm91bmRUZXJ0aWFyeTogJ3JnYmEoMzIsIDM3LCA0MCwgMSknLFxuXHRcdGJvcmRlcjogJ3JnYmEoNjQsIDY0LCA2NCwgMSknLFxuXHRcdGNvbG9yOiAncmdiYSgyMzgsIDIzOCwgMjM4LCAxKScsXG5cdFx0Y29sb3JOZWdhdGVkOiAncmdiYSg2OCwgNjgsIDY4LCAxKScsXG5cdFx0cmVjZXNzOiAncmdiYSgxNTMsIDE1MywgMTUzLCAxKScsXG5cdFx0dGludDogbWl4KGNvbW1vbi5kYXJrLCBjb21tb24uYWN0aXZlLCAwLjA3NSkudG9TdHJpbmcoKVxuXHR9O1xuXG5cdGNvbnN0IGxpZ2h0ID0ge1xuXHRcdC4uLmNvbW1vbixcblx0XHRuYW1lOiAnbGlnaHQnLFxuXHRcdGJhY2tncm91bmQ6IGJnTGlnaHQsXG5cdFx0YmFja2dyb3VuZFNlY29uZGFyeTogJ3JnYmEoMjQ2LCAyNDgsIDI1MCwgMSknLFxuXHRcdGJhY2tncm91bmRUZXJ0aWFyeTogJ3JnYmEoMjQ2LCAyNDgsIDI1MCwgMSknLFxuXHRcdGJvcmRlcjogJ3JnYmEoMjI4LCAyMjgsIDIyOCwgMSknLFxuXHRcdGNvbG9yOiAncmdiYSg2OCwgNjgsIDY4LCAxKScsXG5cdFx0Y29sb3JOZWdhdGVkOiAncmdiYSgyMzgsIDIzOCwgMjM4LCAxKScsXG5cdFx0cmVjZXNzOiAncmdiYSgxMDYsIDExNSwgMTI1LCAxKScsXG5cdFx0dGludDogbWl4KGNvbW1vbi5saWdodCwgY29tbW9uLmFjdGl2ZSwgMC4wNzUpLnRvU3RyaW5nKClcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGRhcmssXG5cdFx0bGlnaHRcblx0fTtcbn1cblxuZnVuY3Rpb24gbWl4KGEsIGIsIGZhY3Rvcikge1xuXHRyZXR1cm4gY29sb3IoYSlcblx0XHQubWl4KGNvbG9yKGIpLCBmYWN0b3IpO1xufVxuIl19