import assert from 'assert';
import {debuglog} from 'util';
import denodeify from 'denodeify';

import {resolve, join, dirname, extname, relative} from 'path';

import {readFile as readFileNodeback} from 'fs';

import boxen from 'boxen';
import {find, flatten, isEqual, omit, uniq} from 'lodash';
import {padEnd} from 'lodash/fp';

import throat from 'throat';
import chalk from 'chalk';
import exists from 'path-exists';
import coreModuleNames from 'node-core-module-names';
import {resolvePathFormatString} from 'patternplate-transforms-core';
import ora from 'ora';

import {ok, wait, ready} from '../../../library/log/decorations';
import {loadTransforms} from '../../../library/transforms';
import {normalizeFormats} from '../../../library/pattern';
import copyStatic from '../common/copy-static';

import getArtifactMtimes from '../../../library/utilities/get-artifact-mtimes';
import getArtifactsToPrune from '../../../library/utilities/get-artifacts-to-prune';
import getPackageString from './get-package-string';
import getPatternMtimes from '../../../library/utilities/get-pattern-mtimes';
import getPatterns from '../../../library/utilities/get-patterns';
import getPatternsToBuild from '../../../library/utilities/get-patterns-to-build';
import removeFile from '../../../library/filesystem/remove-file';
import writeSafe from '../../../library/filesystem/write-safe';

const pkg = require(resolve(process.cwd(), 'package.json'));
const readFile = denodeify(readFileNodeback);
const pathFormatString = '%(outputName)s/%(patternId)s/index.%(extension)s';

const where = `Configure it at configuration/patternplate-server/tasks.js.`;

const fallbackManifest = {
	dependencies: {},
	devDependencies: {},
	ppcommonjs: {},
	ppDependencies: {},
	ppDevdependencies: {}
};

async function exportAsCommonjs(application, settings) {
	assert(typeof settings.patterns === 'object', `build-commonjs needs a valid patterns configuration. ${where} build-commonjs.patterns`);
	assert(typeof settings.patterns.formats === 'object', `build-commonjs needs a valid patterns.formats configuration. ${where} build-commonjs.patterns.formats`);
	assert(typeof settings.transforms === 'object', `build-commonjs needs a valid transforms configuration. ${where} build-commonjs.transforms`);

	let spinner = ora().start();
	const debug = debuglog('commonjs');
	debug('calling commonjs with');
	debug(settings);

	const cwd = application.runtime.patterncwd || application.runtime.cwd;

	const patternRoot = resolve(cwd, 'patterns');
	const commonjsRoot = resolve(cwd, settings.out || join('build', 'build-commonjs'));
	const manifestPath = resolve(commonjsRoot, 'package.json');
	const filters = {...settings.filters || {}, baseNames: ['index']};

	const warnings = [];
	const warn = application.log.warn;
	application.log.warn = (...args) => {
		if (args.some(arg => arg.includes('Deprecation'))) {
			warnings.push(args);
			return;
		}
		warn(...args);
	};

	// Override pattern config
	settings.patterns.formats = normalizeFormats(settings.patterns.formats);
	application.configuration.patterns = settings.patterns;

	// Reinitialize transforms
	application.configuration.transforms = settings.transforms || {};
	application.transforms = (await loadTransforms(settings.transforms || {}))(application);

	// start reading pattern mtimes, ignore dependencies
	const mtimesStart = new Date();
	application.log.debug(wait`Obtaining pattern modification times`);

	const readingPatternMtimes = getPatternMtimes('./patterns', {
		resolveDependencies: false,
		filters
	});

	// start reading artifact mtimes
	const artifactMtimesStart = new Date();
	const readingArtifactMtimes = getArtifactMtimes(
		commonjsRoot,
		application.configuration.patterns,
		application.configuration.transforms
	);

	// wait for all mtimes to trickle in
	const patternMtimes = await readingPatternMtimes;
	application.log.debug(ok`Read pattern modification times ${mtimesStart}`);

	// wait for all artifact mtimes
	const artifactMtimes = await readingArtifactMtimes;
	application.log.debug(ok`Read artifact modification times ${artifactMtimesStart}`);

	// check if package.json is in distribution
	const hasManifest = await exists(resolve(commonjsRoot, 'package.json'));

	const previousPkgString = hasManifest ? (await readFile(manifestPath)).toString('utf-8') : null;

	const pkgConfig = settings.pkg || {};
	const previousPkg = hasManifest ? parseJSON(previousPkgString) : fallbackManifest;
	const previousPkgConfig = previousPkg.ppcommonjs || {};
	const previousDependencies = previousPkg.ppDependencies || {};
	const previousDevdependencies = previousPkg.ppDevdependencies || {};

	const pkgConfigChanged = !isEqual(previousPkgConfig, pkgConfig) ||
		!isEqual(previousDependencies, pkg.dependencies || {}) ||
		!isEqual(previousDevdependencies, pkg.devDependencies || {});

	// obtain patterns we have to build
	application.log.debug(wait`Calculating pattern collection to build`);

	let buildCount = 1;
	const patternFilter = pkgConfigChanged ? i => i :
		getPatternsToBuild(artifactMtimes, application.configuration.patterns);

	const patternsToBuild = patternMtimes
			.filter(patternFilter)
			.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

	const padMaxBuild = padEnd(patternsToBuild.map(pattern => pattern.id.length)
		.reduce((a, b) => a > b ? a : b, 0) + 1);

	if (pkgConfigChanged) {
		application.log.debug(ok`Manifest or pkg config change, building all ${patternMtimes.length} patterns`);
	}

	const pruneDetectionStart = new Date();
	application.log.debug(wait`Searching for artifacts to prune`);

	let pruneCount = 1;
	const artifactsToPrune = getArtifactsToPrune(commonjsRoot, patternMtimes, artifactMtimes, {
		resolve: pathFormatString,
		formats: settings.patterns.formats,
		transforms: settings.transforms
	});
	const padMaxPrune = padEnd(artifactsToPrune.map(artifact => artifact.length)
		.reduce((a, b) => a > b ? a : b, 0) + 1);

	application.log.debug(ok`Detected ${artifactsToPrune.length} artifacts to prune ${pruneDetectionStart}`);

	const pruneStart = new Date();
	application.log.debug(wait`Pruning ${artifactsToPrune.length} artifacts`);

	const pruning = Promise.all(artifactsToPrune.map(throat(1, async path => {
		if (settings['dry-run']) {
			return Promise.resolve();
		}
		spinner.text = `prune ${padMaxPrune(path)} ${pruneCount}/${artifactsToPrune.length}`;
		await removeFile(dirname(path));
		pruneCount += 1;
	})));

	const pruned = await pruning;
	application.log.debug(ready`Pruned ${pruned.length} artifact files ${pruneStart}`);

	spinner.text = `${pruned.length}/${artifactsToPrune.length} pruned`;
	spinner.succeed();
	spinner.stop();

	spinner = ora().start();

	// build patterns in parallel
	const buildStart = new Date();
	const building = Promise.all(patternsToBuild.map(throat(1, async pattern => {
		const filterStart = new Date();
		application.log.debug(wait`Checking for files of ${pattern.id} to exclude from transform.`);
		let changedFiles = [];

		// enhance filters config to build only files that are modified
		const artifact = find(artifactMtimes, {id: pattern.id});

		if (artifact) {
			// build up mtime registry for pattern files
			const filesMtimes = pattern.files.reduce((results, file, index) => {
				return {...results, [file]: pattern.mtimes[index]};
			}, {});

			// build up registry for artifact files
			const artifactFilesMtimes = artifact.files.reduce((results, file, index) => {
				const path = relative(commonjsRoot, file);
				return {...results, [path]: artifact.mtimes[index]};
			}, {});

			// find pattern files with newer mtime than
			// - their artifact
			// - their folder
			// - their pattern.json
			changedFiles = pattern.files.filter(file => {
				const formatKey = extname(file).slice(1);
				const format = application.configuration.patterns.formats[formatKey];
				if (!format) {
					return false;
				}
				const transformNames = format.transforms || [];
				const lastTransformName = transformNames[transformNames.length - 1];
				const lastTransform = application.configuration.transforms[lastTransformName] || {};
				const targetExtension = lastTransform.outFormat || formatKey;
				const targetFile = resolvePathFormatString(
					pathFormatString,
					pattern.id,
					format.name.toLowerCase(),
					targetExtension
				);

				const targetFileMtime = artifactFilesMtimes[targetFile] || 0;
				const fileMtime = filesMtimes[file];
				const dirMtime = filesMtimes[dirname(file)];
				const metaMtime = filesMtimes[join(dirname(file), 'pattern.json')];

				return fileMtime > targetFileMtime ||
					dirMtime > targetFileMtime ||
					metaMtime > targetFileMtime;
			})
			.filter(Boolean);
		}

		if (artifact) {
			filters.in3 = changedFiles.map(file => extname(file).slice(1));
			const formats = chalk.grey(`[${filters.inFormats.join(', ')}]`);
			application.log.debug(
				ok`Building ${filters.inFormats.length} files for ${pattern.id} ${formats} ${filterStart}`);
		} else {
			application.log.debug(ok`Building all files for ${pattern.id} ${filterStart}`);
		}

		if (settings['dry-run']) {
			return Promise.resolve({});
		}

		const transformStart = new Date();
		application.log.debug(wait`Transforming pattern ${pattern.id}`);

		spinner.text = `build ${padMaxBuild(pattern.id)} ${buildCount}/${patternsToBuild.length}`;
		buildCount += 1;

		// obtain transformed pattern by id
		const patternList = await getPatterns({
			id: pattern.id,
			base: patternRoot,
			config: application.configuration,
			factory: application.pattern.factory,
			transforms: application.transforms,
			log: application.log,
			filters
		}, application.cache);

		application.log.debug(ok`Transformed pattern ${pattern.id} ${transformStart}`);

		const writeStart = new Date();
		application.log.debug(ok`Writing artifacts of ${pattern.id}`);

		// Write results to disk
		const writingArtifacts = Promise.all(patternList.map(async patternItem => {
			const writingPatternItems = Promise.all(
					Object.entries(patternItem.results)
						.map(async resultsEntry => {
							const [resultName, result] = resultsEntry;
							const relativePath = resolvePathFormatString(pathFormatString, patternItem.id, resultName.toLowerCase(), result.out);
							const resultPath = join(commonjsRoot, relativePath);
							return writeSafe(resultPath, result.buffer);
						}));

			return await writingPatternItems;
		}));

		const written = await writingArtifacts;
		application.log.debug(ok`Wrote ${written.length} artifacts for ${pattern.id} ${writeStart}`);
		return patternList;
	})));

	const built = await building;
	application.log.debug(ready`Built ${built.length} from ${patternsToBuild.length} planned and ${patternMtimes.length} artifacts overall ${buildStart}`);

	spinner.text = `${built.length}/${patternsToBuild.length} built`;
	spinner.succeed();

	if (settings['dry-run']) {
		await building;
		spinner.text = `Dry-run executed successfully ${buildStart}`;
		spinner.succeed();
		return;
	}

	if (application.resources) {
		const resources = application.resources
			.filter(r => Boolean(r.pattern))
			.filter(r => Boolean(r.file));

		await Promise.all(resources.map(async resource => {
			const format = resource.file.format;
			const formatConfig = application.configuration.patterns.formats[format];
			const resourcePath = resolvePathFormatString(pathFormatString, resource.pattern, formatConfig.name, resource.type);
			const artifactPath = join(commonjsRoot, resourcePath);
			return writeSafe(artifactPath, await resource.content);
		}));
	}

	const copyStart = new Date();
	application.log.debug(wait`Copying static files`);
	await copyStatic(cwd, commonjsRoot);
	application.log.debug(ready`Copied static files. ${copyStart}`);
	spinner.text = `static files copied`;
	spinner.succeed();

	// Extract dependency information
	const dependencyLists = flatten(built).reduce((registry, patternItem) => {
		const {meta: {dependencies, devDependencies}} = patternItem;
		return {
			dependencies: [...registry.dependencies, ...(dependencies || [])],
			devDependencies: [...registry.devDependencies, ...(devDependencies || [])]
		};
	}, {
		dependencies: [],
		devDependencies: []
	});

	const deps = pkg.dependencies || {};
	const devDeps = pkg.devDependencies || {};

	const dependencies = dependencyLists.dependencies
		.reduce((results, dependencyName) => {
			return {...results,
				[dependencyName]: deps[dependencyName] || devDeps[dependencyName] || '*'};
		}, previousPkg.dependencies);

	const devDependencies = dependencyLists.devDependencies
		.reduce((results, dependencyName) => {
			return {...results,
				[dependencyName]: deps[dependencyName] || devDeps[dependencyName] || '*'};
		}, previousPkg.devDependencies);

	const prunedDependencies = omit(dependencies, [...(settings.ignoredDependencies || []), coreModuleNames]);
	const prunedDevDependencies = omit(devDependencies, [...(settings.ignoredDevDependencies || []), coreModuleNames, ...Object.keys(dependencies)]);

	const updatedPackageString = getPackageString(prunedDependencies, previousPkg,
		{
			devDependencies: prunedDevDependencies, ppcommonjs: pkgConfig,
			ppDependencies: pkg.dependencies, ppDevdependencies: pkg.devDependencies
		},
	omit(pkg, ['dependencies', 'devDependencies', 'scripts', 'config', 'main']),
	settings.pkg);

	if (updatedPackageString !== previousPkgString) {
		const pkgStart = new Date();
		application.log.debug(wait`Writing package.json`);

		await writeSafe(manifestPath, updatedPackageString);
		application.log.debug(ready`Wrote package.json ${pkgStart}`);
	}

	const messages = uniq(warnings)
		.map(warning => warning.join(' '));

	messages.forEach(message => {
		console.log(boxen(message, {borderColor: 'yellow', padding: 1}));
	});
}

export default exportAsCommonjs;

function parseJSON(jsonString) {
	try {
		return JSON.parse(jsonString);
	} catch (error) {
		return fallbackManifest;
	}
}
