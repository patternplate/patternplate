import {resolve, sep} from 'path';
import {find} from 'lodash';
import pathExists from 'path-exists';

import getReadFile from '../filesystem/read-file.js';

const defaults = {
	fallback: true,
	cache: null,
	baseNames: [
		'README.md',
		'Readme.md',
		'readme.md',
		'index.md'
	]
};

async function getExistingBaseName(basePath, baseNames) {
	const exist = await Promise.all(
		baseNames
			.map(baseName => resolve(basePath, baseName))
			.map(async path => {
				return {
					path,
					exists: await pathExists(path)
				};
			})
	);

	return (find(exist, 'exists') || {}).path;
}

async function getMarkdown(id, base, options) {
	const readFile = getReadFile({
		cache: options.cache
	});

	const basePath = resolve(base, id.split('/').join(sep));
	const markdownPath = await getExistingBaseName(basePath, options.baseNames);

	if (markdownPath) {
		const buffer = await readFile(markdownPath);
		return buffer.toString('utf-8');
	}

	return '';
}

export default async function getReadme(id, base, options) {
	const settings = {...defaults, ...options};
	return await getMarkdown(id, base, settings);
}
