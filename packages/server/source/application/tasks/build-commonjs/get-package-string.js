import {
	merge
} from 'lodash';

export default function getPackageString(dependencies, data, ...overrides) {
	const definition = merge(...[data, ...overrides]);
	definition.dependencies = dependencies;
	return JSON.stringify(definition, null, '  ');
}
