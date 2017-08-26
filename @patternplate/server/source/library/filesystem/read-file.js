import {readFile} from 'sander';

const defaults = {
	cache: null
};

function cacheIo(fn, cache) {
	return async function(file) {
		const key = `fs:readfile:${file}`;
		const cached = cache.get(key);

		if (cached) {
			return cached;
		}

		const content = await fn(file);
		cache.set(key, content);
		return content;
	};
}

export default options => {
	const settings = {...defaults, ...options};
	const cache = settings.cache;

	const cacheFn = cache ?
		fn => cacheIo(fn, cache) :
		fn => fn;

	return cacheFn(readFile);
};
