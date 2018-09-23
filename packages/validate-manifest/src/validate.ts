import * as Schema from "./schema";
import { ValidationInput } from "./types";

const validateOptions = require("schema-utils");

export function validate(
  { target, name }: ValidationInput,
  schema: unknown = Schema.schema
): [Error, false] | [null, true] {
  try {
    validateOptions(schema, target, name);
  } catch (err) {
    return [err, false];
  }

  return [null, true];
}

export function validatePatternJson(input: ValidationInput): [Error, false] | [null, true] {
  return validate(input, Schema.pattern);
}

export function validatePackage(input: ValidationInput): [Error, false] | [null, true] {
  return validate(input, Schema.pkg);
}
