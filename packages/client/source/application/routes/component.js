import urlQuery from '../utils/url-query';

const getComponent = require('@patternplate/server/library/get-component');

export default function(application) {
  return async function() {
    this.type = 'js';

    const parsed = urlQuery.parse(this.params.id);
    const id = parsed.pathname;
    const {environment} = parsed.query;
    const server = application.parent.server;

    const component = await getComponent(server, id, environment);

    if (!component.buffer) {
      this.throw(404);
    }

    this.body = component.buffer;
  };
}
