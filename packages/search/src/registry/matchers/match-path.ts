import * as T from "../../types";
import * as Matcher from "matcher";

export function matchPath(value: string, options: T.Term): T.Matcher  {
  if (options.matches) {
    const patterns = (value || '').split(',').filter(Boolean);
    return item => {
      const p = typeof item.path === 'string' ? item.path : '';
      return patterns.some(pattern => Matcher.isMatch(p, pattern));
    };
  }

  return item => item.path === value;
}
