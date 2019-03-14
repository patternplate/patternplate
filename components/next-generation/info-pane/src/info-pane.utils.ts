import * as semver from "semver";
const text = require("react-addons-text-content");

export interface Versionable {
  children?: React.ReactNode;
  theme: {
    colors: {
      error: string;
      warning: string;
      success: string;
    }
  }
}

export const versionColor = (props: Versionable) => {
  const v = text(props.children);
  if (!semver.valid(v)) {
    return props.theme.colors.error;
  }
  if (semver.satisfies(v, "<=0.1")) {
    return props.theme.colors.error;
  }
  if (semver.satisfies(v, "> 0.1 < 1")) {
    return props.theme.colors.warning;
  }
  return props.theme.colors.success;
};

export function has(val: unknown): val is [unknown] {
  return Array.isArray(val) && val.length > 0;
}

