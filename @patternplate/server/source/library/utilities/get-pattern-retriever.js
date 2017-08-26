import assert from 'assert';
import path from 'path';
import {isArray, isFunction, isObject, isString, merge} from 'lodash';
import getPatterns from './get-patterns';

export default function getPatternRetriever(application) {
	assert.ok(isObject(application), 'application should be an object');

	const cfg = application.configuration;
	const factory = application.pattern.factory;
	const transforms = application.transforms;
	const log = application.log;

	assert.ok(isObject(cfg), 'application.configuration should be an object');
	assert.ok(isFunction(factory), 'application.pattern.factory should be a function');
	assert.ok(isObject(application.transforms), 'application.transforms should be an object');

	const cwd = application.runtime.patterncwd || application.runtime.cwd;
	const base = path.resolve(cwd, cfg.patterns.path);

	return (id, filters = {}, environment, cmds = ['read', 'transform'], options = {}) => {
		assert.ok(isString(id), 'id should be a string');
		assert.ok(isObject(filters), 'filters should be an object');
		assert.ok(isString(environment), 'environment should be a string');
		assert.ok(isArray(cmds), 'cmds should be an array');

		const config = merge({}, cfg, {options});

		return getPatterns({
			id, base, config, factory, transforms, log, filters, environment
		}, application.cache, cmds);
	};
}
