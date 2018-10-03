import * as Schema from "ts-transform-json-schema";
import * as Types from "@patternplate/types";

export const schema = Schema.fromType<Types.PatternplateConfig>();
