import {getFile} from './_helpers';

export const application = {
	configuration: {transforms: {'react-to-markup': {}}}
};

export const exportFile = getFile({
	buffer: new Buffer('module.exports = function() { return null; }'),
	path: 'empty/index.jsx'
});

export const defaultExportFile = getFile({
	buffer: new Buffer('module.exports.default = function() { return null; }'),
	path: 'empty/index.jsx'
});

export const dependency = getFile({
	buffer: new Buffer('var React = require("react"); module.exports.default = function() {return React.createElement(\'div\')}'),
	path: 'dependency/index.jsx'
});

export const depending = getFile({
	buffer: new Buffer('var React = require("react"); const dependency = require("dependency"); module.exports.default = dependency'),
	path: 'empty/index.jsx',
	dependencies: {
		dependency
	}
});

export const empty = getFile({
	buffer: new Buffer(''),
	path: 'empty/index.jsx'
});

export const nonDefaultExporting = getFile({
	buffer: new Buffer('exports.example = function() {}'),
	path: 'non-default-exporting/index.jsx'
});

export const simple = getFile({
	buffer: new Buffer('var React = require("react"); module.exports.default = function() {return React.createElement("div")}'),
	path: 'simple/index.jsx'
});

export const spreadOverride = getFile({
	buffer: new Buffer(`
		var React = require("react");
		module.exports.default = function() {
			var props = {
				id: "same",
				children: "same",
				className: "same"
			};
			return React.createElement("div", Object.assign({}, props, {className: "other"}))
		}
	`),
	path: 'simple/index.jsx'
});

export const faultyProps = getFile({
	buffer: new Buffer(`
		var React = require("react");
		module.exports.default = function() {
			var props = {
				id: "same",
				children: "same",
				className: "same",
				class: "faulty",
				for: "faulty",
				foo: "bar"
			};
			return React.createElement("div", Object.assign({}, props, {className: "other"}))
		}
	`),
	path: 'simple/index.jsx'
});

export const loggingComponent = getFile({
	buffer: new Buffer(`
		console.error("foo");
		console.warn("foo");
		console.log("foo");
		module.exports.default = function() {
			console.error("baz");
			console.warn("baz");
			console.log("baz");
			return null;
		};
		console.error("bar");
		console.log("bar");
		console.warn("bar");`
	),
	path: 'logging/index.jsx'
});

export const missinDependencies = getFile({
	buffer: new Buffer(`
		var React = require("react");
		var dependency = require("dependency");

		module.exports.default = function() {
			return React.createElement("div", {}, [React.createElement(dependency)])
		}
	`),
	path: 'missing-dependencies/index.jsx'
});

export const faultyComponent = getFile({
	buffer: new Buffer(`
		var React = require("react");

		module.exports.default = function() {
			return React.createElement(nonsense, {})
		}
	`),
	path: 'faulty/index.jsx',
	pattern: {
		id: 'faulty'
	}
});
