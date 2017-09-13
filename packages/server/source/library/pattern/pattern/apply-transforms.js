import path from 'path';

export default applyTransforms;

function applyTransforms(file, transformNames, options) {
	const {transformConfigs, transformFunctions} = options;

	return transformNames.reduce(async (queue, name) => {
		const config = {...transformConfigs[name], name};

		if (!(name in transformFunctions)) {
			const available = Object.keys(transformFunctions).join(', ');
			const instructions = `Be sure to install "patternplate-transform-${name}" and configure it in ${process.cwd()}configuration/patternplate-server/transforms.js`;
			const message = `Transform "${name}" is not configured. Configured transforms: ${available}.\n${instructions}`;
			throw new Error(message);
		}

		const fn = transformFunctions[name];

		const results = await queue;
		const file = results[results.length - 1];
		const result = await applyTransform(fn, file, config);

		if (!result) {
			const message = `Transform ${name} did not return a file object for ${file.pattern.id}:${file.path}`;
			throw new Error(message);
		}

		results.push(result);
		return results;
	}, Promise.resolve([file]));
}

async function applyTransform(fn, file, config) {
	try {
		const copy = {...file, in: config.in, out: config.out};
		copy.in = config.inFormat;
		copy.out = config.outFormat;
		return await fn(copy, null, config);
	} catch (error) {
		throw augmentTransformError(error, file, config.name);
	}
}

function augmentTransformError(error, file, transformName) {
	error.pattern = error.pattern || file.pattern.id;
	error.file = error.file || error.fileName || file.path;
	error.fileName = error.file;
	error.transform = error.transform || transformName;

	error.message = [
		`${error.pattern}:${path.basename(error.file)} [${error.transform}]`,
		error.message
	].join('\n');

	return error;
}
