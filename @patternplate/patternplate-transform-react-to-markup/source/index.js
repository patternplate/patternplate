import {merge} from 'lodash';

import renderMarkup from './render-markup';

export default function createReactRendererFactory(application) {
	const config = application.configuration.transforms['react-to-markup'] || {};

	return async function renderReactComponent(file) {
		const patternConfiguration = (file.pattern.manifest.options || {})['react-to-markup'] || {};
		const configuration = merge({}, config.opts, patternConfiguration);
		const results = renderMarkup(file, configuration, application);
		file.buffer = results.buffer;
		file.meta = merge({}, file.meta, results.meta);
		return file;
	};
}
