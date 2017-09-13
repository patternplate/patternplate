import {last, uniq} from 'lodash';
import getTransform from './get-transform';
import toString from './to-string';

export default transform;

async function transform(pattern) {
	const formats = pattern.config.patterns.formats;

	const config = {
		patterns: pattern.config.patterns,
		transformConfigs: pattern.config.transforms,
		log: pattern.log
	};

  const transform = getTransform(pattern.transforms, config);

	// get the transform job, execute in parallel
	const jobs = Object.values(pattern.files).map(transform);

	// get an array with the results of each transform step
	const filesResults = await Promise.all(jobs);


	// pick the last item each
	const transformResults = filesResults.map(last);

	// Save into files map
	const files = transformResults.reduce((results, transformResult) => {
		results[transformResult.name] = transformResult;
		return results;
	}, {});

	Object.entries(files).forEach(entry => {
		const [name, file] = entry;
		const ref = pattern.files[name];
		if (ref) {
			ref.buffer = file.buffer;
			ref.dependencies = file.dependencies;
			ref.meta = file.meta;
			return;
		}
		pattern.files[name] = file;
	});

	// Join demo and index files of the same format
	// if there is a demo, it occupies the results[format.name] key
	const sanitizedResults = uniq(transformResults.reduce((results, result) => {
		const demo = transformResults.find(transformResult => {
			return transformResult.basename === 'demo' && transformResult.format === result.format;
		});

		if (demo) {
			results.push(demo);
		} else {
			results.push(result);
		}

		return results;
	}, []));

	// Reduce to format.name => result map
	pattern.results = sanitizedResults.reduce((results, transformResult) => {
		const format = formats[transformResult.format];
		const isDemo = transformResult.baseName === 'demo';

		results[format.name] = {
			name: transformResult.name,
			concern: transformResult.basename,
			source: toString(transformResult.source),
			buffer: toString(transformResult.buffer),
			in: transformResult.in,
			out: transformResult.out,
			demoBuffer: isDemo ? toString(transformResult.demoBuffer) : null,
			demoSource: isDemo ? toString(transformResults.demoSource) : null
		};

		return results;
	}, {});

	pattern.meta = Object.entries(pattern.files).reduce((results, entry) => {
		const [, file] = entry;
		const meta = file.meta || {};

		const {
			resources = [],
			dependencies = [],
			devDependencies = [],
			scriptDependencies = []
		} = meta;

		return {
			...results,
			dependencies: [...(results.dependencies || []), ...dependencies],
			devDependencies: [...(results.devDependencies || []), ...devDependencies],
			scriptDependencies: [...(results.scriptDependencies || []), ...scriptDependencies],
			resources: [...(results.resources || []), ...resources]
		};
	}, {});
}
