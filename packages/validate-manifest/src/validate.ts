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
