import { fromType } from "ts-transform-json-schema";
import * as T from "./types";

const validateOptions = require("schema-utils");
const schema = fromType<T.Renderer>() as object;

export function isRenderer(data: unknown): data is T.Renderer {
  return validateOptions(schema, data, "renderer");
}
