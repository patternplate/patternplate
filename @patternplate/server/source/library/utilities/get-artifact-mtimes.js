import {extname, dirname, relative, resolve, sep} from 'path';
import {stat} from 'sander';
import throat from 'throat';
import {debuglog} from 'util';

import readTree from '../filesystem/read-tree';

export default async function getArtifactMtimes(search, patterns, transforms) {
	const outFormats = Object.values(transforms)
		.map(t => t.outFormat)
		.reduce((o, t) => [...o, t], []);

	const debug = debuglog('artifact-mtimes');
	const distributionDirectory = resolve(process.cwd(), search);

	const types = Object.keys(patterns.formats)
		.map(extension => patterns.formats[extension].name.toLowerCase());

	const typedFiles = await Promise.all([...new Set(types)].map(async type => {
		const files = await readTree(resolve(search, type));
		return files
			.filter(path => extname(path))
			.filter(path => outFormats.includes(extname(path).slice(1)));
	}));

	const artifactPaths = typedFiles
		.reduce((flattened, files) => [...flattened, ...files], []);

	const artifactMtimes = await Promise.all(artifactPaths
		.map(throat(1, async path => {
			const relativeArtifactPath = relative(distributionDirectory, path);
			const artifactId = dirname(relativeArtifactPath.split(sep).join('/'));
			const patternId = artifactId.split('/').slice(1).join('/');
			const stats = await stat(path);

			return {
				id: artifactId,
				path,
				patternId,
				mtime: stats.mtime
			};
		})));

	const artifactRegistry = artifactMtimes.reduce((registry, artifact) => {
		const item = registry[artifact.patternId] || {
			id: artifact.patternId,
			artifacts: [],
			files: [],
			mtimes: [],
			types: []
		};

		item.artifacts.push(artifact.id);
		item.files.push(artifact.path);
		item.mtimes.push(artifact.mtime);
		item.types.push(artifact.id.split('/')[0]);
		registry[artifact.patternId] = item;
		return registry;
	}, {});

	return Object.values(artifactRegistry).map(item => {
		const times = item.mtimes.map(time => {
			return {
				stamp: time.getTime(),
				date: time
			};
		}).sort((a, b) => a.stamp - b.stamp);

		item.mtime = times[0].date;
		debug('mtime for artifact %s is %s', item.id, item.mtime);
		return item;
	});
}
