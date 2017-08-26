import {createReadStream} from 'fs';
import {resolve} from 'path';
import {debuglog} from 'util';

import ARSON from 'arson';
import exists from 'path-exists';
import {merge} from 'lodash';

import getReadFile from '../filesystem/read-file.js';

const debug = debuglog('cache-static');

const defaults = {
	id: null,
	base: null,
	extension: 'json',
	cache: null,
	stream: false
};

export default async function getStaticCacheItem(options) {
	const settings = merge({}, defaults, options);
	const {
		id,
		base,
		extension,
		cache,
		stream
	} = settings;

	const baseName = id.split('/').join('-');
	const {filters = {}} = settings;
	const [envFilter] = filters.environments || [];
	const envName = envFilter === 'index' ?
		null :
		envFilter;

	const name = [baseName, envName].filter(Boolean).join('--');

	const cacheFilePath = resolve(base, `${name}.${extension}`);
	const readFile = getReadFile({cache});

	if (!await exists(cacheFilePath)) {
		debug('static cache miss for %s', cacheFilePath);
		return null;
	}

	debug('using static cache for %s', cacheFilePath);
	const cacheFileContents = stream === false ?
		await readFile(cacheFilePath) :
		createReadStream(cacheFilePath);

	if (extension === 'json' && stream === false) {
		return ARSON.parse(cacheFileContents);
	}

	return cacheFileContents;
}
