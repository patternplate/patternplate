import path from 'path';
import url from 'url';
import {includes} from 'lodash';

function has(token) {
	return item => includes(item, token);
}

function div(token) {
	return item => item.split(token).slice(0, 2);
}

function not(fn) {
	return (...args) => !fn(...args);
}

function shove(input) {
	const index = input.length - 1;
	if (input[index] === '/') {
		return input.slice(0, index);
	}
	return input;
}

export function format(parsed = {}) {
	const query = Object.entries(parsed.query || {})
		.reduce((result, entry) => [...result, entry.join('--')], []);

	const extension = path.extname(parsed.pathname || '');

	const before = extension ? path.dirname(parsed.pathname) : shove(parsed.pathname);
	const after = extension ? path.basename(parsed.pathname) : '';

	return [before, ...query, after].filter(Boolean).join('/');
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
