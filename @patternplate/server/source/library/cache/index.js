import {noop} from 'lodash';
import cache from './cache';

export default startCache;

function startCache(application) {
	const config = application.configuration.cache;
	return config ? cache(config) : {config: {}, get: noop, set: noop};
}
