import path from 'path';
import {merge} from 'lodash';
import json from './load-json';

const DEFAULT_MANIFEST = {
	displayName: '',
	version: '1.0.0',
	build: true,
	display: true,
	flag: 'alpha',
	options: {},
  patterns: {}
};

export default getPatternManifest;

async function getPatternManifest(id, base) {
	const file = path.join(base, id.split('/').join(path.sep), 'pattern.json');
	const [err, data] = (await json(file));
	return [err, merge({}, DEFAULT_MANIFEST, data, {id})];
}
