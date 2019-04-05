import { fromType } from "ts-transform-json-schema"
import * as T from './types';

const validateOptions = require("schema-utils");
const schema = fromType<T.HtmlContent>({
  ref: true,
  noExtraProps: true,
  strictNullChecks: true,
  required: true
}) as object;

export function isContent(data: unknown): data is T.HtmlContent {
  return validateOptions(schema, data, 'html-content');
}
