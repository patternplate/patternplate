export default function startEnvironmentMiddleware ( application ) {
	return function * environmentMiddleware ( next ) {
		this.set( 'X-Name', application.name );
		this.set( 'X-Environment', application.configuration.environment );
		yield next;
	};
}
