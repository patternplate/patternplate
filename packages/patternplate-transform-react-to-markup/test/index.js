import test from 'ava';
import expect from 'unexpected';

import factory from '../source';
import * as helpers from './_helpers';
import * as mocks from './_mocks';

test('export a function as default', t => {
	const actual = typeof factory;
	const expected = 'function';
	t.deepEqual(actual, expected);
});

test('module returns a function', t => {
	const actual = typeof factory(mocks.application);
	const expected = 'function';
	t.deepEqual(actual, expected);
});

test('function returns a promise', t => {
	const transform = factory(mocks.application);
	const actual = transform(mocks.exportFile).constructor.name;
	const expected = 'Promise';
	t.deepEqual(actual, expected);
});

test('promise resolves to an object', async t => {
	const transform = factory(mocks.application);
	const actual = Object.prototype.toString(await transform(mocks.exportFile));
	const expected = '[object Object]';
	t.deepEqual(actual, expected);
});

test('object has a buffer key', async t => {
	const transform = factory(mocks.application);
	const file = await transform(mocks.exportFile);
	t.truthy({}.hasOwnProperty.call(file, 'buffer'));
});

test('does not throw for module.exports', async t => {
	const transform = factory(mocks.application);
	t.notThrows(() => transform(mocks.exportFile));
});

test('does not throw for module.exports.default', async t => {
	const transform = factory(mocks.application);
	t.notThrows(() => transform(mocks.defaultExportFile));
});

test('does not throw for depending component', async t => {
	const transform = factory(mocks.application);
	t.notThrows(() => transform(mocks.depending));
});

test('does not throw for empty file', async t => {
	const transform = factory(mocks.application);
	t.notThrows(() => transform(mocks.empty));
});

test('component without default export', async t => {
	const transform = factory(mocks.application);
	const execution = transform(mocks.nonDefaultExporting);
	t.notThrows(async () => await execution);
	const {buffer: actual} = await execution;
	t.is(actual, '', 'yields empty result');
});

test('simple component', async t => {
	const transform = factory(mocks.application);
	const {buffer: actual} = await transform(mocks.simple);
	const expected = '<div></div>';
	t.is(actual, expected, 'yields empty div');
});

test('overwritten spread', async t => {
	const release = helpers.trap();
	const transform = factory(mocks.application);
	const {buffer: actual} = await transform(mocks.spreadOverride);
	const expected = '<div id="same" class="other">same</div>';
	t.is(actual, expected, 'yields output with overriden class');

	const {errors} = release();
	expect(errors, 'to be empty');
});

test('logging component', async () => {
	const release = helpers.trap();
	const transform = factory(mocks.application);
	await transform(mocks.loggingComponent);
	const {errors, infos, warnings} = release();
	const expected = [['foo'], ['bar'], ['baz']];
	expect(errors, 'to equal', expected);
	expect(infos, 'to equal', expected);
	expect(warnings, 'to equal', expected);
});

test('faulty props', async t => {
	const transform = factory(mocks.application);
	const {buffer: actual} = await transform(mocks.faultyProps);
	const expected = '<div id="same" class="other">same</div>';
	t.is(actual, expected, 'yields output with faulty props stripped');
});

test('missing dependencies', async () => {
	const file = mocks.missinDependencies;
	const transform = factory(mocks.application);

	const [error] = await helpers.nodeish(transform, file);
	expect(error.message, 'to contain', `Can not find module 'dependency' from '${file.path}'`);
});

test('faulty component without sourcemaps', async () => {
	const transform = factory(mocks.application);
	const file = mocks.faultyComponent;
	const [error] = await helpers.nodeish(transform, file);
	expect(error, 'not to be', null);
	expect(error.message, 'to contain', file.path);
	expect(error.message, 'to contain', file.pattern.id);
	expect(error.fileName, 'to be', file.path);
});
