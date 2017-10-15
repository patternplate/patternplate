/* eslint-disable xo/filename-case */
import { merge } from "lodash/fp";

export const getFile = merge({
  buffer: Buffer.from(""),
  path: "mocks/index.js",
  dependencies: {}
});
