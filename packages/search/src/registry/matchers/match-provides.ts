import * as T from "../../types";

export function matchProvides(value: string, options: T.Term): T.Matcher {
  const dependents = item =>
    (item.dependents || []).filter(i => typeof i === "string");

  if (options.startsWith) {
    return item =>
      dependents(item).length > 0 &&
      dependents(item).some(d => d.startsWith(value));
  }

  if (options.includes) {
    return item =>
      dependents(item).length > 0 &&
      dependents(item).some(d => d.includes(value));
  }

  return item => dependents(item).includes(value);
}
