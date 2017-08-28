import auth from 'koa-basic-auth';

function basicAuthMiddlewareFactory (application) {

	return function * basicAuthMiddleware (next) {
		let config = application.configuration.middlewares.enabled.basicauth;

		if (config.enabled === false) {
			yield next;
		} else {
			let authorization = auth(config.credentials);
			let excluded = false;

			if (config.exclude) {
				let matcher = new RegExp(config.exclude, 'g');
				excluded = matcher.test(this.path);
			}

			if (!excluded) {
				let authorize = authorization.bind(this);
				try {
					yield authorize(next);
				} catch (error) {
					if (error.status === 401) {
						this.status = 401;
						this.set('WWW-Authenticate', 'Basic');
						this.body = 'Unauthorized';
						//this.throw(401);
						return;
					}

					this.throw(error.status);
				}
			} else {
				yield next;
			}
		}
	};
}

export default basicAuthMiddlewareFactory;
