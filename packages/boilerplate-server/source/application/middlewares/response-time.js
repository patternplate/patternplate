export default function responseTimeMiddlewareFactory() {
  return function* responseTimeMiddleware(next) {
    const start = new Date();
    yield next;

    const responseTime = new Date() - start;
    this.set('X-Response-Time', `${responseTime}ms`);
  };
}
