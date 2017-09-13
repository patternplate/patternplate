import path from 'path';
import {readdir, stat} from 'sander';
import {flattenDeep} from 'lodash';
import exists from 'path-exists';

export default readTree;

const cacheShim = {
	peek() {
		return false;
	},
	get() {
		return null;
	},
	set() {
		return null;
	}
};

async function readTree(directoryPath, cache = cacheShim) {
	const key = `fs:readtree:${directoryPath}`;
	const cached = cache.peek(key);

	if (cached) {
		return cache.get(key);
	}

	if (!await exists(directoryPath)) {
		return [];
	}

	const stats = await stat(directoryPath);

	if (stats.isFile()) {
		return [directoryPath];
	}

	const list = await readdir(directoryPath);

	const jobs = list.map(item => readTree(path.resolve(directoryPath, item), cache));
	const result = flattenDeep(await Promise.all(jobs));

	cache.set(key, result);

	return result;
}
