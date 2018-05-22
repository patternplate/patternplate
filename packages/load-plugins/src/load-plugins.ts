import * as Crypto from "crypto";
import * as Path from "path";
import * as readPkg from "read-pkg";

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
    const id = shasum.update(path).digest("hex");

    const browserPath = await resolveBrowserFrom(cwd, pluginPath);
    const plugin = importFrom(cwd, pluginPath);

    return {
      path,
      browserPath,
      id,
      plugin
    }
  }));
}

const resolveBrowserFrom = async (cwd, path) => {
  try {
    const pkg = resolveFrom(cwd, `${path}/package`);
    const data = await readPkg(Path.dirname(pkg));
    return data.browser ? Path.posix.join(Path.dirname(pkg), data.browser) : resolveFrom(cwd, path);
  } catch (err) {
    return resolveFrom(cwd, path);
  }
}
