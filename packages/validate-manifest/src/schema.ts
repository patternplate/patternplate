import * as Path from "path";

let fullSchema;
let patternSchema;
let packageSchema;

if (!fullSchema && process.env.NODE_ENV !== "production") {
  fullSchema = computeSchema("PatternManifest");
  patternSchema = computeSchema("PatternJson");
  packageSchema = computeSchema("PackageJson");

  function computeSchema(typeName: string): unknown {
    const TJS = require("typescript-json-schema");

    const fileName =
      Path.extname(__filename) === ".js"
        ? require.resolve(`./types.d.ts`)
        : require.resolve(`./types.ts`);

    const program = TJS.getProgramFromFiles([fileName]);

    return TJS.generateSchema(program, typeName, {
      required: true,
      strictNullChecks: true
    });
  }
} else {
  fullSchema = require("./full-schema.json");
  patternSchema = require("./pattern-schema.json");
  packageSchema = require("./package-schema.json");
}

export const schema = fullSchema;
export const pattern = patternSchema;
export const pkg = packageSchema;
