import { validate } from "./validate";
import * as Types from "@patternplate/types";

export function isValid<T>(
  input: Types.ValidationInput
): input is Types.ValidationInput<Types.PatternplateConfig> {
  const [, valid] = validate(input);
  return valid;
}
