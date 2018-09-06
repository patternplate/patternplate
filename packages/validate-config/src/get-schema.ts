import * as Path from "path";

let schema;

export function getSchema(): any {
  if (process.env.NODE_ENV !== "production") {
    if (schema) {
      return schema;
    }

    const TJS = require("typescript-json-schema");

    const fileName =
      Path.extname(__filename) === ".js"
        ? require.resolve(`./types.d.ts`)
        : require.resolve(`./types.ts`);

    const program = TJS.getProgramFromFiles([fileName]);
    schema = TJS.generateSchema(program, "PatternplateConfig", {
      required: true
    });
    return schema;
  } else {
    return require("./schema.json");
  }
}
