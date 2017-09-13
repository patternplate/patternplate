import auth from 'koa-basic-auth';

function basicAuthMiddlewareFactory(application) {
  return function* basicAuthMiddleware(next) {
    const config = application.configuration.middlewares.enabled.basicauth;

    if (config.enabled === false) {
      yield next;
    } else {
      const authorization = auth(config.credentials);
      let excluded = false;

      if (config.exclude) {
        const matcher = new RegExp(config.exclude, 'g');
        excluded = matcher.test(this.path);
      }

      if (!excluded) {
        const authorize = authorization.bind(this);
        try {
          yield authorize(next);
        } catch (error) {
          if (error.status === 401) {
            this.status = 401;
            this.set('WWW-Authenticate', 'Basic');
            this.body = 'Unauthorized';
            // This.throw(401);
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
