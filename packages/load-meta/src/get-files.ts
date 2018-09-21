import * as Path from "path";
import * as globby from "globby";

export interface GetFilesOptions {
  cwd: string;
}

export async function getFiles(source: string, options: GetFilesOptions) {
  const cwd = Path.dirname(source);
  const files = await globby(["*", "!package.json", "!pattern.json"], { cwd });
  return files.map(file => Path.relative(options.cwd, Path.join(cwd, file)));
}
