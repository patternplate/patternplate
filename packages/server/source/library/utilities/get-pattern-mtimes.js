import {basename, dirname, extname, resolve} from 'path';
import {readFile, stat} from 'sander';
import {find} from 'lodash';
import {pathToId} from 'patternplate-transforms-core';
import throat from 'throat';

import readTree from '../filesystem/read-tree';

async function readManifest(path) {
	return await readFile(resolve(path, 'pattern.json'))
		.then(content => JSON.parse(content.toString('utf-8')));
}

async function getPatternFilesMtime(files) {
	const tasks = files
		.map(async file => {
			const {mtime} = await stat(file);
			return mtime;
		});

	return await Promise.all(tasks);
}

async function getModifiedFiles(mtime, files) {
	const mtimes = await getPatternFilesMtime(files);
	return files.filter((file, index) => {
		return mtimes[index].getTime() > mtime;
	});
}

function getLatestMtime(mtimes) {
	const times = mtimes.map(mtime => {
		return {stamp: mtime.getTime(), date: mtime};
	});

	const latest = times.sort((a, b) => b.stamp - a.stamp)[0];
	return latest.date;
}

function getDependencyMtimes(pattern, patterns) {
	const manifest = pattern.manifest;
	const dependencyIds = Object.values(manifest.patterns || {});
	return dependencyIds
		.map(id => find(patterns, {id}))
		.reduce((mtimes, dependency) => {
			if (!dependency) {
				return mtimes;
			}

			return [...mtimes, dependency.mtime, ...getDependencyMtimes(dependency)];
		}, []);
}

function isPatternJson(filePath) {
	return basename(filePath) === 'pattern.json';
}

function getFilter(filters = {}) {
	const inFormats = Array.isArray(filters.inFormats) ? filters.inFormats : [];
	const baseNames = Array.isArray(filters.baseNames) ? filters.baseNames : [];

	const filterByInFormat = inFormats.length ?
		filePath => inFormats.includes(extname(filePath).slice(1)) :
		filePath => filePath;

	const filterByBasename = baseNames.length ?
		filePath => inFormats.includes(extname(filePath).slice(1)) :
		filePath => filePath;

	return filePath => isPatternJson(filePath) ||
		(filterByBasename(filePath) && filterByInFormat(filePath));
}

const defaults = {
	resolveDependencies: false
};

async function getPatternMtimes(search, options) {
	const paths = await readTree(search);
	const settings = {...defaults, ...options};
	const filter = getFilter(settings.filters);

	const items = paths
		.filter(item => basename(item) === 'pattern.json')
		.filter(item => !item.includes('@environments'))
		.map(item => {
			const id = pathToId(search, item);
			const path = dirname(item);
			const files = readTree(path);
			const manifest = readManifest(path);
			return {id, path, files, manifest};
		});

	const readTasks = items.map(throat(5, async item => {
		const mtimes = await getPatternFilesMtime(await item.files);
		const mtime = await getLatestMtime(mtimes);

		const files = (await item.files)
			.filter(filter);

		return {
			...item,
			files,
			mtime,
			mtimes
		};
	}));

	const readPatterns = await Promise.all(readTasks);

	const measurePatterns = readPatterns
		.filter(readPattern => {
			return readPattern.files.length > 1;
		})
		.map(async readPattern => {
			readPattern.manifest = await readPattern.manifest;
			const dependencyMtimes = settings.resolveDependencies ?
				getDependencyMtimes(readPattern, readPatterns) :
				[];

			const mtime = getLatestMtime([readPattern.mtime, ...dependencyMtimes]);

			readPattern.mtime = mtime;
			return readPattern;
		});

	return await Promise.all(measurePatterns);
}

export default getPatternMtimes;
export {getModifiedFiles};
