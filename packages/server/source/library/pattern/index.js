import patternFactory, {Pattern} from './pattern';
import normalizeFormats from './normalize-formats';

export default pattern;
export {normalizeFormats};

function pattern(application) {
	const config = application.configuration.patterns || {};
	config.formats = normalizeFormats(config.formats);

	return {
		factory(...args) {
			return patternFactory(...[...args, application.cache]);
		},
		class: Pattern
	};
}
