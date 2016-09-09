import path from 'path';

import {merge} from 'lodash';
import ora from 'ora';

import buildComponents from './build-components';
import buildData from './build-data';
import buildDemoFiles from './build-demo-files';
import buildDemos from './build-demos';
import buildEntry from './build-entry';
import buildPages from './build-pages';
import buildSources from './build-sources';
import buildStatics from './build-statics';
import getPatternDatasets from './get-pattern-datasets';
import getPatternIds from './get-pattern-ids';
import isPattern from './is-pattern';
import trap from './trap';

const defaults = {
	target: 'build/build-interface'
};

export default buildInterface;

/**
 * Create a static build of a patternplate instance ready to be deployed on a static web server
 * @param {Object} application
 * @param {Object} configuration
 * @return {Promise<void>}
 */
async function buildInterface(application, configuration) {
	const settings = merge({}, defaults, configuration);
	const targetPath = path.resolve(process.cwd(), settings.target);

	const app = application.parent;
	const client = application.parent.client;
	const server = application.parent.server;

	const release = trap(application);
	const automount = ((server.configuration.transforms['react-mount'] || {}).opts || {}).autmount;
	const spinner = ora('build-interface').start();

	spinner.text = 'entry';
	spinner.succeed();

	const ids = await getPatternIds(app, client, server);
	const patterns = ids.filter(isPattern);
	const datasets = await getPatternDatasets(patterns, server);

	// Build entry file
	const context = {app: server, spinner, automount};
	await buildEntry('/', targetPath, {app: client, spinner});

	// Build pattern pages
	const patternTargetPath = path.resolve(targetPath, 'pattern');
	await buildPages(ids, patternTargetPath, {app: client, spinner});

	// Build pattern json data
	const apiTargetPath = path.resolve(targetPath, 'api', 'pattern');
	await buildData(datasets, apiTargetPath, context);

	// Build pattern demos
	const demoTargetPath = path.resolve(targetPath, 'demo');
	await buildDemos(datasets, demoTargetPath, context);
	await buildDemoFiles(datasets, demoTargetPath, context);
	await buildComponents(datasets, demoTargetPath, context);

	const fileTargetPath = path.resolve(targetPath, 'api', 'file');
	await buildSources(datasets, fileTargetPath, context);

	// Copy static files
	await buildStatics('patternplate-client', targetPath, context);

	// Log out trapped warnings
	release(messages => messages.forEach(m => console.log(m)));
}
