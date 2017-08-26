import fs from 'fs';
import path from 'path';

import getPatternRetriever from './utilities/get-pattern-retriever';

export default getPatternSource;

function getPatternSource(application) {
	const cwd = application.runtime.patterncwd;

	return async (pathname, type, environment, options) => {
		if (type === 'source') {
			const sourcePath = path.resolve(cwd, 'patterns', pathname);
			return {
				type: path.extname(sourcePath),
				body: fs.createReadStream(sourcePath)
			};
		}

		const id = path.dirname(pathname);
		const inFormatName = path.extname(pathname).slice(1);
		const format = application.configuration.patterns.formats[inFormatName] || {};
		const transforms = format.transforms || [];
		const transformName = transforms[transforms.length - 1];
		const transform = application.configuration.transforms[transformName];

		const basename = path.basename(pathname);
		const concern = path.basename(pathname, path.extname(pathname));

		// configured transfoms, but invalid
		if (transforms.length && !transformName) {
			const error = new Error(`Could not determine last transform for "${basename}" of "${id}"`);
			error.status = 404;
			throw error;
		}

		// configured transforms for format, but no matching transform config
		if (transformName && !transform) {
			const error = new Error(`Transform "${transformName}" to be applied on "${basename}" of "${id}" is not configured`);
			error.status = 404;
			throw error;
		}

		// fall back to in format
		const outFormatName = (transform || {}).outFormat || inFormatName;

		const filters = {
			baseNames: [concern],
			environments: [environment],
			outFormats: [outFormatName]
		};

		const retrieve = getPatternRetriever(application);
		const [pattern] = await retrieve(id, filters, environment, ['read', 'transform'], options);

		if (!pattern) {
			const error = new Error(`No pattern with id ${id} found`);
			error.status = 404;
			throw error;
		}

		if (!(basename in pattern.files)) {
			const files = Object.keys(pattern.files || {});
			const error = new Error(`pattern ${id} has no file ${basename}. Available files: ${files.join(', ')}`);
			error.status = 404;
			throw error;
		}

		const file = pattern.files[basename];
		return {
			type: file.out,
			body: file.buffer,
			meta: pattern.meta
		};
	};
}
