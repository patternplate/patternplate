export default function responseTimeMiddlewareFactory () {
	return function * responseTimeMiddleware ( next ) {
		let start = new Date();
		yield next;

		let responseTime = new Date() - start;
		this.set( 'X-Response-Time', `${responseTime}ms` );
	};
}
