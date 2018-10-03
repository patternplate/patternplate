import * as Schema from "ts-transform-json-schema";
import * as Types from "@patternplate/types";

export const schema = Schema.fromType<Types.PatternManifest>();
export const pattern = Schema.fromType<Types.PatternJson>();
export const pkg = Schema.fromType<Types.PackageJson>();
