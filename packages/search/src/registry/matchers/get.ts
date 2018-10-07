import * as T from "../../types";
import * as M from "./match";

export function get(field: string, value: string, options: T.Term): T.Matcher {
  const depends = M.matchDepends(value, options);
  const has = M.matchHas(value);
  const provides = M.matchProvides(value, options);
  const flag = M.matchFlag(value, options);
  const tags = M.matchTags(value, options);
  const version = M.matchVersion(value, options);
  const is = M.matchIs(value);

  return item => {
    switch (field) {
      case "depends":
        return depends(item);
      case "flag":
        return flag(item);
      case "has":
        return has(item);
      case "is":
        return is(item);
      case "provides":
        return provides(item);
      case "tag":
      case "tags":
        return tags(item);
      case "version":
        return version(item);
      case "flag":
        return flag(item);
      default:
        return item[field] === value || item.manifest[field] === value;
    }
  };
}
