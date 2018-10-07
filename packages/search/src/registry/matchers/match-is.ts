import * as T from "../../types";

export function matchIs(value: string): T.Matcher  {
  return item => item.contentType === value;
}
