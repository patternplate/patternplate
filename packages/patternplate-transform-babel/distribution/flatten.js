"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = flatten;


function flatten(dependencyTree) {
	let vault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	return Object.values(dependencyTree || {}).reduce((list, item) => {
		list.push(item);
		flatten(item.dependencies, list);
		return list;
	}, vault);
}
module.exports = exports["default"];