import lrucache from 'lru-cache';
import multimatch from 'multimatch';
import {get} from 'lodash';

const namespace = new WeakMap();

function select(instance, keyPath) {
	const context = namespace.get(instance) || {};
	return get(context, keyPath);
}

class PatternCache {
	static defaults = {
		max: 50000
	};

	constructor(options = {}) {
		const settings = {...PatternCache.defaults, ...options.options};
		this.config = settings;
		const cache = lrucache(settings);
		namespace.set(this, {settings, cache});
	}

	set(key, value) {
		const cache = select(this, 'cache');

		if (!cache) {
			return null;
		}

		return cache.set(key, value);
	}

	delete(prefix = '', raw) {
		const cache = select(this, 'cache');

		if (!cache) {
			return null;
		}

		const pattern = raw.replace(prefix, '');

		const unprefixed = this.keys()
			.filter(key => key.startsWith(prefix))
			.map(key => key.replace(prefix, ''));

		const matching = multimatch(unprefixed, [pattern]);

		matching.forEach(key => cache.del(`${prefix}${key}`));
		return matching;
	}

	get(key) {
		const cache = select(this, 'cache');

		if (!cache) {
			return null;
		}

		if (!cache.peek(key)) {
			return null;
		}

		return cache.get(key);
	}

	keys() {
		const cache = select(this, 'cache');
		return cache ? cache.keys() : [];
	}

	peek(key) {
		const cache = select(this, 'cache');
		return cache ? cache.peek(key) : false;
	}

	get length() {
		const cache = select(this, 'cache');
		return cache ? cache.length : 0;
	}

	get itemCount() {
		const cache = select(this, 'cache');
		return cache ? cache.itemCount : 0;
	}
}

function patternCacheFactory(...args) {
	return new PatternCache(...args);
}

export default patternCacheFactory;
export {PatternCache as PatternCache};
