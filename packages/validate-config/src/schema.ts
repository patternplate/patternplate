import * as Schema from "ts-transform-json-schema";
import * as Types from "@patternplate/types";
import * as TJS from "@marionebl/typescript-json-schema";

export const schema: TJS.Definition = Schema.fromType<Types.PatternplateConfig>({
  ref: true,
  noExtraProps: true,
  strictNullChecks: true,
  required: true
});
