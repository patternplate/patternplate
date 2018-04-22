
import * as Crypto from "crypto";

const importFrom = require("import-from");
const resolveFrom = require("resolve-from");
const sander = require("@marionebl/sander");

export interface LoadPluginOpts {
  cwd?: string;
  validate?: boolean;
}

export interface LoadedPlugin {
  path: string;
  id: string;
  plugin: any;
}

export async function loadPlugins(pluginPaths: string[], opts: LoadPluginOpts = {}): Promise<LoadedPlugin[]> {
  const cwd = typeof opts.cwd === "string"
    ? opts.cwd
    : process.cwd();

  return Promise.all(pluginPaths.map(async pluginPath => {
    const path = resolveFrom(cwd, pluginPath);
    const shasum = Crypto.createHash("sha256");
    const id = shasum.update(await sander.readFile(path)).digest("hex");

    const plugin = importFrom(cwd, pluginPath);

    return {
      path,
      id,
      plugin
    }
  }));
}


