'use strict';

var color = require('color');

var _require = require('lodash'),
    merge = _require.merge;

module.exports = function getThemes(passed) {
  var mainColorTone = passed ? color(passed) : color.hsl(210, 100, 100);

  var bgDark = mainColorTone.desaturate(0.5).darken(0.9).string();
  var bgLight = 'hsl(255, 0%, 100%)';
  var main = mainColorTone.darken(0.4).string();

  var common = {
    active: main,
    error: 'rgba(205, 63, 69, 1)', // errors, alpha, deprecated
    warning: 'rgba(255, 189, 46, 1)', // warnings, beta
    info: 'rgba(80, 179, 221, 1)', // rc
    success: 'rgba(74, 165, 74, 1)', // stable
    dark: 'rgba(15, 15, 15, 1)',
    light: 'rgba(220, 220, 220, 1)',
    fontWeight: '100',
    fontSize: '14px'
  };

  var dark = merge({}, common, {
    name: 'dark',
    background: bgDark,
    backgroundSecondary: mainColorTone.desaturate(0.5).darken(0.85).string(),
    backgroundTertiary: mainColorTone.desaturate(0.5).darken(0.8).string(),
    border: mainColorTone.desaturate(0.5).darken(0.85).string(),
    color: 'hsl(255, 0%, 95%)',
    colorNegated: 'rgba(68, 68, 68, 1)',
    recess: 'rgba(153, 153, 153, 1)'
  });

  var light = merge({}, common, {
    name: 'light',
    background: bgLight,
    backgroundSecondary: 'rgba(246, 248, 250, 1)',
    backgroundTertiary: 'rgba(246, 248, 250, 1)',
    border: 'rgba(228, 228, 228, 1)',
    color: 'rgba(68, 68, 68, 1)',
    colorNegated: 'rgba(238, 238, 238, 1)',
    recess: 'rgba(106, 115, 125, 1)',
    fontWeight: 'initial'
  });

  return {
    dark,
    light
  };
};

function mix(a, b, factor) {
  return color(a).mix(color(b), factor);
}
//# sourceMappingURL=index.js.map