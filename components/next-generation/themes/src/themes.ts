import * as Types from "@patternplate/types";
import * as Color from "color";
import { merge } from "lodash";
import { fonts } from "./fonts";


export interface Theme {
  colors: {
    active: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    background: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    border: string;
    color: string;
    colorNegated: string;
    recess: string;
  },
  fonts: {
    fontWeight: number;
    fontSize: number;
    default: string,
    code: string;
    headline: string;
  }
}

export function getThemes(ui: Types.PatternplateUiConfig = {}): { dark: Theme; light: Theme } {
  const defaultMainColor = Color.rgb(51, 153, 255);
  const grayBaseTone = Color.hsl(0, 0, 100);

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
    ? Color(ui.colorActive)
    : defaultMainColor;

  const error = ui.colorError
    ? Color(ui.colorError)
    : Color.rgb(250, 63, 69);

  const warning = ui.colorWarning
    ? Color(ui.colorWarning)
    : Color.rgb(255, 189, 46);

  const info = ui.colorInfo
    ? Color(ui.colorInfo)
    : Color.rgb(80, 179, 221);

  const success = ui.colorSuccess
    ? Color(ui.colorSuccess)
    : Color.rgb(74, 165, 74);

  const background = ui.colorBackgroundDark
    ? Color(ui.colorBackgroundDark)
    : colorGroups.marine[900];

  const backgroundSecondary = ui.colorBackgroundSecondaryDark
    ? Color(ui.colorBackgroundSecondaryDark)
    : colorGroups.marine[800];

  const backgroundTertiary = ui.colorBackgroundTertiaryDark
    ? Color(ui.colorBackgroundTertiaryDark)
    : colorGroups.marine[700];

  const border = ui.colorBorderDark
    ? Color(ui.colorBorderDark)
    : colorGroups.marine[800];

  const textColor = ui.colorTextDark
    ? Color(ui.colorTextDark)
    : colorGroups.gray[50];

  const textColorNegated = ui.colorTextNegatedDark
    ? Color(ui.colorTextNegatedDark)
    : colorGroups.gray[700];

  const recess = ui.colorRecessDark
    ? Color(ui.colorRecessDark)
    : colorGroups.gray[400];

  const backgroundLight = ui.colorBackgroundLight
    ? Color(ui.colorBackgroundLight)
    : Color.hsl(255, 0, 100);

  const backgroundSecondaryLight = ui.colorBackgroundSecondaryLight
    ? Color(ui.colorBackgroundSecondaryLight)
    : Color.rgb(246, 248, 250);

  const backgroundTertiaryLight = ui.colorBackgroundTertiaryLight
    ? Color(ui.colorBackgroundTertiaryLight)
    : Color.rgb(246, 248, 250);

  const borderLight = ui.colorBorderLight
    ? Color(ui.colorBorderLight)
    : Color.rgb(228, 228, 228);

  const colorLight = ui.colorTextLight
    ? Color(ui.colorTextLight)
    : Color.rgb(68, 68, 68, 1);

  const colorLightNegated = ui.colorTextNegatedLight
    ? Color(ui.colorTextNegatedLight)
    : Color.rgb(238, 238, 238);

  const colorRecessLight = ui.colorRecessLight
    ? Color(ui.colorRecessLight)
    : Color.rgb(106, 115, 125, 1);

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
