import urlQuery from '../../library/utilities/url-query';
const getComponent = require('../../library/get-component');

export default application => {
	return async function resourceRoute() {
		const id = this.params.id;
		const ext = this.params.ext;
		const type = id.split('/')[0];

		if (!id || !ext) {
			return this.throw(404);
		}

		if (type === 'react-mount' && ext === 'js') {
			const parsed = urlQuery.parse(this.params.id);
			const id = parsed.pathname.split('/').slice(1).join('/');
			const {environment = 'index'} = parsed.query;

			const component = await getComponent(application, id, environment);

			if (!component) {
				this.throw(404);
			}

			if (!component.buffer) {
				this.throw(404);
			}

			this.type = 'js';
			this.body = component.buffer;
			return;
		}

		const resource = application.resources.find(r => r.id === id);

		if (!resource) {
			return this.throw(404);
		}

		const body = await resource.content;

		if (!body) {
			return this.throw(404);
		}

		this.type = resource.type;
		this.body = body;
	};
};
