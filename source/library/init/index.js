import path from 'path';
import {writeFile} from 'mz/fs';
import defaultShell from 'default-shell';
import exists from 'path-exists';
import mkdirp from 'mkdirp-promise';
import {merge} from 'lodash';
import ora from 'ora';
import sander from 'sander';

import getManifestData from './get-manifest-data';
import getReadmeData from './get-readme-data';

const templatePath = path.resolve(__dirname, '..', '..', 'init-template');

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
	const spinner = ora().start();
	const settings = merge({}, defaults, options);
	const cwd = path.resolve(process.cwd(), directory);
	const resolve = (...args) => path.resolve(...[cwd, ...args]);

	const manifestPath = resolve(settings.manifestPath);
	const name = path.basename(cwd);

	// Add a name based on directory if manifest does not exists
	// Allow overriding of manifest fields in any case
	const manifest = await exists(manifestPath) ?
		settings.manifest :
		merge({}, settings.manifest, {name});

	// Read / create manifest data
	const data = await getManifestData(manifestPath, {
		...manifest,
		name: settings.name || name
	});

	const readmeTarget = resolve(settings.patternPath, 'readme.md');

	spinner.text = ` Initializing project ${data.name} at ${cwd}`;
	await mkdirp(path.dirname(readmeTarget));

	// copy init/template to $CWD
	// replace ${} expressions in the process
	await sander.copydir(templatePath).to(cwd);

	// Create/extend existing manifest
	await writeFile(manifestPath, JSON.stringify(data, null, '  '));

	// Use name in this precedence
	// explicit --name
	// name based on dirname
	// name found in data
	const readmeData = await getReadmeData({
		name: settings.name || name || data.name
	});

	// Write pattern readme
	await writeFile(readmeTarget, readmeData);

	// Be nice and instructional
	spinner.text = ` Initialized project ${data.name} at ${cwd}`;
	spinner.succeed();

	const instructions = [
		process.cwd() !== cwd && `cd ${directory}`,
		'npm install',
		data.scripts.start === 'patternplate' ?
			'npm start -- --open' : './node_modules/.bin/patternplate start --open'
	].filter(Boolean);

	const sep = defaultShell.includes('fish') ? '; and ' : ' && ';
	console.log(`🚀  Start and open patternplate:`);
	console.log(`\n   ${instructions.join(sep)}`);
}

export default init;
