import {isObject} from 'lodash';
import applyTransforms from './apply-transforms';

export default getTransform;

function getTransform(transformFunctions, config) {
	return async file => {
		const {patterns, log, transformConfigs} = config;
		const format = patterns.formats[file.format];

		if (!isObject(format)) {
			const formatNames = Object.keys(patterns.formats);
			log.debug(`${file.path} has no configured format. Available: ${formatNames}`);
			return null;
		}

		file.meta.devDependencies = getDevDependencies(file, format);

		return applyTransforms(file, format.transforms, {
			transformConfigs,
			transformFunctions,
			format
		});
	};
}

function getDevDependencies(file, format) {
	const formatDependencies = format.dependencies || [];
	return [...file.meta.devDependencies, ...formatDependencies];
}
