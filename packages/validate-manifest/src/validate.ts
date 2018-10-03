import * as Schema from "./schema";
import * as Types from "@patternplate/types";

const validateOptions = require("schema-utils");

export function validate(
  { target, name }: Types.ValidationInput,
  schema: unknown = Schema.schema
): [Error, false] | [null, true] {
  try {
    validateOptions(schema, target, name);
  } catch (err) {
    return [err, false];
  }

  return [null, true];
}

export function validatePatternJson(input: Types.ValidationInput): [Error, false] | [null, true] {
  return validate(input, Schema.pattern);
}

export function validatePackage(input: Types.ValidationInput): [Error, false] | [null, true] {
  return validate(input, Schema.pkg);
}
