import path from 'path';
import {writeFile} from 'mz/fs';
import exists from 'path-exists';
import mkdirp from 'mkdirp-promise';
import {merge} from 'lodash';

import getManifestData from './get-manifest-data';
import getReadmeData from './get-readme-data';

const defaults = {
	manifestPath: 'package.json',
	manifest: {},
	patternPath: 'patterns'
};

/**
 * Initialize a default patternplate project
 * This will
 * -  Create a patterns folder
 * -  Create a patterns/readme.md with Getting started instructions
 * -  Create configuration/patternplate-{client,server} folders
 * -  Create some exemplary configuration
 * -  Add a npm start command, falling back to npm run patternplate if taken
 * -  Print instructions on how to start the patternplate instance
 *
 * @params workingDirectory to initialize the patternplate project in
 * @params options
 * @params options.manifestPath=package.json string
 * @params options.manifest={} object
 * @params options.patternPath=patterns string
 */
async function init(directory = '.', options) {
	const settings = merge({}, defaults, options);
	const cwd = path.resolve(process.cwd(), directory);
	const resolve = (...args) => path.resolve(...[cwd, ...args]);

	const manifestPath = resolve(settings.manifestPath);
	const patternDirectory = resolve(settings.patternPath);
	const nodeModulesPath = resolve('node_modules');
	const readmeTarget = resolve(settings.patternPath, 'readme.md');

	// Create the pattern directory
	await mkdirp(patternDirectory);

	// Get actual or default manifestData
	const name = path.basename(path.dirname(manifestPath));

	// Add a name based on directory if manifest does not exists
	// Allow overriding of manifest fields in any case
	const manifest = await exists(manifestPath) ?
		settings.manifest :
		merge({}, settings.manifest, {name});

	// Read / create manifest data
	const manifestData = await getManifestData(manifestPath, manifest);

	// Create/extend existing manifest
	await writeFile(manifestPath, JSON.stringify(manifestData, null, '  '));

	const readmeData = await getReadmeData({
		name: settings.name || manifestData.name || name
	});

	// Write pattern readme
	await writeFile(readmeTarget, readmeData);

	// Be nice and instructional
	console.log(`Initialized patternplate project "${manifestData.name}" at ${cwd}`);
	console.log(`Execute the following to start and open patternplate at http://localhost:1337`);

	// Show cd if needed
	if (process.cwd() !== cwd) {
		console.log(`  cd ${directory}`);
	}

	// Show npm install if needed
	if (!await exists(nodeModulesPath)) {
		console.log(`  npm install`);
	}

	// Show applicable patternplate project start command
	if (manifestData.scripts.start === 'patternplate') {
		console.log(`  npm start -- --open`);
	} else {
		console.log(`  ./node_modules/.bin/patternplate start --open`);
	}
}

export default init;
