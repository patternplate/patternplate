import * as Path from "path";

let jsonSchema;

if (!jsonSchema && process.env.NODE_ENV !== "production") {
  const TJS = require("typescript-json-schema");

  const fileName =
    Path.extname(__filename) === ".js"
      ? require.resolve(`./types.d.ts`)
      : require.resolve(`./types.ts`);

  const program = TJS.getProgramFromFiles([fileName]);

  jsonSchema = TJS.generateSchema(program, "PatternplateConfig", {
    required: true
  });
} else {
  jsonSchema = require("./schema.json");
}

export const schema = jsonSchema;
