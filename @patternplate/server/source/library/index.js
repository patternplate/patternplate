import path from 'path';
import boilerplate from 'boilerplate-server';
import findRoot from 'find-root';
import chokidar from 'chokidar';
import getReadFile from './filesystem/read-file';
import readTree from './filesystem/read-tree';

import getCache from './cache';
import pattern from './pattern';
import transforms from './transforms';

export default async options => {
	const instance = await boilerplate({
		name: 'patternplate-server',
		cwd: findRoot(__dirname),
		...options
	});

	instance.transforms = await transforms(instance);
	instance.pattern = await pattern(instance);

	const cache = await getCache(instance);
	instance.cache = cache;

	if (options.mode !== 'console') {
		const readFile = getReadFile({cache});

		readTree(path.resolve('./patterns'), cache)
			.then(tree => Promise.all(tree.map(file => readFile(file))));

		const watcher = chokidar.watch('./patterns', {ignoreInitial: true});

		watcher.on('change', async f => {
			const filePath = path.resolve(f);
			cache.delete(`fs:readfile:`, filePath);
			await readFile(filePath);
			watcher.emit('changed', filePath);
		});

		watcher.on('add', f => {
			const filePath = path.resolve(f);
			cache.delete(`fs:readfile:`, filePath);
			cache.delete(`fs:readtree`, '**\/*');
			readFile(filePath);
			readTree('./patterns', cache);
		});

		watcher.on('unlink', f => {
			const filePath = path.resolve(f);
			cache.delete('fs:readfile:', filePath);
			cache.delete(`fs:readtree`, '**\/*');
			readTree('./patterns', cache);
		});

		watcher.on('addDir', () => {
			cache.delete(`fs:readtree`, '**\/*');
			readTree('./patterns', cache);
		});

		watcher.on('unlinkDir', () => {
			cache.delete(`fs:readtree`, '**\/*');
			readTree('./patterns', cache);
		});

		instance.watcher = watcher;
	}

	return instance;
};
