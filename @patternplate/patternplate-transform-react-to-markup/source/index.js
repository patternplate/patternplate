import {merge} from 'lodash';

import renderMarkup from './render-markup';

export default function createReactRendererFactory(application) {
	const configuration = application.configuration.transforms['react-to-markup'] || {};

	return async function renderReactComponent(file) {
		const patternConfiguration = (file.pattern.manifest.options || {})['react-to-markup'] || {};
		const settings = merge({},
			configuration.opts,
			patternConfiguration.opts
		);
		const results = renderMarkup(file, settings, application);
		file.buffer = results.buffer;
		file.meta = merge({}, file.meta, results.meta);
		return file;
	};
}
