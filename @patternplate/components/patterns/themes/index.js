const color = require('color');
const {merge} = require('lodash');


module.exports = function getThemes(passed) {
  const mainColorTone = passed ? color(passed) : color.hsl(210, 100, 100);

  const bgDark = mainColorTone.desaturate(0.5).darken(0.9).string();
  const bgLight = 'hsl(255, 0%, 100%)';
  const main = mainColorTone.darken(0.4).string();

  const common = {
    active: main,
    error: 'rgba(205, 63, 69, 1)', // errors, alpha, deprecated
    warning: 'rgba(255, 189, 46, 1)', // warnings, beta
    info: 'rgba(80, 179, 221, 1)', // rc
    success: 'rgba(74, 165, 74, 1)', // stable
    dark: 'rgba(15, 15, 15, 1)',
    light: 'rgba(220, 220, 220, 1)',
    fontWeight: '100',
    fontSize: '14px',
    boxSizing: 'border-box'
  };

  const dark = merge({}, common, {
    name: 'dark',
    background: bgDark,
    backgroundSecondary: 'hsl(210, 50%, 15%)',
    backgroundTertiary: 'rgba(32, 37, 40, 1)',
    border: mainColorTone.desaturate(0.5).darken(0.85).string(),
    color: 'hsl(255, 0%, 95%)',
    colorNegated: 'rgba(68, 68, 68, 1)',
    recess: 'rgba(153, 153, 153, 1)'
  });

  const light = merge({}, common, {
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
}

function mix(a, b, factor) {
  return color(a)
    .mix(color(b), factor);
}
