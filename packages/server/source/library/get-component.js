import assert from 'assert';
import path from 'path';

import {merge} from 'lodash';

import getPatterns from './utilities/get-patterns';

export default getComponent;

async function getComponent(app, id, env = 'index') {
	const mount = app.configuration.patterns.mount || {};
	assert.ok(Array.isArray(mount.transforms), 'mount.transforms has to be an array');
	assert.ok(typeof mount.name === 'string', 'mount.format has to be a string');
	assert.ok(typeof mount.name === 'string', 'mount.name has to be a string');

	const cwd = app.runtime.patterncwd || app.runtime.cwd;
	const base = path.resolve(cwd, './patterns');

	const {transforms} = app.configuration;
	const first = mount.transforms[0];
	const last = mount.transforms[mount.transforms.length - 1];

	const {inFormat} = transforms[first];
	const {outFormat} = transforms[last];

	assert.ok(typeof inFormat === 'string', `transforms.${first}.inFormat has to be a string`);
	assert.ok(typeof outFormat === 'string', `transforms.${last}.outFormat has to be a string`);

	const filters = {
		environments: [env],
		outFormats: [outFormat],
		inFormats: [inFormat]
	};

	const config = merge({}, app.configuration, {
		patterns: {
			formats: {
				[mount.format]: {
					name: mount.name,
					transforms: mount.transforms
				}
			}
		}
	});

	const [pattern = {}] = await getPatterns({
		id,
		base,
		config,
		factory: app.pattern.factory,
		filters,
		transforms: app.transforms,
		log: app.log
	}, app.cache);

	const {results = {}} = pattern;

	return results[mount.name] ?
		results[mount.name] :
		null;
}
