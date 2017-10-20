const color = require("color");
const { merge } = require("lodash");

module.exports = function getThemes(passed) {
  const mainColorTone = passed ? color(passed) : color.hsl(210, 100, 100);
  const grayBaseTone = color.hsl(0, 0, 100);

  const colorGroups = {
    lightBlue: {
      300: mainColorTone.darken(0.3),
      600: mainColorTone.darken(0.4)
    },
    marine: {
      500: mainColorTone.desaturate(0.5).darken(0.5),
      700: mainColorTone.desaturate(0.5).darken(0.8),
      800: mainColorTone.desaturate(0.5).darken(0.85),
      900: mainColorTone.desaturate(0.5).darken(0.9)
    },
    gray: {
      50: grayBaseTone.darken(0.05),
      100: grayBaseTone.darken(0.15),
      400: grayBaseTone.darken(0.4),
      700: grayBaseTone.darken(0.735)
    }
  };

  const main = colorGroups.lightBlue[600].string();

  const common = {
    active: main,
    error: "rgba(205, 63, 69, 1)", // Errors, alpha, deprecated
    warning: "rgba(255, 189, 46, 1)", // Warnings, beta
    info: "rgba(80, 179, 221, 1)", // Rc
    success: "rgba(74, 165, 74, 1)", // Stable
    dark: "rgba(15, 15, 15, 1)",
    light: "rgba(220, 220, 220, 1)",
    fontWeight: "100",
    fontSize: "14px"
  };

  const dark = merge({}, common, {
    name: "dark",
    background: colorGroups.marine[900].string(),
    backgroundSecondary: colorGroups.marine[800].string(),
    backgroundTertiary: colorGroups.marine[700].string(),
    border: colorGroups.marine[800].string(),
    color: colorGroups.gray[50].string(),
    colorNegated: colorGroups.gray[700].string(),
    recess: colorGroups.gray[400].string()
  });

  const light = merge({}, common, {
    name: "light",
    background: "hsl(255, 0%, 100%)",
    backgroundSecondary: "rgba(246, 248, 250, 1)",
    backgroundTertiary: "rgba(246, 248, 250, 1)",
    border: "rgba(228, 228, 228, 1)",
    color: "rgba(68, 68, 68, 1)",
    colorNegated: "rgba(238, 238, 238, 1)",
    recess: "rgba(106, 115, 125, 1)",
    fontWeight: "initial"
  });

  return {
    dark,
    light,
    colorGroups
  };
};
