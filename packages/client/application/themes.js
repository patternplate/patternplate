'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getThemes;

const _color = require('color');

const _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getThemes(passed) {
  const bgDark = 'rgba(39, 39, 39, 1)';
  const bgLight = 'rgba(255, 255, 255, 1)';

  const common = {
    active: passed || 'rgba(66, 165, 245, 1)',
    error: 'rgba(205, 63, 69, 1)', // Errors, alpha, deprecated
    warning: 'rgba(255, 189, 46, 1)', // Warnings, beta
    info: 'rgba(80, 179, 221, 1)', // Rc
    success: 'rgba(74, 165, 74, 1)', // Stable
    dark: 'rgba(15, 15, 15, 1)',
    light: 'rgba(220, 220, 220, 1)'
  };

  const dark = _extends({}, common, {
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

  const light = _extends({}, common, {
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
    dark,
    light
  };
}

function mix(a, b, factor) {
  return (0, _color2.default)(a).mix((0, _color2.default)(b), factor);
}