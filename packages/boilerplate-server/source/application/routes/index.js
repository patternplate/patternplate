export default function indexRouteFactory () {
	return async function indexRoute () {
		this.body = 'You are up and running! Place a custom index route in ./application/routes.';
	};
}
