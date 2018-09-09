import * as cosmiconfig from "cosmiconfig";
import * as resolveFrom from "resolve-from";
import * as ValidateConfig from "@patternplate/validate-config";

const jsonSchemaFilter = require("json-schema-filter");

const DEFAULTS = {
  docs: ["docs/**/*.md", "README.md"],
  entry: ["lib/**/demo.js"]
};

export interface LoadInput {
  cwd: string;
  sanitize?: boolean;
}

export interface LoadOutput<T = string | null, V = unknown> {
  filepath: T;
  config: V;
}

export default load;
export const loadConfig = load;

async function load(input: LoadInput): Promise<LoadOutput> {
  const explorer = cosmiconfig("patternplate");
  const output = await explorer.load(input.cwd);

  // TODO: Contribute improved resolve-from typings
  const rf = (resolveFrom as any) as {
    silent(cwd: string, path: string): string | null;
  };

  if (!output) {
    const render =
      rf.silent(input.cwd, "@patternplate/render-default/render") ||
      require.resolve("@patternplate/render-default/render");

    const mount =
      rf.silent(input.cwd, "@patternplate/render-default/mount") ||
      require.resolve("@patternplate/render-default/mount");

    return {
      config: { ...DEFAULTS, render, mount },
      filepath: null
    };
  }

  const config = input.sanitize
    ? jsonSchemaFilter(ValidateConfig.schema, output.config)
    : output.config;

  return {
    config,
    filepath: output.filepath
  };
}
