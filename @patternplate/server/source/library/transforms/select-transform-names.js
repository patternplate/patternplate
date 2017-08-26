import {omit} from 'lodash';
export default selectTransformNames;

function selectTransformNames(config) {
	return Object.keys(omit(config, ['path', 'options']));
}
