export default function startLogMiddleware(application) {
  return function* logMiddleware(next) {
    const start = new Date();
    yield next;
    const delta = new Date() - start;
    application.log.debug(
      `${start} - ${this.method} ${this.url} - ${this.response.status} ${this
        .response.message} - ${delta}ms`
    );
  };
}
