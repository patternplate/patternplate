import {
	dirname
} from 'path';

import copyFile from './copy-file';
import makeDirectory from './make-directory';

export default async function copySafe(source, target) {
	await makeDirectory(dirname(target));
	await copyFile(source, target);
}
