import * as Schema from "ts-transform-json-schema";
import * as Types from "@patternplate/types";

export const schema = Schema.fromType<Types.PatternManifest>({
  ref: true,
  noExtraProps: false,
  strictNullChecks: true,
  required: true
});

export const pattern = Schema.fromType<Types.PatternJson>({
  ref: true,
  noExtraProps: false,
  strictNullChecks: true,
  required: true
});

export const pkg = Schema.fromType<Types.PackageJson>({
  ref: true,
  noExtraProps: false,
  strictNullChecks: true,
  required: true
});
