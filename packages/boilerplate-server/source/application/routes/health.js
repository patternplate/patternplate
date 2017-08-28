export default function healthRouteFactory ( application ) {
	return async function healthRoute () {
		this.body = {
			'name': application.name,
			'healthy': true
		};
	};
}
