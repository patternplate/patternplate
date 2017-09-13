'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _hastToHyperscript = require('hast-to-hyperscript');

const _hastToHyperscript2 = _interopRequireDefault(_hastToHyperscript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = toElements;


function toElements(data) {
  if (!data) {
    return null;
  }

  const root = (0, _hastToHyperscript2.default)(_react2.default.createElement, data);
  return root.props.children;
}