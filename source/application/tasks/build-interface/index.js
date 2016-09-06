import path from 'path';

import boxen from 'boxen';
import fs from 'mz/fs';
import exists from 'path-exists';
import {sync as resolveSync} from 'resolve';
import {find, merge, uniq} from 'lodash';
import mkdirp from 'mkdirp-promise';
import ora from 'ora';
import ncp from 'ncp';
import findRoot from 'find-root';
import isStream from 'is-stream';
import throat from 'throat';

const defaults = {
	target: 'build/build-interface'
};

const cwd = process.cwd();

const resolve = id => resolveSync(id, {basedir: cwd});
const packageResolve = (id, directory) => path.resolve(findRoot(resolve(id)), directory);

const renderPage = require(resolve('patternplate-client/library/render-page'));
const getNavigation = require(resolve('patternplate-server/library/get-navigation'));
const getPatternMetaData = require(resolve('patternplate-server/library/get-pattern-meta-data'));
const getPatternDemo = require(resolve('patternplate-server/library/get-pattern-demo'));
const getPatternFile = require(resolve('patternplate-server/library/get-pattern-file'));
const getPatternSource = require(resolve('patternplate-server/library/get-pattern-source'));
const getComponent = require(resolve('patternplate-server/library/get-component'));

const urlQuery = require(resolve('patternplate-server/library/utilities/url-query'));

export default buildInterface;

/**
 * Create a static build of a patternplate instance ready to be deployed on a static web server
 * @param {Object} application
 * @param {Object} configuration
 * @return {Promise<void>}
 */
async function buildInterface(application, configuration) {
	const settings = merge({}, defaults, configuration);
	const targetPath = path.resolve(cwd, settings.target);
	const patternTargetPath = path.resolve(targetPath, 'pattern');
	const apiTargetPath = path.resolve(targetPath, 'api', 'pattern');
	const demoTargetPath = path.resolve(targetPath, 'demo');
	const fileTargetPath = path.resolve(targetPath, 'api', 'file');
	const indexPath = path.resolve(targetPath, 'index.html');
	const notFoundPath = path.resolve(targetPath, '404.html');
	const htaccessPath = path.resolve(targetPath, '.htaccess');
	const staticSourcePath = packageResolve('patternplate-client', 'static');
	const staticTargetPath = path.resolve(targetPath, 'static');
	const assetSourcePath = packageResolve('patternplate-client', 'assets');

	const app = application.parent;
	const client = application.parent.client;
	const server = application.parent.server;

	const automount = ((server.configuration.transforms['react-mount'] || {}).opts || {}).autmount;

	const navigation = await getNavigation(app, client, server);
	const ids = getNavigationUrls(navigation);
	const patterns = ids.filter(isPattern);

	const spinner = ora('build-interface').start();

	spinner.text = 'entry html';
	// Build the index page
	const index = await renderPage(client, '/');
	await mkdirp(targetPath);
	await fs.writeFile(indexPath, index);

	// Place a copy of index at 404.html
	await fs.writeFile(notFoundPath, index);

	const htaccess = `
		ErrorDocument 404 404.html
	`.replace(/\t/g, '');

	// Write a template .htaccess
	await fs.writeFile(htaccessPath, htaccess);

	const warnings = [];
	const warn = application.log.warn;
	application.log.warn = (...args) => {
		if (args.some(arg => arg.includes('Deprecation'))) {
			warnings.push(args);
			return;
		}
		warn(...args);
	};

	spinner.succeed();

	// Build pattern json data
	const patternDatasets = await Promise.all(patterns.map(throat(5, async pattern => {
		const data = await getPatternMetaData(server, pattern.id, 'index');
		data.environmentNames = data.environments.map(env => env.name);
		data.variants = {};
		data._pattern = pattern;
		return data;
	})));

	const componentPatterns = automount ?
		patternDatasets :
		patternDatasets.filter(dataset => {
			const options = dataset.manifest.options;
			if (!options) {
				return false;
			}
			const opts = options['react-to-markup'] ? options['react-to-markup'].opts : {};
			return opts.automount;
		});

	const automountIds = componentPatterns.map(pattern => pattern.id);

	// Build pattern and category pages
	let pageCount = 1;
	const patternPageJobs = ids.map(throat(1, async id => {
		spinner.text = `pattern page ${id.id} ${pageCount}/${ids.length}`;

		const renderingPage = renderPage(client, `/pattern/${id.id}`);
		const pagePath = path.resolve(...[patternTargetPath, ...id.relative, id.name]);
		const pageDirectory = path.dirname(pagePath);

		if (!(await exists(pageDirectory))) {
			await mkdirp(path.dirname(pagePath));
		}

		const pageContent = await renderingPage;
		await fs.writeFile(pagePath, pageContent);
		pageCount += 1;
		return pageContent;
	}));

	await Promise.all(patternPageJobs);
	spinner.succeed();

	let patternDataCount = 0;
	const patternDataJobs = patternDatasets.map(throat(1, async dataset => {
		patternDataCount++;
		spinner.text = `pattern data ${dataset.id} ${patternDataCount}/${patternDatasets.length}`;

		return Promise.all(dataset.environmentNames.map(throat(1, async env => {
			const data = await getPatternMetaData(server, dataset.id, env);
			dataset.variants[env] = data;
			const short = path.resolve(
				...[apiTargetPath,
					...dataset._pattern.relative,
					`${dataset._pattern.baseName}.json`
				]);
			const long = urlQuery.format({
				pathname: short,
				query: {environment: env}
			});

			if (!(await exists(path.dirname(long)))) {
				await mkdirp(path.dirname(long));
			}

			await fs.writeFile(long, JSON.stringify(data));

			if (env === 'index') {
				if (!(await exists(path.dirname(short)))) {
					await mkdirp(path.dirname(short));
				}
				await fs.writeFile(short, JSON.stringify(data));
			}
			return data;
		})));
	}));

	await Promise.all(patternDataJobs);
	spinner.succeed();

	let patternDemCount = 0;
	const patternDemoJobs = patternDatasets.map(throat(1, async dataset => {
		patternDemCount++;
		spinner.text = `pattern demo ${dataset.id} ${patternDemCount}/${patternDatasets.length}`;

		return Promise.all(dataset.environmentNames.map(throat(1, async env => {
			const mount = automountIds.includes(dataset.id);
			const patternDemo = await getPatternDemo(server, dataset.id, {environments: [env]}, env);

			const short = path.resolve(
				...[
					demoTargetPath,
					...dataset._pattern.relative,
					dataset._pattern.name
				]
			);
			const long = urlQuery.format({
				pathname: short,
				query: {environment: env}
			});

			if (!(await exists(path.dirname(long)))) {
				await mkdirp(path.dirname(long));
			}

			await fs.writeFile(long, patternDemo);

			if (env === 'index') {
				if (!(await exists(path.dirname(short)))) {
					await mkdirp(path.dirname(short));
				}
				await fs.writeFile(short, patternDemo);
			}

			const types = mount ? ['style'] : ['style', 'script'];

			await Promise.all(types.map(throat(5, async type => {
				const demo = find(dataset.files, {type, concern: 'demo'});
				const index = find(dataset.files, {type, concern: 'index'});
				const file = demo || index;

				if (!file) {
					return null;
				}

				const patternFile = await getPatternFile(server, dataset.id, {
					outFormats: [file.out],
					baseNames: [path.basename(file.path, path.extname(file.path))],
					environments: [env]
				}, file.out, env);

				const longFilePath = path.resolve(path.dirname(long), `index.${file.out}`);
				await fs.writeFile(longFilePath, patternFile);

				if (env === 'index') {
					const shortFilePath = path.resolve(path.dirname(short), `index.${file.out}`);
					await fs.writeFile(shortFilePath, patternFile);
				}
				return null;
			})));

			return patternDemo;
		})));
	}));

	await Promise.all(patternDemoJobs);
	spinner.succeed();

	let componentCount = 0;
	const componentJobs = componentPatterns.map(throat(1, async dataset => {
		componentCount++;
		spinner.text = `pattern component ${dataset.id} ${componentCount}/${componentPatterns.length}`;

		return Promise.all(dataset.environmentNames.map(async env => {
			const component = await getComponent(server, dataset.id, env);

			const short = path.resolve(...[
				demoTargetPath,
				...dataset._pattern.relative,
				dataset._pattern.name
			]);
			const long = urlQuery.format({
				pathname: short,
				query: {environment: env}
			});

			if (!component.buffer) {
				return null;
			}
			const longFilePath = path.resolve(path.dirname(long), `component.${component.out}`);
			await fs.writeFile(longFilePath, component.buffer);

			if (env === 'index') {
				const shortFilePath = path.resolve(path.dirname(short), `component.${component.out}`);
				await fs.writeFile(shortFilePath, component.buffer);
			}

			return null;
		}));
	}));

	await Promise.all(componentJobs);
	spinner.succeed();

	let patternFileCount = 0;
	const patternFileJobs = patternDatasets.map(throat(1, async dataset => {
		patternFileCount++;
		spinner.text = `pattern component ${dataset.id} ${patternFileCount}/${patternDatasets.length}`;
		return Promise.all(dataset.environmentNames.map(throat(1, async env => {
			return Promise.all(dataset.files.map(throat(1, async file => {
				const types = file.type === 'documentation' ? ['source'] : ['source', 'transformed'];

				return Promise.all(types.map(async type => {
					const patternSource = await getPatternSource(server)(file.id, type, env);
					const typePath = urlQuery.format({pathname: '', query: {type}});
					const envPath = urlQuery.format({pathname: '', query: {environment: env}});

					const baseName = path.basename(file.id);
					const dirName = path.dirname(file.id);
					const short = path.resolve(fileTargetPath, dirName, typePath, baseName);
					const long = path.resolve(fileTargetPath, dirName, typePath, envPath, baseName);

					if (!(await exists(path.dirname(long)))) {
						await mkdirp(path.dirname(long));
					}

					if (isStream(patternSource.body)) {
						await pipe(patternSource.body, long);
					} else {
						await fs.writeFile(long, patternSource.body);
					}

					if (env === 'index') {
						if (!(await exists(path.dirname(short)))) {
							await mkdirp(path.dirname(short));
						}
						if (isStream(patternSource.body)) {
							await pipe(patternSource.body, short);
						} else {
							await fs.writeFile(long, patternSource.body);
						}
					}
					return patternSource;
				}));
			})));
		})));
	}));

	await Promise.all(patternFileJobs);
	spinner.succeed();

	// Copy static assets
	await ncp(staticSourcePath, staticTargetPath);
	await ncp(assetSourcePath, targetPath);

	spinner.stop();

	const messages = uniq(warnings)
		.map(warning => warning.join(' '));

	messages.forEach(message => {
		console.log(boxen(message, {borderColor: 'yellow', padding: 1}));
	});
}

function pipe(readable, filePath) {
	return new Promise((resolve, reject) => {
		const writable = fs.createWriteStream(filePath);
		readable.pipe(writable);
		writable.on('close', resolve);
		writable.on('error', reject);
	});
}

function getNavigationUrls(tree) {
	return Object.values(tree || {})
		.reduce((pool, item) => {
			const fragments = item.id.split('/');
			const baseName = fragments[fragments.length - 1];
			const relative = fragments.slice(0, fragments.length - 1);

			const children = getNavigationUrls(item.children);
			return [...pool, {
				id: item.id,
				type: item.type,
				relative,
				baseName,
				name: `${baseName}/index.html`
			}, ...children];
		}, []);
}

function isPattern({type}) {
	return type === 'pattern';
}
