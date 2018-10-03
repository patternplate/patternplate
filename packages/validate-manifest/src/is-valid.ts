import { validate } from "./validate";
import * as Schema from "./schema";
import * as Types from "@patternplate/types";

export function isValid(
  input: Types.ValidationInput
): input is Types.ValidationInput<Types.PatternManifest> {
  const [, valid] = validate(input);
  return valid;
}

export function isValidPatternJson(
  input: Types.ValidationInput
): input is Types.ValidationInput<Types.PatternJson> {
  const [, valid] = validate(input, Schema.pattern);
  return valid;
}

export function isValidPackageJson(
  input: Types.ValidationInput
): input is Types.ValidationInput<Types.PackageJson> {
  const [, valid] = validate(input, Schema.pkg);
  return valid;
}
