import {
	extname,
	resolve,
	relative
} from 'path';

import readTree from './read-tree';
import copySafe from './copy-safe';

export default async function copyDirectory(source, target) {
	const files = await readTree(source);

	return Promise.all(
		files
			.filter(extname)
			.map(async file => {
				const targetFile = resolve(target, relative(source, file));
				return copySafe(file, targetFile);
			})
	);
}
