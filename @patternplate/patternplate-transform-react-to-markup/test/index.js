import test from 'ava';
import * as mocks from './_mocks';

import factory from '../source';

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
	t.truthy(file.hasOwnProperty('buffer'));
});

test('does not throw for module.exports', async t => {
	const transform = factory(mocks.application);
	t.notThrows(() => transform(mocks.exportFile));
});

test('does not throw for module.exports.default', async t => {
	const transform = factory(mocks.application);
	t.notThrows(() => transform(mocks.defaultExportFile));
});
