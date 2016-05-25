import {merge} from 'lodash';

import renderMarkup from './render-markup';

export default function createReactRendererFactory(application) {
	const {
		configuration: {
			transforms: {
				'react-to-markup': configuration
			}
		}
	} = application;

	return async function renderReactComponent(file) {
		const {
			pattern: {
				manifest: {
					patternOptions = {}
				}
			}
		} = file;

		const {
			'react-to-markup': patternConfiguration = {}
		} = patternOptions;

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
