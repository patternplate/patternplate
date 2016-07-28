import {readFile} from 'mz/fs';
import exists from 'path-exists';
import {merge} from 'lodash';
import pkg from '../../package';

const amendManifest = {
	scripts: {
		start: 'patternplate'
	},
	dependencies: {
		[pkg.name]: pkg.version
	}
};

const defaultManifest = {
	name: 'patternplate-project',
	version: '1.0.0',
	private: true,
	scripts: {
		start: 'patternplate'
	},
	dependencies: {
		[pkg.name]: pkg.version
	}
};

async function getManifestData(manifestPath, fallbackData) {
	if (await exists(manifestPath)) {
		const previousData = JSON.parse(await readFile(manifestPath));
		return merge({}, amendManifest, previousData, fallbackData);
	}

	return merge({}, defaultManifest, fallbackData);
}

export default getManifestData;
