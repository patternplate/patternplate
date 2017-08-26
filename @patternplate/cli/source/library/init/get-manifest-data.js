import * as sander from 'sander';
import exists from 'path-exists';
import {merge} from 'lodash';
import pkg from '../../package';

const defaultManifest = {
	name: 'patternplate-project',
	description: 'a patternplate project',
	version: '1.0.0',
	license: 'MIT',
	repository: {
		type: 'git',
		url: 'https://github.com/sinnerschrader/patternplate.git'
	},
	scripts: {
		start: 'patternplate start',
		console: 'patternplate console'
	},
	devDependencies: {
		'babel-preset-es2015': '6.14.0',
		'babel-preset-react': '6.11.1',
		[pkg.name]: pkg.version,
		'patternplate-transform-browserify': '^1.1.0',
		'patternplate-transform-less': '~0.2.0',
		'patternplate-transform-react': '^1.1.2',
		'patternplate-transform-react-mount': '~0.1.2',
		'patternplate-transform-react-to-markup': '^1.0.1'
	}
};

async function getManifestData(manifestPath, fallbackData) {
	if (await exists(manifestPath)) {
		const previousData = JSON.parse(await sander.readFile(manifestPath));
		return merge({}, previousData, fallbackData);
	}

	return merge({}, defaultManifest, fallbackData);
}

export default getManifestData;
