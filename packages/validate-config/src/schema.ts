import * as Schema from "ts-transform-json-schema";
import { PatternplateConfig } from "./types";

export const schema = Schema.fromType<PatternplateConfig>();
