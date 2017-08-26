import path from 'path';
import {find, merge, uniq} from 'lodash';
import constructFileDependencies from './construct-file-dependencies';
export default inject;

function inject(pattern, manifest, patterns) {
	// construct manifest
	pattern.manifest = patterns.reduce((registry, pattern) => {
		const {id} = pattern;
		return merge(
			registry,
			{
				patterns: {
					[id.split('/').join('-')]: id
				}
			}
		);
	}, manifest);

	// construct pattern dependencies
	pattern.dependencies = Object.entries(pattern.manifest.patterns)
		.reduce((dependencies, patternEntry) => {
			const [localName, id] = patternEntry;
			return merge(
				dependencies,
				{
					[localName]: find(patterns, {id})
				});
		}, {});

	const formats = uniq(Object.values(pattern.config.patterns.formats), 'name');

	// construct files from dependencies
	pattern.files = formats.reduce((files, formatConfig) => {
		const format = pattern.config.transforms[formatConfig.transforms[0]].inFormat;

		if (pattern.filters.inFormats.indexOf(format) === -1) {
			return files;
		}

		const baseName = 'index';
		const ext = `.${format}`;
		const name = `${baseName}${ext}`;
		const dependencies = constructFileDependencies(pattern.dependencies, [name]);
		const manifestPath = path.resolve(pattern.base, '@environments', manifest.name, name);
		const {importStatement} = formatConfig;

		if (typeof importStatement !== 'function') {
			throw new Error(`Missing config key "importStatement" for format ${format}`);
		}

		// import everything mentioned in the virtual manifest file
		const required = Object.keys(pattern.manifest.patterns)
			// if it is in the file dependencies
			.filter(localName => localName in dependencies);

		const source = required.map(localName => importStatement(localName))
			.join('\n');

		const buffer = source;

		return merge(files, {
			[name]: {
				buffer,
				source,
				name,
				basename: baseName,
				dependencies,
				ext,
				format,
				fs: {},
				path: manifestPath,
				pattern,
				meta: {
					dependencies: [],
					devDependencies: []
				}
			}
		}, (a, b) => {
			if (Buffer.isBuffer(b)) {
				return b;
			}
		});
	}, {});
}
