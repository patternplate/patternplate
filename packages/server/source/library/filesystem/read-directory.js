import path from 'path';
import {readdir, stat} from 'sander';

export default readDirectory;

async function readDirectory(directoryPath) {
	const list = await readdir(directoryPath);

	const filtering = list.map(async item => {
		const stats = await stat(path.resolve(directoryPath, item));
		return stats.isFile() ? item : null;
	});

	const results = await Promise.all(filtering);
	return results.filter(Boolean);
}
