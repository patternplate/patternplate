import {merge} from 'lodash';
import executeFile from './execute-file';
import getFileContext from './get-file-context';

export default function run(file) {
  const context = getFileContext(file, run);

  try {
    const main = executeFile(file, context);

    if (!main) {
      return null;
    }

    const hasDefaultExport =
      typeof main.default === 'object' || typeof main.default === 'function';

    return hasDefaultExport ? merge(main.default, main) : main;
  } catch (err) {
    const errorFile = file || {pattern: {}};
    const message = [
      `Error during parsing of file ${errorFile.path} in pattern`,
      `${errorFile.pattern.id}:`
    ].join(' ');
    err.message = [message, err.message].join('\n');
    throw err;
  }
}
