import test from 'ava';
import expect from 'unexpected';
import unexpectedDom from 'unexpected-dom';
import TestUtils from 'react-addons-test-utils';
import factory from './source';
import * as mocks from './mocks';

expect.installPlugin(unexpectedDom);

test('it should export a function as default', t => {
	const actual = typeof factory;
	const expected = 'function';
	t.deepEqual(actual, expected);
});

test('calling the function should return a function', t => {
	const actual = typeof factory(mocks.application);
	const expected = 'function';
	t.deepEqual(actual, expected);
});

test('calling the returned function should return a promise', t => {
	const transform = factory(mocks.application);
	const actual = transform(mocks.emptyFile).constructor.name;
	const expected = 'Promise';
	t.deepEqual(actual, expected);
});

test('the returned promise should resolve to an object', async t => {
	const transform = factory(mocks.application);
	const actual = Object.prototype.toString(await transform(mocks.emptyFile));
	const expected = '[object Object]';
	t.deepEqual(actual, expected);
});

test('the resolved object should have a buffer key', async t => {
	const transform = factory(mocks.application);
	const file = await transform(mocks.emptyFile);
	t.truthy(Object.prototype.hasOwnProperty.call(file, 'buffer'));
});

test('basic component should render expected output', async () => {
	const transform = factory(mocks.application);
	const file = await transform(mocks.basicFile);
	const document = mocks.run(file.buffer);
	expect(document.body, 'queried for first', '#basic', 'to have text', 'basic');
});

test('mounting component should render expected output after mount', async () => {
	const transform = factory(mocks.application);
	const file = await transform(mocks.componentDidMountFile);
	const document = mocks.run(file.buffer);
	expect(document.body, 'queried for first', '#mount', 'to have text', 'componentDidMount');
});

test('component with click handler should render expected output after click', async () => {
	const transform = factory(mocks.application);
	const file = await transform(mocks.clickFile);
	const element = mocks.run(file.buffer).getElementById('click');

	expect(element, 'to have text', 'mounted');

	TestUtils.Simulate.click(element);
	expect(element, 'to have text', 'clicked');
});
