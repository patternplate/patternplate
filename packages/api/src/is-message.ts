import { fromType } from "ts-transform-json-schema"
import * as T from './types';

const validateOptions = require("schema-utils");
const schema = fromType<T.QueueMessage>() as object;

export function isMessage(data: unknown): data is T.QueueMessage {
  try {
    return validateOptions(schema, data, 'message');
  } catch (err) {
    const type = typeof data === "object" && data !== null ? (data as any).type || "unknown" : "unknown";
    console.error(`Message of type ${type} is invalid: ${err.message}`);
    // console.log(`Invalid Message: ${JSON.stringify(data)}`);
    return false;
  }
}
