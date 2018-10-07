import * as T from "../../types";

const Flags = {
  deprecated: 0,
  alpha: 1,
  beta: 2,
  rc: 3,
  stable: 4
};

export function matchFlag(value: string, options: T.Term): T.Matcher {
  const i = Flags[value] || 0;
  const flag = item => item.manifest.flag;
  const index = item => Flags[flag(item)] || 0;

  if (options.lower) {
    return item => (options.equals ? index(item) <= i : index(item) < i);
  }
  if (options.greater) {
    return item => (options.equals ? index(item) >= i : index(item) > i);
  }
  if (options.startsWith) {
    return item => flag(item).startsWith(value);
  }
  if (options.includes) {
    return item => flag(item).includes(value);
  }
  return item => flag(item) === value;
}

