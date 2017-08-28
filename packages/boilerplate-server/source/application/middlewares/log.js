export default function startLogMiddleware ( application ) {
	return function * logMiddleware ( next ) {
		let start = new Date();
		yield next;
		let delta = new Date() - start;
		application.log.debug(`${start} - ${this.method} ${this.url} - ${this.response.status} ${this.response.message} - ${delta}ms`);
	};
}
