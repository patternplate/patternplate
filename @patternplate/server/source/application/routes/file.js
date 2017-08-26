import path from 'path';
import patternSource from '../../library/get-pattern-source';
import urlQuery from '../../library/utilities/url-query';

export default function fileRouteFactory(application) {
	const getPatternSource = patternSource(application);
	return async function fileRoute() {
		const extname = path.extname(this.path);
		const format = extname.slice(1);
		const {pathname, query} = urlQuery.parse(this.params.id);
		const type = query.type;
		const environment = query.environment;

		if (!format) {
			this.throw(404);
		}

		if (!type || !['source', 'transformed'].includes(type)) {
			this.throw(404);
		}

		if (!environment) {
			this.throw(404);
		}

		const source = await getPatternSource(pathname, type, environment);
		this.type = source.type;
		this.body = source.body;
	};
}
