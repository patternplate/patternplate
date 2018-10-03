import { schema } from './schema';
import * as Types from "@patternplate/types";

const validateOptions = require("schema-utils");

export function validate({ target, name }: Types.ValidationInput): [Error, false] | [null, true] {
  try {
    validateOptions(schema, target, name);
  } catch (err) {
    return [err, false];
  }

  return [null, true];
}
