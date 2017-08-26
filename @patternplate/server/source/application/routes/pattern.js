import path from 'path';
import getPatternMetaData from '../../library/get-pattern-meta-data';
import urlQuery from '../../library/utilities/url-query';

function withErrorHandling(fn) {
	return async function(...args) {
		const [, id] = args;
		try {
			const result = await fn(...args);
			if (!result) {
				const error = new Error(`Could not find pattern with id ${id}`);
				error.fileName = id;
				error.file = id;
				error.status = 404;
				throw error;
			}
			return [null, result];
		} catch (error) {
			return [error];
		}
	};
}

function getPatternId(raw) {
	const parsed = path.parse(raw);
	const extension = getPatternExtension(raw);
	const base = path.basename(raw, path.extname(raw));

	if (base === 'index' && extension !== 'json') {
		return path.dirname(raw);
	}

	return `${path.dirname(raw)}/${path.basename(parsed.base, path.extname(parsed.base))}`;
}

function getPatternExtension(raw) {
	return path.extname(raw).slice(1) || 'html';
}

const getPatternMetaDataOrError = withErrorHandling(getPatternMetaData);

export default function patternRouteFactory(application) {
	return async function patternRoute() {
		const extname = path.extname(this.path);

		if (extname && extname !== '.json') {
			this.throw(404);
		}

		const parsed = urlQuery.parse(this.params.id);
		const id = getPatternId(parsed.pathname);
		const {environment = 'index'} = parsed.query;
		const [error, data] = await getPatternMetaDataOrError(application, id, environment);

		if (error) {
			this.throw(error);
		}

		this.type = 'json';
		this.body = data;
	};
}
