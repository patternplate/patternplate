import * as Path from 'path';
import * as Fs from 'fs';
import * as Util from 'util';
import * as globby from 'globby';

export interface LoadDocOptions {
  cwd: string;
}

export interface LoadedDoc {
  filepath: string | null;
  contents: string | null;
}

const readFile = Util.promisify(Fs.readFile);

// TODO: Refactor to use a Result object
export async function loadDoc({ cwd }: LoadDocOptions): Promise<LoadedDoc> {
  const [file] = await globby(["README.md", "readme.md", "index.md"], { cwd });

  if (!file) {
    return {
      filepath: null,
      contents: null
    };
  }

  const filepath = Path.join(cwd, file);

  return {
    filepath,
    contents: String(await readFile(filepath))
  }
}

