import path from 'path';
import {entries, omit, pick, uniqBy} from 'lodash';
import getPatternData from './get-pattern-data';

export default getPatternMetaData;

async function getPatternMetaData(application, id, env = 'index') {
	const data = await getPatternData(application, id, env);
	const {transforms} = application.configuration;
	const {formats} = application.configuration.patterns;
	const {manifest} = data;

	return {
		base: data.base,
		dependencies: selectDependencies(data),
		dependents: manifest.dependentPatterns,
		display: manifest.display,
		environments: manifest.demoEnvironments,
		files: selectPatternFiles(data, {transforms, formats}),
		id: data.id,
		manifest: {
			displayName: manifest.displayName || '',
			flag: manifest.flag || '',
			name: manifest.name,
			version: manifest.version,
			tags: manifest.tags || [],
			options: manifest.options || {}
		},
		use: data.use
	};
}

function selectDependencies(data) {
	const sanitized = omit(data.dependencies, ['Pattern']);
	return entries(sanitized).reduce((dependencies, entry) => {
		const [name, dependency] = entry;
		dependencies[name] = pick(dependency, ['id', 'manifest']);
		return dependencies;
	}, {});
}

function selectPatternFiles(data, config) {
	const {files} = data;
	return data.outFormats.reduce((registry, outFormat) => {
		const {name, type} = outFormat;

		const candidates = Object.entries(config.formats)
			.filter(entry => entry[1].name === outFormat.name)
			.map(entry => entry[0]);

		const demoFile = candidates
			.map(ext => files[`demo.${ext}`])
			.filter(Boolean)[0];

		const indexFile = candidates
			.map(ext => files[`index.${ext}`])
			.filter(Boolean)[0];

		const file = demoFile || indexFile;

		if (!file) {
			return registry;
		}

		const concerns = [
			demoFile ? 'demo' : null,
			indexFile ? 'index' : null
		].filter(Boolean);

		const items = concerns.map(concern => {
			const id = [data.id, `${concern}${file.ext}`].join('/');
			return {
				concern,
				displayName: name,
				id,
				in: selectInFormat(data, file),
				out: outFormat.extension,
				path: path.relative(data.base, file.path),
				type,
				transforms: selectTransforms(data, file)
			};
		});

		return uniqBy([...registry, ...items], 'id');
	}, []);
}

function selectTransforms(data, file) {
	const name = file.format;
	const format = data.config.patterns.formats[name] || {transforms: []};
	return format.transforms;
}

function selectInFormat(data, file) {
	const entry = selectTransforms(data, file)[0];
	const transform = data.config.transforms[entry] || {inFormat: file.format};
	return transform.inFormat;
}
