import path from 'path';
import globby from 'globby';
import json from 'load-json-file';
import {merge} from 'lodash';

export default getEnvironments;

const TEMPLATE_ENVIRONMENT = {
	name: 'index',
	display: true,
	displayName: 'Default',
	version: '0.1.0',
	applyTo: ['**/*'],
	include: ['**/*'],
	excludes: [],
	priority: 0,
	environment: {}
};

export const DEFAULT_ENVIRONMENT = {
	name: 'index',
	display: true,
	displayName: 'Default',
	version: '0.1.0',
	applyTo: ['**/*'],
	include: ['**/*'],
	excludes: [],
	priority: 0,
	environment: {}
};

async function getEnvironments(base) {
	const resolve = path.resolve.bind(null, base, '@environments');
	const cwd = resolve('.');
	const read = f => json(resolve(f));
	const files = await globby(`**/pattern.json`, {cwd});

	const envs = await Promise.all(
		files.map(async file => {
			const data = await read(file);
			return merge({}, TEMPLATE_ENVIRONMENT, data);
		})
	);

	if (!envs.some(e => e.name === 'index')) {
		envs.push(DEFAULT_ENVIRONMENT);
	}

	return envs;
}
