'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hastToHyperscript = require('hast-to-hyperscript');

var _hastToHyperscript2 = _interopRequireDefault(_hastToHyperscript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = toElements;


function toElements(children) {
	if (!Array.isArray(children)) {
		return children;
	}

	var root = (0, _hastToHyperscript2.default)(_react2.default.createElement, {
		type: 'element',
		tagName: 'div',
		children: children
	});

	return root.props.children;
}