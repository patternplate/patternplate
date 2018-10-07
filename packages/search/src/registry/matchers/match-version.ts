import * as semver from "semver";
import * as T from "../../types";

export function matchVersion(value: string, options: T.Term): T.Matcher {
  const version = item => item.manifest.version;

  const modified =
    options.lower || options.greater || options.startsWith || options.includes;
  const valid = item => semver.valid(version(item));

  if (modified) {
    return item =>
      valid(item)
        ? semver.satisfies(
            version(item),
            `${options.operators}${options.value}`
          )
        : false;
  }

  return item =>
    valid(item) ? semver.satisfies(version(item), options.value) : false;
}
