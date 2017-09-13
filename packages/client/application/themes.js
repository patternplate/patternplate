'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

	var dark = _extends({}, common, {
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

	var light = _extends({}, common, {
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