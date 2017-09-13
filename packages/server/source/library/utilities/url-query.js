import path from 'path';
import url from 'url';

function has(token) {
	return item => item.includes(token);
}

function div(token) {
	return item => item.split(token).slice(0, 2);
}

function not(fn) {
	return (...args) => !fn(...args);
}

export function format(parsed = {}) {
	const query = Object.entries(parsed.query || {})
		.reduce((result, entry) => [...result, entry.join('--')], []);

	const extension = path.extname(parsed.pathname || '');

	const before = extension ? path.dirname(parsed.pathname) : parsed.pathname;
	const after = extension ? path.basename(parsed.pathname) : '';
	return [before, query, after].filter(Boolean).join('/');
}

export function parse(urlPath = '') {
	const parsed = url.parse(urlPath);
	const raw = parsed.pathname || '';

	const pathname = raw.split('/')
		.filter(not(has('--')))
		.join('/');

	const query = raw.split('/')
		.filter((has('--')))
		.map(div('--'))
		.reduce((registry, entry) => {
			const [key, value] = entry;
			registry[key] = value;
			return registry;
		}, {});

	return {
		pathname,
		query
	};
}

export default {parse, format};
