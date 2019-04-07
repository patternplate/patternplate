import * as Schema from "ts-transform-json-schema";
import { PatternManifest, PatternJson, PackageJson } from "@patternplate/types";

export const schema = Schema.fromType<PatternManifest>({
  ref: true,
  noExtraProps: false,
  strictNullChecks: true,
  required: true,
  id: 'validate-manifest-schema'
});

export const pattern = Schema.fromType<PatternJson>({
  ref: true,
  noExtraProps: false,
  strictNullChecks: true,
  required: true,
  id: 'validate-manifest-pattern'
});

export const pkg = Schema.fromType<PackageJson>({
  ref: true,
  noExtraProps: false,
  strictNullChecks: true,
  required: true,
  id: 'validate-manifest-pkg'
});
