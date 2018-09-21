import { BasicSourceMapConsumer } from "source-map";
const loadSourceMap = require("load-source-map");

export function getSourceMap(jsFile: string): Promise<BasicSourceMapConsumer> {
  return new Promise((resolve, reject) => {
    loadSourceMap(jsFile, (err: Error, sourcemap: BasicSourceMapConsumer) => {
      if (err) {
        return reject(err);
      }
      resolve(sourcemap);
    });
  });
}
