import {
	dirname
} from 'path';

import {
	debuglog
} from 'util';

import makeDirectory from './make-directory';
import writeFile from './write-file';

export default async function writeSafe(path, buffer) {
	const debug = debuglog('write-safe');
	await makeDirectory(dirname(path));
	debug('Writing %s', path);
	return writeFile(path, buffer);
}
