import {merge} from 'lodash';
export default normalizeFormats;

function normalizeFormats(formats = {}) {
	return Object.entries(formats)
		.reduce((formats, entry) => {
			const [extname, format] = entry;
			const defaults = {
				name: extname,
				build: false,
				importStatement: i => `import ${i}`,
				transforms: []
			};
			formats[extname] = merge(defaults, {
				build: format.build,
				name: format.name,
				importStatement: format.importStatement,
				transforms: format.transforms
			});
			return formats;
		}, {});
}
