const color = require("color");
const { merge } = require("lodash");
const fonts = require("../fonts");

module.exports = function getThemes(ui = {}) {
  const defaultMainColor = color.rgb(51, 153, 255);
  const grayBaseTone = color.hsl(0, 0, 100);

  const colorGroups = {
    lightBlue: {
      300: defaultMainColor.darken(0.3),
      600: defaultMainColor.darken(0.4)
    },
    marine: {
      500: defaultMainColor.desaturate(0.5).darken(0.5),
      700: defaultMainColor.desaturate(0.5).darken(0.8),
      800: defaultMainColor.desaturate(0.5).darken(0.85),
      900: defaultMainColor.desaturate(0.5).darken(0.9)
    },
    gray: {
      50: grayBaseTone.darken(0.05),
      100: grayBaseTone.darken(0.15),
      400: grayBaseTone.darken(0.4),
      700: grayBaseTone.darken(0.735)
    }
  };

  const active = ui.colorActive
    ? color(ui.colorActive)
    : defaultMainColor;

  const error = ui.colorError
    ? color(ui.colorError)
    : color.rgb(250, 63, 69);

  const warning = ui.colorWarning
    ? color(ui.colorWarning)
    : color.rgb(255, 189, 46);

  const info = ui.colorInfo
    ? color(ui.colorInfo)
    : color.rgb(80, 179, 221);

  const success = ui.colorSuccess
    ? color(ui.colorSuccess)
    : color.rgb(74, 165, 74);

  const background = ui.colorBackgroundDark
    ? color(ui.colorBackgroundDark)
    : colorGroups.marine[900];

  const backgroundSecondary = ui.colorBackgroundSecondaryDark
    ? color(ui.colorBackgroundSecondaryDark)
    : colorGroups.marine[800];

  const backgroundTertiary = ui.colorBackgroundTertiaryDark
    ? color(ui.colorBackgroundTertiaryDark)
    : colorGroups.marine[700];

  const border = ui.colorBorderDark
    ? color(ui.colorBorderDark)
    : colorGroups.marine[800];

  const textColor = ui.colorTextDark
    ? color(ui.colorTextDark)
    : colorGroups.gray[50];

  const textColorNegated = ui.colorTextNegatedDark
    ? color(ui.colorTextNegatedDark)
    : colorGroups.gray[700];

  const recess = ui.colorRecessDark
    ? color(ui.colorRecessDark)
    : colorGroups.gray[400];

  const backgroundLight = ui.colorBackgroundLight
    ? color(ui.colorBackgroundLight)
    : color.hsl(255, 0, 100);

  const backgroundSecondaryLight = ui.colorBackgroundSecondaryLight
    ? color(ui.colorBackgroundSecondaryLight)
    : color.rgb(246, 248, 250);

  const backgroundTertiaryLight = ui.colorBackgroundTertiaryLight
    ? color(ui.colorBackgroundTertiaryLight)
    : color.rgb(246, 248, 250);

  const borderLight = ui.colorBorderLight
    ? color(ui.colorBorderLight)
    : color.rgb(228, 228, 228);

  const colorLight = ui.colorTextLight
    ? color(ui.colorTextLight)
    : color.rgb(68, 68, 68, 1);

  const colorLightNegated = ui.colorTextLightNegated
    ? color(ui.colorTextLightNegated)
    : color.rgb(238, 238, 238);

  const colorRecessLight = ui.colorRecessLight
    ? color(ui.colorRecessLight)
    : color.rgb(106, 115, 125, 1);

  const fontFaces = fonts();

  const common = {
    colors: {
      active: active.string(),
      error: error.string(),
      warning: warning.string(),
      info: info.string(),
      success: success.string(),
    },
    fonts: {
      fontWeight: 100,
      fontSize: 14,
      default: ui.fontDefault || fontFaces.default,
      code: ui.fontCode || fontFaces.code,
      headline: ui.fontHeadline || fontFaces.default
    }
  };

  const dark = merge({}, common, {
    name: "dark",
    colors: {
      background: background.string(),
      backgroundSecondary: backgroundSecondary.string(),
      backgroundTertiary: backgroundTertiary.string(),
      border: border.string(),
      color: textColor.string(),
      colorNegated: textColorNegated.string(),
      recess: recess.string()
    }
  });

  const light = merge({}, common, {
    name: "light",
    colors: {
      background: backgroundLight.string(),
      backgroundSecondary: backgroundSecondaryLight.string(),
      backgroundTertiary: backgroundTertiaryLight.string(),
      border: borderLight.string(),
      color: colorLight.string(),
      colorNegated: colorLightNegated.string(),
      recess: colorRecessLight.string()
    }
  });

  return {
    dark,
    light
  };
};
