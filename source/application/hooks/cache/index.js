import lru from 'lru-cache';

class Cache {
	wait = true;
	after = ['hooks:log:start:after']

	async start (application) {
		application.cache = lru(this.configuration);
	}
}

export default new Cache();
