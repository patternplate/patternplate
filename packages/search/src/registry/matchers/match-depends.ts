import * as T from "../../types";

export function matchDepends(value: string, options: T.Term): T.Matcher {
  const depends = item =>
    (item.dependencies || []).filter(i => typeof i === "string");

  if (options.startsWith) {
    return item =>
      depends(item).length > 0 && depends(item).some(d => d.startsWith(value));
  }

  if (options.includes) {
    return item =>
      depends(item).length > 0 && depends(item).some(d => d.includes(value));
  }

  return item => depends(item).includes(value);
}
