import * as T from "../../types";

export function matchTags(value: string, options: T.Term): T.Matcher  {
  const tags = item => item.manifest.tags || [];

  if (options.startsWith) {
    return item =>
      tags(item).length > 0 && tags(item).some(tag => tag.startsWith(value));
  }

  if (options.includes) {
    return item =>
      tags(item).length > 0 && tags(item).some(tag => tag.includes(value));
  }

  return item => tags(item).includes(value);
}
